


// import React from "react";
// import { Link } from "react-router-dom";
// import { HelmetProvider, Helmet } from "react-helmet-async";
// import heroImage from "../../../assets/hero.png";

// export default function HeroSection() {
//   return (
//     <HelmetProvider>
//       {/* ───────────────── SEO HEAD ───────────────── */}
//       <Helmet>
//         {/* Primary Meta */}
//         <title>PhysioCentric – Expert Physiotherapy Centre in New Delhi | Pain Relief</title>
//         <meta
//           name="description"
//           content="PhysioCentric is New Delhi's top-rated physiotherapy centre (5.0 ★ Google). We treat back pain, muscle strain, joint issues & sports injuries with personalised care. Book now!"
//         />
//         <meta name="keywords" content="physiotherapy centre New Delhi, physiotherapist Delhi, back pain treatment Delhi, muscle strain physiotherapy, joint pain relief, sports injury physiotherapy, Gulmohar Park physiotherapy, best physiotherapist Delhi" />
//         <meta name="author" content="PhysioCentric" />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href="https://www.physiocentric.in/" />

//         {/* Open Graph (Facebook / WhatsApp / LinkedIn) */}
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://www.physiocentric.in/" />
//         <meta property="og:title" content="PhysioCentric – Expert Physiotherapy Centre in New Delhi" />
//         <meta property="og:description" content="New Delhi's trusted physiotherapy centre rated 5.0 ★ on Google. Treating back pain, joint issues, muscle strain & more. Book your appointment today." />
//         <meta property="og:image" content="https://www.physiocentric.in/og-image.jpg" />
//         <meta property="og:locale" content="en_IN" />
//         <meta property="og:site_name" content="PhysioCentric" />

//         {/* Twitter Card */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="PhysioCentric – Expert Physiotherapy in New Delhi" />
//         <meta name="twitter:description" content="Rated 5.0 ★ on Google. Personalised physiotherapy for pain relief in Gulmohar Park, New Delhi." />
//         <meta name="twitter:image" content="https://www.physiocentric.in/og-image.jpg" />

//         {/* Geo / Local SEO */}
//         <meta name="geo.region" content="IN-DL" />
//         <meta name="geo.placename" content="New Delhi" />
//         <meta name="geo.position" content="28.5355;77.2090" />
//         <meta name="ICBM" content="28.5355, 77.2090" />

//         {/* Structured Data – LocalBusiness (JSON-LD) */}
//         <script type="application/ld+json">
//           {JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "MedicalBusiness",
//             "name": "PhysioCentric",
//             "image": "https://www.physiocentric.in/og-image.jpg",
//             "url": "https://www.physiocentric.in",
//             "telephone": "+919810513841",
//             "description": "Expert physiotherapy centre in New Delhi offering treatment for back pain, muscle strain, joint issues, and sports injuries.",
//             "address": {
//               "@type": "PostalAddress",
//               "streetAddress": "Gulmohar Park",
//               "addressLocality": "New Delhi",
//               "addressRegion": "Delhi",
//               "postalCode": "110049",
//               "addressCountry": "IN"
//             },
//             "geo": {
//               "@type": "GeoCoordinates",
//               "latitude": 28.5355,
//               "longitude": 77.2090
//             },
//             "openingHoursSpecification": [
//               {
//                 "@type": "OpeningHoursSpecification",
//                 "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
//                 "opens": "09:00",
//                 "closes": "19:00"
//               }
//             ],
//             "aggregateRating": {
//               "@type": "AggregateRating",
//               "ratingValue": "5.0",
//               "reviewCount": "37",
//               "bestRating": "5",
//               "worstRating": "1"
//             },
//             "sameAs": [
//               "https://g.co/kgs/physiocentric"
//             ]
//           })}
//         </script>
//       </Helmet>

//       {/* ───────────────── HERO UI ───────────────── */}
//       <div className="relative bg-white overflow-hidden border-b border-gray-100">
//         <div className="max-w-7xl mx-auto px-4 py-20 md:py-32">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//             {/* Left Content */}
//             <div className="space-y-6 lg:space-y-8">
//               {/* Eyebrow */}
//               <div className="flex items-center gap-4">
//                 <div className="w-16 h-0.5 bg-black"></div>
//                 <span className="text-black text-xs tracking-widest uppercase font-semibold">
//                   PHYSIOTHERAPY CENTRE — NEW DELHI
//                 </span>
//               </div>

//               {/* H1 — primary SEO heading */}
//               <h1
//                 style={{ fontFamily: "Lexend Peta, sans-serif" }}
//                 className="text-4xl md:text-5xl lg:text-6xl text-black leading-tight"
//               >
//                 Expert Physiotherapy Centre For Pain Relief
//               </h1>

//               {/* Description */}
//               <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl">
//                 PhysioCentric is New Delhi's trusted physiotherapy center, rated 5.0 on Google.
//                 We treat muscle strain, back pain, joint issues, and more with personalized care.
//               </p>

