// CaseStudyDetailPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Home, ChevronRight, Calendar, Phone, Mail,
  User, Activity, Target, CheckCircle2, Quote,
} from "lucide-react";

// ✅ Now pulled from .env (VITE_API_BASE_URL). Falls back to prod URL if not set.
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://api.physiocentricindia.com";

// ⚠️ Must match the same base path used in CaseStudyPage.jsx
const CASE_STUDY_ENDPOINT = `${API_BASE_URL}/api/case-study`;

const getImageUrl = (cs) => {
  if (typeof cs.image === "string" && cs.image) return cs.image;
  if (cs.image?.url) return cs.image.url;
  if (cs.images?.length > 0 && cs.images[0]?.url) return cs.images[0].url;
  return "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d";
};

const CaseStudyDetailPage = () => {
  // ✅ Route param renamed id → slug (see App.jsx: "/case-studies/:slug")
  const { slug } = useParams();
  const navigate = useNavigate();
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchCaseStudy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const fetchCaseStudy = async () => {
    try {
      setLoading(true);
      setError(null);
      // ⚠️ Assumes the backend can resolve this same route by slug
      // (e.g. GET /api/case-study/:slug). If your backend has a
      // separate slug lookup route, change this to that path instead.
      const res = await fetch(`${CASE_STUDY_ENDPOINT}/${slug}`);
      if (!res.ok) throw new Error("Case study not found");
      const data = await res.json();
      const cs = data.data || data.caseStudy || data;
      setCaseStudy(cs);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ── Loading ──
  if (loading) {
    return (
      <div className="pc-csd min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-6" aria-hidden="true">
            <div className="absolute inset-0 border-4 border-gray-100 rounded-full" />
            <div className="absolute inset-0 border-4 border-transparent border-t-black rounded-full animate-spin" />
            <div className="absolute inset-4 bg-black rounded-full animate-pulse" />
          </div>
          <p className="text-xs tracking-widest uppercase text-black/40" aria-live="polite">
            Loading case study...
          </p>
        </div>
      </div>
    );
  }

  // ── Error / not found ──
  if (error || !caseStudy) {
    return (
      <div className="pc-csd min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black mb-4">Case Study Not Found</h1>
          <p className="text-black/50 mb-6 text-sm">
            {error || "This case study may have been removed or the link is incorrect."}
          </p>
          <button
            onClick={() => navigate("/case-studies")}
            className="px-6 py-3 bg-black text-white text-xs tracking-widest uppercase hover:bg-gray-800 transition-colors"
          >
            Back to Case Studies
          </button>
        </div>
      </div>
    );
  }

  // ✅ Canonical URL now uses slug instead of _id/id
  const caseSlug = caseStudy.slug || caseStudy._id || caseStudy.id;
  const metaTitle = `${caseStudy.title} – Patient Case Study | PhysioCentric`;
  const metaDescription =
    caseStudy.summary ||
    `Read how PhysioCentric helped treat ${caseStudy.condition || "this patient"} through personalized physiotherapy care.`;
  const canonicalUrl = `https://www.physiocentric.in/case-studies/${caseSlug}`;

  return (
    <div className="pc-csd min-h-screen bg-gray-50">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={getImageUrl(caseStudy)} />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="PhysioCentric" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "url": canonicalUrl,
            "name": metaTitle,
            "description": metaDescription,
            "inLanguage": "en-IN",
            "publisher": {
              "@type": "MedicalBusiness",
              "name": "PhysioCentric",
              "url": "https://www.physiocentric.in",
            },
          })}
        </script>
      </Helmet>

      <style>{`
        .pc-csd { font-family: 'IBM Plex Sans', sans-serif; }
        .pc-csd .serif { font-family: 'Fraunces', serif; }
        .pc-csd .mono { font-family: 'IBM Plex Mono', monospace; }
        .pc-csd .animate-spin { animation: spin 0.8s linear infinite; }
        .pc-csd .animate-pulse { animation: pulse 1.5s ease-in-out infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100% { opacity: 0.3; } 50% { opacity: 0.8; } }
      `}</style>

      {/* ───────────────── BANNER ───────────────── */}
      <div
        className="relative h-[280px] md:h-[340px] bg-cover bg-center"
        style={{ backgroundImage: `url('${getImageUrl(caseStudy)}')` }}
      >
        <div className="absolute inset-0 bg-black/70" aria-hidden="true"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center max-w-7xl">
          {caseStudy.category && (
            <span className="mono inline-block w-fit text-white/70 text-[11px] tracking-[0.2em] uppercase border border-white/30 px-3 py-1 mb-4">
              {caseStudy.category}
            </span>
          )}
          <h1 className="serif text-2xl sm:text-3xl md:text-5xl text-white mb-4 font-bold tracking-tight max-w-3xl leading-tight">
            {caseStudy.title}
          </h1>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-white/60 text-sm list-none p-0 m-0 flex-wrap">
              <li>
                <button onClick={() => navigate("/")} className="hover:text-white transition-colors flex items-center gap-1">
                  <Home className="w-4 h-4" aria-hidden="true" /> Home
                </button>
              </li>
              <li aria-hidden="true"><span>/</span></li>
              <li>
                <button onClick={() => navigate("/case-studies")} className="hover:text-white transition-colors">
                  Case Studies
                </button>
              </li>
              <li aria-hidden="true"><span>/</span></li>
              <li><span className="text-white line-clamp-1" aria-current="page">{caseStudy.title}</span></li>
            </ol>
          </nav>
        </div>
      </div>

      {/* ───────────────── MAIN CONTENT ───────────────── */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* ── Main Content ── */}
            <main className="lg:col-span-8 order-1 space-y-6 md:space-y-8">

              {/* Patient Overview strip */}
              {(caseStudy.patientAge || caseStudy.patientGender || caseStudy.duration || caseStudy.condition) && (
                <div className="bg-white shadow-lg p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-5" aria-hidden="true">
                    <div className="w-10 h-0.5 bg-black"></div>
                    <span className="mono text-xs tracking-widest uppercase font-semibold text-black">Patient Overview</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {caseStudy.patientAge && (
                      <div className="border border-gray-100 p-4 text-center">
                        <User className="w-5 h-5 mx-auto mb-2 text-black" aria-hidden="true" />
                        <p className="text-xs text-gray-400 mb-1">Age</p>
                        <p className="text-sm font-semibold text-black">{caseStudy.patientAge}</p>
                      </div>
                    )}
                    {caseStudy.patientGender && (
                      <div className="border border-gray-100 p-4 text-center">
                        <User className="w-5 h-5 mx-auto mb-2 text-black" aria-hidden="true" />
                        <p className="text-xs text-gray-400 mb-1">Gender</p>
                        <p className="text-sm font-semibold text-black">{caseStudy.patientGender}</p>
                      </div>
                    )}
                    {caseStudy.condition && (
                      <div className="border border-gray-100 p-4 text-center">
                        <Activity className="w-5 h-5 mx-auto mb-2 text-black" aria-hidden="true" />
                        <p className="text-xs text-gray-400 mb-1">Condition</p>
                        <p className="text-sm font-semibold text-black">{caseStudy.condition}</p>
                      </div>
                    )}
                    {caseStudy.duration && (
                      <div className="border border-gray-100 p-4 text-center">
                        <Calendar className="w-5 h-5 mx-auto mb-2 text-black" aria-hidden="true" />
                        <p className="text-xs text-gray-400 mb-1">Treatment Duration</p>
                        <p className="text-sm font-semibold text-black">{caseStudy.duration}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Summary / Presenting Complaint */}
              {(caseStudy.summary || caseStudy.complaint) && (
                <div className="bg-white shadow-lg p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4" aria-hidden="true">
                    <div className="w-10 h-0.5 bg-black"></div>
                    <span className="mono text-xs tracking-widest uppercase font-semibold text-black">The Problem</span>
                  </div>
                  <h2 className="serif text-xl md:text-2xl font-bold text-black mb-3">Presenting Complaint</h2>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-line">
                    {caseStudy.summary || caseStudy.complaint}
                  </p>
                </div>
              )}

              {/* Treatment Approach */}
              {(caseStudy.treatmentPlan || caseStudy.treatment) && (
                <div className="bg-white shadow-lg p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4" aria-hidden="true">
                    <div className="w-10 h-0.5 bg-black"></div>
                    <span className="mono text-xs tracking-widest uppercase font-semibold text-black">Our Approach</span>
                  </div>
                  <h2 className="serif text-xl md:text-2xl font-bold text-black mb-4">Treatment Approach</h2>

                  {Array.isArray(caseStudy.treatmentPlan) ? (
                    <ul className="space-y-3">
                      {caseStudy.treatmentPlan.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-black text-white flex items-center justify-center flex-shrink-0 text-xs font-bold" aria-hidden="true">
                            {i + 1}
                          </div>
                          <span className="text-gray-600 text-sm leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-line">
                      {caseStudy.treatmentPlan || caseStudy.treatment}
                    </p>
                  )}

                  {caseStudy.servicesUsed?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-gray-100">
                      {caseStudy.servicesUsed.map((s, i) => (
                        <span key={i} className="mono text-[11px] px-3 py-1.5 bg-black/5 text-black/70 tracking-wide">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Results / Outcome */}
              {(caseStudy.outcome || caseStudy.results) && (
                <div className="bg-white shadow-lg p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4" aria-hidden="true">
                    <div className="w-10 h-0.5 bg-black"></div>
                    <span className="mono text-xs tracking-widest uppercase font-semibold text-black">Outcome</span>
                  </div>
                  <h2 className="serif text-xl md:text-2xl font-bold text-black mb-4">Results Achieved</h2>

                  {Array.isArray(caseStudy.results) ? (
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {caseStudy.results.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="text-gray-600 text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-line flex items-start gap-3">
                      <Target className="w-5 h-5 text-black flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{caseStudy.outcome}</span>
                    </p>
                  )}
                </div>
              )}

              {/* Before / After images */}
              {(caseStudy.beforeImage || caseStudy.afterImage) && (
                <div className="bg-white shadow-lg p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4" aria-hidden="true">
                    <div className="w-10 h-0.5 bg-black"></div>
                    <span className="mono text-xs tracking-widest uppercase font-semibold text-black">Progress</span>
                  </div>
                  <h2 className="serif text-xl md:text-2xl font-bold text-black mb-4">Before &amp; After</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {caseStudy.beforeImage && (
                      <div>
                        <div className="h-[220px] overflow-hidden mb-2">
                          <img src={caseStudy.beforeImage} alt="Before treatment" className="w-full h-full object-cover" loading="lazy" />
                        </div>
                        <p className="mono text-xs uppercase tracking-widest text-gray-400 text-center">Before</p>
                      </div>
                    )}
                    {caseStudy.afterImage && (
                      <div>
                        <div className="h-[220px] overflow-hidden mb-2">
                          <img src={caseStudy.afterImage} alt="After treatment" className="w-full h-full object-cover" loading="lazy" />
                        </div>
                        <p className="mono text-xs uppercase tracking-widest text-gray-400 text-center">After</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Testimonial */}
              {caseStudy.testimonial && (
                <div className="bg-black shadow-lg p-8 md:p-10 text-white">
                  <Quote className="w-8 h-8 text-white/30 mb-4" aria-hidden="true" />
                  <p className="serif text-lg md:text-xl leading-relaxed mb-4 italic">
                    {caseStudy.testimonial}
                  </p>
                  {caseStudy.testimonialAuthor && (
                    <p className="mono text-xs tracking-widest uppercase text-white/50">
                      — {caseStudy.testimonialAuthor}
                    </p>
                  )}
                </div>
              )}

              {/* CTA */}
              <div className="bg-white border-2 border-black shadow-lg p-8 text-center">
                <h3 className="serif text-2xl font-bold mb-3 text-black tracking-tight">
                  Ready to start your own recovery?
                </h3>
                <p className="mb-6 text-gray-500 leading-relaxed max-w-xl mx-auto text-sm">
                  Every patient's journey is different. Book a consultation with PhysioCentric
                  and let's build a treatment plan for you.
                </p>
                <a href="/contacts" aria-label="Book an appointment">
                  <button className="px-8 py-3 bg-black text-white text-xs tracking-widest uppercase font-semibold hover:bg-gray-800 transition-all duration-300">
                    Make Appointment
                  </button>
                </a>
              </div>

            </main>

            {/* ── Sidebar ── */}
            <aside className="lg:col-span-4 order-2" aria-label="Contact and navigation">
              <div className="space-y-6 lg:sticky lg:top-8">

                <div className="bg-white shadow-lg overflow-hidden">
                  <div className="bg-black text-white px-6 py-4">
                    <p className="text-lg font-bold tracking-widest uppercase">PhysioCentric</p>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-black flex items-center justify-center flex-shrink-0" aria-hidden="true">
                        <Phone className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 tracking-widest uppercase">Call Us</p>
                        <a href="tel:09810513841" className="text-black font-medium text-sm hover:underline">
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
                        <a href="mailto:reception.physiocentric@gmail.com" className="text-black font-medium text-sm hover:underline">
                          reception.physiocentric@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => navigate("/case-studies")}
                  className="w-full flex items-center justify-center gap-2 bg-white border border-black text-black px-6 py-3 text-xs tracking-widest uppercase font-semibold hover:bg-black hover:text-white transition-all duration-300"
                >
                  View All Case Studies
                </button>

              </div>
            </aside>

          </div>
        </div>
      </section>

      <style>{`
        * { box-sizing: border-box; }
        .container { width: 100%; margin-left: auto; margin-right: auto; }
        @media (max-width: 768px) { .container { padding-left: 1rem; padding-right: 1rem; } }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default CaseStudyDetailPage;