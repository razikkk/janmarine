import { useEffect, useState } from "react";
import { getPageContent, upsertPageContent, deletePageContent } from "../api/pageContent";
import { Trash2, Upload } from "lucide-react";
import Swal from "sweetalert2";

const AdminAboutContent = () => {
  const [paragraph, setParagraph] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [existing, setExisting] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // Load existing content
  useEffect(() => {
    getPageContent("about")
      .then((res) => {
        if (res.data) {
          setParagraph(res.data.paragraph);
          setPreview(res.data.image);
          setExisting(true);
        }
      })
      .catch(() => setExisting(false))
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("page", "about");
    formData.append("paragraph", paragraph);
    if (image) formData.append("image", image);

    try {
      await upsertPageContent(formData);
      Swal.fire({
        icon: "success",
        title: existing ? "Updated Successfully" : "Added Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      setExisting(true);
    } catch {
      Swal.fire("Error", "Something went wrong!", "error");
    }
  };

  const handleDelete = async () => {
    const confirm = await Swal.fire({
      title: "Delete content?",
      text: "This action cannot be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Delete",
    });

    if (confirm.isConfirmed) {
      try {
        await deletePageContent("about");
        setParagraph("");
        setPreview(null);
        setExisting(false);
        Swal.fire("Deleted!", "Content removed successfully.", "success");
      } catch {
        Swal.fire("Error", "Failed to delete content.", "error");
      }
    }
  };

  if (loading) return <p className="text-center mt-20 text-gray-500">Loading...</p>;

  return (
    <div className="p-8 bg-gray-50 min-h-screen font-[Outfit]">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Manage About Page Content
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Paragraph
            </label>
            <textarea
              rows={6}
              value={paragraph}
              onChange={(e) => setParagraph(e.target.value)}
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-pantone-blue focus:outline-none"
              placeholder="Enter about page paragraph..."
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Image
            </label>
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="w-64 h-40 object-cover rounded-lg mb-3"
              />
            )}
            <label className="flex items-center gap-3 cursor-pointer text-pantone-blue font-semibold">
              <Upload size={20} />
              <span>Upload Image</span>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setImage(file);
                    setPreview(URL.createObjectURL(file));
                  }
                }}
              />
            </label>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              type="submit"
              className="px-6 py-2 bg-pantone-blue text-white rounded-lg hover:bg-blue-600 transition"
            >
              {existing ? "Update Content" : "Add Content"}
            </button>

            {existing && (
              <button
                type="button"
                onClick={handleDelete}
                className="px-6 py-2 bg-red-500 text-white rounded-lg flex items-center gap-2 hover:bg-red-600 transition"
              >
                <Trash2 size={18} /> Delete
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminAboutContent;
