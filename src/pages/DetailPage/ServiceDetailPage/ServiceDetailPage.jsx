// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// import { Download, Phone, Mail, ChevronRight, Home } from "lucide-react";
// import { servicesDetailData } from "../../../data/servicesData/servicesData";
// import LocationsSlider from "../Locationdetailpage/LocationsSlider";

// const ServiceDetailPage = () => {
//   const { slug } = useParams();
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);
//   const [expandedIndex, setExpandedIndex] = useState(3);

//   const serviceData =
//     servicesDetailData[slug] || servicesDetailData["physiotherapy"];

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     setIsLoading(true);
//     setTimeout(() => setIsLoading(false), 500);
//   }, [slug]);

//   const toggleAccordion = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   const handleSidebarClick = (serviceName) => {
//     navigate(`/service/${serviceName.toLowerCase().replace(/\s+/g, "-")}`);
//   };

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center">
//         <div className="text-center">
//           <div className="relative w-20 h-20 mx-auto mb-6" aria-hidden="true">
//             <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
//             <div className="absolute inset-0 border-4 border-transparent border-t-black rounded-full animate-spin"></div>
//             <div className="absolute inset-4 bg-black rounded-full animate-pulse"></div>
//           </div>
//           <p className="text-xs tracking-widest uppercase text-gray-400" aria-live="polite">
//             Loading...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   // Build canonical URL from current slug
//   const canonicalUrl = `https://www.physiocentric.in/service/${slug}`;

//   // Structured Data for this individual service
//   const structuredData = {
//     "@context": "https://schema.org",
//     "@graph": [
//       {
//         "@type": "MedicalWebPage",
//         "url": canonicalUrl,
//         "name": `${serviceData.title} – PhysioCentric New Delhi`,
//         "description": serviceData.description,
//         "inLanguage": "en-IN",
//         "about": {
//           "@type": "MedicalTherapy",
//           "name": serviceData.title,
//           "description": serviceData.longDescription || serviceData.description,
//           "relevantSpecialty": "PhysicalTherapy"
//         },
//         "provider": {
//           "@type": "MedicalBusiness",
//           "name": "PhysioCentric",
//           "url": "https://www.physiocentric.in",
//           "telephone": "+919810513841",
//           "address": {
//             "@type": "PostalAddress",
//             "streetAddress": "A-2, Block A, Gulmohar Park",
//             "addressLocality": "New Delhi",
//             "addressRegion": "Delhi",
//             "postalCode": "110049",
//             "addressCountry": "IN"
//           }
//         }
//       },
//       {
//         "@type": "BreadcrumbList",
//         "itemListElement": [
//           {
//             "@type": "ListItem",
//             "position": 1,
//             "name": "Home",
//             "item": "https://www.physiocentric.in"
//           },
//           {
//             "@type": "ListItem",
//             "position": 2,
//             "name": "Services",
//             "item": "https://www.physiocentric.in/services"
//           },
//           {
//             "@type": "ListItem",
//             "position": 3,
//             "name": serviceData.title,
//             "item": canonicalUrl
//           }
//         ]
//       },
//       // FAQ schema from accordion "Why Choose Us" points
//       ...(serviceData.whyChoose?.points?.length > 0
//         ? [{
//             "@type": "FAQPage",
//             "mainEntity": serviceData.whyChoose.points.map((item) => ({
//               "@type": "Question",
//               "name": item.title,
//               "acceptedAnswer": {
//                 "@type": "Answer",
//                 "text": item.description
//               }
//             }))
//           }]
//         : [])
//     ]
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 mt-10">

//       {/* ───────────────── SEO HEAD ───────────────── */}
//       <Helmet>
//         {/* Primary Meta */}
//         <title>{`${serviceData.title} in New Delhi – PhysioCentric | Expert Physiotherapy`}</title>
//         <meta
//           name="description"
//           content={`${serviceData.description?.substring(0, 150)}... Book a session at PhysioCentric, Gulmohar Park, New Delhi. Call 09810513841.`}
//         />
//         <meta
//           name="keywords"
//           content={`${serviceData.title} Delhi, ${serviceData.title} physiotherapy New Delhi, ${serviceData.title} treatment Gulmohar Park, PhysioCentric ${serviceData.title}`}
//         />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href={canonicalUrl} />

