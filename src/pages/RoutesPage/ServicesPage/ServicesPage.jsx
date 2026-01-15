// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// // ==================== SERVICES DATA (Future: Replace with API) ====================
// const servicesData = [
//   {
//     id: 1,
//     title: "Physiotherapy",
//     image:
//       "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
//     description:
//       "Physiotherapy is medical therapy which helps a patient in the rehabilitation of various types of diseases and...",
//     slug: "physiotherapy",
//   },
//   {
//     id: 2,
//     title: "Joint Mobilization",
//     image:
//       "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop",
//     description:
//       "Donec vitae pellentesque diam volutpat commodo sed egestas egestas. Praesent tristique magna sit amet purus gravida...",
//     slug: "joint-mobilization",
//   },
//   {
//     id: 3,
//     title: "Manual Hand Therapy",
//     image:
//       "https://images.unsplash.com/photo-1612351443858-1baa1d95e59e?w=800&h=600&fit=crop",
//     description:
//       "At imperdiet dui accumsan sit amet nulla facilisi. Sed risus pretium quam vulputate dignissim suspendisse. Aliquam sem...",
//     slug: "manual-hand-therapy",
//   },
//   {
//     id: 4,
//     title: "Sport Injury Therapy",
//     image:
//       "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
//     description:
//       "Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Nulla facilisi cras fermentum odio eu...",
//     slug: "sport-injury-therapy",
//   },
//   {
//     id: 5,
//     title: "Laser Therapy",
//     image:
//       "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop",
//     description:
//       "Varius sit amet mattis vulputate. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Sed blandit libero...",
//     slug: "laser-therapy",
//   },
//   {
//     id: 6,
//     title: "Occupational Therapy",
//     image:
//       "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
//     description:
//       "Ut lectus arcu bibendum at varius vel. Id velit ut tortor pretium viverra suspendisse potenti. Semper feugiat nibh sed...",
//     slug: "occupational-therapy",
//   },
// ];

// const ServicesPage = () => {
//   const navigate = useNavigate();
//   const [services, setServices] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [hoveredCard, setHoveredCard] = useState(null);

//   // ==================== API INTEGRATION (Future) ====================
//   useEffect(() => {
//     // Simulate API call
//     fetchServices();
//   }, []);

//   const fetchServices = async () => {
//     try {
//       setIsLoading(true);

//       // TODO: Replace with actual API call
//       // const response = await fetch('https://your-api.com/services');
//       // const data = await response.json();
//       // setServices(data);

//       // Simulating API delay
//       setTimeout(() => {
//         setServices(servicesData);
//         setIsLoading(false);
//       }, 500);
//     } catch (error) {
//       console.error("Error fetching services:", error);
//       setIsLoading(false);
//     }
//   };

//   // Handle Read More - Navigate to Service Detail Page
//   const handleReadMore = (slug) => {
//     // Navigate to service detail page with slug
//     navigate(`/service/${slug}`);
//   };

//   // Handle Card Click - Entire card clickable
//   const handleCardClick = (slug) => {
//     navigate(`/service/${slug}`);
//   };

//   // Loading State
//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="relative">
//             <div className="w-24 h-24 rounded-full border-4 border-pink-300/20 animate-ping absolute"></div>
//             <div className="w-20 h-20 rounded-full border-4 border-pink-600/40 animate-pulse absolute top-2 left-2"></div>
//             <div className="w-16 h-16 rounded-full border-t-4 border-r-4 border-blue-600 animate-spin mx-auto relative z-10"></div>
//             <div className="w-4 h-4 rounded-full bg-blue-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce"></div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* ==================== HERO BANNER ==================== */}
//       <div
//         className="relative h-[400px] bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=800&fit=crop')",
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>

//         <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
//           <h1
//             className="text-4xl md:text-6xl mt-20  text-white mb-4"
//             style={{
//               fontFamily: "'Zalando Sans Expanded', sans-serif",
//               fontWeight: 200,
//             }}
//           >
//             Services
//           </h1>

//           {/* Breadcrumb */}
//           <nav className="flex items-center gap-3 text-white/90">
//             <button
//               onClick={() => console.log("Navigate to home")}
//               className="hover:text-white transition-colors"
//             >
//               Home
//             </button>
//             <span>/</span>
//             <span className="text-white">Services</span>
//           </nav>
//         </div>
//       </div>

//       {/* ==================== SERVICES SECTION ==================== */}
//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           {/* Section Header */}
//           <div className="text-center max-w-4xl mx-auto mb-16">
//             <div className="flex items-center justify-center gap-4 mb-6">
//               <div className="h-px w-16 bg-blue-600"></div>
//               <span
//                 className="text-blue-600 text-sm uppercase tracking-wider"
//                 style={{
//                   fontFamily: "'Gantari', sans-serif",
//                 }}
//               >
//                 OUR SERVICES
//               </span>
//               <div className="h-px w-16 bg-blue-600"></div>
//             </div>

//             <h2
//               className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
//               style={{
//                 fontFamily: "'Zalando Sans Expanded', sans-serif",
//                 fontWeight: 200,
//               }}
//             >
//               Wide Range of Physical Therapy Services
//             </h2>

//             <p
//               className="text-gray-600 text-base md:text-lg leading-relaxed"
//               style={{
//                 fontFamily: "'Gantari', sans-serif",
//                 fontWeight: 400,
//               }}
//             >
//               Nemo enim ipsam voluptatem quia voluptas sit aspernatur sed quia
//               consequuntur magni dolores eos qui ratione voluptatem sequi
//               nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
//               sit amet, consectetur, adipisci velit.
//             </p>
//           </div>

