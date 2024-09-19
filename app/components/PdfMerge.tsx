import React, { useState } from 'react';
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { usePdfMerge } from '../src/hooks/usePdfMerge';

export default function PdfMerge() {
  const [files, setFiles] = useState<File[]>([]);
  const { mergePdfs, isLoading, error } = usePdfMerge();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
    }
  };

  const handleMerge = async () => {
    if (files.length < 2) {
      alert('Please select at least two PDF files to merge.');
      return;
    }

    const mergedPdf = await mergePdfs(files);
    if (mergedPdf) {
      const url = URL.createObjectURL(mergedPdf);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'merged.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Merge PDFs</h2>
      <Input 
        type="file" 
        accept=".pdf" 
        multiple 
        onChange={handleFileChange} 
        className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
      />
      <Button onClick={handleMerge} disabled={isLoading || files.length < 2}>
        {isLoading ? 'Merging...' : 'Merge PDFs'}
      </Button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}