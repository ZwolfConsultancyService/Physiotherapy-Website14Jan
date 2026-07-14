import React from "react";
import { ArrowRight, Layers } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { carouselServicesData } from "../../../data/servicesData/servicesData.js";

export default function ServicesSection() {
  const navigate = useNavigate();
  const services = carouselServicesData.slice(0, 7); // top 7 services

  return (
    <section className="pc-services bg-white py-16 md:py-24">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <style>{`
        .pc-services { font-family: 'IBM Plex Sans', sans-serif; }
        .pc-services .pc-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .pc-services .pc-mono { font-family: 'IBM Plex Mono', monospace; letter-spacing: 0.02em; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 sm:w-16 h-px bg-black" />
            <span className="pc-mono text-black text-[11px] sm:text-xs tracking-[0.25em] uppercase font-semibold">
              What We Are Offering
            </span>
            <div className="w-12 sm:w-16 h-px bg-black" />
          </div>
          <h2 className="pc-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mb-4 md:mb-6 px-4 font-medium leading-tight">
            Providing Physical Therapy Services
          </h2>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed px-4">
            Comprehensive physical therapy designed to reduce pain, restore
            mobility and improve overall physical function — personalised to
            your recovery.
          </p>
        </div>

        {/* Zig‑Zag Cards */}
        <div className="space-y-12 md:space-y-16 lg:space-y-20">
          {services.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.slug}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-12 items-center group cursor-pointer`}
                onClick={() => navigate(`/service/${item.slug}`)}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 relative overflow-hidden rounded-2xl shadow-lg">
                  <div className="aspect-[4/3] sm:aspect-[3/2]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <span className="pc-mono text-black/40 text-xs tracking-[0.2em] uppercase font-medium mb-2">
                    {index + 1}. {item.category || "Service"}
                  </span>
                  <h3 className="pc-display text-2xl sm:text-3xl font-semibold text-black mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-5">
                    {item.description || "Expert care tailored to your recovery journey."}
                  </p>
                  <div className="flex items-center gap-2 text-black font-medium text-sm group-hover:gap-4 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Services – CTA Card */}
        <div className="mt-16 md:mt-20 text-center">
          <div
            onClick={() => navigate("/services")}
            className="inline-flex items-center gap-4 px-8 py-5 border-2 border-dashed border-gray-300 hover:border-black hover:bg-black/5 transition-all duration-300 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-full border-2 border-gray-300 group-hover:border-black group-hover:bg-black transition-all duration-500 flex items-center justify-center">
              <Layers size={22} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="text-left">
              <h4 className="text-lg font-bold text-black">View All Services</h4>
              <p className="text-xs text-gray-400">{carouselServicesData.length}+ treatments available</p>
            </div>
            <ArrowRight className="text-black/30 group-hover:text-black transition-colors" size={20} />
          </div>
        </div>
      </div>
    </section>
  );
}