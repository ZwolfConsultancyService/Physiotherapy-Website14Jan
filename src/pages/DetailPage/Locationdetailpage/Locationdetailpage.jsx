import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Phone, Mail, MapPin, ChevronRight, Home,
  CheckCircle2, ChevronDown, Star,
} from "lucide-react";
import { allLocations, getLocationBySlug } from "../../../data/Locationsdata/Locationsdata";
import { servicesDetailData } from "../../../data/servicesData/servicesData";
import LocationsSlider from "./LocationsSlider";

// const parseServiceLocationSlug = (combinedSlug, locations) => {
//   for (const loc of locations) {
//     const suffix = `-in-${loc.slug}`;
//     if (combinedSlug.endsWith(suffix)) {
//       const serviceSlug = combinedSlug.slice(0, -suffix.length);
//       return { serviceSlug, locationSlug: loc.slug };
//     }
//   }
//   return { serviceSlug: combinedSlug, locationSlug: null };
// };

const LocationDetailPage = () => {
 const { slug, locationSlug } = useParams(); 
  const navigate = useNavigate();
  const [expandedFaq, setExpandedFaq] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const serviceSlug = slug;

  // const { serviceSlug, locationSlug } = parseServiceLocationSlug(slug, allLocations);
  const locationData = locationSlug ? getLocationBySlug(locationSlug) : null;
  const serviceData = servicesDetailData?.[serviceSlug] || servicesDetailData?.["physiotherapy"];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsLoading(true);
    const t = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(t);
  }, [slug]);

  useEffect(() => {
    if (locationData && serviceData) {
      document.title = locationData.metaTitle ||
        `${serviceData.title} in ${locationData.name} | PhysioCentric`;
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.name = "description";
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = locationData.metaDescription ||
        `Expert ${serviceData.title} services in ${locationData.name}, ${locationData.city}. Book your appointment at PhysioCentric today.`;
    }
  }, [locationData, serviceData]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-black rounded-full animate-spin"></div>
            <div className="absolute inset-4 bg-black rounded-full animate-pulse"></div>
          </div>
          <p className="text-xs tracking-widest uppercase text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!locationData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black mb-4">Location Not Found</h1>
          <button onClick={() => navigate("/")}
            className="px-6 py-3 bg-black text-white text-xs tracking-widest uppercase">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const pageTitle = `${serviceData?.title || "Physiotherapy"} in ${locationData.name}`;

  return (
    <div className="min-h-screen bg-gray-50 mt-10">

      {/* SEO Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "PhysioCentric",
          description: locationData.metaDescription,
          url: `https://physiocentric.com/service/${slug}`,
          telephone: "1800-456-7890",
          email: "reception.physiocentric@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: locationData.name,
            addressRegion: locationData.state,
            postalCode: locationData.pincode,
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: locationData.coordinates.lat,
            longitude: locationData.coordinates.lng,
          },
          areaServed: [locationData.name, ...locationData.nearbyAreas],
          medicalSpecialty: "PhysicalTherapy",
        }),
      }} />

      {/* Banner */}
      <div
        className="relative h-[240px] md:h-[320px] bg-cover bg-center"
        style={{ backgroundImage: `url('${serviceData?.bannerImage || "/images/banner.jpg"}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />

        {/* City Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs px-3 py-1.5 tracking-widest uppercase">
            <MapPin className="w-3 h-3" />{locationData.city}
          </span>
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center max-w-7xl">
          <div className="mb-2">
            <span className="text-xs tracking-widest uppercase text-white/50 border border-white/20 px-3 py-1">
              {locationData.area}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl mt-10 md:mt-16 text-white mb-3 font-bold tracking-tight leading-tight max-w-3xl">
            {pageTitle}
          </h1>
          <nav aria-label="breadcrumb" className="flex items-center gap-1 text-white/60 text-xs sm:text-sm flex-wrap">
            <button onClick={() => navigate("/")} className="hover:text-white transition-colors flex items-center gap-1">
              <Home className="w-3 h-3" /> Home
            </button>
            <ChevronRight className="w-3 h-3" />
            <button onClick={() => navigate(`/service/${serviceSlug}`)} className="hover:text-white transition-colors">
              {serviceData?.title || "Services"}
            </button>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/90">{locationData.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Layout */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* ── Main Content (mobile pe pehle) ── */}
            <main className="lg:col-span-9 order-1 lg:order-2 space-y-6 md:space-y-8">

              {/* Main Image */}
              {/* <div className="bg-white shadow-lg overflow-hidden">
                <img
                  src={serviceData?.mainImage || "/images/service-main.jpg"}
                  alt={`${serviceData?.title || "Physiotherapy"} in ${locationData.name}`}
                  className="w-full h-[220px] sm:h-[300px] md:h-[380px] object-cover"
                />
              </div> */}

              {/* Overview */}
              <div className="bg-white shadow-lg p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-black" />
                  <span className="text-xs tracking-widest uppercase font-semibold text-black">Overview</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">{pageTitle}</h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                  {locationData.shortDescription}
                </p>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  {locationData.longDescription}
                </p>
              </div>

              {/* Services at this location */}
              <div className="bg-white shadow-lg p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-black" />
                  <span className="text-xs tracking-widest uppercase font-semibold text-black">
                    Services in {locationData.name}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-5">
                  What We Offer in {locationData.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {locationData.services.map((service, i) => (
                    <div key={i}
                      className="flex items-center gap-3 p-3 md:p-4 border border-gray-100 hover:border-black hover:bg-gray-50 transition-all duration-300 group cursor-pointer">
                      <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-700 text-sm font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              {serviceData?.benefits && (
                <div className="bg-white shadow-lg overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="h-[220px] md:h-full">
                      <img
                        src={serviceData.benefitImage}
                        alt={`${serviceData.title} benefits in ${locationData.name}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-0.5 bg-black" />
                        <span className="text-xs tracking-widest uppercase font-semibold text-black">Benefits</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-black mb-3">
                        {serviceData.benefits.title}
                      </h3>
                      <p className="text-gray-500 mb-4 text-sm leading-relaxed">
                        {serviceData.benefits.description}
                      </p>
                      <ul className="space-y-3">
                        {serviceData.benefits.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-5 h-5 bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                              <ChevronRight className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-gray-600 text-sm">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Why Us */}
              <div className="bg-white shadow-lg p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-black" />
                  <span className="text-xs tracking-widest uppercase font-semibold text-black">Why Us</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-6">
                  Why Choose PhysioCentric in {locationData.name}?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                  {[
                    {
                      icon: <Star className="w-6 h-6" />,
                      title: "Certified Experts",
                      desc: `Our physiotherapists serving ${locationData.name} are qualified, experienced, and patient-focused.`,
                    },
                    {
                      icon: <CheckCircle2 className="w-6 h-6" />,
                      title: "Advanced Equipment",
                      desc: "We use state-of-the-art muscle stimulation and electrotherapy equipment for faster, lasting results.",
                    },
                    {
                      icon: <MapPin className="w-6 h-6" />,
                      title: "Convenient Location",
                      desc: `Easy access from ${locationData.name}, ${locationData.landmark}.`,
                    },
                  ].map((card, i) => (
                    <div key={i}
                      className="border border-gray-100 p-4 md:p-5 hover:border-black hover:shadow-md transition-all duration-300 group">
                      <div className="w-10 h-10 bg-black text-white flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                        {card.icon}
                      </div>
                      <h4 className="font-bold text-black mb-2 text-sm">{card.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white shadow-lg p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-black" />
                  <span className="text-xs tracking-widest uppercase font-semibold text-black">FAQs</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-6">
                  Frequently Asked Questions – {locationData.name}
                </h3>
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: locationData.faqs.map((faq) => ({
                      "@type": "Question",
                      name: faq.question,
                      acceptedAnswer: { "@type": "Answer", text: faq.answer },
                    })),
                  }),
                }} />
                <div className="space-y-3">
                  {locationData.faqs.map((faq, i) => (
                    <div key={i}
                      className={`border-2 overflow-hidden transition-all duration-300 ${expandedFaq === i ? "border-black" : "border-gray-100"}`}>
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors text-left"
                      >
                        <span className="font-medium text-gray-800 text-sm pr-4">{faq.question}</span>
                        <ChevronDown className={`w-5 h-5 text-black flex-shrink-0 transition-transform duration-300 ${expandedFaq === i ? "rotate-180" : ""}`} />
                      </button>
                      <div className={`transition-all duration-300 overflow-hidden ${expandedFaq === i ? "max-h-48" : "max-h-0"}`}>
                        <div className="px-4 pb-4 pt-2 text-gray-500 text-sm border-t border-gray-100 leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Locations Slider */}
              <LocationsSlider serviceSlug={serviceSlug} />

              {/* CTA */}
              <div className="bg-black shadow-lg p-6 md:p-8 text-white text-center">
                <div className="w-12 h-0.5 bg-white/30 mx-auto mb-6" />
                <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">
                  Book Your Appointment in {locationData.name}
                </h3>
                <p className="mb-6 text-gray-400 leading-relaxed max-w-xl mx-auto text-sm md:text-base">
                  PhysioCentric's certified therapists are ready to help you recover faster and
                  live pain-free in {locationData.name}, {locationData.city}.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="tel:18004567890"
                    className="w-full sm:w-auto px-8 py-3 bg-white text-black text-xs tracking-widest uppercase font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                  <a href="/contacts" className="w-full sm:w-auto">
                    <button className="w-full px-8 py-3 border border-white/30 text-white text-xs tracking-widest uppercase font-semibold hover:bg-white/10 transition-all duration-300">
                      Make Appointment
                    </button>
                  </a>
                </div>
              </div>

            </main>

            {/* ── Sidebar (mobile pe niche) ── */}
            <aside className="lg:col-span-3 order-2 lg:order-1">
              <div className="space-y-6 lg:sticky lg:top-8">

                {/* Contact */}
                <div className="bg-white shadow-lg p-6 space-y-4">
                  <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                    <div className="w-9 h-9 bg-black flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 tracking-widest uppercase">Call Us</p>
                      <a href="tel:18004567890" className="text-black font-bold text-sm hover:underline">
                        1800-456-7890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-black flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 tracking-widest uppercase">Email</p>
                      <a href="mailto:reception.physiocentric@gmail.com" className="text-black font-medium text-sm hover:underline">
                        reception.physiocentric@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* More in same city */}
                <div className="bg-white shadow-lg overflow-hidden">
                  <div className="bg-black text-white px-6 py-3">
                    <h3 className="text-xs font-bold tracking-widest uppercase">
                      More in {locationData.city}
                    </h3>
                  </div>
                  <nav className="py-2">
                    {allLocations
                      .filter((loc) => loc.city === locationData.city && loc.slug !== locationData.slug)
                      .slice(0, 6)
                      .map((loc, i) => (
                        <button key={i}
                         onClick={() => navigate(`/service/${serviceSlug}/${loc.slug}`)}
                          className="w-full text-left px-5 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-black border-b border-gray-50 flex items-center justify-between group transition-colors">
                          <span>{loc.name}</span>
                          <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ))}
                  </nav>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </section>

      <style>{`
        * { box-sizing: border-box; }
        .container { width: 100%; margin-left: auto; margin-right: auto; }
        @media (max-width: 768px) { .container { padding-left: 1rem; padding-right: 1rem; } }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: #000; }
      `}</style>
    </div>
  );
};

export default LocationDetailPage;