import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import aboutImage from "../../../assets/aboutsection.png"; // apna actual image path yahan daalo

export default function AboutSection() {
  return (
    <section className="pc-about relative bg-white py-12 md:py-16 overflow-hidden">
      {/* Fonts — same family set as Hero, so headings/labels match across the page */}
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <style>{`
        .pc-about { font-family: 'IBM Plex Sans', sans-serif; }
        .pc-about .pc-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .pc-about .pc-mono { font-family: 'IBM Plex Mono', monospace; letter-spacing: 0.02em; }
      `}</style>

      {/* faint arc watermark — same range-of-motion motif as the hero, kept fully inside the section so it never causes overflow */}
      <svg
        className="absolute -top-16 -left-16 w-80 h-80 opacity-[0.04] pointer-events-none"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <path d="M20 180 A160 160 0 0 1 180 20" fill="none" stroke="#000" strokeWidth="1" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            {/* Eyebrow — matches hero's arc + mono label pattern */}
            <div className="flex items-center gap-3 mb-6">
              <svg width="24" height="24" viewBox="0 0 28 28" aria-hidden="true">
                <path d="M4 22 A18 18 0 0 1 22 4" fill="none" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="4" cy="22" r="2" fill="#000" />
                <circle cx="22" cy="4" r="2" fill="#000" />
              </svg>
              <span className="pc-mono text-[11px] tracking-[0.25em] uppercase text-black/60">
               About Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="pc-display text-3xl md:text-4xl lg:text-[3.25rem] leading-[1.1] font-medium text-black">
              New Delhi's trusted physiotherapy centre
            </h2>

            {/* Paragraphs */}
            <div className="mt-6 space-y-4">
              <p className="text-black/80 text-lg leading-relaxed">
                PhysioCentric is a leading physiotherapy centre in Gulmohar Park,
                New Delhi — rated 5.0 on Google by 37+ patients. We specialise in
                evidence-based physiotherapy to help you recover, move better and
                live pain-free.
              </p>
              <p className="text-black/80 text-base leading-relaxed max-w-lg">
                Our physiotherapists treat back pain, joint pain, sports injuries,
                post-surgical rehabilitation and neurological conditions — with
                personalised plans for patients of all ages.
              </p>
            </div>

            {/* Info pills — thin black borders, mono labels, echoes the hero's bottom info strip */}
            {/* <div className="flex flex-wrap gap-3 mt-8">
              {[
                { label: "Location", value: "Gulmohar Park, New Delhi" },
                { label: "Hours", value: "Mon–Sat, 9AM–7PM" },
                { label: "Rating", value: "5.0 · 37 Reviews" },
              ].map((item) => (
                <div key={item.label} className="border border-black/15 px-4 py-2.5">
                  <p className="pc-mono text-[9px] tracking-[0.18em] uppercase text-black/40">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-black mt-0.5">{item.value}</p>
                </div>
              ))}
            </div> */}

            {/* CTA */}
            <Link to="/services">
              <button className="mt-9 bg-black hover:bg-black/85 text-white text-xs tracking-[0.15em] uppercase px-10 py-4 transition-transform duration-300 hover:-translate-y-0.5">
                View Services
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* frame + image, contained inside its own box so nothing bleeds past the column and causes horizontal scroll */}
            <div className="relative">
              <div className="absolute -bottom-5 -left-5 w-28 h-28 border-4 border-black" aria-hidden="true" />
              <div className="relative overflow-hidden shadow-2xl">
                <img
                  src={aboutImage}
                  alt="PhysioCentric physiotherapy centre, New Delhi"
                  className="w-full h-[420px] md:h-[520px] object-cover grayscale-[10%]"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.12) 0%, transparent 40%)" }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}