//               {/* Google Rating */}
//               <div className="flex items-center gap-3">
//                 <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
//                   {[...Array(5)].map((_, i) => (
//                     <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20" aria-hidden="true">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                   ))}
//                 </div>
//                 <span className="text-sm font-bold text-black">5.0</span>
//                 <span className="text-sm text-gray-400">· 37 Google Reviews</span>
//               </div>

//               {/* CTA */}
//               <div className="flex flex-wrap gap-4">
//                 <Link to="/contacts">
//                   <button
//                     className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-xs tracking-widest uppercase font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
//                     aria-label="Book a physiotherapy appointment"
//                   >
//                     BOOK APPOINTMENT
//                   </button>
//                 </Link>
//                 <a href="tel:+919810513841" aria-label="Call PhysioCentric at 098105 13841">
//                   <button className="border border-black text-black px-8 py-4 text-xs tracking-widest uppercase font-semibold hover:bg-black hover:text-white transition-all duration-300">
//                     098105 13841
//                   </button>
//                 </a>
//               </div>
//             </div>

//             {/* Right Image */}
//             <div className="relative">
//               <div className="relative rounded-3xl overflow-hidden shadow-2xl">
//                 <img
//                   src={heroImage}
//                   alt="Physiotherapist treating a patient at PhysioCentric, Gulmohar Park, New Delhi"
//                   className="w-full h-[500px] md:h-[600px] object-cover"
//                   loading="eager"
//                   fetchpriority="high"
//                   width={600}
//                   height={600}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" aria-hidden="true"></div>

//                 {/* Floating info card */}
//                 <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm px-5 py-4 flex items-center justify-between">
//                   <div>
//                     <p className="text-xs text-gray-400 tracking-widest uppercase">Location</p>
//                     <p className="text-sm font-bold text-black">Gulmohar Park, New Delhi</p>
//                   </div>
//                   <div className="w-px h-10 bg-gray-200" aria-hidden="true" />
//                   <div>
//                     <p className="text-xs text-gray-400 tracking-widest uppercase">Hours</p>
//                     <p className="text-sm font-bold text-black">Mon–Sat, 9AM–7PM</p>
//                   </div>
//                   <div className="w-px h-10 bg-gray-200" aria-hidden="true" />
//                   <div>
//                     <p className="text-xs text-gray-400 tracking-widest uppercase">Rating</p>
//                     <p className="text-sm font-bold text-black">5.0 ⭐ Google</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Decorative blobs */}
//               <div className="absolute -top-10 -right-10 w-40 h-40 bg-gray-200 rounded-full blur-3xl opacity-60" aria-hidden="true"></div>
//               <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gray-300 rounded-full blur-3xl opacity-40" aria-hidden="true"></div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </HelmetProvider>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import heroImage from "../../../assets/hero.png";

