
import { PDFDocument } from 'pdf-lib';

export const usePdfMerge = () => {
  const mergePdfs = async (files: File[]) => {
    const mergedPdf = await PDFDocument.create();
    
    for (const file of files) {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await PDFDocument.load(arrayBuffer);
      const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      copiedPages.forEach((page) => mergedPdf.addPage(page));
    }

    const mergedPdfFile = await mergedPdf.save();
    return new Blob([mergedPdfFile], { type: 'application/pdf' });
  };

  return { mergePdfs };
};