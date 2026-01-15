// import React, { useState, useEffect } from "react";
// import {
//   Menu,
//   X,
//   Search,
//   Phone,
//   Mail,
//   MapPin,
//   Clock,
//   Send,
// } from "lucide-react";

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Prevent body scroll when sidebar is open
//   useEffect(() => {
//     if (isSidebarOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//   }, [isSidebarOpen]);

//   const navLinks = [
//     { name: "Home", path: "/" },
//      { name: "About", path: "/about" },
//     { name: "Services", href: "#services" },
//     { name: "Blog", href: "#blog" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <>
//       <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
//         {/* Top Section - Hides on scroll */}
//         <div
//           className={`bg-[#0a1f44] text-white transition-all duration-300 ${
//             isScrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"
//           }`}
//         >
//           <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//             <div className="text-sm md:text-base">
//               Welcome to Chiropractor of Losangle!
//             </div>
//             <div className="flex items-center gap-4 md:gap-6">
//               <a
//                 href="tel:+18004567890"
//                 className="flex items-center gap-2 hover:text-blue-300 transition-colors"
//               >
//                 <Phone size={16} />
//                 <span className="hidden sm:inline text-sm md:text-base">
//                   Call for help: (+1800)-456-7890
//                 </span>
//               </a>
//               <a
//                 href="#book"
//                 className="flex items-center gap-2 hover:text-blue-300 transition-colors"
//               >
//                 <Mail size={16} />
//                 <span className="hidden sm:inline text-sm md:text-base">
//                   Book An Appointment
//                 </span>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section - Stays fixed */}
//         <div className="bg-white">
//           <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//             {/* Logo */}
//             <div className="flex items-center gap-3">
//               <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
//                 <div className="text-white  text-xl">C</div>
//               </div>
//               <div>
//                 <div className=" text-xl text-gray-900">Chirokind</div>
//                 <div className="text-sm text-gray-500">Chiropractic Clinic</div>
//               </div>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center gap-8">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   className="text-gray-700 hover:text-pink-600  transition-colors relative group"
//                 >
//                   {link.name}
//                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
//                 </a>
//               ))}
//             </div>

//             {/* Right Actions */}
//             <div className="flex items-center gap-4">
//               {/* Mobile Menu Button */}
//               <button
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className="lg:hidden p-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
//               >
//                 {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>

//               {/* Desktop Sidebar Toggle Button */}
//               <button
//                 onClick={() => setIsSidebarOpen(true)}
//                 className="hidden lg:block p-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
//               >
//                 <Menu size={24} />
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           <div
//             className={`lg:hidden overflow-hidden transition-all duration-300 ${
//               isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//             }`}
//           >
//             <div className="px-4 py-4 bg-gray-50 border-t">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   className="block py-3 text-gray-700 hover:text-blue-600 hover:bg-white px-4 rounded transition-colors"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   {link.name}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Overlay */}
//       <div
//         className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-all duration-300 ${
//           isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//         onClick={() => setIsSidebarOpen(false)}
//       />

//       {/* Right Sidebar */}
//       <div
//         className={`fixed top-0 right-0 h-full w-full sm:w-[400px] md:w-[450px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto ${
//           isSidebarOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* Close Button */}
//         <button
//           onClick={() => setIsSidebarOpen(false)}
//           className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
//         >
//           <X size={24} className="text-gray-700" />
//         </button>

//         {/* Sidebar Content */}
//         <div className="p-6 sm:p-8">
//           {/* Logo Section */}
//           <div className="mb-8 pt-8">
//             <div className="flex items-center gap-3 mb-4">
//               <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
//                 <div className="text-white  text-2xl">C</div>
//               </div>
//               <div>
//                 <div className=" text-2xl text-gray-900">Chirokind</div>
//                 <div className="text-sm text-gray-500">Chiropractic Clinic</div>
//               </div>
//             </div>
//             <div className="w-full h-px bg-gray-200 my-6"></div>
//           </div>

//           {/* About Section */}
//           <div className="mb-8">
//             <h2 className="text-2xl  text-[#0a1f44] mb-4">
//               We Provide Physiotherapy & Recovery From Pains.
//             </h2>
//             <p className="text-gray-600 leading-relaxed">
//               Chirokind & Rehabilitation Clinic focuses on maintaining health
//               for people of all ages, helping patients pain and prevent disease.
//             </p>
//           </div>

//           {/* Contact Us Section */}
//           <div className="mb-8">
//             <h3 className="text-xl  text-[#0a1f44] mb-6">Contact Us</h3>

