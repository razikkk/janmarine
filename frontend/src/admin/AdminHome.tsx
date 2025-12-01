import React, { useState } from "react";
import { Menu, X, Briefcase, FileText, Phone, Info, Shield, CheckCircle, Map, Paperclip } from "lucide-react";
import { Link } from "react-router-dom";

const AdminHome: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { name: "Career", icon: <Briefcase size={20} />, path: "/admin/career" },
    { name: "Career Applications", icon: <FileText size={20} />, path: "/admin/career-applications" },
  ];

  const pageItems = [
    { name: "About", icon: <Info size={20} />, path: "/admin/about" },
    { name: "Contact", icon: <Phone size={20} />, path: "/admin/contact" },
    // { name: "HSE", icon: <Shield size={20} />, path: "/admin/hse" },
    { name: "Quality & HSE", icon: <CheckCircle size={20} />, path: "/admin/pdf" },
    { name: "Tracking", icon: <Map size={20} />, path: "/admin/tracking" },
    { name: "News", icon: <Paperclip size={20} />, path: "/admin/news" },

  ];

  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "w-64" : "w-20"
        } bg-white shadow-md transition-all duration-300 flex flex-col`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className={`text-xl font-bold transition-all ${isOpen ? "block" : "hidden"}`}>
            Admin Panel
          </h1>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-3">
          <p className="text-gray-500 uppercase text-xs mb-2">Career</p>
          {menuItems.map((item) => (
            <Link
            key={item.name}
            to={item.path}
            className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100"
          >
            {item.icon}
            {isOpen && <span>{item.name}</span>}
          </Link>
          ))}

          <p className="text-gray-500 uppercase text-xs mt-5 mb-2">Pages</p>
          {pageItems.map((item) => (
             <Link
             key={item.name}
             to={item.path}
             className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100"
           >
             {item.icon}
             {isOpen && <span>{item.name}</span>}
           </Link>
          ))}
        </nav>

        <div className="p-4 border-t text-sm text-gray-500">
          {isOpen && "© 2025 Admin Dashboard"}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Admin Dashboard 🎉</h1>
        <p className="text-gray-600">
          Manage careers, applications, and website pages all in one place.
        </p>
      </main>
    </div>
  );
};

export default AdminHome;
