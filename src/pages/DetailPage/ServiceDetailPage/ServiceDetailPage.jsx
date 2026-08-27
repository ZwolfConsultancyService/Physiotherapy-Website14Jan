import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Download, Phone, Mail, ChevronRight, Home, Plus, Minus, Calendar, FileText, BookOpen } from "lucide-react";
import { servicesDetailData } from "../../../data/servicesData/servicesData";
import LocationsSlider from "../Locationdetailpage/LocationsSlider";

// ✅ Now pulled from .env (VITE_API_BASE_URL), matches BlogPage/CaseStudyPage.
// Falls back to the PhysioCentric prod URL if not set.
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://api.physiocentricindia.com";

// ─── CATEGORY OPTIONS ──────────────────────────────────────────────
const CATEGORY_OPTIONS = [
  { title: "Manual Muscle Therapy", slug: "manual-muscle-therapy" },
  { title: "Kinesiotaping", slug: "kinesiotaping" },
  { title: "Dry Needling", slug: "dry-needling" },
  { title: "Muscle Stimulation", slug: "muscle-stimulation" },
  { title: "Cupping Therapy", slug: "cupping-therapy" },
  { title: "IASTM Therapy", slug: "iastm-therapy" },
  { title: "TENS Therapy", slug: "tens-therapy" },
  { title: "Ultrasonic Therapy", slug: "ultrasonic-therapy" },
  { title: "Interferential Therapy", slug: "interferential-therapy" },
  { title: "LASER Therapy", slug: "laser-therapy" },
  { title: "Sports Injury Rehab", slug: "sports-injury-rehab" },
  { title: "Tele Rehabilitation", slug: "tele-rehabilitation" },
  { title: "Biomechanical Correction Rehab", slug: "biomechanical-correction-rehab" },
  { title: "Movement Assessment", slug: "movement-assessment" },
  { title: "Functional Training", slug: "functional-training" },
  { title: "Pelvic Floor Rehabilitation", slug: "pelvic-floor-rehabilitation" },
  { title: "Gait Training", slug: "gait-training" },
  { title: "Joint Mobilisation", slug: "joint-mobilisation" },
  { title: "Pressure Biofeedback Core Training", slug: "pressure-biofeedback-core-training" },
  { title: "Balance Training", slug: "balance-training" },
  { title: "Physiotherapist", slug: "physiotherapist" },
  { title: "Physiotherapy Centre", slug: "physiotherapy-centre" },
  { title: "Sports Massage", slug: "sports-massage" },
];

