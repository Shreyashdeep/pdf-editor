const { PDFDocument } = require('pdf-lib');

async function mergePDFs(pdfBuffers) {
  const mergedPdf = await PDFDocument.create();

  for (const pdfBuffer of pdfBuffers) {
    const pdf = await PDFDocument.load(pdfBuffer);
    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    copiedPages.forEach((page) => mergedPdf.addPage(page));
  }

  return await mergedPdf.save();
}

// Implement other PDF operations (split, compress) here
async function splitPDF(pdfBuffer, pageRanges) {
    const pdfDoc = await PDFDocument.load(pdfBuffer);
    const newPdf = await PDFDocument.create();
  
    for (const range of pageRanges) {
      const [start, end] = range;
      const pages = pdfDoc.getPages().slice(start - 1, end);
      for (const page of pages) {
        const [copiedPage] = await newPdf.copyPages(pdfDoc, [pdfDoc.getPages().indexOf(page)]);
        newPdf.addPage(copiedPage);
      }
    }
  
    return await newPdf.save();
  }

  async function addTextToPDF(pdfBuffer, text, { x, y, page }) {
    const pdfDoc = await PDFDocument.load(pdfBuffer);
    const pages = pdfDoc.getPages();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  
    pages[page].drawText(text, { x, y, font });
  
    return await pdfDoc.save();
  }

module.exports = {
  mergePDFs,
  // Export other operations
};