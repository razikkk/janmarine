import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Truck, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

 
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
<nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
  <div className="flex justify-between items-center h-20">
    
    {/* Left Section - Logo */}
    <div className="flex items-center">
      <Link to="/" className="flex items-center space-x-2">
        <img 
          src="janmarine-logo.jpg" 
          alt="Janmarine Logo" 
          className="w-32 h-auto rounded-lg" 
        />
      </Link>
    </div>

    {/* Center - Navigation Links */}
    <div className="hidden lg:flex items-center space-x-8">
      <Link 
        to="/" 
        className={`text-gray-700 hover:text-pantone-blue transition-colors font-medium ${isActive('/') ? 'text-pantone-blue' : ''}`}
      >
        {t('home')}
      </Link>
      <Link 
        to="/about" 
        className={`text-gray-700 hover:text-pantone-blue transition-colors font-medium ${isActive('/about') ? 'text-pantone-blue' : ''}`}
      >
         {t('about')}
      </Link>
      <Link 
        to="/tracking" 
        className={`text-gray-700 hover:text-pantone-blue transition-colors font-medium ${isActive('/tracking') ? 'text-pantone-blue' : ''}`}
      >
         {t('tracking')}
      </Link>

      {/* Dropdown */}
      <div className="relative group">
  <button className="flex items-center space-x-1 text-gray-700 hover:text-pantone-blue transition-colors font-medium">
    <span>{t('Services')}</span>
    <ChevronDown className="w-4 h-4" />
  </button>

  <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-lg py-2 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
    <Link to="/services" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-pantone-blue transition-colors">{t('services')}</Link>
    {/* <Link to="/fleet" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-pantone-blue transition-colors">{t('fleet')}</Link> */}
    <Link to="/quality" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-pantone-blue transition-colors">{t('quality')}</Link>
    <Link to="/hse" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-pantone-blue transition-colors">{t('hse')}</Link>
  </div>
</div>

      <Link 
        to="/news" 
        className={`text-gray-700 hover:text-pantone-blue transition-colors font-medium ${isActive('/news') ? 'text-pantone-blue' : ''}`}
      >
         {t('news')}
      </Link>
      <Link 
        to="/careers" 
        className={`text-gray-700 hover:text-pantone-blue transition-colors font-medium ${isActive('/careers') ? 'text-pantone-blue' : ''}`}
      >
        {t('careers')}
      </Link>

      {/* Contact + Language Button */}
      <div className="flex items-center space-x-4">
        <Link
          to="/contact"
          className="bg-gradient-to-r from-pantone-blue to-pantone-red text-pantone-blue px-6 py-2 rounded-lg font-semibold shadow hover:opacity-90 transition-opacity"
        >
          {t('contact')} 
        </Link>

        <button 
          onClick={toggleLanguage}
          className="flex items-center space-x-1 text-gray-700 hover:text-pantone-blue transition-colors"
        >
          <Globe className="w-5 h-5" />
          <span className="font-medium">{i18n.language === "en" ? "AR" : "EN"}</span>
        </button>
      </div>
    </div>

    {/* Mobile Menu Icon */}
    <button 
      onClick={() => setIsMenuOpen(true)} 
      className="block lg:hidden text-gray-700"
    >
      <Menu className="w-6 h-6" />
    </button>
  </div>
</div>


  {/* Mobile Menu */}
  {isMenuOpen && (
    <div className="lg:hidden fixed inset-0 z-50 bg-black/70 backdrop-blur-lg flex flex-col justify-between">
      <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
        <h2 className="text-white text-lg font-semibold">Menu</h2>
        <button
          onClick={() => setIsMenuOpen(false)}
          className="text-white hover:text-pantone-blue transition-colors"
        >
          ✕
        </button>
      </div>

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

      <div className="pb-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Janmarine. All rights reserved.
      </div>
    </div>
  )}
</nav>

  );
};

export default Navbar;
