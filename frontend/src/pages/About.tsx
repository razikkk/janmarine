import { Target, Eye, Award, Users, Truck, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getPageContent } from '../api/pageContent';

const About = () => {
  const [content, setContent] = useState<{paragraph:string, image:string} | null>(null)

  useEffect(()=>{
    getPageContent("about")
    .then((res)=> setContent(res.data))
    .catch((err)=> console.log(err))
  },[])

  return (
    <div className="animate-fade-in">
      <section className="relative h-[850px] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center mt-[-125px]">
        <div className="absolute inset-0 ">
          <img
            src="/about-jan.jpg"
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white font-[Outfit]">
          <h1 className="text-5xl md:text-7xl font-semibold text-center  animate-slide-up">About Janmarine</h1>
          <p className="text-xl mt-4 text-center text-gray-300">
  We provide seamless logistics solutions built on trust and precision. <br />
  Every delivery reflects our promise of reliability and excellence. <br />
  Efficiency drives everything we do for our clients.
</p>

        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                     {content?.paragraph}          
                </p>
            
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={content?.image}
                alt="Company"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
  {/* Decorative background shapes */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-pantone-blue/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-pantone-red/10 blur-3xl rounded-full translate-x-1/2 translate-y-1/2"></div>

  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        Our Mission & Vision
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Driving excellence through purpose and innovation.
      </p>
      <div className="mt-6 w-24 h-1 bg-gradient-to-r from-pantone-blue to-pantone-red mx-auto rounded-full"></div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Mission */}
      <div className="group bg-white/80 backdrop-blur-md border border-gray-100 hover:shadow-2xl transition-all duration-300 rounded-2xl p-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pantone-red to-pantone-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="bg-pantone-red/90 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
          <Target className="w-8 h-8 text-black" />
        </div>

        <h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-pantone-blue transition-colors">
          Our Mission
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          To provide world-class logistics solutions that exceed customer expectations through innovation, reliability, and exceptional service. We aim to be the trusted partner of choice for businesses seeking efficient and safe transportation solutions.
        </p>
      </div>

      {/* Vision */}
      <div className="group bg-white/80 backdrop-blur-md border border-gray-100 hover:shadow-2xl transition-all duration-300 rounded-2xl p-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pantone-blue to-pantone-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="bg-pantone-blue/90 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
          <Eye className="w-8 h-8 text-black" />
        </div>

        <h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-pantone-blue transition-colors">
          Our Vision
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          To be the leading logistics provider in the region, recognized for our commitment to excellence, sustainability, and innovation. We envision a future where our services enable businesses to thrive in an interconnected global marketplace.
        </p>
      </div>
    </div>
  </div>
</section>


<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-14">
      Why Choose Janmarine
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        {
          icon: <Truck className="w-10 h-10 text-white" />,
          title: "Modern Fleet",
          desc: "State-of-the-art vehicles equipped with the latest technology and safety features",
          color: "bg-pantone-red",
        },
        {
          icon: <Users className="w-10 h-10 text-white" />,
          title: "Expert Team",
          desc: "Highly trained professionals with years of industry experience",
          color: "bg-pantone-blue",
        },
        {
          icon: <MapPin className="w-10 h-10 text-white" />,
          title: "Wide Coverage",
          desc: "Extensive network covering major cities and regions nationwide",
          color: "bg-pantone-red",
        },
      ].map(({ icon, title, desc, color }, i) => (
        <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
          <div className={`${color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5`}>
            {icon}
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-900">{title}</h3>
          <p className="text-gray-600">{desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


<section className="py-20 bg-pantone-red text-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
    <h2 className="text-4xl font-extrabold mb-14">Certifications & Achievements</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
      {[
        { title: "ISO 9001:2015", desc: "Quality Management" },
        { title: "ISO 14001", desc: "Environmental Management" },
        { title: "OHSAS 18001", desc: "Health & Safety" },
        { title: "Best Fleet 2023", desc: "Industry Award" },
      ].map((item, i) => (
        <div
          key={i}
          className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition duration-300"
        >
          <Award className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-white/80">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-1">John Anderson</h3>
              <p className="text-pantone-red font-semibold mb-2">Chief Executive Officer</p>
              <p className="text-gray-600">25 years of logistics experience</p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="COO"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-1">Sarah Mitchell</h3>
              <p className="text-pantone-blue font-semibold mb-2">Chief Operations Officer</p>
              <p className="text-gray-600">Expert in supply chain management</p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="CFO"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-1">Michael Chen</h3>
              <p className="text-pantone-red font-semibold mb-2">Chief Financial Officer</p>
              <p className="text-gray-600">Strategic financial planning specialist</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