//         {/* Open Graph */}
//         <meta property="og:type" content="article" />
//         <meta property="og:url" content={canonicalUrl} />
//         <meta property="og:title" content={`${serviceData.title} – PhysioCentric, New Delhi`} />
//         <meta
//           property="og:description"
//           content={`${serviceData.description?.substring(0, 150)}... Expert physiotherapy at PhysioCentric, New Delhi.`}
//         />
//         <meta property="og:image" content={serviceData.mainImage || "https://www.physiocentric.in/og-image.jpg"} />
//         <meta property="og:locale" content="en_IN" />
//         <meta property="og:site_name" content="PhysioCentric" />

//         {/* Twitter Card */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={`${serviceData.title} – PhysioCentric, New Delhi`} />
//         <meta
//           name="twitter:description"
//           content={`${serviceData.description?.substring(0, 150)}... Expert physiotherapy in Gulmohar Park, New Delhi.`}
//         />
//         <meta name="twitter:image" content={serviceData.mainImage || "https://www.physiocentric.in/og-image.jpg"} />

//         {/* Structured Data */}
//         <script type="application/ld+json">
//           {JSON.stringify(structuredData)}
//         </script>
//       </Helmet>

//       {/* ───────────────── BANNER ───────────────── */}
//       <div
//         className="relative h-[240px] md:h-[300px] bg-cover bg-center"
//         style={{ backgroundImage: `url('${serviceData.bannerImage}')` }}
//       >
//         <div className="absolute inset-0 bg-black/70" aria-hidden="true"></div>
//         <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center max-w-7xl">
//           <h1 className="text-3xl md:text-5xl mt-16 md:mt-20 text-white mb-4 font-bold tracking-tight">
//             {serviceData.title}
//           </h1>
//           <nav aria-label="Breadcrumb">
//             <ol className="flex items-center gap-2 text-white/60 text-sm list-none p-0 m-0">
//               <li>
//                 <button
//                   onClick={() => navigate("/")}
//                   className="hover:text-white transition-colors flex items-center gap-1"
//                 >
//                   <Home className="w-4 h-4" aria-hidden="true" /> Home
//                 </button>
//               </li>
//               <li aria-hidden="true"><span>/</span></li>
//               <li>
//                 <button
//                   onClick={() => navigate("/services")}
//                   className="hover:text-white transition-colors"
//                 >
//                   Services
//                 </button>
//               </li>
//               <li aria-hidden="true"><span>/</span></li>
//               <li>
//                 <span className="text-white" aria-current="page">{serviceData.title}</span>
//               </li>
//             </ol>
//           </nav>
//         </div>
//       </div>

//       {/* ───────────────── MAIN CONTENT ───────────────── */}
//       <section className="py-8 md:py-16" aria-label={`${serviceData.title} service details`}>
//         <div className="container mx-auto px-4 max-w-7xl">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

//             {/* ── Main Content ── */}
//             <main className="lg:col-span-9 order-1 lg:order-2 space-y-6 md:space-y-8">

//               {/* Main Image */}
//               <div className="bg-white shadow-lg overflow-hidden">
//                 <img
//                   src={serviceData.mainImage}
//                   alt={`${serviceData.title} treatment at PhysioCentric, New Delhi`}
//                   className="w-full h-[220px] sm:h-[320px] md:h-[400px] object-cover"
//                   loading="eager"
//                   fetchpriority="high"
//                   width={900}
//                   height={400}
//                 />
//               </div>

//               {/* Description */}
//               <div className="bg-white shadow-lg p-6 md:p-8">
//                 <div className="flex items-center gap-3 mb-4" aria-hidden="true">
//                   <div className="w-10 h-0.5 bg-black"></div>
//                   <span className="text-xs tracking-widest uppercase font-semibold text-black">
//                     Overview
//                   </span>
//                 </div>
//                 <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
//                   {serviceData.title}
//                 </h2>
//                 <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
//                   {serviceData.description}
//                 </p>
//                 <p className="text-gray-500 text-sm md:text-base leading-relaxed">
//                   {serviceData.longDescription}
//                 </p>
//               </div>

