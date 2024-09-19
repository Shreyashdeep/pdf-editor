
// components/PDFUpload.tsx
import React, { useState } from 'react';
import { uploadPDF } from '../services/api';

const PDFUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadedFilename, setUploadedFilename] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file) {
      try {
        const result = await uploadPDF(file);
        setUploadedFilename(result.filename);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept=".pdf" />
      <button onClick={handleUpload} disabled={!file}>
        Upload PDF
      </button>
      {uploadedFilename && <p>Uploaded: {uploadedFilename}</p>}
    </div>
  );
};

export default PDFUpload;