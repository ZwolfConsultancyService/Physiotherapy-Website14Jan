import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const symptoms = [
    { name: 'Laser Therapy', path: '/service/laser-therapy' },
    { name: 'Massage Therapy', path: '/service/massage-therapy' },
    { name: 'Physio Therapy', path: '/service/physio-therapy' },
    { name: 'Physiotherapy', path: '/service/physiotherapy' },
    { name: 'Sport Injury', path: '/service/sport-injury' }
  ];

  return (
    <footer className="bg-[#0a1f44] text-white relative">
      {/* Go to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 bg-gray-700 hover:bg-pink-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-10"
        aria-label="Go to top"
      >
        <ChevronUp size={24} />
      </button>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="text-white text-xl">C</div>
              </div>
              <div>
                <div className="text-xl">Chirokind</div>
                <div className="text-sm text-gray-400">Chiropractic Clinic</div>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              We address the cause of your pain, not just the symptom.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-pink-500 -mb-3"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-pink-500 transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Symptom */}
          <div>
            <h3 className="text-xl mb-6 relative">
              Symptom
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-pink-500 -mb-3"></span>
            </h3>
            <ul className="space-y-3">
              {symptoms.map((symptom) => (
                <li key={symptom.name}>
                  <Link
                    to={symptom.path}
                    className="text-gray-300 hover:text-pink-500 transition-colors duration-300 inline-block"
                  >
                    {symptom.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-xl mb-6 relative">
              Get In Touch
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-pink-500 -mb-3"></span>
            </h3>
            <div className="space-y-4">
              <a
                href="tel:123-456-74700"
                className="flex items-start gap-3 text-gray-300 hover:text-pink-500 transition-colors duration-300 group"
              >
                <Phone size={20} className="flex-shrink-0 mt-1" />
                <span className="text-lg">(123)-456-74700</span>
              </a>
              <a
                href="mailto:info@example.com"
                className="flex items-start gap-3 text-gray-300 hover:text-pink-500 transition-colors duration-300 group"
              >
                <Mail size={20} className="flex-shrink-0 mt-1" />
                <span>info@example.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>121 Lato Street, Melbourne, POC 3000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              Created by <span className="text-white">ZwolfConsultancy</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}