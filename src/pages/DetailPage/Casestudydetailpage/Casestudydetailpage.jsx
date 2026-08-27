// CaseStudyDetailPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Home, ChevronRight, Calendar, Phone, Mail,
  User, Activity, Target, CheckCircle2, Quote, FileText, X, ZoomIn,
} from "lucide-react";

// ✅ Now pulled from .env (VITE_API_BASE_URL). Falls back to prod URL if not set.
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://api.physiocentricindia.com";
const CASE_STUDY_ENDPOINT = `${API_BASE_URL}/api/case-studies`;

// ─── SLUGIFY ──────────────────────────────────────────────────────
const slugifyTitle = (title) =>
  (title || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const getSlug = (cs) => cs.slug || slugifyTitle(cs.title);

const getImageUrl = (cs) => {
  if (typeof cs.image === "string" && cs.image) return cs.image;
  if (cs.image?.url) return cs.image.url;
  if (cs.images?.length > 0 && cs.images[0]?.url) return cs.images[0].url;
  return "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d";
};

const getCategories = (cs) => {
  if (Array.isArray(cs.categories)) return cs.categories;
  if (cs.category) return [cs.category];
  return [];
};

const CaseStudyDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // ─── LIGHTBOX STATE ──────────────────────────────────────────────
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchCaseStudy();
  }, [slug]);

  const fetchCaseStudy = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(`${CASE_STUDY_ENDPOINT}?limit=1000`);
      if (!res.ok) throw new Error("Failed to load case studies");

      const data = await res.json();
      const list = Array.isArray(data) ? data : data.data || [];

      const match = list.find((cs) => getSlug(cs) === slug);

      if (!match) {
        throw new Error("Case study not found");
      }

      setCaseStudy(match);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ─── GET ALL IMAGES FOR GALLERY ──────────────────────────────────
  const getAllImages = () => {
    if (!caseStudy) return [];
    
    const images = [];
    
    // Main image
    const mainImg = getImageUrl(caseStudy);
    if (mainImg) images.push({ url: mainImg, alt: caseStudy.title });
    
    // Before/After images
    if (caseStudy.beforeImage) {
      images.push({ url: caseStudy.beforeImage, alt: "Before Treatment" });
    }
    if (caseStudy.afterImage) {
      images.push({ url: caseStudy.afterImage, alt: "After Treatment" });
    }
    
    // Gallery images
    if (caseStudy.images?.length > 0) {
      caseStudy.images.forEach((img) => {
        if (img.url && img.url !== mainImg) {
          images.push({ url: img.url, alt: img.alt || caseStudy.title });
        }
      });
    }
    
    return images;
  };

  const allImages = getAllImages();

  // ─── LIGHTBOX FUNCTIONS ──────────────────────────────────────────
  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage(e);
      if (e.key === "ArrowRight") nextImage(e);
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  // ── Loading ──
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-gray-100 rounded-full" />
            <div className="absolute inset-0 border-4 border-transparent border-t-black rounded-full animate-spin" />
            <div className="absolute inset-4 bg-black rounded-full animate-pulse" />
          </div>
          <p className="text-xs tracking-widest uppercase text-black/40">Loading case study...</p>
        </div>
      </div>
    );
  }

  // ── Error ──
  if (error || !caseStudy) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-bold text-black mb-4">Case Study Not Found</h1>
          <p className="text-black/50 mb-6 text-sm">{error || "This case study may have been removed or the link is incorrect."}</p>
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

  const categories = getCategories(caseStudy);
  const metaTitle = `${caseStudy.title} – Patient Case Study | PhysioCentric`;
  const metaDescription =
    caseStudy.description ||
    caseStudy.summary ||
    `Read how PhysioCentric helped treat ${caseStudy.condition || "this patient"} through personalized physiotherapy care.`;
  const canonicalUrl = `https://www.physiocentric.in/case-studies/${getSlug(caseStudy)}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription.substring(0, 160)} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription.substring(0, 160)} />
        <meta property="og:image" content={getImageUrl(caseStudy)} />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="PhysioCentric" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "url": canonicalUrl,
            "name": metaTitle,
            "description": metaDescription.substring(0, 160),
            "inLanguage": "en-IN",
            "publisher": {
              "@type": "MedicalBusiness",
              "name": "PhysioCentric",
              "url": "https://www.physiocentric.in",
            },
          })}
        </script>
      </Helmet>

      {/* ─── LIGHTBOX / IMAGE POPUP ────────────────────────────── */}
      {lightboxOpen && allImages.length > 0 && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Close image viewer"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 text-white/50 text-xs sm:text-sm font-mono tracking-wider z-10">
            {selectedImageIndex + 1} / {allImages.length}
          </div>

          {/* Main Image */}
          <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8 md:p-12">
            <img
              src={allImages[selectedImageIndex].url}
              alt={allImages[selectedImageIndex].alt || "Case study image"}
              className="max-w-full max-h-full object-contain"
              loading="lazy"
            />
          </div>

          {/* Navigation Buttons */}
          {allImages.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 md:left-6 text-white/50 hover:text-white transition-colors p-2"
                aria-label="Previous image"
              >
                <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rotate-180" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 md:right-6 text-white/50 hover:text-white transition-colors p-2"
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
              </button>

              {/* Thumbnail Navigation */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 sm:gap-3 overflow-x-auto px-4 py-2">
                {allImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImageIndex(index);
                    }}
                    className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 overflow-hidden rounded-sm border-2 transition-all ${
                      index === selectedImageIndex
                        ? "border-white opacity-100"
                        : "border-transparent opacity-50 hover:opacity-80"
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.alt || `Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* ─── RESPONSIVE HERO BANNER ───────────────────────────── */}
      <div
        className="relative min-h-[280px] xs:min-h-[320px] sm:min-h-[400px] md:min-h-[480px] lg:min-h-[520px] bg-cover bg-center bg-gray-900 flex items-center"
        style={{ backgroundImage: `url('${getImageUrl(caseStudy)}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" aria-hidden="true" />

        <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 sm:py-12 md:py-16">
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
              {categories.slice(0, 3).map((cat, i) => (
                <span
                  key={i}
                  className="inline-block text-white/80 text-[10px] xs:text-[11px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase border border-white/30 px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-sm capitalize"
                >
                  {cat.replace(/-/g, " ")}
                </span>
              ))}
            </div>
          )}

          <h1 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight max-w-4xl leading-tight sm:leading-tight md:leading-[1.1]">
            {caseStudy.title}
          </h1>

          {(caseStudy.condition || caseStudy.patientAge) && (
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 mt-3 sm:mt-4 md:mt-6 text-white/70 text-xs sm:text-sm">
              {caseStudy.condition && (
                <span className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
                  <span className="capitalize">{caseStudy.condition}</span>
                </span>
              )}
              {caseStudy.patientAge && (
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
                  <span>Age: {caseStudy.patientAge}</span>
                </span>
              )}
              {caseStudy.duration && (
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
                  <span>{caseStudy.duration}</span>
                </span>
              )}
            </div>
          )}

          <nav aria-label="Breadcrumb" className="mt-4 sm:mt-6 md:mt-8">
            <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-white/60 text-xs sm:text-sm list-none p-0 m-0">
              <li>
                <button onClick={() => navigate("/")} className="hover:text-white transition-colors flex items-center gap-1">
                  <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
                  <span className="hidden xs:inline">Home</span>
                </button>
              </li>
              <li aria-hidden="true"><ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" /></li>
              <li>
                <button onClick={() => navigate("/case-studies")} className="hover:text-white transition-colors">
                  Case Studies
                </button>
              </li>
              <li aria-hidden="true" className="hidden xs:block"><ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" /></li>
              <li className="hidden xs:block text-white/80 truncate max-w-[120px] xs:max-w-[180px] sm:max-w-[300px] md:max-w-[400px]">
                {caseStudy.title}
              </li>
            </ol>
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg className="w-full h-8 sm:h-12 md:h-16" preserveAspectRatio="none" viewBox="0 0 1200 120" fill="none">
            <path d="M0 0L50 10C100 20 200 40 300 45C400 50 500 40 600 35C700 30 800 30 900 35C1000 40 1100 50 1150 55L1200 60V120H0V0Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* ─── MAIN CONTENT ──────────────────────────────────────── */}
      <section className="py-6 sm:py-10 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">

            {/* ─── MAIN CONTENT ─── */}
            <main className="lg:col-span-8 order-1 space-y-5 sm:space-y-6 md:space-y-8">

              {/* Patient Overview */}
              {(caseStudy.patientAge || caseStudy.patientGender || caseStudy.duration || caseStudy.condition) && (
                <div className="bg-white shadow-lg rounded-sm p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4 sm:mb-5">
                    <div className="w-8 sm:w-10 h-0.5 bg-black" />
                    <span className="font-mono text-[10px] sm:text-xs tracking-widest uppercase font-semibold text-black">
                      Patient Overview
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                    {caseStudy.patientAge && (
                      <div className="border border-gray-100 rounded-sm p-3 sm:p-4 text-center">
                        <User className="w-5 h-5 mx-auto mb-2 text-black" aria-hidden="true" />
                        <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mb-0.5">Age</p>
                        <p className="text-sm sm:text-base font-semibold text-black">{caseStudy.patientAge}</p>
                      </div>
                    )}
                    {caseStudy.patientGender && (
                      <div className="border border-gray-100 rounded-sm p-3 sm:p-4 text-center">
                        <User className="w-5 h-5 mx-auto mb-2 text-black" aria-hidden="true" />
                        <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mb-0.5">Gender</p>
                        <p className="text-sm sm:text-base font-semibold text-black capitalize">{caseStudy.patientGender}</p>
                      </div>
                    )}
                    {caseStudy.condition && (
                      <div className="border border-gray-100 rounded-sm p-3 sm:p-4 text-center">
                        <Activity className="w-5 h-5 mx-auto mb-2 text-black" aria-hidden="true" />
                        <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mb-0.5">Condition</p>
                        <p className="text-sm sm:text-base font-semibold text-black capitalize">{caseStudy.condition}</p>
                      </div>
                    )}
                    {caseStudy.duration && (
                      <div className="border border-gray-100 rounded-sm p-3 sm:p-4 text-center">
                        <Calendar className="w-5 h-5 mx-auto mb-2 text-black" aria-hidden="true" />
                        <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mb-0.5">Duration</p>
                        <p className="text-sm sm:text-base font-semibold text-black">{caseStudy.duration}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Description */}
              {caseStudy.description && (
                <div className="bg-white shadow-lg rounded-sm p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="w-8 sm:w-10 h-0.5 bg-black" />
                    <span className="font-mono text-[10px] sm:text-xs tracking-widest uppercase font-semibold text-black flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
                      Overview
                    </span>
                  </div>
                  <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-3">Description</h2>
                  <div className="text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                    {caseStudy.description}
                  </div>
                </div>
              )}

              {/* Summary / Complaint */}
              {(caseStudy.summary || caseStudy.complaint) && (
                <div className="bg-white shadow-lg rounded-sm p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="w-8 sm:w-10 h-0.5 bg-black" />
                    <span className="font-mono text-[10px] sm:text-xs tracking-widest uppercase font-semibold text-black">
                      The Problem
                    </span>
                  </div>
                  <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-3">Presenting Complaint</h2>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                    {caseStudy.summary || caseStudy.complaint}
                  </p>
                </div>
              )}

              {/* Treatment Approach */}
              {(caseStudy.treatmentPlan || caseStudy.treatment) && (
                <div className="bg-white shadow-lg rounded-sm p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="w-8 sm:w-10 h-0.5 bg-black" />
                    <span className="font-mono text-[10px] sm:text-xs tracking-widest uppercase font-semibold text-black">
                      Our Approach
                    </span>
                  </div>
                  <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-black mb-3 sm:mb-4">Treatment Approach</h2>

                  {Array.isArray(caseStudy.treatmentPlan) ? (
                    <ul className="space-y-3 sm:space-y-4">
                      {caseStudy.treatmentPlan.map((step, i) => (
                        <li key={i} className="flex items-start gap-3 sm:gap-4">
                          <div className="w-6 h-6 sm:w-7 sm:h-7 bg-black text-white flex items-center justify-center flex-shrink-0 text-xs sm:text-sm font-bold rounded-full">
                            {i + 1}
                          </div>
                          <span className="text-gray-600 text-sm sm:text-base leading-relaxed pt-0.5">{step}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                      {caseStudy.treatmentPlan || caseStudy.treatment}
                    </p>
                  )}

                  {caseStudy.servicesUsed?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-gray-100">
                      {caseStudy.servicesUsed.map((s, i) => (
                        <span key={i} className="font-mono text-[10px] sm:text-[11px] px-2.5 sm:px-3 py-1 sm:py-1.5 bg-black/5 text-black/70 rounded-sm tracking-wide">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Results */}
              {(caseStudy.outcome || caseStudy.results) && (
                <div className="bg-white shadow-lg rounded-sm p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="w-8 sm:w-10 h-0.5 bg-black" />
                    <span className="font-mono text-[10px] sm:text-xs tracking-widest uppercase font-semibold text-black">
                      Outcome
                    </span>
                  </div>
                  <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-black mb-3 sm:mb-4">Results Achieved</h2>

                  {Array.isArray(caseStudy.results) ? (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {caseStudy.results.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="text-gray-600 text-sm sm:text-base">{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line flex items-start gap-3">
                      <Target className="w-5 h-5 text-black flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{caseStudy.outcome}</span>
                    </p>
                  )}
                </div>
              )}

              {/* ─── BEFORE / AFTER IMAGES ────────────────────────── */}
              {(caseStudy.beforeImage || caseStudy.afterImage) && (
                <div className="bg-white shadow-lg rounded-sm p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="w-8 sm:w-10 h-0.5 bg-black" />
                    <span className="font-mono text-[10px] sm:text-xs tracking-widest uppercase font-semibold text-black">
                      Progress
                    </span>
                  </div>
                  <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-black mb-3 sm:mb-4">Before &amp; After</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {caseStudy.beforeImage && (
                      <div 
                        className="group cursor-pointer relative overflow-hidden rounded-sm"
                        onClick={() => {
                          const index = allImages.findIndex(img => img.url === caseStudy.beforeImage);
                          openLightbox(index >= 0 ? index : 0);
                        }}
                      >
                        <div className="h-[180px] sm:h-[220px] md:h-[260px] overflow-hidden">
                          <img 
                            src={caseStudy.beforeImage} 
                            alt="Before treatment" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                            loading="lazy" 
                          />
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                          <ZoomIn className="w-8 h-8 sm:w-10 sm:h-10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </div>
                        <p className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-gray-400 text-center mt-2">Before</p>
                      </div>
                    )}
                    {caseStudy.afterImage && (
                      <div 
                        className="group cursor-pointer relative overflow-hidden rounded-sm"
                        onClick={() => {
                          const index = allImages.findIndex(img => img.url === caseStudy.afterImage);
                          openLightbox(index >= 0 ? index : 0);
                        }}
                      >
                        <div className="h-[180px] sm:h-[220px] md:h-[260px] overflow-hidden">
                          <img 
                            src={caseStudy.afterImage} 
                            alt="After treatment" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                            loading="lazy" 
                          />
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                          <ZoomIn className="w-8 h-8 sm:w-10 sm:h-10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </div>
                        <p className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-gray-400 text-center mt-2">After</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* ─── GALLERY ────────────────────────────────────────── */}
              {caseStudy.images?.length > 1 && (
                <div className="bg-white shadow-lg rounded-sm p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="w-8 sm:w-10 h-0.5 bg-black" />
                    <span className="font-mono text-[10px] sm:text-xs tracking-widest uppercase font-semibold text-black">
                      Gallery
                    </span>
                  </div>
                  <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-black mb-3 sm:mb-4">Photos</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                    {caseStudy.images.slice(0, 6).map((img, i) => {
                      const imageUrl = img.url || img;
                      const imageAlt = img.alt || `${caseStudy.title} photo ${i + 1}`;
                      // Find index in allImages
                      const imgIndex = allImages.findIndex(im => im.url === imageUrl);
                      const clickIndex = imgIndex >= 0 ? imgIndex : i;
                      
                      return (
                        <div
                          key={img.fileId || i}
                          className="group cursor-pointer relative overflow-hidden rounded-sm h-[120px] xs:h-[140px] sm:h-[160px] md:h-[180px]"
                          onClick={() => openLightbox(clickIndex)}
                        >
                          <img
                            src={imageUrl}
                            alt={imageAlt}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                            <ZoomIn className="w-6 h-6 sm:w-8 sm:h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {caseStudy.images.length > 6 && (
                    <button
                      onClick={() => {
                        const firstImageIndex = allImages.findIndex(
                          img => img.url === (caseStudy.images[0]?.url || caseStudy.images[0])
                        );
                        openLightbox(firstImageIndex >= 0 ? firstImageIndex : 0);
                      }}
                      className="mt-4 text-sm text-black/60 hover:text-black font-medium transition-colors flex items-center gap-1"
                    >
                      View all {caseStudy.images.length} photos
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              )}

              {/* ─── MAIN IMAGE CLICKABLE ──────────────────────────── */}
              {allImages.length > 0 && (
                <div 
                  className="bg-white shadow-lg rounded-sm p-4 sm:p-6 md:p-8 cursor-pointer group"
                  onClick={() => openLightbox(0)}
                >
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="w-8 sm:w-10 h-0.5 bg-black" />
                    <span className="font-mono text-[10px] sm:text-xs tracking-widest uppercase font-semibold text-black flex items-center gap-1.5">
                      <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
                      Click to View Full Image
                    </span>
                  </div>
                  <div className="relative overflow-hidden rounded-sm">
                    <img
                      src={allImages[0].url}
                      alt={allImages[0].alt || caseStudy.title}
                      className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <ZoomIn className="w-12 h-12 sm:w-16 sm:h-16 text-white opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              )}

              {/* Testimonial */}
              {caseStudy.testimonial && (
                <div className="bg-black shadow-lg rounded-sm p-5 sm:p-8 md:p-10 text-white">
                  <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-white/30 mb-3 sm:mb-4" aria-hidden="true" />
                  <p className="font-serif text-base sm:text-lg md:text-xl leading-relaxed mb-3 sm:mb-4 italic">
                    "{caseStudy.testimonial}"
                  </p>
                  {caseStudy.testimonialAuthor && (
                    <p className="font-mono text-[10px] sm:text-xs tracking-widest uppercase text-white/50">
                      — {caseStudy.testimonialAuthor}
                    </p>
                  )}
                </div>
              )}

              {/* CTA */}
              <div className="bg-white border-2 border-black shadow-lg rounded-sm p-5 sm:p-8 md:p-10 text-center">
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-black tracking-tight">
                  Ready to start your own recovery?
                </h3>
                <p className="mb-5 sm:mb-6 text-gray-500 leading-relaxed max-w-xl mx-auto text-sm sm:text-base">
                  Every patient's journey is different. Book a consultation with PhysioCentric
                  and let's build a treatment plan for you.
                </p>
                <a href="/contacts" aria-label="Book an appointment">
                  <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 bg-black text-white text-[10px] sm:text-xs tracking-widest uppercase font-semibold hover:bg-gray-800 transition-all duration-300">
                    Make Appointment
                  </button>
                </a>
              </div>

            </main>

            {/* ─── SIDEBAR ─── */}
            <aside className="lg:col-span-4 order-2" aria-label="Contact and navigation">
              <div className="space-y-5 sm:space-y-6 lg:sticky lg:top-8">

                <div className="bg-white shadow-lg rounded-sm overflow-hidden">
                  <div className="bg-black text-white px-5 sm:px-6 py-3 sm:py-4">
                    <p className="text-base sm:text-lg font-bold tracking-widest uppercase">PhysioCentric</p>
                  </div>
                  <div className="p-4 sm:p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-black flex items-center justify-center flex-shrink-0 rounded-sm">
                        <Phone className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
                      </div>
                      <div>
                        <p className="text-[10px] sm:text-xs text-gray-400 tracking-widest uppercase">Call Us</p>
                        <a href="tel:09810513841" className="text-black font-medium text-sm sm:text-base hover:underline">
                          09810513841
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-black flex items-center justify-center flex-shrink-0 rounded-sm">
                        <Mail className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] sm:text-xs text-gray-400 tracking-widest uppercase">Email</p>
                        <a href="mailto:reception.physiocentric@gmail.com" className="text-black font-medium text-sm sm:text-base hover:underline break-all">
                          reception.physiocentric@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => navigate("/case-studies")}
                  className="w-full flex items-center justify-center gap-2 bg-white border-2 border-black text-black px-6 py-3 sm:py-3.5 text-[10px] sm:text-xs tracking-widest uppercase font-semibold hover:bg-black hover:text-white transition-all duration-300 rounded-sm"
                >
                  View All Case Studies
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </button>

              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* ─── GLOBAL STYLES ────────────────────────────────────── */}
      <style>{`
        * { box-sizing: border-box; }
        .container { width: 100%; margin-left: auto; margin-right: auto; }
        
        .font-serif { font-family: 'Fraunces', serif; }
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
        
        .animate-spin { animation: spin 0.8s linear infinite; }
        .animate-pulse { animation: pulse 1.5s ease-in-out infinite; }
        
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: #000; }
        ::-webkit-scrollbar-thumb:hover { background: #333; }
        
        @media (max-width: 640px) {
          .container { padding-left: 1rem; padding-right: 1rem; }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .container { padding-left: 1.5rem; padding-right: 1.5rem; }
        }
        @media (min-width: 1025px) {
          .container { padding-left: 2rem; padding-right: 2rem; }
        }
      `}</style>
    </div>
  );
};

export default CaseStudyDetailPage;