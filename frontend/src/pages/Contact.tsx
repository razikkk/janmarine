import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getContactPage } from '../api/pageContent';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const [contactInfo, setContactInfo] = useState({
    email: "",
    phone: "",
    location: "",
    workingHours: "",
  });
  
  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await getContactPage();
        if (res.data?.pageContent) setContactInfo(res.data.pageContent);
      } catch (err) {
        console.error("Failed to fetch contact info", err);
      }
    };
    fetchContact();
  }, []);
  

  return (
    <div className="animate-fade-in">
     <section className="relative h-[850px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center overflow-hidden font-[Outfit] mt-[-125px]">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=1920"
      alt="Contact"
      className="w-full h-full object-cover object-center opacity-30"
    />
  </div>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto text-center text-white px-6">
    <h1 className="text-5xl md:text-7xl font-semibold tracking-tight animate-slide-up">
      Get in Touch
    </h1>
    <p className="text-xl md:text-2xl text-gray-200 mt-6 leading-relaxed max-w-3xl mx-auto">
      We’re here to help with all your logistics needs. <br />
      Let’s build something great together.
    </p>

    <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
      <a
        href="mailto:info@logitrans.com"
        className="bg-pantone-red text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-pantone-red/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        Email Us
      </a>
      <a
        href="/contact-form"
        className="bg-white text-pantone-blue px-10 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        Send a Message
      </a>
    </div>
  </div>

  {/* Soft Glow Effect */}
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-pantone-blue/30 blur-3xl rounded-full opacity-50"></div>
</section>

<section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
  {/* subtle gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-pantone-blue/5 to-transparent pointer-events-none"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-black bg-gradient-to-r from-pantone-blue to-pantone-red">
        Get in Touch
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
        We’d love to hear from you. Whether you’re curious about services, partnerships, or anything else — our team is ready to help.
      </p>
    </div>

    {/* Contact Info Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {/* Phone */}
      <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
        <div className="bg-gradient-to-br from-pantone-red to-pantone-blue w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform">
          <Phone className="w-8 h-8 text-black" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-900">Call Us</h3>
        <p className="text-gray-500 mb-2">{contactInfo.workingHours}</p>
        <a
          href={`tel:${contactInfo.phone}`}
          className="text-pantone-blue font-semibold hover:underline"
        >
          {contactInfo.phone || "Not available"}
        </a>
      </div>

      {/* Email */}
      <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
        <div className="bg-gradient-to-br from-pantone-blue to-pantone-red w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform">
          <Mail className="w-8 h-8 text-black" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-900">Email Us</h3>
        <p className="text-gray-500 mb-2">We’ll respond within 24 hours</p>
        <a
          href={`mailto:${contactInfo.email}`}
          className="text-pantone-blue font-semibold hover:underline"
        >
          {contactInfo.email || "Not available"}
        </a>
      </div>

      {/* Location */}
      <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
        <div className="bg-gradient-to-br from-pantone-red to-pantone-blue w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform">
          <MapPin className="w-8 h-8 text-black" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-900">Visit Us</h3>
        <p className="text-gray-500 mb-1">123 Business District</p>
        <p className="text-gray-500">{contactInfo.location || "Address not available"}</p>
      </div>
    </div>

    {/* Contact Form + Map */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Form */}
      <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pantone-blue focus:outline-none"
              placeholder="John Doe"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pantone-blue focus:outline-none"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pantone-blue focus:outline-none"
                placeholder="+1 234 567 8900"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Subject *</label>
            <input
              type="text"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pantone-blue focus:outline-none"
              placeholder="How can we help you?"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Message *</label>
            <textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pantone-blue focus:outline-none"
              placeholder="Tell us more about your inquiry..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-pantone-blue  text-white px-8 py-4 rounded-lg hover:opacity-90 transition-all text-lg font-semibold flex items-center justify-center shadow-md hover:shadow-lg"
          >
            Send Message
            <Send className="ml-2 w-5 h-5" />
          </button>
        </form>
      </div>

      {/* Map + Info */}
      <div className="space-y-8">
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841663164887!2d-73.98784368459396!3d40.758896379327395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>

        {/* <div className="bg-gradient-to-br from-pantone-blue to-pantone-red text-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Clock className="w-6 h-6 mr-3" /> Business Hours
          </h3>
          <div className="space-y-2 text-sm md:text-base">
            <div className="flex justify-between"><span>Mon - Fri:</span><span className="font-semibold">8:00 AM - 6:00 PM</span></div>
            <div className="flex justify-between"><span>Saturday:</span><span className="font-semibold">9:00 AM - 2:00 PM</span></div>
            <div className="flex justify-between"><span>Sunday:</span><span className="font-semibold">Closed</span></div>
          </div>
        </div> */}

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold mb-3 text-gray-900">Quick Inquiry</h3>
          <p className="text-gray-600 mb-4">Need immediate assistance? Reach out via WhatsApp for instant responses.</p>
          <a
            href={`https://wa.me/${contactInfo.whatsapp || "1234567890"}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all font-semibold inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16.64 13.54c-.27-.14-1.63-.8-1.88-.9-.25-.1-.43-.14-.62.14-.18.27-.71.9-.87 1.08-.16.18-.32.2-.6.07-.27-.14-1.15-.42-2.19-1.34-.81-.72-1.36-1.6-1.52-1.87-.16-.27-.02-.42.12-.56.12-.12.27-.32.4-.48.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.06-.14-.62-1.49-.85-2.05-.22-.53-.45-.46-.62-.47h-.53c-.18 0-.48.07-.73.34s-.96.94-.96 2.3c0 1.36.99 2.67 1.13 2.85.14.18 1.94 2.96 4.7 4.15.66.28 1.18.45 1.58.57.66.21 1.26.18 1.73.11.53-.08 1.63-.66 1.86-1.29.23-.63.23-1.16.16-1.29-.06-.13-.25-.2-.52-.34z"/><path d="M12.04 2.003c-5.5 0-9.97 4.47-9.97 9.97 0 1.76.46 3.48 1.33 4.99l-1.41 5.15 5.27-1.38c1.46.79 3.08 1.21 4.78 1.21h.01c5.5 0 9.97-4.47 9.97-9.97 0-2.67-1.04-5.18-2.93-7.07a9.956 9.956 0 00-7.05-2.9z"/></svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Regional Offices</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Northern Region</h3>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-start">
                  <MapPin className="w-5 h-5 text-pantone-red mr-2 mt-1 flex-shrink-0" />
                  <span>456 North Street, Northern City, NC 12345</span>
                </p>
                <p className="flex items-center">
                  <Phone className="w-5 h-5 text-pantone-red mr-2 flex-shrink-0" />
                  <span>+1 234 567 8901</span>
                </p>
                <p className="flex items-center">
                  <Mail className="w-5 h-5 text-pantone-red mr-2 flex-shrink-0" />
                  <span>north@logitrans.com</span>
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Southern Region</h3>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-start">
                  <MapPin className="w-5 h-5 text-pantone-red mr-2 mt-1 flex-shrink-0" />
                  <span>789 South Avenue, Southern City, SC 67890</span>
                </p>
                <p className="flex items-center">
                  <Phone className="w-5 h-5 text-pantone-red mr-2 flex-shrink-0" />
                  <span>+1 234 567 8902</span>
                </p>
                <p className="flex items-center">
                  <Mail className="w-5 h-5 text-pantone-red mr-2 flex-shrink-0" />
                  <span>south@logitrans.com</span>
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Eastern Region</h3>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-start">
                  <MapPin className="w-5 h-5 text-pantone-red mr-2 mt-1 flex-shrink-0" />
                  <span>321 East Road, Eastern City, EC 13579</span>
                </p>
                <p className="flex items-center">
                  <Phone className="w-5 h-5 text-pantone-red mr-2 flex-shrink-0" />
                  <span>+1 234 567 8903</span>
                </p>
                <p className="flex items-center">
                  <Mail className="w-5 h-5 text-pantone-red mr-2 flex-shrink-0" />
                  <span>east@logitrans.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;
