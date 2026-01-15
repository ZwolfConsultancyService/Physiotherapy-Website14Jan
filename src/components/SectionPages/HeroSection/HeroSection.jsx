import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      subtitle: "PHYSIOTHERAPY & CHIROPARCTOR CLINIC",
      title: "Best Chiropractic Clinic For Relax",
      description:
        "Chiropractic care is the practice of to of physical ailments, including muscle strain back pain, and more.",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&h=800&fit=crop",
    },
    {
      subtitle: "PROFESSIONAL HEALTHCARE SERVICES",
      title: "Expert Pain Management Solutions",
      description:
        "Our experienced team provides personalized treatment plans to help you recover faster and live pain-free.",
      image:
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=800&fit=crop",
    },
    {
      subtitle: "SPECIALIZED THERAPY CENTER",
      title: "Advanced Rehabilitation Techniques",
      description:
        "State-of-the-art facilities and proven methods to restore your mobility and improve quality of life.",
      image:
        "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=800&fit=crop",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Subtitle with Line */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-0.5 bg-blue-500"></div>
              <span className="text-blue-500  text-sm md:text-base tracking-wide">
                {slides[currentSlide].subtitle}
              </span>
            </div>

            {/* Main Title */}
            <h1
              style={{ fontFamily: "Lexend Peta, sans-serif" }}
              className="text-4xl md:text-5xl lg:text-6xl  text-[#0a1f44] leading-tight"
            >
              {slides[currentSlide].title}
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
              {slides[currentSlide].description}
            </p>

            {/* CTA Button */}
            <Link to="/contact">
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                GET APPOINTMENT
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={slides[currentSlide].image}
                alt="Chiropractic Care"
                className="w-full h-[500px] md:h-[600px] object-cover mt-3 transition-opacity duration-500"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Decorative Circle */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      <div className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-10">
        <button
          onClick={prevSlide}
          className="bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? "w-12 h-3 bg-pink-500"
                : "w-3 h-3 bg-gray-400 hover:bg-gray-500"
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 border-2 border-blue-500 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border-2 border-pink-500 rounded-full"></div>
      </div> */}
    </div>
  );
}
