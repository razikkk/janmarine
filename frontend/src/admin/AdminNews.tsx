import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { addNews, getNews, updateNews, deleteNews } from "../api/pageContent";

interface NewsItem {
  _id?: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  featured: boolean;
  image?: string;
}

const AdminNewsPage = () => {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [formData, setFormData] = useState<NewsItem>({
    title: "",
    date: "",
    category: "",
    excerpt: "",
    featured: false,
  });
  const [file, setFile] = useState<File | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    const res = await getNews();
    setNewsList(res.data.newsList);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, String(value)));
    if (file) data.append("image", file);

    if (editingId) {
      await updateNews(editingId, data);
    } else {
      await addNews(data);
    }

    setFormData({ title: "", date: "", category: "", excerpt: "", featured: false });
    setFile(null);
    setEditingId(null);
    loadNews();
  };

  const handleEdit = (news: NewsItem) => {
    setFormData(news);
    setEditingId(news._id || null);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this news?")) {
      await deleteNews(id);
      loadNews();
    }
  };

  return (
    <div className="p-8 font-[Outfit]">
      <h1 className="text-3xl font-bold mb-6">Manage News</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md mb-10 space-y-4"
        encType="multipart/form-data"
      >
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full border p-3 rounded"
          required
        />
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="w-full border p-3 rounded"
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="w-full border p-3 rounded"
        />
        <textarea
          placeholder="Excerpt"
          value={formData.excerpt}
          onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
          className="w-full border p-3 rounded"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full border p-3 rounded"
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={formData.featured}
            onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
          />
          <span>Featured</span>
        </label>

        <button type="submit" className="bg-pantone-blue text-white px-4 py-2 rounded">
          {editingId ? "Update News" : "Add News"}
        </button>
      </form>

      {/* News Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3">Title</th>
              <th className="text-left p-3">Date</th>
              <th className="text-left p-3">Category</th>
              <th className="text-left p-3">Featured</th>
              <th className="text-left p-3">Image</th>
              <th className="text-left p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {newsList.map((n) => (
              <tr key={n._id} className="border-t hover:bg-gray-50">
                <td className="p-3">{n.title}</td>
                <td className="p-3">{new Date(n.date).toLocaleDateString()}</td>
                <td className="p-3">{n.category}</td>
                <td className="p-3">{n.featured ? "Yes" : "No"}</td>
                <td className="p-3">
                  {n.image && <img src={n.image} alt={n.title} className="w-16 h-16 object-cover" />}
                </td>
                <td className="p-3 space-x-2">
                  <button onClick={() => handleEdit(n)} className="bg-pantone-blue text-white px-3 py-1 rounded">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(n._id!)}
                    className="bg-pantone-red text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminNewsPage;