//             <div className="space-y-5">
//               {/* Address */}
//               <div className="flex items-start gap-4">
//                 <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
//                   <MapPin size={20} className="text-pink-500" />
//                 </div>
//                 <div>
//                   <p className="text-gray-700 leading-relaxed">
//                     54B, Tailstoi Town 5238 MT,
//                     <br />
//                     La city, IA 522364
//                   </p>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="flex items-start gap-4">
//                 <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
//                   <Mail size={20} className="text-pink-500" />
//                 </div>
//                 <div>
//                   <a
//                     href="mailto:info@example.com"
//                     className="text-gray-700 hover:text-pink-500 transition-colors"
//                   >
//                     info@example.com
//                   </a>
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="flex items-start gap-4">
//                 <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
//                   <Phone size={20} className="text-pink-500" />
//                 </div>
//                 <div>
//                   <a
//                     href="tel:+18004567890"
//                     className="text-gray-700 hover:text-pink-500 transition-colors"
//                   >
//                     (+1800)-456-7890
//                   </a>
//                 </div>
//               </div>

//               {/* Working Hours */}
//               <div className="flex items-start gap-4">
//                 <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
//                   <Clock size={20} className="text-pink-500" />
//                 </div>
//                 <div>
//                   <p className="text-gray-700">
//                     Working Hrs : 9.30am to 6.30pm
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Newsletter Section */}
//           <div>
//             <h3 className="text-xl text-[#0a1f44] mb-4">
//               Newsletter Subscription
//             </h3>
//             <div className="relative">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full px-4 py-4 pr-14 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-pink-500 transition-colors"
//               />
//               <button className="absolute right-2 top-2 bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-lg transition-colors">
//                 <Send size={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CalendarCheck,
} from "lucide-react";

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
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        {/* Top Section - Hides on scroll */}
        <div
          className={`bg-[#0a1f44] text-white transition-all duration-300 ${
            isScrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="text-sm md:text-base">
              Welcome to Chiropractor of Losangle!
            </div>
            <div className="flex items-center gap-4 md:gap-6">
              <a
                href="tel:+18004567890"
                className="flex items-center gap-2 hover:text-blue-300 transition-colors"
              >
                <Phone size={16} />
                <span className="hidden sm:inline text-sm md:text-base">
                  Call for help: (+1800)-456-7890
                </span>
              </a>
              <Link
                to="/contact"
                className="flex items-center gap-2 hover:text-blue-300 transition-colors"
              >
                <CalendarCheck size={16} />
                <span className="hidden sm:inline text-sm md:text-base">
                  Book An Appointment
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section - Stays fixed */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="text-white text-xl">C</div>
              </div>
              <div>
                <div className="text-xl text-gray-900">Chirokind</div>
                <div className="text-sm text-gray-500">Chiropractic Clinic</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`transition-colors relative group ${
                    location.pathname === link.path
                      ? "text-pink-600 "
                      : "text-gray-700 hover:text-pink-600"
                  }`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Desktop Sidebar Toggle Button */}
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="hidden lg:block p-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 py-4 bg-gray-50 border-t">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block py-3 px-4 rounded transition-colors ${
                    location.pathname === link.path
                      ? "text-pink-600 bg-white "
                      : "text-gray-700 hover:text-blue-600 hover:bg-white"
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
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-all duration-300 ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Right Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] md:w-[450px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={24} className="text-gray-700" />
        </button>

        {/* Sidebar Content */}
        <div className="p-6 sm:p-8">
          {/* Logo Section */}
          <div className="mb-8 pt-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="text-white text-2xl">C</div>
              </div>
              <div>
                <div className="text-2xl text-gray-900">Chirokind</div>
                <div className="text-sm text-gray-500">Chiropractic Clinic</div>
              </div>
            </div>
            <div className="w-full h-px bg-gray-200 my-6"></div>
          </div>

          {/* About Section */}
          <div className="mb-8">
            <h2 className="text-2xl text-[#0a1f44] mb-4">
              We Provide Physiotherapy & Recovery From Pains.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Chirokind & Rehabilitation Clinic focuses on maintaining health
              for people of all ages, helping patients pain and prevent disease.
            </p>
          </div>

          {/* Contact Us Section */}
          <div className="mb-8">
            <h3 className="text-xl text-[#0a1f44] mb-6">Contact Us</h3>

            <div className="space-y-5">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-pink-500" />
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    54B, Tailstoi Town 5238 MT,
                    <br />
                    La city, IA 522364
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-pink-500" />
                </div>
                <div>
                  <a
                    href="mailto:info@example.com"
                    className="text-gray-700 hover:text-pink-500 transition-colors"
                  >
                    info@example.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-pink-500" />
                </div>
                <div>
                  <a
                    href="tel:+18004567890"
                    className="text-gray-700 hover:text-pink-500 transition-colors"
                  >
                    (+1800)-456-7890
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-pink-500" />
                </div>
                <div>
                  <p className="text-gray-700">
                    Working Hrs : 9.30am to 6.30pm
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl text-[#0a1f44] mb-4">
              Newsletter Subscription
            </h3>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-4 pr-14 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-pink-500 transition-colors"
              />
              <button className="absolute right-2 top-2 bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-lg transition-colors">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
