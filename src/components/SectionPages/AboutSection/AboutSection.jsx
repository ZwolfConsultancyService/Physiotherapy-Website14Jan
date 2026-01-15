import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Section Label */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-0.5 bg-blue-500"></div>
              <span className="text-blue-500  text-sm tracking-wider uppercase">
                WHO WE ARE
              </span>
            </div>

            {/* Main Heading */}
            <h2 style={{ fontFamily: "Lexend Peta, sans-serif" }} className="text-3xl md:text-4xl lg:text-5xl  text-[#0a1f44] leading-tight">
              Welcome to Physio Therapy & Chiroparctor Clinic
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-5">
              <p className="text-gray-700 text-lg leading-relaxed ">
                Physiotherapy is more popularly known as medical therapy which helps a patient 
                in the rehabilitation of various types of diseases and disabilities.
              </p>

              <p className="text-gray-600 text-base leading-relaxed">
                Physiotherapists have a better understanding of how the body works Physiotherapist helps 
                the patient to recover from pain, injury, paralysis, ligament injury, neurological. 
                Physiotherapists can cure both chronic pain and acute problems by treating patients. Our 
                physiotherapist are highly qualified. We focuses on maintaining health for people of all ages, 
                helping patients manage.
              </p>
            </div>

            {/* CTA Button */}
            <Link to='/services'>
            
              <button className="bg-pink-500 hover:bg-pink-600 text-white  text-sm tracking-wider uppercase px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mt-4">
              VIEW SERVICES
            </button>
            </Link>
          
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative">
              {/* Decorative Border */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-blue-400 rounded-lg z-0"></div>
              
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
                  alt="Physiotherapy Treatment"
                  className="w-full h-[500px] object-cover"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-pink-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-blue-100 rounded-full blur-2xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}