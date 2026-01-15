import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  User,
  MessageSquare,
  Send,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out-cubic",
      offset: 100,
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[-\s]/g, ""))) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = "Preferred date is required";
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = "Preferred time is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      alert("Appointment request submitted! We will confirm within 24 hours.");
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        preferredDate: "",
        preferredTime: "",
        message: "",
      });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-12">
      {/* Hero Banner */}
      <div
        className="relative h-[300px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=800&fit=crop')",
        }}
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center max-w-7xl">
          <h1 
            className="text-4xl md:text-5xl mt-10 text-white mb-4"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            Contact Us
          </h1>

          <nav 
            className="flex items-center gap-2 text-white/90 text-sm"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <button className="hover:text-white transition-colors">Home</button>
            <span>/</span>
            <span className="text-white">Contact Us</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Side - Contact Info */}
            <aside className="lg:col-span-4">
              <div className="space-y-6">
                {/* Contact Information Card */}
                <div 
                  className="bg-white rounded-xl shadow-lg p-8"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <h3 className="text-2xl text-[#0a1f44] mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    {/* Phone */}
                    <div 
                      className="flex items-start gap-4"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="200"
                    >
                      <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-pink-500" />
                      </div>
                      <div>
                        <h4 className="text-gray-900 mb-1">Phone</h4>
                        <p className="text-gray-600">1800-456-7890</p>
                        <p className="text-gray-600">+91 98765 43210</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div 
                      className="flex items-start gap-4"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="300"
                    >
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="text-gray-900 mb-1">Email</h4>
                        <p className="text-gray-600">info@physio.com</p>
                        <p className="text-gray-600">support@physio.com</p>
                      </div>
                    </div>

                    {/* Address */}
                    <div 
                      className="flex items-start gap-4"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="400"
                    >
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-gray-900 mb-1">Address</h4>
                        <p className="text-gray-600">
                          123 Medical Center,
                          <br />
                          Healthcare Plaza,
                          <br />
                          New Delhi, 110001
                        </p>
                      </div>
                    </div>

                    {/* Working Hours */}
                    <div 
                      className="flex items-start gap-4"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="500"
                    >
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-purple-500" />
                      </div>
                      <div>
                        <h4 className="text-gray-900 mb-1">Working Hours</h4>
                        <p className="text-gray-600">
                          Mon - Fri: 9:00 AM - 6:00 PM
                        </p>
                        <p className="text-gray-600">Sat: 9:00 AM - 2:00 PM</p>
                        <p className="text-gray-600">Sun: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div 
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <div className="h-64 bg-gray-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224357.49842267563!2d77.06889754725782!3d28.52725254683551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      title="Location Map"
                    ></iframe>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right Side - Appointment Form */}
            <main className="lg:col-span-8">
              <div 
                className="bg-white rounded-xl shadow-lg p-8 md:p-12"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="mb-8">
                  <h2 
                    className="text-3xl md:text-4xl text-[#0a1f44] mb-4"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    Book an Appointment
                  </h2>
                  <p 
                    className="text-gray-600 text-lg"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                  >
                    Schedule your visit and we'll confirm within 24 hours
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Full Name */}
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                  >
                    <label className="block text-gray-700 mb-2">
                      Full Name <span className="text-pink-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className={`w-full px-4 py-3 pl-12 border-2 rounded-lg focus:outline-none transition-colors ${
                          errors.fullName
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-200 focus:border-pink-500"
                        }`}
                      />
                      <User className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    </div>
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email & Phone Row */}
                  <div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="500"
                  >
                    {/* Email */}
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Email Address <span className="text-pink-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={`w-full px-4 py-3 pl-12 border-2 rounded-lg focus:outline-none transition-colors ${
                            errors.email
                              ? "border-red-500 focus:border-red-500"
                              : "border-gray-200 focus:border-pink-500"
                          }`}
                        />
                        <Mail className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Phone Number <span className="text-pink-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="1234567890"
                          className={`w-full px-4 py-3 pl-12 border-2 rounded-lg focus:outline-none transition-colors ${
                            errors.phone
                              ? "border-red-500 focus:border-red-500"
                              : "border-gray-200 focus:border-pink-500"
                          }`}
                        />
                        <Phone className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      </div>
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Date & Time Row */}
                  <div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="600"
                  >
                    {/* Preferred Date */}
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Preferred Date <span className="text-pink-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          min={new Date().toISOString().split("T")[0]}
                          className={`w-full px-4 py-3 pl-12 border-2 rounded-lg focus:outline-none transition-colors ${
                            errors.preferredDate
                              ? "border-red-500 focus:border-red-500"
                              : "border-gray-200 focus:border-pink-500"
                          }`}
                        />
                        <Calendar className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      </div>
                      {errors.preferredDate && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.preferredDate}
                        </p>
                      )}
                    </div>

                    {/* Preferred Time */}
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Preferred Time <span className="text-pink-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 pl-12 border-2 rounded-lg focus:outline-none transition-colors appearance-none bg-white ${
                            errors.preferredTime
                              ? "border-red-500 focus:border-red-500"
                              : "border-gray-200 focus:border-pink-500"
                          }`}
                        >
                          <option value="">Select a time slot</option>
                          {timeSlots.map((slot, index) => (
                            <option key={index} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                        <Clock className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      </div>
                      {errors.preferredTime && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.preferredTime}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="700"
                  >
                    <label className="block text-gray-700 mb-2">
                      Message (Optional)
                    </label>
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your condition or any specific requirements..."
                        rows="5"
                        className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none transition-colors resize-none"
                      ></textarea>
                      <MessageSquare className="w-5 h-5 text-gray-400 absolute left-4 top-4" />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-4 px-8 rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="800"
                  >
                    <Send className="w-5 h-5" />
                    Book Appointment
                  </button>

                  <p 
                    className="text-center text-gray-500 text-sm"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="900"
                  >
                    By submitting this form, you agree to our terms and
                    conditions
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style>{`
        /* Custom date input styling */
        input[type="date"]::-webkit-calendar-picker-indicator {
          cursor: pointer;
          opacity: 0.6;
        }

        input[type="date"]::-webkit-calendar-picker-indicator:hover {
          opacity: 1;
        }

        /* Custom select arrow */
        select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23999' d='M10.293 3.293L6 7.586 1.707 3.293A1 1 0 00.293 4.707l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          padding-right: 2.5rem;
        }

        /* Scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #ec4899;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #db2777;
        }

        /* AOS Smoothness */
        [data-aos] {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
}