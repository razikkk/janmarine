import React, { useEffect, useState } from "react";
import { getContactPage, updateContactPage } from "../api/pageContent";
import { toast } from "react-hot-toast";

const AdminContactPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    location: "",
    workingHours: "",
  });

  const [loading, setLoading] = useState(false);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await getContactPage();
        if (res.data?.pageContent) {
          setFormData({
            email: res.data.pageContent.email || "",
            phone: res.data.pageContent.phone || "",
            location: res.data.pageContent.location || "",
            workingHours: res.data.pageContent.workingHours || "",
          });
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to load contact info");
      }
    };
    fetchContact();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setUpdated(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateContactPage(formData);
      toast.success("Contact page updated successfully!");
      setUpdated(true);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update contact info");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Edit Contact Page
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-semibold text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg focus:border-blue-500 outline-none"
              placeholder="example@company.com"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-2">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg focus:border-blue-500 outline-none"
              placeholder="+91 9876543210"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-2">Location</label>
            <textarea
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg focus:border-blue-500 outline-none"
              placeholder="123 Business Street, Kochi, Kerala"
              rows={3}
            ></textarea>
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-2">Working Hours</label>
            <input
              type="text"
              name="workingHours"
              value={formData.workingHours}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg focus:border-blue-500 outline-none"
              placeholder="Mon-Fri: 8:00 AM - 6:00 PM"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full font-semibold py-3 rounded-lg transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>

          {updated && (
            <p className="text-green-600 text-center mt-3 font-medium">
              ✅ Contact details updated successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AdminContactPage;