//               {/* Benefits */}
//               <div className="bg-white shadow-lg overflow-hidden">
//                 <div className="grid grid-cols-1 md:grid-cols-2">
//                   <div className="h-[220px] md:h-full">
//                     <img
//                       src={serviceData.benefitImage}
//                       alt={`Benefits of ${serviceData.title} at PhysioCentric`}
//                       className="w-full h-full object-cover"
//                       loading="lazy"
//                       width={450}
//                       height={400}
//                     />
//                   </div>
//                   <div className="p-6 md:p-8">
//                     <div className="flex items-center gap-3 mb-4" aria-hidden="true">
//                       <div className="w-8 h-0.5 bg-black"></div>
//                       <span className="text-xs tracking-widest uppercase font-semibold text-black">
//                         Benefits
//                       </span>
//                     </div>
//                     <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
//                       {serviceData.benefits.title}
//                     </h3>
//                     <p className="text-gray-500 mb-4 text-sm leading-relaxed">
//                       {serviceData.benefits.description}
//                     </p>
//                     <ul className="space-y-3">
//                       {serviceData.benefits.points.map((point, index) => (
//                         <li key={index} className="flex items-start gap-3">
//                           <div className="w-5 h-5 bg-black flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
//                             <ChevronRight className="w-3 h-3 text-white" />
//                           </div>
//                           <span className="text-gray-600 text-sm">{point}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               {/* Why Choose Us — Accordion (FAQ Schema compatible) */}
//               <div className="bg-white shadow-lg p-6 md:p-8">
//                 <div className="flex items-center gap-3 mb-4" aria-hidden="true">
//                   <div className="w-10 h-0.5 bg-black"></div>
//                   <span className="text-xs tracking-widest uppercase font-semibold text-black">
//                     Why Choose Us
//                   </span>
//                 </div>
//                 <h3 className="text-xl md:text-2xl font-bold text-black mb-6">
//                   {serviceData.whyChoose.title}
//                 </h3>
//                 <div className="space-y-3">
//                   {serviceData.whyChoose.points.map((item, index) => (
//                     <div
//                       key={index}
//                       className={`border-2 overflow-hidden transition-all duration-300 ${
//                         expandedIndex === index ? "border-black" : "border-gray-100"
//                       }`}
//                     >
//                       <button
//                         onClick={() => toggleAccordion(index)}
//                         className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
//                         aria-expanded={expandedIndex === index}
//                         aria-controls={`accordion-body-${index}`}
//                         id={`accordion-header-${index}`}
//                       >
//                         <div className="flex items-center gap-3">
//                           <span
//                             className={`text-2xl font-light transition-colors ${
//                               expandedIndex === index ? "text-black" : "text-gray-300"
//                             }`}
//                             aria-hidden="true"
//                           >
//                             {expandedIndex === index ? "−" : "+"}
//                           </span>
//                           <span className="text-left text-gray-800 font-medium text-sm">
//                             {item.title}
//                           </span>
//                         </div>
//                       </button>
//                       <div
//                         id={`accordion-body-${index}`}
//                         role="region"
//                         aria-labelledby={`accordion-header-${index}`}
//                         className={`transition-all duration-300 overflow-hidden ${
//                           expandedIndex === index ? "max-h-48" : "max-h-0"
//                         }`}
//                       >
//                         <div className="px-4 pb-4 pt-2 text-gray-500 text-sm border-t border-gray-100 leading-relaxed">
//                           {item.description}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* CTA */}
//               <div className="bg-black shadow-lg p-8 text-white text-center">
//                 <div className="w-12 h-0.5 bg-white/30 mx-auto mb-6" aria-hidden="true"></div>
//                 <h3 className="text-2xl font-bold mb-4 tracking-tight">
//                   Visit Today
//                 </h3>
//                 <p className="mb-8 text-gray-400 leading-relaxed">
//                   You'll know the minute you arrive this is the place. We are
//                   here to surpass your desires.
//                 </p>
//                 <a href="/contacts" aria-label={`Book an appointment for ${serviceData.title}`}>
//                   <button className="px-8 py-3 border border-white/30 text-white text-xs tracking-widest uppercase font-semibold hover:bg-white/10 transition-all duration-300">
//                     Make Appointment
//                   </button>
//                 </a>
//               </div>
//             </main>

//             {/* ── Sidebar ── */}
//             <aside className="lg:col-span-3 order-2 lg:order-1" aria-label="Services navigation and contact">
//               <div className="bg-white shadow-lg overflow-hidden lg:sticky lg:top-8">

//                 {/* Sidebar Header */}
//                 <div className="bg-black text-white px-6 py-4">
//                   <p className="text-lg font-bold tracking-widest uppercase">
//                     PhysioCentric
//                   </p>
//                 </div>

