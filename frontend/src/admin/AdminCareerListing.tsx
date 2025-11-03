import React, { useEffect, useState } from "react";
import {
  getCareerListings,
  createCareerListing,
  updateCareerListing,
  deleteCareerListing,
} from "../api/pageContent";
import { Plus, Trash2, Edit3 } from "lucide-react";

const AdminCareerListings = () => {
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState({
    title: "",
    location: "",
    type: "",
    description: "",
    requirements: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch all listings
  const fetchJobs = async () => {
    try {
      const { data } = await getCareerListings();
      setJobs(data.listings || []);
    } catch (error) {
      console.error("Error fetching listings:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Handle form submit (add or update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editingId) {
        await updateCareerListing(editingId, form);
      } else {
        await createCareerListing(form);
      }
      setForm({
        title: "",
        location: "",
        type: "",
        description: "",
        requirements: "",
      });
      setEditingId(null);
      fetchJobs();
    } catch (error) {
      console.error("Error saving job:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle edit click
  const handleEdit = (job) => {
    setForm({
      title: job.title,
      location: job.location,
      type: job.type,
      description: job.description,
      requirements: job.requirements.join(", "),
    });
    setEditingId(job._id);
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;
    try {
      await deleteCareerListing(id);
      fetchJobs();
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Career Listings</h1>

      {/* Add/Edit Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md mb-8"
      >
        <h2 className="text-xl font-semibold mb-4">
          {editingId ? "Edit Job" : "Add New Job"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Job Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Location"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            className="border p-2 rounded"
          />
          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            className="border p-2 rounded"
          >
            <option value="">Select Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
          </select>
          <input
            type="text"
            placeholder="Requirements (comma separated)"
            value={form.requirements}
            onChange={(e) => setForm({ ...form, requirements: e.target.value })}
            className="border p-2 rounded"
          />
        </div>
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="border p-2 rounded w-full mt-4"
          rows="3"
        />
        <button
          type="submit"
          disabled={loading}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <Plus size={18} />
          {editingId ? "Update Job" : "Add Job"}
        </button>
      </form>

      {/* Job List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Existing Jobs</h2>
        {jobs.length === 0 ? (
          <p className="text-gray-600">No job listings found.</p>
        ) : (
          <div className="space-y-4">
            {jobs.map((job) => (
              <div
                key={job._id}
                className="border p-4 rounded flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold text-lg">{job.title}</h3>
                  <p className="text-gray-600 text-sm">
                    {job.location} • {job.type}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(job)}
                    className="p-2 bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200"
                  >
                    <Edit3 size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(job._id)}
                    className="p-2 bg-red-100 text-red-700 rounded hover:bg-red-200"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminCareerListings;
