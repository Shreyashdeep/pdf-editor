import { Button } from "./ui/button";
import { useRef, useState, useEffect } from "react";
import PdfMerge from "./PdfMerge";

interface HeroProps {
  onGetStarted: () => void;
  onFileUpload?: (file: File) => void; // Make this prop optional
  onMergeClick: () => void;
}

export default function Hero({ onGetStarted, onFileUpload, onMergeClick }: HeroProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [pdfUrls, setPdfUrls] = useState<string[]>([]);
  const [mergedPdfUrl, setMergedPdfUrl] = useState<string | null>(null);

  const handleGetStarted = () => {
    onGetStarted();
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles = Array.from(files);
      setUploadedFiles((prevFiles) => [...prevFiles, ...newFiles]);
      const newUrls = newFiles.map((file) => URL.createObjectURL(file));
      setPdfUrls((prevUrls) => [...prevUrls, ...newUrls]);
      // Only call onFileUpload if it's defined
      if (onFileUpload && typeof onFileUpload === "function") {
        newFiles.forEach((file) => onFileUpload(file));
      }
    }
  };

  const handleMergeComplete = (mergedPdf: Blob) => {
    const url = URL.createObjectURL(mergedPdf);
    setMergedPdfUrl(url);
  };

  useEffect(() => {
    return () => {
      pdfUrls.forEach((url) => URL.revokeObjectURL(url));
      if (mergedPdfUrl) {
        URL.revokeObjectURL(mergedPdfUrl);
      }
    };
  }, [pdfUrls, mergedPdfUrl]);

  return (
    <div className="bg-gradient-to-b from-purple-100 via-pink-50 to-red-50 py-32 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-purple-800 dark:text-purple-300">
          PDF Tools
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-purple-600 dark:text-purple-200 max-w-3xl mx-auto">
          Powerful PDF tools at your fingertips. Upload, merge, edit, and more!
        </p>
        <div className="border-dashed border-2 border-purple-600 p-6 rounded-lg transition-all duration-300 hover:border-purple-800">
          <Button
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white px-10 py-4 rounded-full text-xl font-semibold hover:from-purple-700 hover:via-pink-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl dark:from-purple-800 dark:via-pink-700 dark:to-red-700 dark:hover:from-purple-900 dark:hover:via-pink-800 dark:hover:to-red-800"
          >
            Choose a PDF file
          </Button>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".pdf"
          className="hidden"
          multiple
        />
        {uploadedFiles.length > 0 && (
          <div className="mt-16">
            {uploadedFiles.map((file, index) => (
              <div key={index} className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-purple-800 dark:text-purple-300">
                  Uploaded PDF
                </h2>
                <p className="text-lg text-purple-600 dark:text-purple-200 mb-4">
                  {file.name}
                </p>
                <div className="w-full max-w-6xl mx-auto aspect-[16/9] bg-white shadow-lg rounded-lg overflow-hidden">
                  <iframe
                    src={pdfUrls[index]}
                    className="w-full h-full"
                    title={`Uploaded PDF ${index + 1}`}
                    style={{ border: "none" }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
        {uploadedFiles.length > 1 && (
          <PdfMerge files={uploadedFiles} onMergeComplete={handleMergeComplete} />
        )}
        {mergedPdfUrl && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-6 text-purple-800 dark:text-purple-300">
              Merged PDF
            </h2>
            <div className="w-full max-w-6xl mx-auto aspect-[16/9] bg-white shadow-lg rounded-lg overflow-hidden">
              <iframe
                src={mergedPdfUrl}
                className="w-full h-full"
                title="Merged PDF"
                style={{ border: "none" }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
