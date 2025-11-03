import { Briefcase, Heart, TrendingUp, Users, Upload, MapPin, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getCareerListings, submitCareerApplication } from '../api/pageContent';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Application submitted successfully!');
    setFormData({ name: '', email: '', phone: '', position: '', message: '' });
  };

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Professional development and advancement opportunities'
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative environment with supportive colleagues'
    },
    {
      icon: Briefcase,
      title: 'Work-Life Balance',
      description: 'Flexible schedules and generous time-off policies'
    }
  ];

  // const openings = [
  //   {
  //     title: 'Heavy Truck Driver',
  //     location: 'Multiple Locations',
  //     type: 'Full-Time',
  //     description: 'Experienced truck driver needed for long-haul transportation. CDL Class A required with minimum 3 years experience.',
  //     requirements: ['Valid CDL Class A License', '3+ years driving experience', 'Clean driving record', 'Ability to work flexible hours']
  //   },
  //   {
  //     title: 'Logistics Coordinator',
  //     location: 'Head Office',
  //     type: 'Full-Time',
  //     description: 'Coordinate shipments, manage schedules, and ensure efficient logistics operations. Strong organizational skills required.',
  //     requirements: ['Bachelor\'s degree in Logistics or related field', '2+ years experience', 'Excellent communication skills', 'Proficient in logistics software']
  //   },
  //   {
  //     title: 'Fleet Maintenance Technician',
  //     location: 'Service Center',
  //     type: 'Full-Time',
  //     description: 'Perform maintenance and repairs on our fleet of vehicles. ASE certification preferred.',
  //     requirements: ['ASE certification preferred', 'Experience with heavy vehicles', 'Mechanical aptitude', 'Problem-solving skills']
  //   },
  //   {
  //     title: 'Safety & Compliance Officer',
  //     location: 'Head Office',
  //     type: 'Full-Time',
  //     description: 'Ensure compliance with safety regulations and implement HSE policies across all operations.',
  //     requirements: ['Safety certification (NEBOSH/IOSH)', 'Experience in transportation industry', 'Knowledge of DOT regulations', 'Strong attention to detail']
  //   },
  //   {
  //     title: 'Warehouse Supervisor',
  //     location: 'Distribution Center',
  //     type: 'Full-Time',
  //     description: 'Oversee warehouse operations, manage inventory, and lead a team of warehouse staff.',
  //     requirements: ['3+ years warehouse management experience', 'Leadership skills', 'Inventory management knowledge', 'Forklift certification']
  //   },
  //   {
  //     title: 'Customer Service Representative',
  //     location: 'Head Office',
  //     type: 'Full-Time',
  //     description: 'Provide excellent customer service, handle inquiries, and resolve issues promptly.',
  //     requirements: ['2+ years customer service experience', 'Excellent communication skills', 'Problem-solving ability', 'Computer proficiency']
  //   }
  // ];

  interface Career {
    _id: string;
    title: string;
    location: string;
    type: string;
    description: string;
    requirements: string[];
  }
  
  const [openings, setOpenings] = useState<Career[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const res = await getCareerListings();
        console.log("Career API Response:", res);

        // ✅ Correct path based on your backend response
        const data = res?.data?.listings || [];
        setOpenings(data);
      } catch (error) {
        console.error("Error fetching careers:", error);
        setOpenings([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCareers();
  }, []);

  const [applicationformData, setApplicationFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    cvFile: null,
  });

  const [applicationLoading, setApplicationLoading] = useState(false);

  const handleFileChange = (e:React.FormEvent) => {
    setFormData({ ...formData, cvFile: e.target.files[0] });
  };

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.cvFile) return alert("Please upload your resume (PDF)");

    try {
      setLoading(true);

      const data = new FormData();
      data.append("jobTitle", formData.position);
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("message", formData.message);
      data.append("cvFile", formData.cvFile);

      const res = await submitCareerApplication(data);

      if (res.data.success) {
        alert("Application submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          position: "",
          message: "",
          cvFile: null,
        });
      } else {
        alert("Failed to submit application. Try again!");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="animate-fade-in">
     <section className="relative h-[820px] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center">
  {/* Background Image with overlay */}
  <div className="absolute inset-0 opacity-30">
    <img
      src="https://images.pexels.com/photos/3184312/pexels-photo-3184312.jpeg?auto=compress&cs=tinysrgb&w=1920"
      alt="Join Our Team"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white font-[Outfit] text-center">
    <h1 className="text-5xl md:text-7xl font-semibold animate-slide-up">
      Join Our Team
    </h1>
    <p className="text-xl md:text-2xl mt-6 text-gray-300 leading-relaxed">
      Be part of a passionate team redefining the future of logistics. <br />
      We value innovation, growth, and the drive to make an impact.
    </p>

    {/* Call to Action */}
    {/* <div className="mt-10">
      <a
        href="#open-positions"
        className="bg-pantone-blue text-white px-10 py-4 rounded-xl text-lg font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 inline-block"
      >
        View Open Positions
      </a>
    </div> */}
  </div>

  {/* Gradient Overlay for Depth */}
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
</section>

<section className="py-24 bg-gradient-to-b from-gray-50 to-white font-[Outfit]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-semibold mb-6 text-gray-900">
        Why Work With Us?
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Join a dynamic team that values <span className="text-pantone-blue font-medium">innovation</span>, 
        <span className="text-pantone-red font-medium"> safety</span>, and 
        <span className="text-pantone-blue font-medium"> professional growth</span>.
      </p>
    </div>

    {/* Benefit Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {benefits.map((benefit, index) => {
        const Icon = benefit.icon;
        return (
          <div
            key={index}
            className="group relative bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
          >
            {/* Icon */}
            <div className="bg-gradient-to-r from-pantone-blue to-pantone-red w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-10 h-10 text-black" />
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              {benefit.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {benefit.description}
            </p>

            {/* Subtle hover glow */}
            {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pantone-blue/10 to-pantone-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
          </div>
        );
      })}
    </div>
  </div>
