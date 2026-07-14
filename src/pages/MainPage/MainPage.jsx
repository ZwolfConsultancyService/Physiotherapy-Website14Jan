// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import HeroSection from "../../components/SectionPages/HeroSection/HeroSection";
// import AboutSection from "../../components/SectionPages/AboutSection/AboutSection";
// import WhyChooseUsSection from "../../components/SectionPages/WhyChooseUsSection/WhyChooseUsSection";
// import ServicesSection from "../../components/SectionPages/ServicesSection/ServicesSection";
// import StatisticsSection from "../../components/SectionPages/StatisticsSection/StatisticsSection";
// import TestimonialSection from "../../components/SectionPages/TestimonialSection/TestimonialSection";
// import LatestBlogsSection from "../../components/SectionPages/LatestBlogsSection/LatestBlogsSection";
// import ContactSection from "../../components/SectionPages/ContactSection/ContactSection";

// const MainPage = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true, // animation ek hi baar chale
//       easing: "ease-in-out",
//     });
//   }, []);

//   return (
//     <div className="overflow-x-hidden">
//       <div data-aos="fade-up">
//         <HeroSection />
//       </div>

//       <div data-aos="fade-right">
//         <AboutSection />
//       </div>
//       <div data-aos="fade-left">
//         <WhyChooseUsSection />
//       </div>

//       <div data-aos="fade-right">
//         <ServicesSection />
//       </div>
//        <div data-aos="fade-left">
//         <StatisticsSection />
//       </div>

//         <div data-aos="fade-right">
//         <TestimonialSection />
//       </div>

//       <div data-aos="fade-left">
//         <LatestBlogsSection />
//       </div>

//       <div data-aos="fade-up">
//         <ContactSection />
//       </div>
//     </div>
//   );
// };

// export default MainPage;



// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import HeroSection from "../../components/SectionPages/HeroSection/HeroSection";
// import AboutSection from "../../components/SectionPages/AboutSection/AboutSection";
// import WhyChooseUsSection from "../../components/SectionPages/WhyChooseUsSection/WhyChooseUsSection";
// import ServicesSection from "../../components/SectionPages/ServicesSection/ServicesSection";
// import StatisticsSection from "../../components/SectionPages/StatisticsSection/StatisticsSection";
// import TestimonialSection from "../../components/SectionPages/TestimonialSection/TestimonialSection";
// import LatestBlogsSection from "../../components/SectionPages/LatestBlogsSection/LatestBlogsSection";
// import ContactSection from "../../components/SectionPages/ContactSection/ContactSection";

// const MainPage = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1200, // Animation duration (smooth aur slow)
//       once: true, // Animation sirf ek baar chale
//       easing: "ease-in-out-cubic", // Sabse smooth easing
//       offset: 100, // Animation trigger point (scroll offset)
//       delay: 100, // Slight delay for better effect
//       anchorPlacement: "top-bottom", // Jab element screen mein aaye
//       disable: false, // Mobile pe bhi chale
//       startEvent: "DOMContentLoaded", // Page load hone ke baad start
//       animatedClassName: "aos-animate", // Custom class
//       initClassName: "aos-init", // Init class
//       useClassNames: false,
//       disableMutationObserver: false,
//       debounceDelay: 50, // Scroll performance optimize
//       throttleDelay: 99, // Smooth scrolling
//       mirror: false, // Scroll up karte waqt animation dobara na chale
//     });

//     // Refresh AOS on dynamic content load
//     AOS.refresh();

//     // Cleanup
//     return () => {
//       AOS.refreshHard();
//     };
//   }, []);

//   return (
//     <div className="overflow-x-hidden">
//       {/* Hero Section - Fade Up with Zoom */}
//       <div 
//         data-aos="fade-up" 
//         data-aos-duration="1400"
//         data-aos-delay="0"
//       >
//         <HeroSection />
//       </div>

//       {/* About Section - Fade Right */}
//       <div 
//         data-aos="fade-right" 
//         data-aos-duration="1200"
//         data-aos-delay="100"
//         data-aos-offset="150"
//       >
//         <AboutSection />
//       </div>

//       {/* Why Choose Us - Fade Left */}
//       <div 
//         data-aos="fade-left" 
//         data-aos-duration="1200"
//         data-aos-delay="100"
//         data-aos-offset="150"
//       >
//         <WhyChooseUsSection />
//       </div>

//       {/* Services Section - Zoom In */}
//       <div 
//         data-aos="zoom-in" 
//         data-aos-duration="1300"
//         data-aos-delay="150"
//         data-aos-offset="150"
//       >
//         <ServicesSection />
//       </div>

//       {/* Statistics Section - Fade Up */}
//       <div 
//         data-aos="fade-up" 
//         data-aos-duration="1200"
//         data-aos-delay="100"
//         data-aos-offset="150"
        
//       >
//         <StatisticsSection />
//       </div>

//       {/* Testimonial Section - Flip Up */}
//       {/* <div 
//         data-aos="flip-up" 
//         data-aos-duration="1400"
//         data-aos-delay="150"
//         data-aos-offset="150"
//       >
//         <TestimonialSection />
//       </div> */}