//                 {/* Services Nav */}
//                 <nav aria-label="Other physiotherapy services">
//                   {serviceData.sidebar.services.map((service, index) => (
//                     <button
//                       key={index}
//                       onClick={() => handleSidebarClick(service)}
//                       aria-current={service === serviceData.title ? "page" : undefined}
//                       className={`w-full text-left px-6 py-3 transition-colors border-b border-gray-100 text-sm group flex items-center justify-between ${
//                         service === serviceData.title
//                           ? "bg-black text-white"
//                           : "text-gray-600 hover:bg-gray-50 hover:text-black"
//                       }`}
//                     >
//                       <span>{service}</span>
//                       <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
//                     </button>
//                   ))}
//                 </nav>

//                 {/* Download Brochure */}
//                 <div className="p-6 bg-gray-900">
//                   <button
//                     className="w-full flex items-center justify-center gap-2 bg-white text-black px-6 py-3 text-xs tracking-widest uppercase font-semibold hover:bg-gray-100 transition-all duration-300"
//                     aria-label="Download PhysioCentric services brochure"
//                   >
//                     <Download className="w-5 h-5" aria-hidden="true" />
//                     Download Brochure
//                   </button>
//                 </div>

//                 {/* Contact Info */}
//                 <div className="p-6 space-y-4">
//                   <div className="flex items-center gap-3">
//                     <div className="w-9 h-9 bg-black flex items-center justify-center flex-shrink-0" aria-hidden="true">
//                       <Phone className="w-4 h-4 text-white" />
//                     </div>
//                     <div>
//                       <p className="text-xs text-gray-400 tracking-widest uppercase">
//                         Call Us
//                       </p>
//                       <a
//                         href="tel:09810513841"
//                         className="text-black font-medium text-sm hover:underline"
//                         aria-label="Call PhysioCentric at 09810513841"
//                       >
//                         09810513841
//                       </a>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <div className="w-9 h-9 bg-black flex items-center justify-center flex-shrink-0" aria-hidden="true">
//                       <Mail className="w-4 h-4 text-white" />
//                     </div>
//                     <div>
//                       <p className="text-xs text-gray-400 tracking-widest uppercase">
//                         Email
//                       </p>
//                       <a
//                         href="mailto:reception.physiocentric@gmail.com"
//                         className="text-black font-medium text-sm hover:underline"
//                         aria-label="Email PhysioCentric"
//                       >
//                         reception.physiocentric@gmail.com
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </aside>

//           </div>
//         </div>
//       </section>

//       <LocationsSlider />

//       <style>{`
//         * { box-sizing: border-box; }
//         .container { width: 100%; margin-left: auto; margin-right: auto; }
//         @media (max-width: 768px) { .container { padding-left: 1rem; padding-right: 1rem; } }
//         button { transition: all 0.3s ease; }
//         ::-webkit-scrollbar { width: 8px; }
//         ::-webkit-scrollbar-track { background: #f1f1f1; }
//         ::-webkit-scrollbar-thumb { background: #000; }
//         ::-webkit-scrollbar-thumb:hover { background: #333; }
//       `}</style>
//     </div>
//   );
// };

// export default ServiceDetailPage;