export default function HeroSection() {
  return (
    <HelmetProvider>
      {/* ───────────────── SEO HEAD ───────────────── */}
      <Helmet>
        {/* Primary Meta */}
        <title>PhysioCentric – Expert Physiotherapy Centre in New Delhi | Pain Relief</title>
        <meta
          name="description"
          content="PhysioCentric is New Delhi's top-rated physiotherapy centre (5.0 ★ Google). We treat back pain, muscle strain, joint issues & sports injuries with personalised care. Book now!"
        />
        <meta name="keywords" content="physiotherapy centre New Delhi, physiotherapist Delhi, back pain treatment Delhi, muscle strain physiotherapy, joint pain relief, sports injury physiotherapy, Gulmohar Park physiotherapy, best physiotherapist Delhi" />
        <meta name="author" content="PhysioCentric" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.physiocentric.in/" />

        {/* Open Graph (Facebook / WhatsApp / LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.physiocentric.in/" />
        <meta property="og:title" content="PhysioCentric – Expert Physiotherapy Centre in New Delhi" />
        <meta property="og:description" content="New Delhi's trusted physiotherapy centre rated 5.0 ★ on Google. Treating back pain, joint issues, muscle strain & more. Book your appointment today." />
        <meta property="og:image" content="https://www.physiocentric.in/og-image.jpg" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="PhysioCentric" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PhysioCentric – Expert Physiotherapy in New Delhi" />
        <meta name="twitter:description" content="Rated 5.0 ★ on Google. Personalised physiotherapy for pain relief in Gulmohar Park, New Delhi." />
        <meta name="twitter:image" content="https://www.physiocentric.in/og-image.jpg" />

        {/* Geo / Local SEO */}
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="New Delhi" />
        <meta name="geo.position" content="28.5355;77.2090" />
        <meta name="ICBM" content="28.5355, 77.2090" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap"
          rel="stylesheet"
        />

        {/* Structured Data – LocalBusiness (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "PhysioCentric",
            "image": "https://www.physiocentric.in/og-image.jpg",
            "url": "https://www.physiocentric.in",
            "telephone": "+919810513841",
            "description": "Expert physiotherapy centre in New Delhi offering treatment for back pain, muscle strain, joint issues, and sports injuries.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Gulmohar Park",
              "addressLocality": "New Delhi",
              "addressRegion": "Delhi",
              "postalCode": "110049",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 28.5355,
              "longitude": 77.209
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "19:00",
              },
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "37",
              "bestRating": "5",
              "worstRating": "1",
            },
            "sameAs": ["https://g.co/kgs/physiocentric"],
          })}
        </script>
      </Helmet>

      {/* ───────────────── TOKENS ───────────────── */}
      <style>{`
        .pc-hero { font-family: 'IBM Plex Sans', sans-serif; }
        .pc-hero .pc-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .pc-hero .pc-mono { font-family: 'IBM Plex Mono', monospace; letter-spacing: 0.02em; }
        .pc-arc {
          animation: pc-sweep 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes pc-sweep {
          from { stroke-dashoffset: 300; opacity: 0; }
          to { stroke-dashoffset: 0; opacity: 1; }
        }
        .pc-fade { animation: pc-rise 0.9s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .pc-fade.pc-d1 { animation-delay: .05s; }
        .pc-fade.pc-d2 { animation-delay: .15s; }
        .pc-fade.pc-d3 { animation-delay: .25s; }
        @keyframes pc-rise {
          from { transform: translateY(14px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .pc-arc, .pc-fade { animation: none !important; opacity: 1 !important; transform: none !important; stroke-dashoffset: 0 !important; }
        }
      `}</style>

      {/* ───────────────── HERO — full-bleed image, black & white ───────────────── */}
      <div className="pc-hero relative w-full h-[92vh] min-h-[600px] max-h-[900px] overflow-hidden bg-black">
        {/* Background image */}
        <img
          src={heroImage}
          alt="Physiotherapist treating a patient at PhysioCentric, Gulmohar Park, New Delhi"
          className="absolute inset-0 w-full h-full object-cover grayscale-[15%] contrast-[1.05]"
          loading="eager"
          fetchpriority="high"
        />

        {/* Overlays — grade the image toward pure black/white, and light it for text */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.45) 42%, rgba(0,0,0,0.15) 65%, rgba(0,0,0,0.35) 100%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 45%, transparent 70%)" }}
          aria-hidden="true"
        />

        {/* fine hairline frame — editorial, black & white poster feel */}
        <div className="absolute inset-4 md:inset-8 border border-white/25 pointer-events-none" aria-hidden="true" />

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-end pb-14 md:pb-16">
          {/* Eyebrow with range-of-motion arc mark */}
          <div className="pc-fade flex items-center gap-3 mb-6">
            <svg width="26" height="26" viewBox="0 0 28 28" aria-hidden="true">
              <path d="M4 22 A18 18 0 0 1 22 4" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" className="pc-arc" pathLength="300" style={{ strokeDasharray: 300 }} />
              <circle cx="4" cy="22" r="2" fill="#fff" />
              <circle cx="22" cy="4" r="2" fill="#fff" />
            </svg>
            <span className="pc-mono text-[11px] tracking-[0.25em] uppercase text-white/70">
              Physiotherapy Centre — Gulmohar Park, New Delhi
            </span>
          </div>

          <h1 className="pc-fade pc-d1 pc-display text-white text-[2.5rem] leading-[1.06] sm:text-6xl lg:text-[5rem] font-medium max-w-3xl">
            Move without
            <br />
            pain, again.
          </h1>

          <p className="pc-fade pc-d2 mt-6 text-white/75 text-base md:text-lg leading-relaxed max-w-lg">
            Personalised physiotherapy for back pain, joint issues, muscle strain
            and sports injuries — from a centre New Delhi rates 5.0 on Google.
          </p>

          {/* Rating + CTA row */}
          <div className="pc-fade pc-d3 mt-9 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              {/* <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="15" height="15" viewBox="0 0 20 20" aria-hidden="true">
                    <path
                      fill="#fff"
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                ))}
              </div> */}
              {/* <span className="pc-mono text-sm text-white">5.0</span>
              <span className="text-sm text-white/60">· 37 Google reviews</span> */}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/contacts">
                <button
                  className="bg-white text-black px-8 py-4 text-xs tracking-[0.15em] uppercase font-semibold transition-transform duration-300 hover:-translate-y-0.5"
                  aria-label="Book a physiotherapy appointment"
                >
                  Book Appointment
                </button>
              </Link>
              <a href="tel:+919810513841" aria-label="Call PhysioCentric at 098105 13841">
                <button className="border border-white text-white px-8 py-4 text-xs tracking-[0.15em] uppercase font-semibold hover:bg-white hover:text-black transition-all duration-300">
                  098105 13841
                </button>
              </a>
               <a href="tel:+9810518407" aria-label="Call PhysioCentric at 098105 18407">
                <button className="border border-white text-white px-8 py-4 text-xs tracking-[0.15em] uppercase font-semibold hover:bg-white hover:text-black transition-all duration-300">
                 098105 18407
                </button>
              </a>
            </div>
          </div>
        </div>

      
      </div>
    </HelmetProvider>
  );
}