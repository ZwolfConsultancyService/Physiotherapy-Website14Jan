import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { servicesData } from "../../../data/servicesData/servicesData";

const ServicesPage = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => { fetchServices(); }, []);

  const fetchServices = async () => {
    try {
      setIsLoading(true);
      setTimeout(() => {
        setServices(servicesData);
        setIsLoading(false);
      }, 500);
    } catch (error) {
      console.error("Error fetching services:", error);
      setIsLoading(false);
    }
  };

  const handleReadMore = (slug) => navigate(`/service/${slug}`);
  const handleCardClick = (slug) => navigate(`/service/${slug}`);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-6" aria-hidden="true">
            <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-black rounded-full animate-spin"></div>
            <div className="absolute inset-4 bg-black rounded-full animate-pulse"></div>
          </div>
          <p className="text-xs tracking-widest uppercase text-gray-400" aria-live="polite">Loading Services...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ───────────────── SEO HEAD ───────────────── */}
      <Helmet>
        {/* Primary Meta */}
        <title>Physiotherapy Services in New Delhi – PhysioCentric | Pain & Injury Treatment</title>
        <meta
          name="description"
          content="Explore PhysioCentric's full range of physiotherapy services in New Delhi — back pain, sports injuries, joint pain, neurological rehab & more. Book your personalised session today."
        />
        <meta name="keywords" content="physiotherapy services Delhi, back pain treatment New Delhi, sports injury physio Delhi, joint pain physiotherapy, neurological rehabilitation Delhi, post surgery rehab Delhi, PhysioCentric services" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.physiocentric.in/services" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.physiocentric.in/services" />
        <meta property="og:title" content="Physiotherapy Services – PhysioCentric, New Delhi" />
        <meta property="og:description" content="Comprehensive physiotherapy services for back pain, sports injuries, joint issues & neurological conditions. New Delhi's most trusted physio centre." />
        <meta property="og:image" content="https://www.physiocentric.in/og-image.jpg" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="PhysioCentric" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Physiotherapy Services – PhysioCentric, New Delhi" />
        <meta name="twitter:description" content="Back pain, sports injuries, joint pain, neurological rehab & more. Book a session at PhysioCentric, Gulmohar Park, New Delhi." />
        <meta name="twitter:image" content="https://www.physiocentric.in/og-image.jpg" />

        {/* Structured Data – Service List */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CollectionPage",
                "url": "https://www.physiocentric.in/services",
                "name": "Physiotherapy Services – PhysioCentric",
                "description": "A full range of physiotherapy services offered by PhysioCentric in New Delhi including sports rehab, back pain, neurological therapy, orthopaedic care and more.",
                "inLanguage": "en-IN",
                "provider": {
                  "@type": "MedicalBusiness",
                  "name": "PhysioCentric",
                  "url": "https://www.physiocentric.in"
                }
              },
              {
                "@type": "MedicalBusiness",
                "name": "PhysioCentric",
                "url": "https://www.physiocentric.in",
                "telephone": "+919810513841",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "A-2, Block A, Gulmohar Park",
                  "addressLocality": "New Delhi",
                  "addressRegion": "Delhi",
                  "postalCode": "110049",
                  "addressCountry": "IN"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Physiotherapy Services",
                  "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "MedicalTherapy", "name": "Sports Injury Rehabilitation" } },
                    { "@type": "Offer", "itemOffered": { "@type": "MedicalTherapy", "name": "Back Pain Treatment" } },
                    { "@type": "Offer", "itemOffered": { "@type": "MedicalTherapy", "name": "Joint Pain Physiotherapy" } },
                    { "@type": "Offer", "itemOffered": { "@type": "MedicalTherapy", "name": "Neurological Rehabilitation" } },
                    { "@type": "Offer", "itemOffered": { "@type": "MedicalTherapy", "name": "Post-Surgery Rehabilitation" } }
                  ]
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* ───────────────── HERO BANNER ───────────────── */}
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=800&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" aria-hidden="true"></div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl mt-20 text-white mb-4 font-bold tracking-tight">
            Services
          </h1>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-3 text-white/60 text-sm list-none p-0 m-0">
              <li>
                <button onClick={() => navigate("/")} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li aria-hidden="true"><span>/</span></li>
              <li><span className="text-white" aria-current="page">Services</span></li>
            </ol>
          </nav>
        </div>
      </div>

      {/* ───────────────── SERVICES SECTION ───────────────── */}
      <section className="py-16 md:py-24" aria-label="Physiotherapy services list">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-6" aria-hidden="true">
              <div className="h-px w-16 bg-black"></div>
              <span className="text-black text-xs uppercase tracking-widest font-semibold">
                OUR SERVICES
              </span>
              <div className="h-px w-16 bg-black"></div>
            </div>

            <h2 className="text-3xl md:text-5xl text-black font-bold mb-6 leading-tight">
              Wide Range of Physical Therapy Services
            </h2>

            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
              We offer comprehensive physical therapy services designed to reduce pain, restore mobility,
              and improve overall physical function. Our personalized treatment plans help patients recover
              from injuries, manage chronic conditions, and achieve long-term wellness goals.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <article
                key={service.id}
                onClick={() => handleCardClick(service.slug)}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group bg-white overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] cursor-pointer"
                style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
                aria-label={`View details for ${service.title}`}
              >
                {/* Image */}
                <div className="relative h-80 md:h-96 overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={`${service.title} – physiotherapy service at PhysioCentric New Delhi`}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    width={400}
                    height={384}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>

                  {/* View Details Badge */}
                  <div className="absolute top-4 right-4 bg-black text-white px-4 py-1.5 text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0" aria-hidden="true">
                    View Details
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 border-t border-gray-100">
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-500 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Read More */}
                  <button
                    onClick={(e) => { e.stopPropagation(); handleReadMore(service.slug); }}
                    className="group/btn flex items-center gap-2 text-black hover:gap-3 transition-all duration-300"
                    aria-label={`Read more about ${service.title}`}
                  >
                    <span className="text-xs tracking-widest uppercase font-semibold">READ MORE</span>
                    <div className="w-8 h-8 bg-black flex items-center justify-center group-hover/btn:bg-gray-700 transition-all duration-300" aria-hidden="true">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: #000; }
        ::-webkit-scrollbar-thumb:hover { background: #333; }
        @media (max-width: 768px) {
          .container { padding-left: 1rem; padding-right: 1rem; }
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;