import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Download, Phone, Mail, ChevronRight, Home, Plus, Minus } from "lucide-react";
import { servicesDetailData } from "../../../data/servicesData/servicesData";
import LocationsSlider from "../Locationdetailpage/LocationsSlider";

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [expandedIndex, setExpandedIndex] = useState(3);
  const [expandedFaq, setExpandedFaq] = useState(0);

  const serviceData =
    servicesDetailData[slug] || servicesDetailData["physiotherapist"];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 500);
  }, [slug]);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const handleSidebarClick = (serviceName) => {
    navigate(`/service/${serviceName.toLowerCase().replace(/\s+/g, "-")}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-6" aria-hidden="true">
            <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-black rounded-full animate-spin"></div>
            <div className="absolute inset-4 bg-black rounded-full animate-pulse"></div>
          </div>
          <p className="text-xs tracking-widest uppercase text-gray-400" aria-live="polite">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  // Build canonical URL from current slug
  const canonicalUrl = `https://www.physiocentric.in${serviceData.seo?.urlSlug || `/service/${slug}`}`;
  const metaTitle = serviceData.seo?.metaTitle || `${serviceData.title} in New Delhi – PhysioCentric | Expert Physiotherapy`;
  const metaDescription =
    serviceData.seo?.metaDescription ||
    `${serviceData.description?.substring(0, 150)}... Book a session at PhysioCentric, Gulmohar Park, New Delhi. Call 09810513841.`;

  // Structured Data for this individual service
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "url": canonicalUrl,
        "name": metaTitle,
        "description": metaDescription,
        "inLanguage": "en-IN",
        "about": {
          "@type": "MedicalTherapy",
          "name": serviceData.title,
          "description": serviceData.longDescription || serviceData.description,
          "relevantSpecialty": "PhysicalTherapy"
        },
        "provider": {
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
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.physiocentric.in" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.physiocentric.in/services" },
          { "@type": "ListItem", "position": 3, "name": serviceData.title, "item": canonicalUrl }
        ]
      },
      // FAQ schema — prefers dedicated FAQ content, falls back to "Why Choose Us" points
      ...(serviceData.faqs?.length > 0
        ? [{
            "@type": "FAQPage",
            "mainEntity": serviceData.faqs.map((item) => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": { "@type": "Answer", "text": item.answer }
            }))
          }]
        : serviceData.whyChoose?.points?.length > 0
        ? [{
            "@type": "FAQPage",
            "mainEntity": serviceData.whyChoose.points.map((item) => ({
              "@type": "Question",
              "name": item.title,
              "acceptedAnswer": { "@type": "Answer", "text": item.description }
            }))
          }]
        : [])
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-10">

      {/* ───────────────── SEO HEAD ───────────────── */}
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta
          name="keywords"
          content={`${serviceData.title} Delhi, ${serviceData.title} physiotherapy New Delhi, ${serviceData.title} treatment Gulmohar Park, PhysioCentric ${serviceData.title}`}
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={serviceData.mainImage || "https://www.physiocentric.in/og-image.jpg"} />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="PhysioCentric" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={serviceData.mainImage || "https://www.physiocentric.in/og-image.jpg"} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* ───────────────── BANNER / HERO ───────────────── */}
      <div
        className="relative h-[280px] md:h-[340px] bg-cover bg-center"
        style={{ backgroundImage: `url('${serviceData.bannerImage}')` }}
      >
        <div className="absolute inset-0 bg-black/70" aria-hidden="true"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center max-w-7xl">
          <h1 className="text-3xl md:text-5xl mt-16 md:mt-20 text-white mb-2 font-bold tracking-tight">
            {serviceData.hero?.headline || serviceData.title}
          </h1>
          {serviceData.hero?.subheadline && (
            <p className="text-white/80 text-sm md:text-lg mb-4 max-w-2xl">
              {serviceData.hero.subheadline}
            </p>
          )}
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-white/60 text-sm list-none p-0 m-0">
              <li>
                <button onClick={() => navigate("/")} className="hover:text-white transition-colors flex items-center gap-1">
                  <Home className="w-4 h-4" aria-hidden="true" /> Home
                </button>
              </li>
              <li aria-hidden="true"><span>/</span></li>
              <li>
                <button onClick={() => navigate("/services")} className="hover:text-white transition-colors">
                  Services
                </button>
              </li>
              <li aria-hidden="true"><span>/</span></li>
              <li>
                <span className="text-white" aria-current="page">{serviceData.title}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* ───────────────── MAIN CONTENT ───────────────── */}
      <section className="py-8 md:py-16" aria-label={`${serviceData.title} service details`}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* ── Main Content ── */}
            <main className="lg:col-span-9 order-1 lg:order-2 space-y-6 md:space-y-8">

              {/* Main Image */}
              <div className="bg-white shadow-lg overflow-hidden">
                <img
                  src={serviceData.mainImage}
                  alt={`${serviceData.title} treatment at PhysioCentric, New Delhi`}
                  className="w-full h-[220px] sm:h-[320px] md:h-[400px] object-cover"
                  loading="eager"
                  fetchpriority="high"
                  width={900}
                  height={400}
                />
              </div>

              {/* Hero Intro + Overview */}
              <div className="bg-white shadow-lg p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4" aria-hidden="true">
                  <div className="w-10 h-0.5 bg-black"></div>
                  <span className="text-xs tracking-widest uppercase font-semibold text-black">Overview</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">{serviceData.title}</h2>
                {serviceData.hero?.intro && (
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 font-medium">
                    {serviceData.hero.intro}
                  </p>
                )}
                {/* <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                  {serviceData.description}
                </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {serviceData.longDescription}
                </p> */}
              </div>

              {/* Why This Service Matters */}
              {serviceData.whyMatters && (
                <div className="bg-white shadow-lg p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4" aria-hidden="true">
                    <div className="w-10 h-0.5 bg-black"></div>
                    <span className="text-xs tracking-widest uppercase font-semibold text-black">Why It Matters</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                    Why {serviceData.title} Matters
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {serviceData.whyMatters}
                  </p>
                </div>
              )}

              {/* Who Needs This */}
              {serviceData.whoNeedsThis?.length > 0 && (
                <div className="bg-white shadow-lg p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4" aria-hidden="true">
                    <div className="w-10 h-0.5 bg-black"></div>
                    <span className="text-xs tracking-widest uppercase font-semibold text-black">Who Needs This</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                    Is {serviceData.title} Right for You?
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {serviceData.whoNeedsThis.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-black flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                          <ChevronRight className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-600 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Benefits */}
              <div className="bg-white shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="h-[220px] md:h-full">
                    <img
                      src={serviceData.benefitImage}
                      alt={`Benefits of ${serviceData.title} at PhysioCentric`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={450}
                      height={400}
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4" aria-hidden="true">
                      <div className="w-8 h-0.5 bg-black"></div>
                      <span className="text-xs tracking-widest uppercase font-semibold text-black">Benefits</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                      {serviceData.benefits.title}
                    </h3>
                    <p className="text-gray-500 mb-4 text-sm leading-relaxed">
                      {serviceData.benefits.description}
                    </p>
                    <ul className="space-y-3">
                      {serviceData.benefits.points.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-black flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                            <ChevronRight className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-600 text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Process / How It Works */}
              {serviceData.process?.length > 0 && (
                <div className="bg-white shadow-lg p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4" aria-hidden="true">
                    <div className="w-10 h-0.5 bg-black"></div>
                    <span className="text-xs tracking-widest uppercase font-semibold text-black">Our Process</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-6">
                    How {serviceData.title} Works at PhysioCentric
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {serviceData.process.map((step, index) => (
                      <div key={index} className="flex gap-4 border border-gray-100 p-4">
                        <div className="w-9 h-9 bg-black text-white flex items-center justify-center flex-shrink-0 font-bold text-sm" aria-hidden="true">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-semibold text-black text-sm mb-1">{step.title}</p>
                          <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Why Choose Us — Accordion (also feeds FAQ schema as fallback) */}
              <div className="bg-white shadow-lg p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4" aria-hidden="true">
                  <div className="w-10 h-0.5 bg-black"></div>
                  <span className="text-xs tracking-widest uppercase font-semibold text-black">Why Choose Us</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-6">
                  {serviceData.whyChoose.title}
                </h3>
                <div className="space-y-3">
                  {serviceData.whyChoose.points.map((item, index) => (
                    <div
                      key={index}
                      className={`border-2 overflow-hidden transition-all duration-300 ${
                        expandedIndex === index ? "border-black" : "border-gray-100"
                      }`}
                    >
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                        aria-expanded={expandedIndex === index}
                        aria-controls={`accordion-body-${index}`}
                        id={`accordion-header-${index}`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`text-2xl font-light transition-colors ${
                              expandedIndex === index ? "text-black" : "text-gray-300"
                            }`}
                            aria-hidden="true"
                          >
                            {expandedIndex === index ? "−" : "+"}
                          </span>
                          <span className="text-left text-gray-800 font-medium text-sm">{item.title}</span>
                        </div>
                      </button>
                      <div
                        id={`accordion-body-${index}`}
                        role="region"
                        aria-labelledby={`accordion-header-${index}`}
                        className={`transition-all duration-300 overflow-hidden ${
                          expandedIndex === index ? "max-h-48" : "max-h-0"
                        }`}
                      >
                        <div className="px-4 pb-4 pt-2 text-gray-500 text-sm border-t border-gray-100 leading-relaxed">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              {serviceData.faqs?.length > 0 && (
                <div className="bg-white shadow-lg p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4" aria-hidden="true">
                    <div className="w-10 h-0.5 bg-black"></div>
                    <span className="text-xs tracking-widest uppercase font-semibold text-black">FAQs</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-6">
                    Frequently Asked Questions about {serviceData.title}
                  </h3>
                  <div className="space-y-3">
                    {serviceData.faqs.map((faq, index) => (
                      <div
                        key={index}
                        className={`border-2 overflow-hidden transition-all duration-300 ${
                          expandedFaq === index ? "border-black" : "border-gray-100"
                        }`}
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full flex items-center justify-between gap-3 p-4 hover:bg-gray-50 transition-colors text-left"
                          aria-expanded={expandedFaq === index}
                          aria-controls={`faq-body-${index}`}
                          id={`faq-header-${index}`}
                        >
                          <span className="text-gray-800 font-medium text-sm">{faq.question}</span>
                          {expandedFaq === index ? (
                            <Minus className="w-4 h-4 text-black flex-shrink-0" aria-hidden="true" />
                          ) : (
                            <Plus className="w-4 h-4 text-gray-300 flex-shrink-0" aria-hidden="true" />
                          )}
                        </button>
                        <div
                          id={`faq-body-${index}`}
                          role="region"
                          aria-labelledby={`faq-header-${index}`}
                          className={`transition-all duration-300 overflow-hidden ${
                            expandedFaq === index ? "max-h-56" : "max-h-0"
                          }`}
                        >
                          <div className="px-4 pb-4 pt-1 text-gray-500 text-sm border-t border-gray-100 leading-relaxed">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="bg-black shadow-lg p-8 text-white text-center">
                <div className="w-12 h-0.5 bg-white/30 mx-auto mb-6" aria-hidden="true"></div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Visit PhysioCentric Today</h3>
                <p className="mb-8 text-gray-400 leading-relaxed max-w-xl mx-auto">
                  {serviceData.ctaText ||
                    "You'll know the minute you arrive this is the place. We are here to surpass your desires."}
                </p>
                <a href="/contacts" aria-label={`Book an appointment for ${serviceData.title}`}>
                  <button className="px-8 py-3 border border-white/30 text-white text-xs tracking-widest uppercase font-semibold hover:bg-white/10 transition-all duration-300">
                    Make Appointment
                  </button>
                </a>
              </div>
            </main>

            {/* ── Sidebar ── */}
            <aside className="lg:col-span-3 order-2 lg:order-1" aria-label="Services navigation and contact">
              <div className="bg-white shadow-lg overflow-hidden lg:sticky lg:top-8">

                {/* Sidebar Header */}
                <div className="bg-black text-white px-6 py-4">
                  <p className="text-lg font-bold tracking-widest uppercase">PhysioCentric</p>
                </div>

                {/* Services Nav */}
                <nav aria-label="Other physiotherapy services">
                  {serviceData.sidebar.services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => handleSidebarClick(service)}
                      aria-current={service === serviceData.title ? "page" : undefined}
                      className={`w-full text-left px-6 py-3 transition-colors border-b border-gray-100 text-sm group flex items-center justify-between ${
                        service === serviceData.title
                          ? "bg-black text-white"
                          : "text-gray-600 hover:bg-gray-50 hover:text-black"
                      }`}
                    >
                      <span>{service}</span>
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    </button>
                  ))}
                </nav>

                {/* Download Brochure */}
                <div className="p-6 bg-gray-900">
                  <button
                    className="w-full flex items-center justify-center gap-2 bg-white text-black px-6 py-3 text-xs tracking-widest uppercase font-semibold hover:bg-gray-100 transition-all duration-300"
                    aria-label="Download PhysioCentric services brochure"
                  >
                    <Download className="w-5 h-5" aria-hidden="true" />
                    Download Brochure
                  </button>
                </div>

                {/* Contact Info */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-black flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 tracking-widest uppercase">Call Us</p>
                      <a href="tel:09810513841" className="text-black font-medium text-sm hover:underline" aria-label="Call PhysioCentric at 09810513841">
                        09810513841
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-black flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 tracking-widest uppercase">Email</p>
                      <a href="mailto:reception.physiocentric@gmail.com" className="text-black font-medium text-sm hover:underline" aria-label="Email PhysioCentric">
                        reception.physiocentric@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      <LocationsSlider />

      <style>{`
        * { box-sizing: border-box; }
        .container { width: 100%; margin-left: auto; margin-right: auto; }
        @media (max-width: 768px) { .container { padding-left: 1rem; padding-right: 1rem; } }
        button { transition: all 0.3s ease; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: #000; }
        ::-webkit-scrollbar-thumb:hover { background: #333; }
      `}</style>
    </div>
  );
};

export default ServiceDetailPage;