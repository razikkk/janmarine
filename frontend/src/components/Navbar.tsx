import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Truck, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitch from './GoogleTranslate';
import GoogleTranslate from './GoogleTranslate';

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
<nav className=" w-full z-50 ">
  <div className="max-w-7xl mx-auto px-0 sm:px-8 lg:px-10">

    {/* Flex container with 3 columns */}
    <div className="grid grid-cols-3 items-center h-22 bg-white lg:bg-transparent">

      {/* LEFT MENU */}
      <div className="hidden lg:flex items-center space-x-8">
        <Link 
          to="/" 
          className={`text-white  transition-colors font-medium `}
        >
          {t('home')}
        </Link>

        <Link 
          to="/about" 
          className={`text-white  transition-colors font-medium`}
        >
          {t('about')}
        </Link>

        {/* <Link 
          to="/tracking" 
          className={`text-white  transition-colors font-medium `}
        >
          {t('tracking')}
        </Link> */}

        {/* Dropdown */}
        <div className="relative group">
          <button className="flex items-center space-x-1 text-white  transition-colors font-medium">
            <span>{t('Services')}</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-lg py-2 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <Link to="/services" className="block px-4 py-2 text-black hover:bg-gray-50  transition-colors">{t('services')}</Link>
            <Link to="/quality" className="block px-4 py-2 text-black hover:bg-gray-50  transition-colors">{t('quality')}</Link>
            <Link to="/hse" className="block px-4 py-2 text-black hover:bg-gray-50  transition-colors">{t('hse')}</Link>
          </div>
        </div>
      </div>

      {/* CENTER LOGO */}
      <div className="flex justify-center -mt-2 lg:-mt-6">
  <Link
    to="/"
    className="flex items-center bg-white px-4 py-4 rounded-full shadow-lg"
  >
   <img 
  src="janmarine-logo-bg.png" 
  alt="Janmarine Logo" 
  className="w-14 h-auto rounded-lg md:w-24"
/>
  </Link>
</div>


      {/* RIGHT MENU */}
      {/* RIGHT MENU */}
<div className="hidden lg:flex items-center justify-end flex-1 space-x-8">
  {/* Main links */}
  <div className="flex items-center space-x-8">
    <Link to="/news" className="text-white font-medium transition-colors">{t('news')}</Link>
    <Link to="/careers" className="text-white font-medium transition-colors">{t('careers')}</Link>
    <Link
  to="/contact"
  className="bg-white text-pantone-blue px-6 py-2 rounded-lg font-semibold shadow hover:opacity-90 transition-opacity whitespace-nowrap"
>
  Contact Us
</Link>
  </div>

  {/* Google Translate - fixed width to prevent shifting */}
  <div className="ml-4 w-[120px] flex-shrink-0">
    <GoogleTranslate />
  </div>
</div>


      {/* MOBILE MENU BUTTON */}
      <button 
  onClick={() => setIsMenuOpen(true)}
  className="block lg:hidden text-black z-50 absolute top-5 right-5"
>
  <Menu className="w-7 h-7" />
</button>

    </div>
  </div>


  {/* MOBILE MENU (unchanged except language removed) */}
  {isMenuOpen && (
  <div className="lg:hidden fixed inset-0 z-50 bg-white backdrop-blur-lg flex flex-col justify-between">
    <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
      <h2 className="text-black text-lg font-semibold">Menu</h2>
      <button
        onClick={() => setIsMenuOpen(false)}
        className="text-black transition-colors"
      >
        ✕
      </button>
    </div>

    <div className="flex-1 flex flex-col justify-center items-center space-y-6 text-center px-6">
      <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-black text-xl font-medium transition-colors">Home</Link>
      <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-black text-xl font-medium transition-colors">About Us</Link>
      <Link to="/services" onClick={() => setIsMenuOpen(false)} className="text-black text-xl font-medium transition-colors">Services</Link>
      <Link to="/quality" onClick={() => setIsMenuOpen(false)} className="text-black text-xl font-medium transition-colors">Quality</Link>
      <Link to="/hse" onClick={() => setIsMenuOpen(false)} className="text-black text-xl font-medium transition-colors">HSE</Link>
      <Link to="/news" onClick={() => setIsMenuOpen(false)} className="text-black text-xl font-medium transition-colors">News</Link>
      <Link to="/careers" onClick={() => setIsMenuOpen(false)} className="text-black text-xl font-medium transition-colors">Careers</Link>

      <Link
        to="/contact"
        onClick={() => setIsMenuOpen(false)}
        className="bg-gradient-to-r from-pantone-blue to-pantone-red text-pantone-blue font-semibold px-10 py-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
      >
        Contact Us
      </Link>
    </div>

    <div className="pb-6 text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} Janmarine. All rights reserved.
    </div>
  </div>
)}

</nav>


  );
};

export default Navbar;
