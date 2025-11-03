import React, { useState, useEffect } from "react";
import { uploadPdf, getPdf } from "../api/pageContent";
import { toast } from "react-hot-toast";

const AdminPdfPage = () => {
  const [page, setPage] = useState("quality");
  const [file, setFile] = useState<File | null>(null);
  const [existingPdf, setExistingPdf] = useState("");

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        const res = await getPdf(page);
        if (res.data?.pageContent?.pdfUrl) {
          setExistingPdf(res.data.pageContent.pdfUrl);
        } else {
          setExistingPdf("");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPdf();
  }, [page]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast.error("Please select a PDF to upload");
      return;
    }
    const formData = new FormData();
    formData.append("page", page);
    formData.append("pdf", file);

    try {
      await uploadPdf(formData);
      toast.success("PDF uploaded successfully!");
      setFile(null);
      const res = await getPdf(page);
      setExistingPdf(res.data?.pageContent?.pdfUrl || "");
    } catch (error) {
      console.error(error);
      toast.error("Failed to upload PDF");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Manage PDFs (Quality / HSE)
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Page Selector */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Select Page</label>
            <select
              value={page}
              onChange={(e) => setPage(e.target.value)}
              className="w-full border px-4 py-2 rounded-lg focus:border-blue-500 outline-none"
            >
              <option value="quality">Quality</option>
              <option value="hse">HSE</option>
            </select>
          </div>

          {/* File Input */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Upload PDF</label>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="w-full border px-4 py-2 rounded-lg focus:border-blue-500 outline-none"
            />
          </div>

          {/* Existing File */}
          {existingPdf && (
            <div className="text-center">
              <p className="text-gray-700 mb-2">Current Uploaded File:</p>
              <a
                href={existingPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View Current PDF
              </a>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            {existingPdf ? "Update PDF" : "Upload PDF"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPdfPage;
