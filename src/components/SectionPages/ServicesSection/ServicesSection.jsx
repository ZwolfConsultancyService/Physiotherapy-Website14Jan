import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Layers } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { carouselServicesData } from "../../../data/servicesData/servicesData.js";

export default function ServicesSection() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // ── Sirf top 7 services le rahe hain ──────────────────────────
  const services = carouselServicesData.slice(0, 7);
  const allCards = [...services, { isViewMore: true }];

  // ── Touch/Drag state ──────────────────────────────────────────
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const isDragging = useRef(false);
  const dragOffset = useRef(0);
  const [liveOffset, setLiveOffset] = useState(0); // real-time drag feel

  const getVisibleCards = () => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 4;
  };

  const [visibleCards, setVisibleCards] = useState(4);

  useEffect(() => {
    const handleResize = () => setVisibleCards(getVisibleCards());
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardWidthPercent = 100 / visibleCards;
  const maxIndex = services.length - visibleCards + 1;

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const goTo = (index) => {
    const clamped = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clamped);
  };

  const nextSlide = () => {
    setIsAutoPlaying(false);
    goTo(currentIndex + 1 > maxIndex ? 0 : currentIndex + 1);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    goTo(currentIndex - 1 < 0 ? maxIndex : currentIndex - 1);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // ── Touch Handlers ────────────────────────────────────────────
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isDragging.current = true;
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current || touchStartX.current === null) return;
    const diffX = e.touches[0].clientX - touchStartX.current;
    const diffY = e.touches[0].clientY - touchStartY.current;

    // Agar vertical scroll zyada ho toh horizontal drag cancel
    if (Math.abs(diffY) > Math.abs(diffX)) {
      isDragging.current = false;
      setLiveOffset(0);
      return;
    }

    e.preventDefault(); // horizontal drag pe scroll rok
    dragOffset.current = diffX;

    // Live follow feel — max 80px resistance
    const resistance = Math.min(Math.abs(diffX), 80) * Math.sign(diffX);
    setLiveOffset(resistance);
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setLiveOffset(0);

    const threshold = 50; // 50px swipe = next/prev
    if (dragOffset.current < -threshold) {
      // Swipe left = next
      goTo(currentIndex + 1 > maxIndex ? 0 : currentIndex + 1);
    } else if (dragOffset.current > threshold) {
      // Swipe right = prev
      goTo(currentIndex - 1 < 0 ? maxIndex : currentIndex - 1);
    }

    dragOffset.current = 0;
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // ── Mouse drag (desktop) ──────────────────────────────────────
  const mouseStartX = useRef(null);
  const isMouseDragging = useRef(false);

  const handleMouseDown = (e) => {
    mouseStartX.current = e.clientX;
    isMouseDragging.current = true;
    setIsAutoPlaying(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDragging.current) return;
    const diffX = e.clientX - mouseStartX.current;
    const resistance = Math.min(Math.abs(diffX), 80) * Math.sign(diffX);
    setLiveOffset(resistance);
    dragOffset.current = diffX;
  };

  const handleMouseUp = () => {
    if (!isMouseDragging.current) return;
    isMouseDragging.current = false;
    setLiveOffset(0);

    if (dragOffset.current < -50) {
      goTo(currentIndex + 1 > maxIndex ? 0 : currentIndex + 1);
    } else if (dragOffset.current > 50) {
      goTo(currentIndex - 1 < 0 ? maxIndex : currentIndex - 1);
    }

    dragOffset.current = 0;
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleCardClick = (slug, e) => {
    // Drag ke baad click fire na ho
    if (Math.abs(dragOffset.current) > 5) return;
    navigate(`/service/${slug}`);
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // translateX = scroll position + live drag offset
  const translateX = -(currentIndex * cardWidthPercent) + (liveOffset / window.innerWidth) * 100;

  return (
    <section className="bg-white py-13 md:py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 sm:w-16 h-0.5 bg-black" />
            <span className="text-black text-xs sm:text-sm tracking-widest uppercase font-semibold">
              WHAT WE ARE OFFERING
            </span>
            <div className="w-12 sm:w-16 h-0.5 bg-black" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mb-4 md:mb-6 px-4 font-bold">
            Providing Physical Therapy Services
          </h2>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed px-4">
            We offer comprehensive physical therapy services designed to reduce pain, restore mobility,
            and improve overall physical function. Our personalized treatment plans help patients recover
            from injuries, manage chronic conditions, and achieve long-term wellness goals.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="absolute right-0 top-0 bottom-20 w-20 bg-gradient-to-l from-white via-white/60 to-transparent z-10 pointer-events-none" />

          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div
              className="flex select-none"
              style={{
                transform: `translateX(${translateX}%)`,
                // Drag hote waqt transition off — snappy feel
                transition: liveOffset !== 0 ? "none" : "transform 0.5s ease-in-out",
              }}
            >
              {allCards.map((item, index) => (
                <div
                  key={index}
                  style={{ width: `${cardWidthPercent}%` }}
                  className="flex-shrink-0 px-2 sm:px-3"
                >
                  {item.isViewMore ? (
                    <div
                      onClick={() => navigate("/services")}
                      className="cursor-pointer border-2 border-dashed border-gray-200 hover:border-black transition-all duration-300 group flex flex-col items-center justify-center gap-6 px-6 text-center h-full"
                      style={{ minHeight: "370px" }}
                    >
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full border-2 border-gray-200 group-hover:border-black group-hover:bg-black transition-all duration-500 flex items-center justify-center">
                          <Layers size={26} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="absolute inset-0 rounded-full border-2 border-gray-200 group-hover:border-black/20 scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs tracking-[0.2em] uppercase text-gray-400 group-hover:text-gray-500 transition-colors">
                          Explore All
                        </p>
                        <h3 className="text-2xl font-bold text-black leading-tight">
                          View All<br />Services
                        </h3>
                        <p className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors">
                          {carouselServicesData.length}+ treatments available
                        </p>
                      </div>
                      <div className="flex items-center gap-2 border-b-2 border-gray-200 group-hover:border-black pb-1 transition-all duration-300">
                        <span className="text-xs tracking-widest uppercase text-gray-500 group-hover:text-black transition-colors font-medium">
                          See Full List
                        </span>
                        <ArrowRight size={14} className="text-gray-400 group-hover:text-black group-hover:translate-x-1 transform transition-all duration-300" />
                      </div>
                    </div>
                  ) : (
                    <div
                      onClick={(e) => handleCardClick(item.slug, e)}
                      className="bg-white border border-gray-100 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
                    >
                      <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          draggable="false"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 pointer-events-none"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-white text-sm sm:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                            {item.description}
                          </p>
                        </div>
                        <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                          View Details
                        </div>
                      </div>
                      <div className="bg-white py-4 sm:py-5 px-4 sm:px-6 text-center border-t border-gray-100">
                        <h3 className="text-lg sm:text-xl text-black group-hover:text-gray-500 transition-colors duration-300 font-medium">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex justify-center gap-4 mt-12">
            <button onClick={prevSlide} className="w-12 h-12 lg:w-14 lg:h-14 border-2 border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center group" aria-label="Previous">
              <ChevronLeft size={24} className="text-gray-600 group-hover:text-white" />
            </button>
            <button onClick={nextSlide} className="w-12 h-12 lg:w-14 lg:h-14 border-2 border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center group" aria-label="Next">
              <ChevronRight size={24} className="text-gray-600 group-hover:text-white" />
            </button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden mt-8 space-y-4">
            <div className="flex justify-center gap-2">
              {services.map((_, index) => (
                <button key={index} onClick={() => handleDotClick(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 bg-black" : "w-2 bg-gray-300"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex justify-center gap-4">
              <button onClick={prevSlide} className="w-10 h-10 border-2 border-gray-300 hover:border-black hover:bg-black transition-all duration-300 flex items-center justify-center group active:scale-95">
                <ChevronLeft size={20} className="text-gray-600 group-hover:text-white" />
              </button>
              <button onClick={nextSlide} className="w-10 h-10 border-2 border-gray-300 hover:border-black hover:bg-black transition-all duration-300 flex items-center justify-center group active:scale-95">
                <ChevronRight size={20} className="text-gray-600 group-hover:text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}