import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// NOTE: Import this at the top of your actual file
// import { useNavigate } from 'react-router-dom';

export default function ServicesSection() {
  // NOTE: Uncomment this line in your actual component
  // const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const services = [
    {
      title: "Laser Therapy",
      slug: "laser-therapy",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=700&fit=crop",
      description: "Advanced laser treatment for pain relief and healing",
    },
    {
      title: "Occupational Therapy",
      slug: "occupational-therapy",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=700&fit=crop",
      description: "Specialized occupational therapy services",
    },
    {
      title: "Geriatric Therapy",
      slug: "geriatric-therapy",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=700&fit=crop",
      description: "Comprehensive care for elderly patients",
    },
    {
      title: "Physiotherapy",
      slug: "physiotherapy",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=700&fit=crop",
      description: "Complete physiotherapy solutions",
    },
    {
      title: "Sport Injury Therapy",
      slug: "sport-injury-therapy",
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=700&fit=crop",
      description: "Athletic injury prevention and recovery",
    },
    {
      title: "Manual Hand Therapy",
      slug: "manual-hand-therapy",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=700&fit=crop",
      description: "Therapeutic massage treatments",
    },
  ];

  // Get visible cards count based on screen size
  const getVisibleCards = () => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth < 640) return 1; // Mobile
    if (window.innerWidth < 1024) return 2; // Tablet
    return 4; // Desktop
  };

  const [visibleCards, setVisibleCards] = useState(4);

  // Update visible cards on resize
  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = services.length - visibleCards;
        const nextIndex = prevIndex + 1;
        return nextIndex > maxIndex ? 0 : nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length, visibleCards]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => {
      const maxIndex = services.length - visibleCards;
      const nextIndex = prevIndex + 1;
      return nextIndex > maxIndex ? 0 : nextIndex;
    });
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => {
      const maxIndex = services.length - visibleCards;
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? maxIndex : nextIndex;
    });
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleCardClick = (slug) => {
    // In your actual component, replace this alert with navigation:
    // navigate(`/service/${slug}`);

    // For demo purposes:
    window.location.href = `/service/${slug}`;
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section className="bg-gray-50 py-13 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Label */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 sm:w-16 h-0.5 bg-blue-500"></div>
            <span className="text-blue-500 text-xs sm:text-sm tracking-wider uppercase ">
              WHAT WE ARE OFFERING
            </span>
            <div className="w-12 sm:w-16 h-0.5 bg-blue-500"></div>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0a1f44] mb-4 md:mb-6 px-4">
            Providing Physical Therapy Services
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed px-4">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit.
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleCards)
                }%)`,
              }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-2 sm:px-3"
                >
                  <div
                    onClick={() => handleCardClick(service.slug)}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
                  >
                    {/* Image */}
                    <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Description on Hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-sm sm:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                          {service.description}
                        </p>
                      </div>

                      {/* "View Details" Badge */}
                      <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-xs  opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                        View Details
                      </div>
                    </div>

                    {/* Title Bar */}
                    <div className="bg-white py-4 sm:py-5 px-4 sm:px-6 text-center">
                      <h3 className="text-lg sm:text-xl  text-[#0a1f44] group-hover:text-pink-500 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Hidden on Mobile, Shown on Tablet+ */}
          <div className="hidden md:flex justify-center gap-4 mt-12">
            <button
              onClick={prevSlide}
              className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-gray-300 hover:border-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300 flex items-center justify-center group"
              aria-label="Previous"
            >
              <ChevronLeft
                size={24}
                className="text-gray-600 group-hover:text-white"
              />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-gray-300 hover:border-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300 flex items-center justify-center group"
              aria-label="Next"
            >
              <ChevronRight
                size={24}
                className="text-gray-600 group-hover:text-white"
              />
            </button>
          </div>

          {/* Mobile Navigation - Dots and Arrows */}
          <div className="md:hidden mt-8 space-y-4">
            {/* Dots */}
            <div className="flex justify-center gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-pink-500"
                      : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Mobile Arrow Buttons */}
            <div className="flex justify-center gap-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300 flex items-center justify-center group active:scale-95"
                aria-label="Previous"
              >
                <ChevronLeft
                  size={20}
                  className="text-gray-600 group-hover:text-white"
                />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300 flex items-center justify-center group active:scale-95"
                aria-label="Next"
              >
                <ChevronRight
                  size={20}
                  className="text-gray-600 group-hover:text-white"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        /* Smooth touch scrolling for mobile */
        @media (max-width: 768px) {
          .overflow-hidden {
            -webkit-overflow-scrolling: touch;
          }
        }

        /* Prevent text selection on double tap */
        .cursor-pointer {
          -webkit-tap-highlight-color: transparent;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          user-select: none;
        }

        /* Smooth transitions */
        * {
          box-sizing: border-box;
        }
      `}</style>
    </section>
  );
}
