import { Calendar, ArrowRight } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Janmarine Expands Fleet with 50 New Electric Trucks',
      date: '2024-10-15',
      category: 'Fleet Update',
      image: 'https://images.pexels.com/photos/1335976/pexels-photo-1335976.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'In line with our commitment to sustainability, we are proud to announce the addition of 50 state-of-the-art electric trucks to our fleet. This investment reinforces our dedication to reducing carbon emissions and leading the industry in green logistics solutions.',
      featured: true
    },
    {
      id: 2,
      title: 'Award Recognition: Best Logistics Company 2024',
      date: '2024-10-01',
      category: 'Awards',
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Janmarine has been honored with the prestigious "Best Logistics Company 2024" award at the National Transportation Summit. This recognition acknowledges our excellence in service delivery, innovation, and customer satisfaction.',
      featured: false
    },
    {
      id: 3,
      title: 'New Distribution Center Opens in Eastern Region',
      date: '2024-09-20',
      category: 'Expansion',
      image: 'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'We are excited to announce the opening of our new 100,000 square-foot distribution center in the Eastern Region. This strategic expansion will enhance our service capabilities and reduce delivery times for our clients in the area.',
      featured: false
    },
    {
      id: 4,
      title: 'Partnership with Global Tech Company for AI-Powered Logistics',
      date: '2024-09-10',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Janmarine has entered into a strategic partnership with a leading global technology company to implement AI-powered route optimization and predictive maintenance systems across our entire fleet.',
      featured: false
    },
    {
      id: 5,
      title: 'Safety Milestone: 5 Million Accident-Free Miles',
      date: '2024-08-25',
      category: 'Safety',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Our dedicated team has achieved an incredible milestone of 5 million accident-free miles. This achievement demonstrates our unwavering commitment to safety and the effectiveness of our comprehensive driver training programs.',
      featured: false
    },
    {
      id: 6,
      title: 'Community Initiative: Supporting Local Food Banks',
      date: '2024-08-10',
      category: 'Community',
      image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Janmarine launches a new community initiative providing free transportation services to local food banks. We are committed to giving back to the communities we serve and supporting those in need.',
      featured: false
    },
    {
      id: 7,
      title: 'ISO 45001 Certification Achieved',
      date: '2024-07-30',
      category: 'Certification',
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'We are proud to announce that Janmarine has successfully achieved ISO 45001 certification for Occupational Health and Safety Management Systems, further demonstrating our commitment to employee well-being.',
      featured: false
    },
    {
      id: 8,
      title: 'Customer Appreciation Event Announced',
      date: '2024-07-15',
      category: 'Events',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Join us for our annual Customer Appreciation Event on November 15th. This special event celebrates our valued partnerships and provides an opportunity to network and learn about our latest innovations.',
      featured: false
    }
  ];

  const featuredNews = newsItems.find(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  return (
    <div className="animate-fade-in">
<section className="relative h-[820px] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center">
  <div className="absolute inset-0 opacity-20">
    <img
      src="https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=1920"
      alt="News"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white font-[Outfit] text-center">
    <h1 className="text-5xl md:text-7xl font-semibold animate-slide-up">Latest News</h1>
    <p className="text-xl mt-4 text-gray-300">
      Stay updated with our latest developments and achievements. <br />
      Explore stories, updates, and milestones that define our journey. <br />
      Every update reflects our commitment to excellence.
    </p>
  </div>
</section>


{featuredNews && (
  <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="rounded-2xl overflow-hidden shadow-[0_10px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_60px_rgba(0,0,0,0.15)] transition-all duration-500 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left Image Side */}
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

          {/* Right Text Content */}
          <div className="p-10 md:p-14 flex flex-col justify-center font-[Outfit]">
            <div className="flex items-center text-gray-600 mb-5 text-sm md:text-base">
              <Calendar className="w-5 h-5 mr-2 text-pantone-blue" />
              <span>
                {new Date(featuredNews.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
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

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {featuredNews.excerpt}
            </p>

            <button className="bg-pantone-blue text-white px-8 py-4 rounded-xl hover:scale-105 hover:shadow-lg transition-all font-semibold inline-flex items-center w-fit">
              Read More
              <ArrowRight className="ml-3 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
)}


      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">All News</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((item) => (
              <div
                key={item.id}
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
                    <span>{new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    <span className="mx-2">•</span>
                    <span className="text-pantone-blue font-semibold">{item.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                  <button className="text-pantone-red font-semibold inline-flex items-center hover:underline">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 font-[Outfit]">
  <div className="max-w-5xl mx-auto px-6 text-center">
    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-900">
      Stay Connected
    </h2>
    <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
      Subscribe to our newsletter and get the latest logistics insights, company updates, and trends — straight to your inbox.
    </p>

    {/* Subscription Form */}
    <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-4 sm:p-5 border border-gray-100">
      <input
        type="email"
        placeholder="Enter your email address"
        className="flex-1 px-6 py-4 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pantone-blue focus:border-transparent transition-all duration-300 placeholder:text-gray-400"
      />
      <button className="bg-pantone-blue text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 whitespace-nowrap">
        Subscribe
      </button>
    </div>

    {/* Subtle Note */}
    <p className="text-sm text-gray-500 mt-6">
      We respect your privacy. Unsubscribe anytime.
    </p>
  </div>
</section>

    </div>
  );
};

export default News;
