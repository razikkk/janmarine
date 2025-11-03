import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Truck, Globe } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  return (
<nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* <Link to="/" className="flex items-center space-x-3"> */}
            {/* <div className="bg-pantone-red p-2 rounded-lg"> */}
              {/* <Truck className="w-8 h-8 text-white" /> */}
            {/* <span className="text-2xl font-bold text-pantone-red">LogiTrans</span>  */}
            <img src="janmarine-log-1.jpg" alt=""className='w-20 h-15 rounded-lg mt-2' />
            {/* </div> */}
          {/* </Link> */}

          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-white hover:text-gray-500 transition-colors font-medium ${isActive('/') ? 'text-white' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-white hover:text-gray-500 transition-colors font-medium ${isActive('/about') ? 'text-white' : ''}`}
            >
              About Us
            </Link>
            <div
  className="relative"
  onMouseEnter={() => setIsServicesOpen(true)}
  onMouseLeave={() => setIsServicesOpen(false)}
>
  <button className="flex items-center space-x-1 text-white hover:text-gray-400 transition-colors font-medium">
    <span>Our Business</span>
    <ChevronDown className="w-4 h-4" />
  </button>

  {isServicesOpen && (
    <div
      className="absolute top-full left-0 mt-[1px] w-52 bg-white rounded-lg shadow-xl py-2 z-50 animate-fade-in"
    >
      <Link
        to="/services"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-pantone-red transition-colors"
      >
        Services
      </Link>
      <Link
        to="/fleet"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-pantone-red transition-colors"
      >
        Fleet
      </Link>
      <Link
        to="/quality"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-pantone-red transition-colors"
      >
        Quality
      </Link>
      <Link
        to="/hse"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-pantone-red transition-colors"
      >
        HSE
      </Link>
    </div>
  )}
</div>



            <Link
              to="/news"
              className={`text-white hover:text-gray-500 transition-colors font-medium ${isActive('/news') ? 'text-white' : ''}`}
            >
              News
            </Link>
            <Link
              to="/careers"
              className={`text-white hover:text-gray-500 transition-colors font-medium ${isActive('/careers') ? 'text-white' : ''}`}
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className="bg-pantone-blue text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              Contact Us
            </Link>

            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-white hover:text-gray-500 transition-colors"
            >
              <Globe className="w-5 h-5" />
              <span className="font-medium">{language === 'en' ? 'AR' : 'EN'}</span>
            </button>
          </div>

          <button 
  onClick={() => setIsMenuOpen(true)} 
  className="block lg:hidden"
>
  <Menu className="text-white w-6 h-6" />
</button>


        </div>
        {isMenuOpen && (
  <div className="lg:hidden fixed inset-0 z-50 bg-black/70 backdrop-blur-lg  flex flex-col justify-between">
    {/* Top Bar with Close Button */}
    <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
      <h2 className="text-white text-lg font-semibold">Menu</h2>
      <button
        onClick={() => setIsMenuOpen(false)}
        className="text-white hover:text-pantone-blue transition-colors"
      >
        ✕
      </button>
    </div>

    {/* Menu Links */}
    <div className="flex-1 flex flex-col justify-center items-center space-y-6 text-center px-6">
      <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-white text-xl font-medium hover:text-pantone-blue transition-colors">Home</Link>
      <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-white text-xl font-medium hover:text-pantone-blue transition-colors">About Us</Link>
      <Link to="/services" onClick={() => setIsMenuOpen(false)} className="text-white text-xl font-medium hover:text-pantone-blue transition-colors">Services</Link>
      <Link to="/fleet" onClick={() => setIsMenuOpen(false)} className="text-white text-xl font-medium hover:text-pantone-blue transition-colors">Fleet</Link>
      <Link to="/quality" onClick={() => setIsMenuOpen(false)} className="text-white text-xl font-medium hover:text-pantone-blue transition-colors">Quality</Link>
      <Link to="/hse" onClick={() => setIsMenuOpen(false)} className="text-white text-xl font-medium hover:text-pantone-blue transition-colors">HSE</Link>
      <Link to="/news" onClick={() => setIsMenuOpen(false)} className="text-white text-xl font-medium hover:text-pantone-blue transition-colors">News</Link>
      <Link to="/careers" onClick={() => setIsMenuOpen(false)} className="text-white text-xl font-medium hover:text-pantone-blue transition-colors">Careers</Link>

      <Link
        to="/contact"
        onClick={() => setIsMenuOpen(false)}
        className="bg-gradient-to-r from-pantone-blue to-pantone-red text-white font-semibold px-10 py-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
      >
        Contact Us
      </Link>

      <button
        onClick={() => {
          toggleLanguage();
          setIsMenuOpen(false);
        }}
        className="flex items-center space-x-2 text-white text-lg hover:text-pantone-blue transition-colors"
      >
        <Globe className="w-5 h-5" />
        <span>{language === 'en' ? 'العربية' : 'English'}</span>
      </button>
    </div>

    {/* Footer (optional) */}
    <div className="pb-6 text-center text-gray-400 text-sm">
      © {new Date().getFullYear()} Janmarine. All rights reserved.
    </div>
  </div>
)}

      </div>
    </nav>
  );
};

export default Navbar;
