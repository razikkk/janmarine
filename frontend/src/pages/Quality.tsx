import { Award, CheckCircle, FileText, Download, Target, Users, TrendingUp } from 'lucide-react';
import { getPdf } from '../api/pageContent';
import { useEffect, useState } from 'react';

const Quality = () => {
  const standards = [
    {
      title: 'ISO 9001:2015',
      description: 'Quality Management Systems certification ensuring consistent service delivery',
      icon: Award
    },
    {
      title: 'ISO 14001',
      description: 'Environmental Management Systems for sustainable operations',
      icon: Target
    },
    {
      title: 'Regular Audits',
      description: 'Quarterly internal and annual external quality audits',
      icon: CheckCircle
    },
    {
      title: 'Continuous Improvement',
      description: 'Ongoing process optimization and employee training programs',
      icon: TrendingUp
    }
  ];

  const processes = [
    'Vehicle Maintenance Standards',
    'Driver Training & Certification',
    'Load Securing Protocols',
    'Documentation Management',
    'Customer Feedback Systems',
    'Performance Monitoring',
    'Incident Reporting & Analysis',
    'Supplier Quality Assessment'
  ];


  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        const res = await getPdf("quality");
        if (res.data?.pageContent?.pdfUrl) {
          setPdfUrl(res.data.pageContent.pdfUrl);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPdf();
  }, []);

  return (
    <div className="animate-fade-in">
     <section className="relative h-[820px] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center">
  <div className="absolute inset-0 opacity-25">
    <img
      src="https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=1920"
      alt="Quality"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white font-[Outfit] text-center">
    <h1 className="text-5xl md:text-7xl font-semibold animate-slide-up">
      Quality Standards
    </h1>
    <p className="text-lg md:text-xl mt-6 text-gray-300 leading-relaxed max-w-3xl mx-auto">
      We uphold excellence in every operation — ensuring precision, reliability, and consistency  
      across every delivery we make. Our standards define the trust our clients depend on.
    </p>
  </div>
</section>


<section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white font-[Outfit]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div className="text-center mb-16">
      <h2 className="text-5xl font-semibold mb-6 text-gray-900">
        Our Quality Commitment
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        At Janmarine, quality isn’t just a target — it’s the very foundation of our service.  
        Every process is refined with precision and consistency to ensure reliability in every delivery.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {standards.map((standard, index) => {
        const Icon = standard.icon;
        return (
          <div
            key={index}
            className="group bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-pantone-red/60"
          >
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-br from-pantone-red to-pantone-blue p-4 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-500">
                <Icon className="w-8 h-8 text-black" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                  {standard.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {standard.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>

  </div>
</section>


      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Quality Control Processes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processes.map((process, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-pantone-blue mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-800 font-medium">{process}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Quality Management System</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our comprehensive Quality Management System (QMS) is designed to meet and exceed international standards. We continuously monitor, measure, and improve our processes to deliver exceptional service.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-pantone-red mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Trained Personnel</h3>
                    <p className="text-gray-600">All staff undergo rigorous training and certification programs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Target className="w-6 h-6 text-pantone-blue mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Performance Metrics</h3>
                    <p className="text-gray-600">Real-time tracking of quality indicators and KPIs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-pantone-red mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Continuous Improvement</h3>
                    <p className="text-gray-600">Regular reviews and updates to our processes and standards</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Quality Control"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-pantone-blue text-white rounded-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <FileText className="w-16 h-16 mb-4" />
              <h2 className="text-3xl font-bold mb-2">Quality Manual</h2>
              <p className="text-xl">
                Download our complete health, safety, and environment documentation
              </p>
            </div>
            {pdfUrl ? (
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-pantone-blue px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download PDF</span>
              </a>
            ) : (
              <button
                disabled
                className="bg-gray-300 text-gray-600 px-8 py-4 rounded-lg cursor-not-allowed flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>No File Available</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Quality Assurance Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-pantone-red text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
                <p className="text-gray-600">
                  Understanding and meeting customer requirements is our priority
                </p>
              </div>
              <div className="text-center">
                <div className="bg-pantone-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Process Approach</h3>
                <p className="text-gray-600">
                  Systematic management of interrelated processes for efficiency
                </p>
              </div>
              <div className="text-center">
                <div className="bg-pantone-red text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Evidence-Based Decisions</h3>
                <p className="text-gray-600">
                  Data-driven decision making for consistent improvements
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quality;
