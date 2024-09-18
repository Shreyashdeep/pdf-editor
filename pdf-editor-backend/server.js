const express = require('express');
const multer = require('multer');
const cors = require('cors');
const bodyParser = require('body-parser');
const { PDFDocument, rgb } = require('pdf-lib');
const fs = require('fs').promises;

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json({ limit: '50mb' }));

const processPDF = async (pdfBytes, operations) => {
  const pdfDoc = await PDFDocument.load(pdfBytes);

  for (const op of operations) {
    switch (op.type) {
      case 'addPage':
        const newPage = pdfDoc.insertPage(op.pageIndex + 1);
        // Set the size of the new page to match the previous page
        if (op.pageIndex >= 0) {
          const prevPage = pdfDoc.getPage(op.pageIndex);
          newPage.setSize(prevPage.getWidth(), prevPage.getHeight());
        }
        break;
      case 'deletePage':
        pdfDoc.removePage(op.pageIndex);
        break;
      case 'addText':
        const page = pdfDoc.getPage(op.pageIndex);
        page.drawText(op.text, {
          x: op.x,
          y: op.y,
          size: op.fontSize || 12,
          color: rgb(0, 0, 0),
        });
        break;
    }
  }

  return await pdfDoc.save();
};

app.post('/upload', upload.single('pdf'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  try {
    const pdfBytes = await fs.readFile(req.file.path);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const pdfBase64 = await pdfDoc.saveAsBase64();

    res.json({ pdfBase64, pageCount: pdfDoc.getPageCount() });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error processing PDF');
  } finally {
    await fs.unlink(req.file.path);
  }
});

app.post('/edit', async (req, res) => {
  const { pdfBase64, editOperations } = req.body;

  try {
    const pdfBytes = Buffer.from(pdfBase64, 'base64');
    const editedPdfBytes = await processPDF(pdfBytes, editOperations);
    const editedPdfBase64 = editedPdfBytes.toString('base64');

    const pdfDoc = await PDFDocument.load(editedPdfBytes);
    res.json({ editedPdfBase64, pageCount: pdfDoc.getPageCount() });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error editing PDF');
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});