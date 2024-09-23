import React from 'react';
import { Button } from "./ui/button";
import { usePdfMerge } from '../src/hooks/usePdfMerge';

interface PdfMergeProps {
  files: File[];
  onMergeComplete: (mergedPdf: Blob) => void;
}

export default function PdfMerge({ files, onMergeComplete }: PdfMergeProps) {
  const { mergePdfs, isLoading, error } = usePdfMerge();

  const handleMerge = async () => {
    if (files.length < 2) {
      alert('Please select at least two PDF files to merge.');
      return;
    }

    const mergedPdf = await mergePdfs(files);
    if (mergedPdf) {
      onMergeComplete(mergedPdf);
    }
  };

  return (
    <div className="space-y-4">
      <Button onClick={handleMerge} disabled={isLoading || files.length < 2}>
        {isLoading ? 'Merging...' : 'Merge PDFs'}
      </Button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}