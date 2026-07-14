import React from "react";
import { Helmet } from "react-helmet-async";
import whyChooseImage from "../../../assets/image01.png"; // apna actual path yahan daalo
import aboutImage from "../../../assets/aboutsection.png"; // dusri image, accent ke liye — agar na ho toh whyChooseImage hi dono jagah use kar do

export default function WhyChooseUsSection() {
  const points = [
    { n: "01", title: "Evidence-based treatment", desc: "Every plan is built around your specific recovery, not a generic routine." },
    { n: "02", title: "Qualified physiotherapists", desc: "Experienced hands for back pain, sports injury and post-surgical rehab." },
    { n: "03", title: "Real, tracked results", desc: "Progress reviewed at every visit, so you always know what's working." },
  ];

  return (
    <section className="pc-why relative bg-white text-black py-12 sm:py-14 md:py-16 overflow-hidden">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <style>{`
        .pc-why { font-family: 'IBM Plex Sans', sans-serif; }
        .pc-why .pc-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .pc-why .pc-mono { font-family: 'IBM Plex Mono', monospace; letter-spacing: 0.02em; }
        .pc-gold { color: #000000; }
        .pc-gold-bg { background-color: #000000; }
        .pc-gold-border { border-color: #000000; }
      `}</style>

      {/* faint brass glow, contained */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #000000 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-16 lg:gap-20 items-center">
          {/* Left — layered image composition */}
          <div className="order-2 lg:order-1 relative max-w-md mx-auto lg:mx-0 w-full mt-14 lg:mt-0">
            {/* thin gold frame offset behind the main image */}
            <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 w-full h-full border-2 pc-gold-border" aria-hidden="true" />

            <div className="relative overflow-hidden shadow-xl">
              <img
                src={whyChooseImage}
                alt="Physiotherapy treatment session at PhysioCentric"
                className="w-full h-[340px] sm:h-[420px] md:h-[480px] object-cover grayscale-[20%]"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 40%)" }}
                aria-hidden="true"
              />
            </div>

            {/* smaller accent image, overlapping bottom-right — adds depth instead of empty space */}
            {/* <div className="absolute -bottom-8 -right-6 sm:-bottom-10 sm:-right-10 w-32 h-40 sm:w-40 sm:h-48 border-4 border-white shadow-2xl hidden sm:block">
              <img
                src={aboutImage}
                alt="PhysioCentric treatment room detail"
                className="w-full h-full object-cover grayscale-[20%]"
                loading="lazy"
              />
            </div> */}

            {/* floating rating badge */}
            {/* <div className="absolute -top-5 -right-5 sm:-top-6 sm:-right-8 bg-white border pc-gold-border px-4 py-3 sm:px-5 sm:py-4 shadow-xl">
              <p className="pc-display text-xl sm:text-2xl font-medium leading-none text-black">5.0</p>
              <p className="pc-mono text-[9px] tracking-[0.15em] uppercase pc-gold mt-1">37 Reviews</p>
            </div> */}
          </div>

          {/* Right — content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <span className="w-8 h-px pc-gold-bg" aria-hidden="true" />
              <span className="pc-mono text-[11px] tracking-[0.25em] uppercase pc-gold">
                Our Advantage
              </span>
            </div>

            <h2 className="pc-display text-[2.1rem] leading-[1.12] sm:text-4xl md:text-5xl lg:text-[3.1rem] font-medium">
              Care that treats the cause, not just the pain.
            </h2>

        

            {/* Points */}
            <div className="mt-9 sm:mt-10 divide-y divide-black/10 border-t border-black/10">
              {points.map((p) => (
                <div key={p.n} className="flex items-start gap-4 sm:gap-6 py-5 sm:py-6">
                  <span className="pc-mono text-xs pc-gold pt-1 shrink-0">{p.n}</span>
                  <div>
                    <p className="pc-display text-lg sm:text-xl font-medium text-black">{p.title}</p>
                    <p className="mt-1.5 text-sm sm:text-[15px] text-black/55 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-9 sm:mt-11 bg-black text-white text-xs tracking-[0.15em] uppercase px-8 py-4 font-semibold transition-transform duration-300 hover:-translate-y-0.5 w-full sm:w-auto">
              Book a Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}