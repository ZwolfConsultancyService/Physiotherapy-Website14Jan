import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const locations = [
  { name: "Panchsheel Park",   slug: "panchsheel-park" },
  { name: "Niti Bagh",         slug: "niti-bagh" },
  { name: "Gulmohar Park",     slug: "gulmohar-park" },
  { name: "Hauz Khas Enclave", slug: "hauz-khas-enclave" },
  { name: "Anand Lok",         slug: "anand-lok" },
  { name: "Uday Park",         slug: "uday-park" },
  { name: "Sarvpriya Vihar",   slug: "sarvpriya-vihar" },
  { name: "Sarvodaya Enclave", slug: "sarvodaya-enclave" },
  { name: "Defence Colony",    slug: "defence-colony" },
  { name: "Maharani Bagh",     slug: "maharani-bagh" },
  { name: "DLF Phase 1",       slug: "dlf-phase-1" },
  { name: "Arjun Marg",        slug: "arjun-marg" },
  { name: "DLF Phase 3",       slug: "dlf-phase-3" },
  { name: "DLF Phase 4",       slug: "dlf-phase-4" },
  { name: "DLF Phase 5",       slug: "dlf-phase-5" },
  { name: "Chhatarpur",        slug: "chhatarpur" },
  { name: "Aero City",         slug: "aero-city" },
  { name: "Nirvana Country",   slug: "nirvana-country" },
  { name: "Sushant Lok",       slug: "sushant-lok" },
  { name: "Sikanderpur",       slug: "sikanderpur" },
  { name: "Garden Estate",     slug: "garden-estate" },
  { name: "Sultanpur",         slug: "sultanpur" },
];

// Pass serviceSlug as prop OR it reads from useParams
// Usage in ServiceDetailPage: <LocationsSlider />
// Usage in LocationDetailPage: <LocationsSlider serviceSlug={serviceSlug} />
const LocationsSlider = ({ serviceSlug: propServiceSlug }) => {
  const navigate = useNavigate();
  const params = useParams();

  // Determine current service slug:
  // If on ServiceDetailPage → params.slug is the service slug directly
  // If on LocationDetailPage → use the passed serviceSlug prop
  const currentServiceSlug = propServiceSlug || params.slug || "physiotherapy";

  const doubled = [...locations, ...locations];

  return (
    <div className="bg-white border-t border-b border-gray-100 py-6 overflow-hidden relative">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10"
        style={{ background: "linear-gradient(to right, white, transparent)" }} />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10"
        style={{ background: "linear-gradient(to left, white, transparent)" }} />

      {/* Label */}
      <p className="text-center text-xs tracking-widest uppercase text-gray-400 mb-5 font-medium">
        Our Service Locations
      </p>

      {/* Scrolling track */}
      <div
        className="flex gap-3 w-max"
        style={{ animation: "locscroll 32s linear infinite" }}
        onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
        onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
      >
        {doubled.map((loc, i) => (
          <button
            key={i}
           onClick={() => navigate(`/service/${currentServiceSlug}/${loc.slug}`)}
            className="flex items-center gap-2.5 border border-gray-200 rounded-full px-5 py-2.5
              hover:border-black hover:bg-black hover:text-white
              transition-all duration-300 whitespace-nowrap group bg-white"
          >
            <span className="text-gray-800 text-sm font-medium group-hover:text-white transition-colors">
              {loc.name}
            </span>
            <span
              className="w-6 h-6 bg-black rounded-full flex items-center justify-center
                flex-shrink-0 group-hover:bg-white transition-colors duration-300"
            >
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2.5 6h7M6.5 3l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white group-hover:text-black transition-colors"
                />
              </svg>
            </span>
          </button>
        ))}
      </div>

      <style>{`
        @keyframes locscroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default LocationsSlider;