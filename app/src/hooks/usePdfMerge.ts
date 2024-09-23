import { useState } from "react";
import { API_ROUTES } from "../config/api";

export const usePdfMerge = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mergePdfs = async (files: File[]): Promise<Blob | null> => {
    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    files.forEach((file) => formData.append("pdfs", file));

    try {
      const response = await fetch(API_ROUTES.MERGE, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to merge PDFs");
      }

      const blob = await response.blob();
      setIsLoading(false);
      return blob;
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
      setIsLoading(false);
      return null;
    }
  };

  return { mergePdfs, isLoading, error };
};
