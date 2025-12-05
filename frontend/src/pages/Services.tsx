import { Truck, Package, Route, Ship, Plane, Warehouse, Clock, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: 'Road Transportation',
      description: 'Comprehensive land freight solutions with our modern fleet of trucks and trailers. We handle everything from local deliveries to long-haul interstate transportation.',
      features: ['Full Truckload (FTL)', 'Less Than Truckload (LTL)', 'Express Delivery', 'Temperature Controlled']
    },
    {
      icon: Package,
      title: 'Warehousing & Distribution',
      description: 'State-of-the-art warehousing facilities with advanced inventory management systems. We provide secure storage and efficient distribution services.',
      features: ['Climate Controlled Storage', 'Inventory Management', 'Order Fulfillment', 'Cross-Docking']
    },
    {
      icon: Route,
      title: 'Supply Chain Management',
      description: 'End-to-end supply chain solutions tailored to your business needs. We optimize your logistics operations for maximum efficiency and cost savings.',
      features: ['Route Optimization', 'Real-Time Tracking', 'Cost Analysis', 'Performance Reporting']
    },
    {
      icon: Ship,
      title: 'Freight Forwarding',
      description: 'International and domestic freight forwarding services. We handle all aspects of shipping, from documentation to customs clearance.',
      features: ['Sea Freight', 'Air Freight', 'Customs Clearance', 'Documentation']
    },
    {
      icon: Warehouse,
      title: 'Third-Party Logistics (3PL)',
      description: 'Comprehensive 3PL solutions that allow you to focus on your core business while we handle your logistics operations.',
      features: ['Flexible Solutions', 'Technology Integration', 'Scalable Services', 'Cost Optimization']
    },
    {
      icon: Plane,
      title: 'Express & Same-Day Delivery',
      description: 'Urgent delivery services for time-sensitive shipments. Our express service ensures your goods arrive when you need them.',
      features: ['Same-Day Delivery', 'Next-Day Service', 'Time-Critical Shipping', 'Priority Handling']
    }
  ];

  return (
    <div className="animate-fade-in">
    <section className="relative h-[850px]  flex items-center mt-[-125px]">
  <div className="absolute inset-0">
    <img
      src="/jan-service.jpg"
      alt="Our Services"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent" />
  </div>

  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white font-[Outfit]">
    <h1 className="text-5xl md:text-7xl font-semibold animate-slide-up">
      Our Services
    </h1>
    <p className="text-xl md:text-2xl mt-6 text-gray-300 leading-relaxed">
      Delivering excellence through innovative logistics solutions <br />
      tailored to every client’s unique needs — from road to sea to air. <br />
      Reliability and precision are the foundation of every move we make.
    </p>
  </div>
</section>


<section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden font-[Outfit]">
  <div className="absolute inset-0">
    <div className="w-[600px] h-[600px] bg-pantone-red/5 rounded-full blur-3xl absolute -top-40 -left-40"></div>
    <div className="w-[600px] h-[600px] bg-pantone-blue/5 rounded-full blur-3xl absolute bottom-0 right-0"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-20">
      <h2 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
        What We Offer
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        From transportation to warehousing, we deliver complete logistics solutions
        designed to move your business forward — with precision and reliability.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <div
            key={index}
            className="group bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl p-10 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          >
            <div className="flex items-start space-x-6">
              <div className="bg-gradient-to-br from-pantone-red to-pantone-blue p-5 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-500">
                <Icon className="w-10 h-10 text-black" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-pantone-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-5 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2.5 h-2.5 bg-pantone-blue rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>


<section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 font-[Outfit] overflow-hidden">
  {/* Subtle glowing background accents */}
  <div className="absolute inset-0">
    <div className="w-[500px] h-[500px] bg-pantone-red/10 rounded-full blur-3xl absolute -top-20 -left-20"></div>
    <div className="w-[500px] h-[500px] bg-pantone-blue/10 rounded-full blur-3xl absolute bottom-0 right-0"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Title */}
    <div className="text-center mb-20">
      <h2 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
        Why Our Services Stand Out
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Experience the perfect blend of technology, safety, and reliability that sets us apart.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      <div className="group bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl p-10 text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
        <div className="bg-gradient-to-br from-pantone-red to-pantone-blue w-20 h-20 flex items-center justify-center rounded-xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-md">
          <Clock className="w-10 h-10 text-black" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-pantone-red transition-colors">
          24/7 Support
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Round-the-clock customer service and shipment tracking.
        </p>
      </div>

      <div className="group bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl p-10 text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
        <div className="bg-gradient-to-br from-pantone-blue to-pantone-red w-20 h-20 flex items-center justify-center rounded-xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-md">
          <Shield className="w-10 h-10 text-black" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-pantone-blue transition-colors">
          Secure Transport
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Advanced safety measures ensuring cargo protection.
        </p>
      </div>

      <div className="group bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl p-10 text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
        <div className="bg-gradient-to-br from-pantone-red to-pantone-blue w-20 h-20 flex items-center justify-center rounded-xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-md">
          <Route className="w-10 h-10 text-black" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-pantone-red transition-colors">
          Real-Time Tracking
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Track every shipment live with our smart GPS system.
        </p>
      </div>

      <div className="group bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl p-10 text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
        <div className="bg-gradient-to-br from-pantone-blue to-pantone-red w-20 h-20 flex items-center justify-center rounded-xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-md">
          <Package className="w-10 h-10 text-black" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-pantone-blue transition-colors">
          Flexible Solutions
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Custom logistics solutions designed around your needs.
        </p>
      </div>
    </div>
  </div>
</section>


<section className="relative py-28 bg-gradient-to-br from-pantone-blue to-pantone-red text-black overflow-hidden font-[Outfit]">
  {/* Background decorative elements */}
  {/* <div className="absolute inset-0">
    <div className="w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl absolute top-10 left-10"></div>
    <div className="w-[500px] h-[500px] bg-black/10 rounded-full blur-3xl absolute bottom-10 right-10"></div>
  </div> */}

  <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight animate-slide-up">
      Need a Custom Solution?
    </h2>
    <p className="text-xl md:text-xl text-black mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in">
      Our logistics experts craft tailored solutions to perfectly match your business goals — delivering precision, efficiency, and reliability every step of the way.
    </p>
    <a
      href="/contact"
      className="inline-block bg-white text-pantone-blue px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
    >
      Get in Touch
    </a>
  </div>
</section>

    </div>
  );
};

export default Services;
