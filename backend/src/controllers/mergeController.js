const fs = require('fs').promises;
const pdfService = require('../services/pdfService');

async function mergePDFs(req, res, next) {
  try {
    const pdfBuffers = await Promise.all(
      req.files.map(file => fs.readFile(file.path))
    );

    const mergedPdfBuffer = await pdfService.mergePDFs(pdfBuffers);

    res.contentType('application/pdf');
    res.send(mergedPdfBuffer);

    // Clean up uploaded files
    req.files.forEach(file => fs.unlink(file.path));
  } catch (error) {
    next(error);
  }
}

module.exports = {
  mergePDFs,
};