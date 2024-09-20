import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";

export default function Home() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    // You can add additional logic here, such as processing the PDF
    console.log("Uploaded file:", file.name);
  };

  const handleGetStarted = () => {
    setIsSidebarVisible(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Hero onGetStarted={handleGetStarted} onFileUpload={handleFileUpload} />
      <Sidebar isVisible={isSidebarVisible} onFileUpload={handleFileUpload} />
    </div>
  );
}