//       {/* Latest Blogs - Fade Right */}
//       <div 
//         data-aos="fade-right" 
//         data-aos-duration="1200"
//         data-aos-delay="100"
//         data-aos-offset="150"
//       >
//         <LatestBlogsSection />
//       </div>

//       {/* Contact Section - Zoom In Up */}
//       {/* <div 
//         data-aos="zoom-in-up" 
//         data-aos-duration="1300"
//         data-aos-delay="150"
//         data-aos-offset="150"
//       >
//         <ContactSection />
//       </div> */}

//       {/* Custom CSS for Extra Smoothness */}
//       <style>{`
//         /* Smooth scroll behavior */
//         html {
//           scroll-behavior: smooth;
//         }

//         /* AOS animation smoothness */
//         [data-aos] {
//           transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         /* Performance optimization */
//         [data-aos][data-aos][data-aos-duration="1200"],
//         body[data-aos-duration="1200"] [data-aos] {
//           transition-duration: 1.2s;
//         }

//         [data-aos][data-aos][data-aos-duration="1300"],
//         body[data-aos-duration="1300"] [data-aos] {
//           transition-duration: 1.3s;
//         }

//         [data-aos][data-aos][data-aos-duration="1400"],
//         body[data-aos-duration="1400"] [data-aos] {
//           transition-duration: 1.4s;
//         }

//         /* Custom easing for smoother animations */
//         [data-aos][data-aos][data-aos-easing="ease-in-out-cubic"],
//         body[data-aos-easing="ease-in-out-cubic"] [data-aos] {
//           transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
//         }

//         /* Prevent layout shift during animations */
//         [data-aos] {
//           pointer-events: auto;
//         }

//         /* Smooth fade transitions */
//         [data-aos="fade-up"] {
//           transform: translate3d(0, 40px, 0);
//         }

//         [data-aos="fade-right"] {
//           transform: translate3d(-40px, 0, 0);
//         }

//         [data-aos="fade-left"] {
//           transform: translate3d(40px, 0, 0);
//         }

//         [data-aos="zoom-in"] {
//           transform: scale(0.9);
//         }

//         [data-aos="zoom-in-up"] {
//           transform: translate3d(0, 40px, 0) scale(0.9);
//         }

//         /* Optimized for 60fps */
//         [data-aos] {
//           will-change: transform, opacity;
//         }

//         [data-aos].aos-animate {
//           transform: translate3d(0, 0, 0) scale(1);
//         }

//         /* Mobile optimization */
//         @media screen and (max-width: 768px) {
//           [data-aos="fade-right"],
//           [data-aos="fade-left"] {
//             transform: translate3d(0, 30px, 0);
//           }
          
//           [data-aos].aos-animate {
//             transform: translate3d(0, 0, 0);
//           }
//         }

//         /* Reduce motion for accessibility */
//         @media (prefers-reduced-motion: reduce) {
//           [data-aos] {
//             transition-duration: 0.01ms !important;
//             animation-duration: 0.01ms !important;
//             animation-iteration-count: 1 !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default MainPage;



import React, { useEffect } from "react";

import HeroSection from "../../components/SectionPages/HeroSection/HeroSection";
import AboutSection from "../../components/SectionPages/AboutSection/AboutSection";
import WhyChooseUsSection from "../../components/SectionPages/WhyChooseUsSection/WhyChooseUsSection";
import ServicesSection from "../../components/SectionPages/ServicesSection/ServicesSection";
import StatisticsSection from "../../components/SectionPages/StatisticsSection/StatisticsSection";
import LatestBlogsSection from "../../components/SectionPages/LatestBlogsSection/LatestBlogsSection";

function useScrollReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      document.querySelectorAll(".sr").forEach((el) => el.classList.add("sr-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sr-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    document.querySelectorAll(".sr").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const Reveal = ({ children, direction = "up" }) => (
  <div className={`sr sr-${direction}`}>
    {children}
  </div>
);

const MainPage = () => {
  useScrollReveal();

  return (
    <>
      {/* HeroSection — NO Reveal, seedha render */}
      <HeroSection />

      <Reveal direction="up">
        <AboutSection />
      </Reveal>

      <Reveal direction="up">
        <WhyChooseUsSection />
      </Reveal>

      <Reveal direction="up">
        <ServicesSection />
      </Reveal>

      <Reveal direction="up">
        <LatestBlogsSection />
      </Reveal>

      <Reveal direction="up">
        <StatisticsSection />
      </Reveal>


      <style>{`
        html {
          scroll-behavior: smooth;
        }

        /* ── Hidden state ── */
        .sr {
          opacity: 0;
          transform: translateY(24px);
          /* contain layout so sibling elements shift nahi karte */
          contain: layout style;
        }

        /* ── Visible state ── */
        .sr-visible {
          opacity: 1;
          transform: translateY(0);
          /* GPU pe sirf transition ke waqt, phir release */
          transition:
            opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: auto;
          contain: none;
        }

        /* ── Mobile — aur bhi light ── */
        @media (max-width: 768px) {
          .sr {
            transform: translateY(16px); /* kam movement = less jank */
          }
          .sr-visible {
            transition-duration: 0.4s;
          }
        }

        /* ── Accessibility ── */
        @media (prefers-reduced-motion: reduce) {
          .sr, .sr-visible {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default MainPage;