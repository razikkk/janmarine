import { Link } from 'react-router-dom';
import { Truck, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
<footer className="bg-white text-black shadow-[0_-8px_20px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            {/* <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="bg-pantone-red p-2 rounded-lg">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">LogiTrans</span>
            </Link> */}
            
                        <img src="janLogo.jpeg" alt=""className='w-40 h-10 rounded-lg mt-2' />
                        
            <p className="text-black mb-4">
              Your trusted partner in logistics and transportation solutions. Delivering excellence across the nation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-black hover:text-pantone-red transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-black hover:text-pantone-red transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-black hover:text-pantone-red transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-black hover:text-pantone-red transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-black hover:text-pantone-red transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-black hover:text-pantone-red transition-colors">Services</Link></li>
              <li><Link to="/fleet" className="text-black hover:text-pantone-red transition-colors">Fleet</Link></li>
              <li><Link to="/news" className="text-black hover:text-pantone-red transition-colors">News</Link></li>
              <li><Link to="/careers" className="text-black hover:text-pantone-red transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Business</h3>
            <ul className="space-y-2">
              <li><Link to="/quality" className="text-black hover:text-pantone-red transition-colors">Quality</Link></li>
              <li><Link to="/hse" className="text-black hover:text-pantone-red transition-colors">Health & Safety</Link></li>
              <li><Link to="/contact" className="text-black hover:text-pantone-red transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-pantone-red mt-1 flex-shrink-0" />
                <span className="text-black">123 Business District, City, Country</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pantone-red flex-shrink-0" />
                <span className="text-black">+1 234 567 8900</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pantone-red flex-shrink-0" />
                <span className="text-black">info@logitrans.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-400 mt-8 pt-8 text-center text-black">
          <p>&copy; {new Date().getFullYear()} Janmarine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
