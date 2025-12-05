import { Shield, Heart, Leaf, AlertTriangle, CheckCircle, Download, FileText } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getPdf } from '../api/pageContent';

const HSE = () => {
  const pillars = [
    {
      icon: Heart,
      title: 'Health',
      description: 'Promoting physical and mental well-being of all employees',
      points: [
        'Regular health check-ups',
        'Ergonomic workplace design',
        'Mental health support programs',
        'Wellness initiatives'
      ]
    },
    {
      icon: Shield,
      title: 'Safety',
      description: 'Zero-accident culture through proactive safety measures',
      points: [
        'Comprehensive safety training',
        'Personal protective equipment',
        'Emergency response protocols',
        'Incident investigation'
      ]
    },
    {
      icon: Leaf,
      title: 'Environment',
      description: 'Minimizing environmental impact through sustainable practices',
      points: [
        'Emission reduction programs',
        'Waste management systems',
        'Fuel efficiency initiatives',
        'Environmental monitoring'
      ]
    }
  ];

  const policies = [
    'Zero harm to people and environment',
    'Compliance with all applicable laws and regulations',
    'Continuous improvement in HSE performance',
    'Employee participation and consultation',
    'Risk assessment and hazard control',
    'Emergency preparedness and response',
    'Environmental protection and sustainability',
    'Contractor and supplier HSE management'
  ];

  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        const res = await getPdf("hse");
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
    <section className="relative h-[850px] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center mt-[-125px]">
  <div className="absolute inset-0 opacity-20">
    <img
      src="https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=1920"
      alt="Health, Safety & Environment"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white font-[Outfit] text-center">
    <h1 className="text-5xl md:text-7xl font-semibold animate-slide-up">
      Health, Safety & Environment
    </h1>
    <p className="text-xl mt-6 text-gray-300 leading-relaxed">
      Safety isn’t a policy—it’s our culture. <br />
      We uphold the highest HSE standards to protect our people, assets, and the environment. <br />
      Every operation reflects our commitment to responsibility and care.
    </p>
  </div>
</section>


<section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 font-[Outfit]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-semibold mb-6 text-gray-900">
        Our HSE Commitment
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        At Janmarine, the health and safety of our people, clients, and the planet come first.  
        We follow the highest HSE standards to ensure safe, sustainable, and responsible operations.
      </p>
    </div>

    {/* Pillars Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {pillars.map((pillar, index) => {
        const Icon = pillar.icon;
        return (
          <div
            key={index}
            className="group relative bg-white border border-gray-100 rounded-2xl p-10 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Icon */}
            <div className="bg-gradient-to-r from-pantone-red to-pantone-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <Icon className="w-8 h-8 text-black" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-center text-gray-900 mb-4 group-hover:text-pantone-blue transition-colors">
              {pillar.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-center mb-6 leading-relaxed">
              {pillar.description}
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3 text-gray-700">
              {pillar.points.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start"
                >
                  <CheckCircle className="w-5 h-5 text-pantone-blue mr-3 mt-1 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  </div>
</section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">HSE Policies</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {policies.map((policy, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-start"
              >
                <div className="bg-pantone-blue w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-800 font-medium">{policy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Safety Equipment"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-6">Safety Training & Certification</h2>
              <p className="text-lg text-gray-700 mb-6">
                Every member of our team receives comprehensive HSE training before beginning work. We maintain a culture of continuous learning and improvement.
              </p>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <AlertTriangle className="w-6 h-6 text-pantone-red mr-3" />
                    Driver Safety Program
                  </h3>
                  <ul className="space-y-2 ml-9 text-gray-600">
                    <li>Defensive driving techniques</li>
                    <li>Fatigue management</li>
                    <li>Load securing procedures</li>
                    <li>Emergency response training</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <Shield className="w-6 h-6 text-pantone-blue mr-3" />
                    Workplace Safety
                  </h3>
                  <ul className="space-y-2 ml-9 text-gray-600">
                    <li>Hazard identification and risk assessment</li>
                    <li>Safe work procedures</li>
                    <li>Use of personal protective equipment</li>
                    <li>Fire safety and evacuation</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <Leaf className="w-6 h-6 text-green-600 mr-3" />
                    Environmental Awareness
                  </h3>
                  <ul className="space-y-2 ml-9 text-gray-600">
                    <li>Spill prevention and response</li>
                    <li>Waste segregation and disposal</li>
                    <li>Fuel efficiency practices</li>
                    <li>Emission reduction techniques</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-pantone-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">HSE Performance 2024</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">0</div>
              <div className="text-xl">Fatalities</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">99.8%</div>
              <div className="text-xl">Safety Compliance</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">25%</div>
              <div className="text-xl">Emission Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">10,000+</div>
              <div className="text-xl">Training Hours</div>
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
              <h2 className="text-3xl font-bold mb-2">HSE Manual</h2>
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

    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 font-[Outfit]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-semibold text-gray-900 mb-6">
        Emergency Response
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Swift, reliable, and ready — our emergency systems are built to ensure safety in every situation, 
        every hour of the day.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Card 1 */}
      <div className="group bg-white rounded-2xl p-10 shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">
        <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
          <AlertTriangle className="w-10 h-10 text-pantone-red" />
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-pantone-red transition-colors">
          24/7 Hotline
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Emergency response team available around the clock
        </p>
        <p className="text-2xl font-bold text-pantone-red tracking-wide">
          1-800-EMERGENCY
        </p>
      </div>

      {/* Card 2 */}
      <div className="group bg-white rounded-2xl p-10 shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">
        <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
          <Shield className="w-10 h-10 text-pantone-blue" />
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-pantone-blue transition-colors">
          Rapid Response
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Trained emergency response teams strategically positioned nationwide
        </p>
      </div>

      {/* Card 3 */}
      <div className="group bg-white rounded-2xl p-10 shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">
        <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
          <Heart className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-green-600 transition-colors">
          Medical Support
        </h3>
        <p className="text-gray-600 leading-relaxed">
          First aid trained personnel and medical partnerships for immediate care
        </p>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default HSE;
