import { Link } from 'react-router-dom';
import { Truck, Shield, Clock, Award, ArrowRight, Package, Route, Users, Ship, Car } from 'lucide-react';

const Home = () => {
  const services = [
    {
      image: '/freight.jpg',
      title: 'Freight forwarding',
      description:
      'Reliable and efficient freight forwarding services ensuring smooth global logistics. We manage end-to-end shipping processes with transparency, speed, and cost-efficiency.',
    features: [
      'Air, Sea, and Land Freight Coordination',
      'Customs Clearance Assistance',
      'Door-to-Door Delivery',
      'Real-Time Shipment Tracking'
    ]
    },
    {
      image: '/customer.jpg',
      title: 'Customs Clearance',
      description:
      'Streamlined customs clearance services to ensure your shipments move across borders without delays. Our experts handle all documentation and compliance efficiently.',
    features: [
      'Import & Export Documentation',
      'Duty & Tax Calculation',
      'Regulatory Compliance Support',
      'Quick Clearance Processing'
    ]
    
    },
    {
      image: '/transportation.jpg',
      title: 'Transporation',
      description:
  'Reliable transportation solutions designed to move your goods safely and on time. We manage logistics from pickup to final delivery with complete visibility.',
features: [
  'Door-to-Door Delivery',
  'Domestic & International Transport',
  'GPS Tracking & Fleet Monitoring',
  'On-Time Delivery Assurance'
]

    }
  ];
  return (
    <div>
<section className="relative h-[850px] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center pt-20 text-center mt-[-125px]">
  <div className="absolute inset-0">
    <video
      src="jan-hero.mov"
      className="w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
    />
    <div className="absolute inset-0 bg-black/40"></div>
  </div>

  <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-white font-[Outfit] space-y-6">
      
      <h1 className="text-7xl md:text-8xl font-bold tracking-wide drop-shadow-lg">
        JANMARINE
      </h1>

      <h2 className="text-4xl md:text-5xl font-light opacity-90">
        Driving Reliability,<br /> Delivering Excellence
      </h2>

      <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light">
        From Land, Air & Sea – Janmarine is everywhere to serve you.
      </p>

  </div>
</section>


<section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden font-[Outfit]">
  {/* Background Glow Effects */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="w-[600px] h-[600px] bg-pantone-red/10 rounded-full blur-3xl absolute -top-40 -left-40"></div>
    <div className="w-[600px] h-[600px] bg-pantone-blue/10 rounded-full blur-3xl absolute bottom-0 right-0"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-20">
      <h2 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
        What We Offer
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Complete logistics and supply-chain solutions designed with precision, efficiency,
        and world-class reliability.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {services.map((service, index) => (
        <div
          key={index}
          className="group bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
        >
          {/* Image */}
          <div className="h-60 w-full overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
            />
          </div>

          {/* Content */}
          <div className="p-10">
            <h3 className="text-3xl font-semibold text-gray-900 mb-4 group-hover:text-pantone-blue transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              {service.description}
            </p>

            {/* Features */}
            <ul className="space-y-3">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="w-3 h-3 bg-pantone-blue rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700 text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      <section className="py-20 bg-gradient-to-b from-gray-50 to-white font-[Outfit]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-14">
      Why <span className="text-pantone-red">Choose</span> Us
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
      {/* Card 1 */}
      <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-pantone-red to-pantone-blue flex items-center justify-center mx-auto mb-6">
          <Shield className="w-8 h-8 text-black" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">Safety First</h3>
        <p className="text-gray-500 leading-relaxed">
          Certified safety standards and global logistics protocols to protect every shipment.
        </p>
      </div>

      {/* Card 2 */}
      <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-pantone-blue to-pantone-red flex items-center justify-center mx-auto mb-6">
          <Clock className="w-8 h-8 text-black" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">On-Time Delivery</h3>
        <p className="text-gray-500 leading-relaxed">
          98% on-time delivery rate with real-time tracking and proactive communication.
        </p>
      </div>

      {/* Card 3 */}
      <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-pantone-red to-pantone-blue flex items-center justify-center mx-auto mb-6">
          <Award className="w-8 h-8 text-black" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">Quality Service</h3>
        <p className="text-gray-500 leading-relaxed">
          ISO-certified quality management ensures excellence in every step of your journey.
        </p>
      </div>

      {/* Card 4 */}
      <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-pantone-blue to-pantone-red flex items-center justify-center mx-auto mb-6">
          <Users className="w-8 h-8 text-black" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">Expert Team</h3>
        <p className="text-gray-500 leading-relaxed">
          A dedicated team of logistics professionals delivering precision and trust globally.
        </p>
      </div>
    </div>
  </div>
</section>


{/* <section className="py-20 bg-gradient-to-b from-gray-50 to-white font-[Outfit]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
    {/* Section Header */}
    {/* <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
        Our <span className="text-pantone-red">Fleet</span> Categories
      </h2>
      <p className="text-lg text-gray-500 max-w-2xl mx-auto">
        Modern, high-performance vehicles tailored for every logistics need.
      </p>
    </div> */}

    {/* Fleet Cards */}
    {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-10"> */}
      {/* Card 1 */}
      {/* <Link to="/fleet" className="group block">
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
          <div className="relative h-56 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1335976/pexels-photo-1335976.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Heavy Trucks"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="p-8">
            <div className="flex items-center mb-3">
              <Truck className="w-7 h-7 text-pantone-red mr-3" />
              <h3 className="text-2xl font-semibold text-gray-900">Heavy Trucks</h3>
            </div>
            <p className="text-gray-500 leading-relaxed">
              Long-haul transport built for reliability, power, and maximum capacity.
            </p>
          </div>
        </div>
      </Link> */}

      {/* Card 2 */}
      {/* <Link to="/fleet" className="group block">
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
          <div className="relative h-56 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1236955/pexels-photo-1236955.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Delivery Vans"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="p-8">
            <div className="flex items-center mb-3">
              <Package className="w-7 h-7 text-pantone-blue mr-3" />
              <h3 className="text-2xl font-semibold text-gray-900">Delivery Vans</h3>
            </div>
            <p className="text-gray-500 leading-relaxed">
              Efficient urban and regional deliveries with optimized route planning.
            </p>
          </div>
        </div>
      </Link> */}

      {/* Card 3 */}
      {/* <Link to="/fleet" className="group block">
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
          <div className="relative h-56 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1111318/pexels-photo-1111318.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Specialized Vehicles"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="p-8">
            <div className="flex items-center mb-3">
              <Route className="w-7 h-7 text-pantone-red mr-3" />
              <h3 className="text-2xl font-semibold text-gray-900">Specialized Vehicles</h3>
            </div>
            <p className="text-gray-500 leading-relaxed">
              Custom-engineered logistics solutions for sensitive and complex cargo.
            </p>
          </div>
        </div>
      </Link>
    </div>
  </div>
</section> */}


<section className="relative py-20  text-white overflow-hidden font-[Outfit]">
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05),_transparent)]"></div>

  {/* Marquee Wrapper */}
  <div className="flex overflow-x-hidden">
    <div className="flex animate-marquee whitespace-nowrap mx-auto gap-32">
      {/* Item 1 */}
      <div className="text-center">
        <div className="text-6xl font-semibold mb-2 bg-gradient-to-r from-pantone-red to-pantone-blue bg-clip-text text-black">
          500+
        </div>
        <div className="text-xl text-black">Vehicles in Fleet</div>
      </div>

      {/* Item 2 */}
      <div className="text-center">
        <div className="text-6xl font-semibold mb-2 bg-gradient-to-r from-pantone-blue to-pantone-red bg-clip-text text-black">
          10,000+
        </div>
        <div className="text-xl text-black">Successful Deliveries</div>
      </div>

      {/* Item 3 */}
      <div className="text-center">
        <div className="text-6xl font-semibold mb-2 bg-gradient-to-r from-pantone-red to-pantone-blue bg-clip-text text-black">
          98%
        </div>
        <div className="text-xl text-black">Customer Satisfaction</div>
      </div>

      {/* Duplicate set for infinite scroll effect */}
      <div className="text-center">
        <div className="text-6xl font-semibold mb-2 bg-gradient-to-r from-pantone-red to-pantone-blue bg-clip-text text-black">
          500+
        </div>
        <div className="text-xl text-black">Vehicles in Fleet</div>
      </div>
      <div className="text-center">
        <div className="text-6xl font-semibold mb-2 bg-gradient-to-r from-pantone-blue to-pantone-red bg-clip-text text-black">
          10,000+
        </div>
        <div className="text-xl text-black">Successful Deliveries</div>
      </div>
      <div className="text-center">
        <div className="text-6xl font-semibold mb-2 bg-gradient-to-r from-pantone-red to-pantone-blue bg-clip-text text-black">
          98%
        </div>
        <div className="text-xl text-black">Customer Satisfaction</div>
      </div>
    </div>
  </div>
</section>


<section className="relative py-24  text-black overflow-hidden font-[Outfit]">
  {/* Subtle background glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07)_0%,transparent_70%)]"></div>

  <div className="relative max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-5xl font-bold mb-6 leading-tight">
      Ready to <span className=" text-black">Get Started?</span>
    </h2>

    <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
      Contact us today for a free consultation and discover how we can optimize your logistics operations
    </p>

    <div className="flex flex-col sm:flex-row gap-5 justify-center">
      <Link
        to="/contact"
        className="bg-black px-10 py-4 rounded-xl text-lg font-semibold text-white shadow-lg hover:shadow-pantone-red/40 hover:scale-[1.02] transition-all duration-300 inline-flex items-center justify-center"
      >
        Contact Us Now
        <ArrowRight className="ml-2 w-5 h-5" />
      </Link>

      <Link
        to="/services"
        className="bg-black  text-white px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-pantone-red/40 hover:scale-[1.02] hover:text-white transition-all duration-300"
      >
        View Our Services
      </Link>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;
