import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Fleet from './pages/Fleet';
import FleetDetail from './pages/FleetDetail';
import Quality from './pages/Quality';
import HSE from './pages/HSE';
import News from './pages/News';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import AdminLogin from './admin/Login';
import AdminHome from './admin/AdminHome';
import AdminAboutContent from './admin/AdminAbout';
import AdminContactPage from './admin/AdminContact';
import AdminPdfPage from './admin/AdminPdf';
import AdminCareerListings from './admin/AdminCareerListing';
import CareerApplications from './admin/CareerApplication';

function AppContent() {
  const location = useLocation();

  // ✅ Check if the route starts with "/admin"
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* 🧭 Hide Navbar and Footer on admin routes */}
      {!isAdminRoute && <Navbar />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/fleet/:id" element={<FleetDetail />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/hse" element={<HSE />} />
          <Route path="/news" element={<News />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path='/admin/about' element={<AdminAboutContent/>}/>
          <Route path='/admin/contact' element={<AdminContactPage/>}/>
          <Route path='/admin/pdf' element={<AdminPdfPage/>}/>
          <Route path='/admin/career' element={<AdminCareerListings/>}/>
          <Route path='/admin/career-applications' element={<CareerApplications/>}/>




        </Routes>
      </main>

      {/* 🧭 Hide Footer and WhatsAppButton on admin routes */}
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <WhatsAppButton />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

