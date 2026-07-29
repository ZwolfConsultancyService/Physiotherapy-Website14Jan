import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ChevronUp } from "lucide-react";
import logo from "../../assets/Logo.png"; // Make sure this is the PhysioCentric logo

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const quickLinks = [
    { name: "Home",       path: "/" },
    { name: "About Us",   path: "/about" },
    { name: "Services",   path: "/services" },
    { name: "Blog",       path: "/blogs" },
    { name: "Contact",    path: "/contacts" },
  ];

  const services = [
    { name: "Laser Therapy",    path: "/service/laser-therapy" },
    { name: "Cupping Therapy",  path: "/service/cupping-therapy" },
    { name: "Dry Needling",   path: "service/dry-needling" },
    { name: "Physiotherapist",    path: "/service/physiotherapist" },
    { name: "Physiotherapy Centre",     path: "/service/physiotherapy-centre" },
  ];

  return (
    <footer className="bg-black text-white relative">
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 bg-white hover:bg-gray-100 text-black p-3 shadow-lg transition-all duration-300 z-10"
        aria-label="Go to top"
      >
        <ChevronUp size={24} />
      </button>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="PhysioCentric Logo"
                className="w-12 h-12 object-contain brightness-0 invert"
              />
              <div>
                <div className="text-xl font-bold tracking-tight">PhysioCentric</div>
                <div className="text-xs text-gray-400 tracking-widest uppercase">
                  Recover · Restore · Rebuild
                </div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Led by <strong className="text-white">Dr. Divya Sharma</strong>, we address the root cause of your pain, not just the symptoms.
            </p>
            <div className="w-12 h-0.5 bg-white opacity-20"></div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-6 relative">
              Quick Links
              <span className="absolute -bottom-3 left-0 w-8 h-0.5 bg-white"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wide inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-white transition-all duration-300 group-hover:w-4"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-6 relative">
              Our Services
              <span className="absolute -bottom-3 left-0 w-8 h-0.5 bg-white"></span>
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wide inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-white transition-all duration-300 group-hover:w-4"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-6 relative">
              Get In Touch
              <span className="absolute -bottom-3 left-0 w-8 h-0.5 bg-white"></span>
            </h3>
            <div className="space-y-4">

              {/* Phone */}
              <a
                href="tel:09810513841"
                className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                <div className="w-8 h-8 border border-gray-700 flex items-center justify-center flex-shrink-0 group-hover:border-white transition-colors">
                  <Phone size={14} />
                </div>
                <span className="text-sm pt-1">098105 13841</span>
              </a>

              {/* Email */}
              <a
                href="mailto:reception.physiocentric@gmail.com"
                className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                <div className="w-8 h-8 border border-gray-700 flex items-center justify-center flex-shrink-0 group-hover:border-white transition-colors">
                  <Mail size={14} />
                </div>
                <span className="text-sm pt-1">reception.physiocentric@gmail.com</span>
              </a>

              {/* Address */}
            <div className="flex items-start gap-3 text-gray-400">
  <div className="w-8 h-8 border border-gray-700 flex items-center justify-center flex-shrink-0">
    <MapPin size={14} />
  </div>

  <div className="text-sm pt-1 leading-relaxed">
    <p className="font-medium text-white mb-1">Delhi Clinic</p>
    <p>
      A-2, Block A, Gulmohar Park,<br />
      New Delhi, Delhi 110049
    </p>

    <div className="mt-4">
      <p className="font-medium text-white mb-1">Gurgaon Clinic</p>
      <p>
        Physiocentric<br />
        11, Market Road, Basement,<br />
        Behind Arjun Marg Shopping Mall,<br />
        DLF Phase 1, Gurgaon
      </p>
    </div>
  </div>
</div>

              {/* Hours */}
              <div className="flex items-start gap-3 text-gray-400">
                <div className="w-8 h-8 border border-gray-700 flex items-center justify-center flex-shrink-0">
                  <Clock size={14} />
                </div>
                <div className="text-sm pt-1 leading-relaxed">
                  <p>Mon–Sat: 09am – 7pm</p>
                  <p className="text-gray-600">Sun: Closed</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 tracking-widest uppercase">
            <p>
              Created by{" "}
              <a
                href="https://zwolfconsultancy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold hover:underline"
              >
                ZwolfConsultancy
              </a>
            </p>
            <p className="text-gray-600">
              © {new Date().getFullYear()} PhysioCentric. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}