//           {/* ==================== SERVICES GRID ==================== */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//             {services.map((service, index) => (
//               <div
//                 key={service.id}
//                 onClick={() => handleCardClick(service.slug)}
//                 onMouseEnter={() => setHoveredCard(service.id)}
//                 onMouseLeave={() => setHoveredCard(null)}
//                 className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] cursor-pointer"
//                 style={{
//                   animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
//                   fontFamily: "'Gantari', sans-serif",
//                 }}
//               >
//                 {/* Image Container */}
//                 <div className="relative h-64 overflow-hidden">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />

//                   {/* Overlay on Hover */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//                   {/* "View Details" Badge on Hover */}
//                   <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm  opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-[-10px] group-hover:translate-y-0">
//                     View Details
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
//                     {service.title}
//                   </h3>

//                   <p className="text-gray-600 text-base leading-relaxed mb-6">
//                     {service.description}
//                   </p>

//                   {/* Read More Button */}
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation(); // Prevent card click
//                       handleReadMore(service.slug);
//                     }}
//                     className="group/btn flex items-center gap-2 text-blue-600  hover:gap-3 transition-all duration-300"
//                   >
//                     <span>READ MORE</span>
//                     <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center group-hover/btn:bg-blue-600 transition-all duration-300">
//                       <ArrowRight className="w-4 h-4 text-white" />
//                     </div>
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ==================== ANIMATIONS ==================== */}
//       <style>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         /* Smooth scrollbar */
//         ::-webkit-scrollbar {
//           width: 10px;
//         }

//         ::-webkit-scrollbar-track {
//           background: #f1f1f1;
//         }

//         ::-webkit-scrollbar-thumb {
//           background: #8ab72e;
//           border-radius: 5px;
//         }

//         ::-webkit-scrollbar-thumb:hover {
//           background: #6d9424;
//         }

//         /* Responsive adjustments */
//         @media (max-width: 768px) {
//           .container {
//             padding-left: 1rem;
//             padding-right: 1rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ServicesPage;



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { servicesData } from "../../../data/servicesData/servicesData"; // Adjust path as needed

const ServicesPage = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  // ==================== API INTEGRATION (Future) ====================
  useEffect(() => {
    // Simulate API call
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setIsLoading(true);

      // TODO: Replace with actual API call
      // const response = await fetch('https://your-api.com/services');
      // const data = await response.json();
      // setServices(data);

      // Simulating API delay
      setTimeout(() => {
        setServices(servicesData);
        setIsLoading(false);
      }, 500);
    } catch (error) {
      console.error("Error fetching services:", error);
      setIsLoading(false);
    }
  };

  // Handle Read More - Navigate to Service Detail Page
  const handleReadMore = (slug) => {
    // Navigate to service detail page with slug
    navigate(`/service/${slug}`);
  };

  // Handle Card Click - Entire card clickable
  const handleCardClick = (slug) => {
    navigate(`/service/${slug}`);
  };

  // Loading State
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-4 border-pink-300/20 animate-ping absolute"></div>
            <div className="w-20 h-20 rounded-full border-4 border-pink-600/40 animate-pulse absolute top-2 left-2"></div>
            <div className="w-16 h-16 rounded-full border-t-4 border-r-4 border-blue-600 animate-spin mx-auto relative z-10"></div>
            <div className="w-4 h-4 rounded-full bg-blue-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ==================== HERO BANNER ==================== */}
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=800&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1
            className="text-4xl md:text-6xl mt-20 text-white mb-4"
            style={{
              fontFamily: "'Zalando Sans Expanded', sans-serif",
              fontWeight: 200,
            }}
          >
            Services
          </h1>

          {/* Breadcrumb */}
          <nav className="flex items-center gap-3 text-white/90">
            <button
              onClick={() => navigate("/")}
              className="hover:text-white transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-white">Services</span>
          </nav>
        </div>
      </div>

      {/* ==================== SERVICES SECTION ==================== */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-blue-600"></div>
              <span
                className="text-blue-600 text-sm uppercase tracking-wider"
                style={{
                  fontFamily: "'Gantari', sans-serif",
                }}
              >
                OUR SERVICES
              </span>
              <div className="h-px w-16 bg-blue-600"></div>
            </div>

            <h2
              className="text-3xl md:text-5xl text-gray-900 mb-6"
              style={{
                fontFamily: "'Zalando Sans Expanded', sans-serif",
                fontWeight: 200,
              }}
            >
              Wide Range of Physical Therapy Services
            </h2>

            <p
              className="text-gray-600 text-base md:text-lg leading-relaxed"
              style={{
                fontFamily: "'Gantari', sans-serif",
                fontWeight: 400,
              }}
            >
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi
              nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
              sit amet, consectetur, adipisci velit.
            </p>
          </div>

          {/* ==================== SERVICES GRID ==================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.id}
                onClick={() => handleCardClick(service.slug)}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] cursor-pointer"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  fontFamily: "'Gantari', sans-serif",
                }}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* "View Details" Badge on Hover */}
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-[-10px] group-hover:translate-y-0">
                    View Details
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Read More Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click
                      handleReadMore(service.slug);
                    }}
                    className="group/btn flex items-center gap-2 text-blue-600 hover:gap-3 transition-all duration-300"
                  >
                    <span>READ MORE</span>
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center group-hover/btn:bg-blue-600 transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ANIMATIONS ==================== */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Smooth scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #8ab72e;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #6d9424;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;