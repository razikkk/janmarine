import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Calendar } from "lucide-react";
import { getNewsById } from "../api/pageContent";

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await getNewsById(id);
        setNews(res.data.news);
      } catch (err) {
        console.error("Error fetching news:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [id]);

  if (loading) {
    return (
      <div className="h-[400px] flex justify-center items-center text-gray-600 text-lg">
        Loading news details...
      </div>
    );
  }

  if (!news) {
    return (
      <div className="h-[400px] flex justify-center items-center text-gray-600 text-lg">
        News not found.
      </div>
    );
  }

  return (
    <div className="font-[Outfit] animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center bg-gray-900">
        <div className="absolute inset-0">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="relative z-10 text-center w-full px-6 text-white">
          <h1 className="text-5xl md:text-7xl font-semibold mb-4">{news.title}</h1>
          <div className="flex justify-center items-center gap-3 text-gray-300 text-sm md:text-base">
            <Calendar className="w-5 h-5 text-pantone-blue" />
            <span>
              {new Date(news.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span>•</span>
            <span className="text-pantone-blue font-semibold">
              {news.category}
            </span>
          </div>
        </div>
      </section>

      {/* News Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-gray-700 leading-relaxed text-lg">
          <p>{news.excerpt}</p>

          {news.content && (
            <div
              className="mt-6 prose max-w-none"
              dangerouslySetInnerHTML={{ __html: news.content }}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default NewsDetail;
