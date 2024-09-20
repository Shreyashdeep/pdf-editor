import { Button } from "./ui/button";
import { useRef, useState, useEffect } from "react";

interface HeroProps {
  onGetStarted: () => void;
  onFileUpload?: (file: File) => void; // Make this prop optional
}

export default function Hero({ onGetStarted, onFileUpload }: HeroProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const handleGetStarted = () => {
    onGetStarted();
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      // Only call onFileUpload if it's defined
      if (onFileUpload && typeof onFileUpload === "function") {
        onFileUpload(file);
      }
      const url = URL.createObjectURL(file);
      setPdfUrl(url);
    }
  };

  useEffect(() => {
    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [pdfUrl]);

  return (
    <div className="bg-gradient-to-b from-purple-100 via-pink-50 to-red-50 py-32 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-purple-800 dark:text-purple-300">
          Welcome to Our PDF Tool
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-purple-600 dark:text-purple-200 max-w-3xl mx-auto">
          Easily manage and edit your PDF files with our powerful and intuitive
          tools
        </p>
        {!uploadedFile && (
          <Button
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white px-10 py-4 rounded-full text-xl font-semibold hover:from-purple-700 hover:via-pink-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl dark:from-purple-800 dark:via-pink-700 dark:to-red-700 dark:hover:from-purple-900 dark:hover:via-pink-800 dark:hover:to-red-800"
          >
            Get Started
          </Button>
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".pdf"
          className="hidden"
        />
        {uploadedFile && pdfUrl && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-6 text-purple-800 dark:text-purple-300">
              Uploaded PDF
            </h2>
            <p className="text-lg text-purple-600 dark:text-purple-200 mb-4">
              {uploadedFile.name}
            </p>
            <div className="w-full max-w-4xl mx-auto aspect-[16/9] bg-white">
              <iframe
                src={pdfUrl}
                className="w-full h-full"
                title="Uploaded PDF"
              />
            </div>
          </div>
        )}
      </div>
      {/* Our Premium Features section would go here */}
    </div>
  );
}
