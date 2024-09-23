const express = require('express');
const multer = require('multer');
const { PDFDocument } = require('pdf-lib');
const router = express.Router();
const upload = multer();

router.post('/merge', upload.array('pdfs'), async (req, res) => {
  try {
    const pdfDocs = await Promise.all(
      req.files.map(async (file) => {
        return PDFDocument.load(file.buffer);
      })
    );

    const mergedPdf = await PDFDocument.create();
    for (const pdfDoc of pdfDocs) {
      const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
      copiedPages.forEach((page) => mergedPdf.addPage(page));
    }

    const mergedPdfBytes = await mergedPdf.save();
    res.setHeader('Content-Type', 'application/pdf');
    res.send(Buffer.from(mergedPdfBytes));
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to merge PDFs');
  }
});

module.exports = router;