const getSlug = (item) => {
  if (item.slug) return item.slug;
  return (item.title || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
};

const getImageUrl = (item) => {
  if (item.images?.length > 0 && item.images[0]?.url) return item.images[0].url;
  if (item.image) return item.image;
  if (item.featuredImage) return item.featuredImage;
  if (item.thumbnail) return item.thumbnail;
  return "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d";
};

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [expandedIndex, setExpandedIndex] = useState(3);
  const [expandedFaq, setExpandedFaq] = useState(0);

  // ─── BLOGS STATE ──────────────────────────────────────────────────
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);

  // ─── CASE STUDIES STATE ──────────────────────────────────────────
  const [relatedCaseStudies, setRelatedCaseStudies] = useState([]);
  const [caseStudiesLoading, setCaseStudiesLoading] = useState(true);

  const serviceData = servicesDetailData[slug] || servicesDetailData["physiotherapist"];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 500);
  }, [slug]);

  // ─── BUILD SERVER-SIDE CATEGORY FILTER ──────────────────────────
  // Categories in the DB are stored as slugs (e.g. "manual-muscle-therapy"),
  // NOT as Title Case ("Manual Muscle Therapy"). So we send the URL slug
  // itself as the filter value — it already matches the DB format.
  // "Physiotherapist" / "Physiotherapy Centre" act as catch-alls (no
  // filter → latest blogs/case studies of any category).
  const getRelatedCategoryParam = () => {
    const serviceSlug = slug.toLowerCase();
    if (serviceSlug === "physiotherapist" || serviceSlug === "physiotherapy-centre") {
      return null;
    }
    return serviceSlug;
  };

  // ─── FETCH RELATED BLOGS (server-side filtered) ─────────────────
  useEffect(() => {
    const fetchRelatedBlogs = async () => {
      try {
        setBlogsLoading(true);

        const categoryParam = getRelatedCategoryParam();
        const url = categoryParam
          ? `${API_BASE_URL}/api/blog?categories=${encodeURIComponent(categoryParam)}&limit=4`
          : `${API_BASE_URL}/api/blog?limit=4`;

        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();
        const blogs = Array.isArray(data) ? data : data.data || [];

        setRelatedBlogs(blogs);
      } catch (err) {
        console.error("❌ Error fetching related blogs:", err);
        setRelatedBlogs([]);
      } finally {
        setBlogsLoading(false);
      }
    };

    if (serviceData.title) {
      fetchRelatedBlogs();
    }
  }, [slug, serviceData.title]);

  // ─── FETCH RELATED CASE STUDIES (server-side filtered) ──────────
  useEffect(() => {
    const fetchRelatedCaseStudies = async () => {
      try {
        setCaseStudiesLoading(true);

        const categoryParam = getRelatedCategoryParam();
        const url = categoryParam
          ? `${API_BASE_URL}/api/case-studies?categories=${encodeURIComponent(categoryParam)}&limit=4`
          : `${API_BASE_URL}/api/case-studies?limit=4`;

        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();
        const caseStudies = Array.isArray(data) ? data : data.data || [];

        setRelatedCaseStudies(caseStudies);
      } catch (err) {
        console.error("❌ Error fetching related case studies:", err);
        setRelatedCaseStudies([]);
      } finally {
        setCaseStudiesLoading(false);
      }
    };

    if (serviceData.title) {
      fetchRelatedCaseStudies();
    }
  }, [slug, serviceData.title]);

  // ─── TOGGLE FUNCTIONS ─────────────────────────────────────────────
  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const handleSidebarClick = (serviceName) => {
    navigate(`/service/${serviceName.toLowerCase().replace(/\s+/g, "-")}`);
  };

  // ─── RENDER BLOGS SECTION ───────────────────────────────────────
  const renderBlogsSection = () => {
    if (blogsLoading) {
      return (
        <div className="bg-white shadow-lg p-6 md:p-8 text-center">
          <p className="text-gray-500">Loading related articles...</p>
        </div>
      );
    }

    if (relatedBlogs.length === 0) {
      return null;
    }

    return (
      <div className="bg-white shadow-lg p-6 md:p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-0.5 bg-black"></div>
          <span className="text-xs tracking-widest uppercase font-semibold text-black">
            <BookOpen className="w-4 h-4 inline mr-2" /> Related Articles
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-black mb-6">Read More About {serviceData.title}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {relatedBlogs.slice(0, 4).map((blog) => (
            <article
              key={blog._id || blog.id}
              onClick={() => navigate(`/blogs/${getSlug(blog)}`)}
              className="border border-gray-100 hover:border-black cursor-pointer transition-all duration-300 group overflow-hidden"
            >
              <div className="h-[160px] overflow-hidden">
                <img
                  src={getImageUrl(blog)}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d";
                  }}
                />
              </div>
              <div className="p-4">
                {blog.categories?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {blog.categories.slice(0, 2).map((cat, i) => {
                      const catName = typeof cat === 'string' ? cat : cat.title || cat.name || cat.category || "";
                      return (
                        <span key={i} className="text-[10px] px-2 py-0.5 bg-black/5 text-black/60 tracking-wide capitalize">
                          {catName}
                        </span>
                      );
                    })}
                  </div>
                )}
                <h4 className="font-semibold text-black text-sm mb-3 line-clamp-2 group-hover:text-gray-600 transition-colors">
                  {blog.title}
                </h4>
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <time className="text-xs text-gray-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(blog.createdAt || Date.now()).toLocaleDateString("en-US", {
                      month: "short", day: "numeric", year: "numeric",
                    })}
                  </time>
                  <span className="text-xs font-semibold text-black flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  };

  // ─── RENDER CASE STUDIES SECTION ──────────────────────────────
  const renderCaseStudiesSection = () => {
    if (caseStudiesLoading) {
      return (
        <div className="bg-white shadow-lg p-6 md:p-8 text-center">
          <p className="text-gray-500">Loading case studies...</p>
        </div>
      );
    }

    if (relatedCaseStudies.length === 0) {
      return null;
    }

    return (
      <div className="bg-white shadow-lg p-6 md:p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-0.5 bg-black"></div>
          <span className="text-xs tracking-widest uppercase font-semibold text-black">
            <FileText className="w-4 h-4 inline mr-2" /> Case Studies
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-black mb-6">Success Stories with {serviceData.title}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {relatedCaseStudies.slice(0, 4).map((caseStudy) => (
            <article
              key={caseStudy._id || caseStudy.id}
              onClick={() => navigate(`/case-studies/${getSlug(caseStudy)}`)}
              className="border border-gray-100 hover:border-black cursor-pointer transition-all duration-300 group overflow-hidden"
            >
              <div className="h-[160px] overflow-hidden relative">
                <img
                  src={getImageUrl(caseStudy)}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d";
                  }}
                />
                <span className="absolute top-3 left-3 bg-black/80 text-white text-[10px] px-3 py-1 tracking-wider uppercase font-semibold">
                  Case Study
                </span>
              </div>
              <div className="p-4">
                {caseStudy.categories?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {caseStudy.categories.slice(0, 2).map((cat, i) => {
                      const catName = typeof cat === 'string' ? cat : cat.title || cat.name || cat.category || "";
                      return (
                        <span key={i} className="text-[10px] px-2 py-0.5 bg-black/5 text-black/60 tracking-wide capitalize">
                          {catName}
                        </span>
                      );
                    })}
                  </div>
                )}
                <h4 className="font-semibold text-black text-sm mb-2 line-clamp-2 group-hover:text-gray-600 transition-colors">
                  {caseStudy.title}
                </h4>
                {caseStudy.excerpt && (
                  <p className="text-gray-500 text-xs line-clamp-2 mb-3">{caseStudy.excerpt}</p>
                )}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <time className="text-xs text-gray-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(caseStudy.createdAt || Date.now()).toLocaleDateString("en-US", {
                      month: "short", day: "numeric", year: "numeric",
                    })}
                  </time>
                  <span className="text-xs font-semibold text-black flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  };

  // ─── LOADING ──────────────────────────────────────────────────────
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

  // ─── SEO ──────────────────────────────────────────────────────────
  const canonicalUrl = `https://www.physiocentric.in${serviceData.seo?.urlSlug || `/service/${slug}`}`;
  const metaTitle = serviceData.seo?.metaTitle || `${serviceData.title} in New Delhi – PhysioCentric | Expert Physiotherapy`;
  const metaDescription = serviceData.seo?.metaDescription || `${serviceData.description?.substring(0, 150)}...`;

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
      }
    ]
  };

  // ─── RENDER ──────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50 mt-10">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={serviceData.mainImage || "https://www.physiocentric.in/og-image.jpg"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* ─── BANNER ─── */}
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
            <p className="text-white/80 text-sm md:text-lg mb-4 max-w-2xl">{serviceData.hero.subheadline}</p>
          )}
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-white/60 text-sm list-none p-0 m-0">
              <li>
                <button onClick={() => navigate("/")} className="hover:text-white transition-colors flex items-center gap-1">
                  <Home className="w-4 h-4" /> Home
                </button>
              </li>
              <li><span>/</span></li>
              <li>
                <button onClick={() => navigate("/services")} className="hover:text-white transition-colors">
                  Services
                </button>
              </li>
              <li><span>/</span></li>
              <li><span className="text-white" aria-current="page">{serviceData.title}</span></li>
            </ol>
          </nav>
        </div>
      </div>

      {/* ─── MAIN CONTENT ─── */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <main className="lg:col-span-9 order-1 lg:order-2 space-y-6 md:space-y-8">

              {/* Overview */}
              <div className="bg-white shadow-lg p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-black"></div>
                  <span className="text-xs tracking-widest uppercase font-semibold text-black">Overview</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">{serviceData.title}</h2>
                {serviceData.hero?.intro && <p className="text-gray-700 text-base md:text-lg leading-relaxed">{serviceData.hero.intro}</p>}
              </div>

              {/* Why Matters */}
              {serviceData.whyMatters && (
                <div className="bg-white shadow-lg p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-0.5 bg-black"></div>
                    <span className="text-xs tracking-widest uppercase font-semibold text-black">Why It Matters</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-3">Why {serviceData.title} Matters</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">{serviceData.whyMatters}</p>
                </div>
              )}

              {/* Who Needs This */}
              {serviceData.whoNeedsThis?.length > 0 && (
                <div className="bg-white shadow-lg p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-0.5 bg-black"></div>
                    <span className="text-xs tracking-widest uppercase font-semibold text-black">Who Needs This</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-4">Is {serviceData.title} Right for You?</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {serviceData.whoNeedsThis.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-black flex items-center justify-center flex-shrink-0 mt-0.5"><ChevronRight className="w-3 h-3 text-white" /></div>
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
                    <img src={serviceData.benefitImage} alt={`Benefits of ${serviceData.title}`} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-0.5 bg-black"></div>
                      <span className="text-xs tracking-widest uppercase font-semibold text-black">Benefits</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-3">{serviceData.benefits.title}</h3>
                    <p className="text-gray-500 mb-4 text-sm">{serviceData.benefits.description}</p>
                    <ul className="space-y-3">
                      {serviceData.benefits.points.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-black flex items-center justify-center flex-shrink-0 mt-0.5"><ChevronRight className="w-3 h-3 text-white" /></div>
                          <span className="text-gray-600 text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Process */}
              {serviceData.process?.length > 0 && (
                <div className="bg-white shadow-lg p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-0.5 bg-black"></div>
                    <span className="text-xs tracking-widest uppercase font-semibold text-black">Our Process</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-6">How {serviceData.title} Works at PhysioCentric</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {serviceData.process.map((step, index) => (
                      <div key={index} className="flex gap-4 border border-gray-100 p-4">
                        <div className="w-9 h-9 bg-black text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">{index + 1}</div>
                        <div>
                          <p className="font-semibold text-black text-sm mb-1">{step.title}</p>
                          <p className="text-gray-500 text-sm">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Why Choose Us */}
              <div className="bg-white shadow-lg p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-black"></div>
                  <span className="text-xs tracking-widest uppercase font-semibold text-black">Why Choose Us</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-6">{serviceData.whyChoose.title}</h3>
                <div className="space-y-3">
                  {serviceData.whyChoose.points.map((item, index) => (
                    <div key={index} className={`border-2 overflow-hidden transition-all duration-300 ${expandedIndex === index ? "border-black" : "border-gray-100"}`}>
                      <button onClick={() => toggleAccordion(index)} className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-3">
                          <span className={`text-2xl font-light ${expandedIndex === index ? "text-black" : "text-gray-300"}`}>{expandedIndex === index ? "−" : "+"}</span>
                          <span className="text-left text-gray-800 font-medium text-sm">{item.title}</span>
                        </div>
                      </button>
                      <div className={`transition-all duration-300 overflow-hidden ${expandedIndex === index ? "max-h-48" : "max-h-0"}`}>
                        <div className="px-4 pb-4 pt-2 text-gray-500 text-sm border-t border-gray-100">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              {serviceData.faqs?.length > 0 && (
                <div className="bg-white shadow-lg p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-0.5 bg-black"></div>
                    <span className="text-xs tracking-widest uppercase font-semibold text-black">FAQs</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-6">Frequently Asked Questions about {serviceData.title}</h3>
                  <div className="space-y-3">
                    {serviceData.faqs.map((faq, index) => (
                      <div key={index} className={`border-2 overflow-hidden transition-all duration-300 ${expandedFaq === index ? "border-black" : "border-gray-100"}`}>
                        <button onClick={() => toggleFaq(index)} className="w-full flex items-center justify-between gap-3 p-4 hover:bg-gray-50 transition-colors text-left">
                          <span className="text-gray-800 font-medium text-sm">{faq.question}</span>
                          {expandedFaq === index ? <Minus className="w-4 h-4 text-black" /> : <Plus className="w-4 h-4 text-gray-300" />}
                        </button>
                        <div className={`transition-all duration-300 overflow-hidden ${expandedFaq === index ? "max-h-56" : "max-h-0"}`}>
                          <div className="px-4 pb-4 pt-1 text-gray-500 text-sm border-t border-gray-100">{faq.answer}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ─── BLOGS SECTION ─── */}
              {renderBlogsSection()}

              {/* ─── CASE STUDIES SECTION ─── */}
              {renderCaseStudiesSection()}

              {/* CTA */}
              <div className="bg-black shadow-lg p-8 text-white text-center">
                <div className="w-12 h-0.5 bg-white/30 mx-auto mb-6"></div>
                <h3 className="text-2xl font-bold mb-4">Visit PhysioCentric Today</h3>
                <p className="mb-8 text-gray-400 leading-relaxed max-w-xl mx-auto">{serviceData.ctaText || "You'll know the minute you arrive this is the place. We are here to surpass your desires."}</p>
                <a href="/contacts"><button className="px-8 py-3 border border-white/30 text-white text-xs tracking-widest uppercase font-semibold hover:bg-white/10 transition-all">Make Appointment</button></a>
              </div>
            </main>

            {/* ─── SIDEBAR ─── */}
            <aside className="lg:col-span-3 order-2 lg:order-1">
              <div className="bg-white shadow-lg overflow-hidden lg:sticky lg:top-8">
                <div className="bg-black text-white px-6 py-4"><p className="text-lg font-bold tracking-widest uppercase">PhysioCentric</p></div>
                <nav>
                  {serviceData.sidebar.services.map((service, index) => (
                    <button key={index} onClick={() => handleSidebarClick(service)} className={`w-full text-left px-6 py-3 transition-colors border-b border-gray-100 text-sm group flex items-center justify-between ${service === serviceData.title ? "bg-black text-white" : "text-gray-600 hover:bg-gray-50 hover:text-black"}`}>
                      <span>{service}</span>
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </nav>
                <div className="p-6 bg-gray-900">
                  <button className="w-full flex items-center justify-center gap-2 bg-white text-black px-6 py-3 text-xs tracking-widest uppercase font-semibold hover:bg-gray-100 transition-all">
                    <Download className="w-5 h-5" /> Download Brochure
                  </button>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-black flex items-center justify-center flex-shrink-0"><Phone className="w-4 h-4 text-white" /></div>
                    <div><p className="text-xs text-gray-400 tracking-widest uppercase">Call Us</p><a href="tel:09810513841" className="text-black font-medium text-sm hover:underline">09810513841</a></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-black flex items-center justify-center flex-shrink-0"><Mail className="w-4 h-4 text-white" /></div>
                    <div><p className="text-xs text-gray-400 tracking-widest uppercase">Email</p><a href="mailto:reception.physiocentric@gmail.com" className="text-black font-medium text-sm hover:underline">reception.physiocentric@gmail.com</a></div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <LocationsSlider />

      <style>{`
        .container { width: 100%; margin-left: auto; margin-right: auto; }
        @media (max-width: 768px) { .container { padding-left: 1rem; padding-right: 1rem; } }
        button { transition: all 0.3s ease; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>
    </div>
  );
};

export default ServiceDetailPage;