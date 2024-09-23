import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import { usePdfMerge } from "../src/hooks/usePdfMerge";

export default function Home() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const { mergePdfs } = usePdfMerge();

  const handleFileUpload = (files: FileList) => {
    const newFiles = Array.from(files);
    setUploadedFiles(prevFiles => [...prevFiles, ...newFiles]);
    console.log("Uploaded files:", newFiles.map(file => file.name));
  };

  const handleGetStarted = () => {
    setIsSidebarVisible(true);
  };

  const handleMergeClick = async () => {
    if (uploadedFiles.length > 1) {
      try {
        const mergedPdfBlob = await mergePdfs(uploadedFiles);
        const url = URL.createObjectURL(mergedPdfBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'merged.pdf';
        a.click();
        URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Error merging PDFs:", error);
      }
    } else {
      console.log("Please upload at least two PDF files to merge");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Hero 
        onGetStarted={handleGetStarted} 
        onMergeClick={handleMergeClick}
        onFileUpload={handleFileUpload}
        uploadedFiles={uploadedFiles}
      />
    </div>
  );
}