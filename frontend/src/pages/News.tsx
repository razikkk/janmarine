import { useEffect, useState } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { getNews } from "../api/pageContent"; // ✅ adjust import path if needed
import { useNavigate } from "react-router-dom";

const News = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await getNews();
        console.log(res.data.newsList)
        setNewsItems(res.data.newsList || []);
      } catch (err) {
        console.error("Error fetching news:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="h-[400px] flex justify-center items-center text-gray-600 text-lg">
        Loading news...
      </div>
    );
  }

  if (newsItems.length === 0) {
    return (
      <div className="h-[400px] flex justify-center items-center text-gray-600 text-lg">
        No news available yet.
      </div>
    );
  }

  const featuredNews = newsItems.find((item) => item.featured);
  const regularNews = newsItems.filter((item) => !item.featured);

  return (
    <div className="animate-fade-in font-[Outfit]">
      {/* ---------- Hero Section ---------- */}
      <section className="relative h-[850px] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center mt-[-125px]">
  {/* Background Image with overlay */}
  <div className="absolute inset-0 opacity-30">
    <img
      src="/jan-news.jpg"
      alt="Join Our Team"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white font-[Outfit] text-center">
    <h1 className="text-5xl md:text-7xl font-semibold animate-slide-up">
      Latest News
    </h1>
    <p className="text-xl md:text-2xl mt-6 text-gray-300 leading-relaxed">
     Stay updated with our latest developments and achievements.
     Explore stories, updates, and milestones that define our journey.
     Every update reflects our commitment to excellence.
    </p>

   
  </div>

  {/* Gradient Overlay for Depth */}
  {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div> */}
</section>

      {/* ---------- Featured News ---------- */}
      {featuredNews && (
        <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="rounded-2xl overflow-hidden shadow-[0_10px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_60px_rgba(0,0,0,0.15)] transition-all duration-500 bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-[500px] overflow-hidden group">
                  <img
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <span className="absolute top-6 left-6 bg-pantone-red text-white px-5 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Featured
                  </span>
                </div>

                <div className="p-10 md:p-14 flex flex-col justify-center">
                  <div className="flex items-center text-gray-600 mb-5 text-sm md:text-base">
                    <Calendar className="w-5 h-5 mr-2 text-pantone-blue" />
                    <span>
                      {new Date(featuredNews.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="mx-3 text-gray-400">•</span>
                    <span className="text-pantone-blue font-semibold uppercase tracking-wide">
                      {featuredNews.category}
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-semibold mb-5 text-gray-900 leading-tight">
                    {featuredNews.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
  {featuredNews.excerpt.length > 120
    ? featuredNews.excerpt.slice(0, 120) + "..."
    : featuredNews.excerpt}
</p>

                  <button onClick={()=> navigate(`/news/${featuredNews._id}`)} className="bg-pantone-blue text-white px-8 py-4 rounded-xl hover:scale-105 hover:shadow-lg transition-all font-semibold inline-flex items-center w-fit">
                    Read More
                    <ArrowRight className="ml-3 w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ---------- All News ---------- */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">All News</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((item) => (
              <div
                key={item._id || item.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>
                      {new Date(item.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="text-pantone-blue font-semibold">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
  {item.excerpt.length > 120
    ? item.excerpt.slice(0, 120) + "..."
    : item.excerpt}
</p>
                  <button onClick={()=> navigate(`/news/${item._id}`)} className="text-pantone-red font-semibold inline-flex items-center hover:underline">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Subscribe Section ---------- */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 font-[Outfit]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-900">
            Stay Connected
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
            Subscribe to our newsletter to get updates straight to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-4 sm:p-5 border border-gray-100">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pantone-blue transition-all placeholder:text-gray-400"
            />
            <button className="bg-pantone-blue text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
};

export default News;