</section>

<section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
          Current Openings
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : openings.length === 0 ? (
          <p className="text-center text-gray-500">
            No openings available at the moment.
          </p>
        ) : (
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {openings.map((job) => (
              <div
                key={job._id}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-600">
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-pantone-red" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-pantone-blue" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <a
                    href="#apply"
                    className="bg-pantone-blue text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all font-semibold whitespace-nowrap"
                  >
                    Apply Now
                  </a>
                </div>

                <p className="text-gray-700 mb-4">{job.description}</p>

                {job.requirements && job.requirements.length > 0 && (
                  <div>
                    <h4 className="font-bold mb-2">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <div className="w-2 h-2 bg-pantone-red rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>

    <section id="apply" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Apply Now</h2>
          <p className="text-xl text-gray-600">
            Submit your application and join our growing team
          </p>
        </div>

        <form onSubmit={handleApplicationSubmit} className="bg-gray-50 rounded-lg p-8 shadow-lg">
          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pantone-blue"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pantone-blue"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pantone-blue"
                placeholder="+91 9876543210"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Position Applied For *</label>
              <select
                required
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pantone-blue"
              >
                <option value="">Select a position</option>
                {openings.map((job, idx) => (
                  <option key={idx} value={job.title}>
                    {job.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Cover Letter / Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pantone-blue"
              placeholder="Tell us why you'd be a great fit..."
            ></textarea>
          </div>

          {/* File Upload */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Upload Resume (PDF) *</label>
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              required
              className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={applicationLoading}
            className="w-full bg-pantone-blue text-white px-8 py-4 rounded-lg hover:opacity-90 transition-all text-lg font-semibold"
          >
            {applicationLoading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </section>

      <section className="relative py-24 bg-gradient-to-br from-pantone-blue to-pantone-red text-black font-[Outfit] overflow-hidden">
  {/* Subtle overlay pattern */}
  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

  <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-5xl font-semibold mb-6 tracking-tight">
      Questions About Careers?
    </h2>
    <p className="text-xl mb-10 text-black leading-relaxed max-w-2xl mx-auto">
      Our HR team is always ready to guide you with opportunities and career growth at{" "}
      <span className="font-semibold text-black">Janmarine</span>.
    </p>

    <a
      href="mailto:careers@logitrans.com"
      className="bg-white text-pantone-blue px-10 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 text-lg font-semibold shadow-md hover:shadow-xl inline-block transform hover:-translate-y-1"
    >
      Contact HR Team
    </a>
  </div>

  {/* Decorative gradient glow */}
  <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-white/20 blur-3xl rounded-full opacity-40"></div>
</section>

    </div>
  );
};

export default Careers;
