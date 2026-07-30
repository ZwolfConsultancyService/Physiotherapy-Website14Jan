import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  CalendarCheck,
} from "lucide-react";

import logo from "../../assets/Logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isSidebarOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blogs" },
    { name: "Team", path: "/our-doctors" },
    { name: "Contact", path: "/contacts" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
        {/* Top Bar - Black Background */}
        <div
          className={`bg-black text-white transition-all duration-300 ${
            isScrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-2.5 flex justify-between items-center">
            <div className="text-xs tracking-widest uppercase text-gray-300">
              Welcome to PhysioCentric — Recover+Restore+Rebuild, New Delhi
            </div>
            <div className="flex items-center gap-6">
              <a
                href="tel:+919810513841"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
              >
                <Phone size={14} />
                <span className="hidden sm:inline tracking-wide">
                  098105 13841
                </span>
              </a>
              <Link
                to="/contacts"
                className="flex items-center gap-2 bg-white text-black px-4 py-1.5 text-xs tracking-widest uppercase font-semibold hover:bg-gray-100 transition-colors rounded-sm"
              >
                <CalendarCheck size={14} />
                <span className="hidden sm:inline">Book Appointment</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navbar - White */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="PhysioCentric Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <div className="text-xl font-bold text-black tracking-tight">
                  PhysioCentric
                </div>
                <div className="text-xs text-gray-400 tracking-widest uppercase">
                  Recover+Restore+Rebuild
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm tracking-wider uppercase font-medium transition-colors relative group ${
                    location.pathname === link.path
                      ? "text-black"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all duration-300 ${
                      location.pathname === link.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 bg-black text-white rounded-sm hover:bg-gray-800 transition-colors"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>

              <button
                onClick={() => setIsSidebarOpen(true)}
                className="hidden lg:flex items-center gap-2 p-2.5 bg-black text-white rounded-sm hover:bg-gray-800 transition-colors"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block py-3 px-4 text-sm tracking-widest uppercase font-medium transition-colors border-b border-gray-100 last:border-0 ${
                    location.pathname === link.path
                      ? "text-black bg-white"
                      : "text-gray-500 hover:text-black hover:bg-white"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] transition-all duration-300 ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Right Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] md:w-[450px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto border-l border-gray-100`}
        style={{
          transform: isSidebarOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="absolute top-5 right-5 p-2 hover:bg-gray-100 rounded-sm transition-colors"
        >
          <X size={22} className="text-black" />
        </button>

        {/* Sidebar Content */}
        <div className="p-8">
          {/* Logo Section */}
          <div className="mb-8 pt-6">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="PhysioCentric Logo"
                className="w-14 h-14 object-contain"
              />
              <div>
                <div className="text-2xl font-bold text-black tracking-tight">
                  PhysioCentric
                </div>
                <div className="text-xs text-gray-400 tracking-widest uppercase">
                  Recover+Restore+Rebuild
                </div>
              </div>
            </div>
            <div className="w-full h-px bg-gray-200 mt-6"></div>
          </div>

          {/* About Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-black mb-3 tracking-tight">
              PhysioCentric — Recovery From Pain.
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm">
              PhysioCentric is a trusted Recover+Restore+Rebuild in New Delhi,
              rated 5.0 on Google. We help people of all ages manage pain,
              recover faster, and prevent injury through expert-led care.
            </p>
          </div>

          <div className="w-full h-px bg-gray-100 mb-8"></div>

          {/* Contact Us Section */}
          <div className="mb-8">
            <h3 className="text-xs tracking-widest uppercase font-semibold text-gray-400 mb-5">
              Contact Us
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-black rounded-sm flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-white" />
                </div>

                <div className="text-gray-600 text-sm leading-relaxed pt-1">
                  <p className="font-semibold text-black mb-1">Delhi Clinic</p>
                  <p>
                    A-2, Block A, Gulmohar Park,
                    <br />
                    New Delhi, Delhi 110049
                  </p>

                  <div className="mt-4">
                    <p className="font-semibold text-black mb-1">
                      Gurgaon Clinic
                    </p>
                    <p>
                      Physiocentric
                      <br />
                      11, Market Road, Basement,
                      <br />
                      Behind Arjun Marg Shopping Mall,
                      <br />
                      DLF Phase 1, Gurgaon
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-black rounded-sm flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-white" />
                </div>
                <a
                  href="mailto:reception.physiocentric@gmail.com"
                  className="text-gray-600 hover:text-black transition-colors text-sm pt-2"
                >
                  reception.physiocentric@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-black rounded-sm flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-white" />
                </div>
                <a
                  href="tel:+919810513841"
                  className="text-gray-600 hover:text-black transition-colors text-sm pt-2"
                >
                  098105 13841
                </a>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-black rounded-sm flex items-center justify-center flex-shrink-0">
                  <Clock size={16} className="text-white" />
                </div>
                <p className="text-gray-600 text-sm pt-2">
                  Mon–Sat: 9:00 AM – 7:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-gray-100 mb-8"></div>
        </div>
      </div>
    </>
  );
}
