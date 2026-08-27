import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Phone, Mail, MapPin, ChevronRight, Home,
  CheckCircle2, ChevronDown, Star, Calendar, FileText, BookOpen,
  Download, Plus, Minus,
} from "lucide-react";
import { allLocations, getLocationBySlug } from "../../../data/Locationsdata/Locationsdata";
import { servicesDetailData } from "../../../data/servicesData/servicesData";
import LocationsSlider from "./LocationsSlider";

// ✅ API Base URL
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://api.physiocentricindia.com";

// ─── HELPERS ──────────────────────────────────────────────────────
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

const LocationDetailPage = () => {
  const { slug, locationSlug } = useParams();
  const navigate = useNavigate();
  const [expandedIndex, setExpandedIndex] = useState(3);
  const [expandedFaq, setExpandedFaq] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // ─── BLOGS STATE ──────────────────────────────────────────────────
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);

  // ─── CASE STUDIES STATE ──────────────────────────────────────────
  const [relatedCaseStudies, setRelatedCaseStudies] = useState([]);
  const [caseStudiesLoading, setCaseStudiesLoading] = useState(true);

  const serviceSlug = slug;
  const locationData = locationSlug ? getLocationBySlug(locationSlug) : null;
  const serviceData = servicesDetailData?.[serviceSlug] || servicesDetailData?.["physiotherapist"];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsLoading(true);
    const t = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(t);
  }, [slug, locationSlug]);

  // ─── FETCH RELATED BLOGS ──────────────────────────────────────
  useEffect(() => {
    const fetchRelatedBlogs = async () => {
      try {
        setBlogsLoading(true);
        const categoryParam = serviceSlug?.toLowerCase();
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

    if (serviceData?.title) {
      fetchRelatedBlogs();
    }
  }, [serviceSlug, serviceData?.title]);

  // ─── FETCH RELATED CASE STUDIES ──────────────────────────────
  useEffect(() => {
    const fetchRelatedCaseStudies = async () => {
      try {
        setCaseStudiesLoading(true);
        const categoryParam = serviceSlug?.toLowerCase();
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

    if (serviceData?.title) {
      fetchRelatedCaseStudies();
    }
  }, [serviceSlug, serviceData?.title]);

  // ─── RENDER BLOGS SECTION ─────────────────────────────────────
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
          <div className="w-10 h-0.5 bg-black" />
          <span className="text-xs tracking-widest uppercase font-semibold text-black">
            <BookOpen className="w-4 h-4 inline mr-2" /> Related Articles
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-black mb-6">
          Read More About {serviceData?.title} in {locationData?.name}
        </h3>
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

  // ─── RENDER CASE STUDIES SECTION ─────────────────────────────
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
          <div className="w-10 h-0.5 bg-black" />
          <span className="text-xs tracking-widest uppercase font-semibold text-black">
            <FileText className="w-4 h-4 inline mr-2" /> Case Studies
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-black mb-6">
          Success Stories with {serviceData?.title} in {locationData?.name}
        </h3>
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

  // ─── TOGGLE FUNCTIONS ────────────────────────────────────────────
  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const handleSidebarClick = (serviceName) => {
    navigate(`/service/${serviceName.toLowerCase().replace(/\s+/g, "-")}`);
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

  // ─── SEO ──────────────────────────────────────────────────────────
  const pageTitle = `${serviceData?.title || "Physiotherapy"} in ${locationData.name}`;
  const canonicalUrl = `https://www.physiocentric.in/service/${slug}/${locationSlug}`;
  const metaTitle = locationData.metaTitle ||
    `${serviceData?.title || "Physiotherapy"} in ${locationData.name} | PhysioCentric`;
  const metaDescription = locationData.metaDescription ||
    `Expert ${serviceData?.title || "physiotherapy"} services in ${locationData.name}, ${locationData.city}. Book your appointment at PhysioCentric today.`;

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
          "name": serviceData?.title || "Physiotherapy",
          "description": serviceData?.description || locationData.shortDescription,
          "relevantSpecialty": "PhysicalTherapy"
        },
        "provider": {
          "@type": "MedicalBusiness",
          "name": "PhysioCentric",
          "url": "https://www.physiocentric.in",
          "telephone": "+919810513841",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": locationData.address || "A-2, Block A, Gulmohar Park",
            "addressLocality": locationData.name,
            "addressRegion": locationData.state || "Delhi",
            "postalCode": locationData.pincode || "110049",
            "addressCountry": "IN"
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.physiocentric.in" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.physiocentric.in/services" },
          { "@type": "ListItem", "position": 3, "name": serviceData?.title || "Services", "item": `https://www.physiocentric.in/service/${serviceSlug}` },
          { "@type": "ListItem", "position": 4, "name": locationData.name, "item": canonicalUrl }
        ]
      }
    ]
  };

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
        <meta property="og:image" content={serviceData?.mainImage || "https://www.physiocentric.in/og-image.jpg"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* ─── BANNER ─── */}
      <div
        className="relative h-[280px] md:h-[340px] bg-cover bg-center"
        style={{ backgroundImage: `url('${serviceData?.bannerImage || "/images/banner.jpg"}')` }}
      >
        <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center max-w-7xl">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4 text-white/60" aria-hidden="true" />
            <span className="text-white/60 text-xs tracking-widest uppercase">
              {locationData.area}, {locationData.city}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl mt-12 md:mt-16 text-white mb-3 font-bold tracking-tight">
            {pageTitle}
          </h1>
          {serviceData?.hero?.subheadline && (
            <p className="text-white/80 text-sm md:text-lg mb-4 max-w-2xl">
              {serviceData.hero.subheadline}
            </p>
          )}
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-white/60 text-sm list-none p-0 m-0 flex-wrap">
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
                <button onClick={() => navigate(`/service/${serviceSlug}`)} className="hover:text-white transition-colors">
                  {serviceData?.title || "Service"}
                </button>
              </li>
              <li aria-hidden="true"><span>/</span></li>
              <li>
                <span className="text-white" aria-current="page">{locationData.name}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* ─── MAIN CONTENT ─── */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* ── Main Content ── */}
            <main className="lg:col-span-9 order-1 lg:order-2 space-y-6 md:space-y-8">

              {/* Overview */}
              <div className="bg-white shadow-lg p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-black" />
                  <span className="text-xs tracking-widest uppercase font-semibold text-black">Overview</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">{pageTitle}</h2>
                {locationData.shortDescription && (
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 font-medium">
                    {locationData.shortDescription}
                  </p>
                )}
                {locationData.longDescription && (
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                    {locationData.longDescription}
                  </p>
                )}
              </div>

              {/* Why This Service Matters */}
              {serviceData?.whyMatters && (
                <div className="bg-white shadow-lg p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-0.5 bg-black" />
                    <span className="text-xs tracking-widest uppercase font-semibold text-black">Why It Matters</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                    Why {serviceData?.title} Matters in {locationData.name}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {serviceData.whyMatters}
                  </p>
                </div>
              )}

              {/* Services at this location */}
              {locationData.services?.length > 0 && (
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
                        className="flex items-center gap-3 p-3 md:p-4 border border-gray-100 hover:border-black hover:bg-gray-50 transition-all duration-300 group cursor-pointer"
                        onClick={() => {
                          const serviceSlug = service.toLowerCase().replace(/\s+/g, "-");
                          navigate(`/service/${serviceSlug}`);
                        }}
                      >
                        <div className="w-5 h-5 bg-black flex items-center justify-center flex-shrink-0" aria-hidden="true">
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 text-sm font-medium">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Benefits */}
              {serviceData?.benefits && (
                <div className="bg-white shadow-lg overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="h-[220px] md:h-full">
                      <img
                        src={serviceData.benefitImage}
                        alt={`Benefits of ${serviceData?.title} in ${locationData.name}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width={450}
                        height={400}
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-0.5 bg-black" />
                        <span className="text-xs tracking-widest uppercase font-semibold text-black">Benefits</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
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

              {/* Process / How It Works */}
              {serviceData?.process?.length > 0 && (
                <div className="bg-white shadow-lg p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-0.5 bg-black" />
                    <span className="text-xs tracking-widest uppercase font-semibold text-black">Our Process</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-6">
                    How {serviceData?.title} Works at PhysioCentric {locationData.name}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {serviceData.process.map((step, index) => (
                      <div key={index} className="flex gap-4 border border-gray-100 p-4">
                        <div className="w-9 h-9 bg-black text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
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

              {/* Why Choose Us - Accordion */}
              {serviceData?.whyChoose?.points?.length > 0 && (
                <div className="bg-white shadow-lg p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-0.5 bg-black" />
                    <span className="text-xs tracking-widest uppercase font-semibold text-black">Why Choose Us</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-6">
                    {serviceData.whyChoose.title} in {locationData.name}
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
              )}

              {/* FAQs */}
              {locationData.faqs?.length > 0 && (
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
                    {locationData.faqs.map((faq, index) => (
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

              {/* ─── BLOGS SECTION ─── */}
              {renderBlogsSection()}

              {/* ─── CASE STUDIES SECTION ─── */}
              {renderCaseStudiesSection()}

              {/* Locations Slider */}
              <LocationsSlider serviceSlug={serviceSlug} />

              {/* CTA */}
              <div className="bg-black shadow-lg p-8 text-white text-center">
                <div className="w-12 h-0.5 bg-white/30 mx-auto mb-6" aria-hidden="true" />
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Visit PhysioCentric in {locationData.name}</h3>
                <p className="mb-8 text-gray-400 leading-relaxed max-w-xl mx-auto">
                  {serviceData?.ctaText ||
                    `Book your appointment at PhysioCentric ${locationData.name} today. Our expert therapists are ready to help you recover faster.`}
                </p>
                <a href="/contacts" aria-label={`Book an appointment for ${serviceData?.title} in ${locationData.name}`}>
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
                  {serviceData?.sidebar?.services?.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => handleSidebarClick(service)}
                      aria-current={service === serviceData?.title ? "page" : undefined}
                      className={`w-full text-left px-6 py-3 transition-colors border-b border-gray-100 text-sm group flex items-center justify-between ${
                        service === serviceData?.title
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
                  {locationData.address && (
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-black flex items-center justify-center flex-shrink-0" aria-hidden="true">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 tracking-widest uppercase">Address</p>
                        <p className="text-black font-medium text-sm">{locationData.address}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* More Locations in same city */}
                {allLocations.filter((loc) => loc.city === locationData.city && loc.slug !== locationData.slug).length > 0 && (
                  <div className="border-t border-gray-100 p-6">
                    <p className="text-xs text-gray-400 tracking-widest uppercase mb-3">More in {locationData.city}</p>
                    <div className="space-y-2">
                      {allLocations
                        .filter((loc) => loc.city === locationData.city && loc.slug !== locationData.slug)
                        .slice(0, 5)
                        .map((loc, i) => (
                          <button
                            key={i}
                            onClick={() => navigate(`/service/${serviceSlug}/${loc.slug}`)}
                            className="w-full text-left text-sm text-gray-600 hover:text-black transition-colors flex items-center justify-between group"
                          >
                            <span>{loc.name}</span>
                            <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </button>
                        ))}
                    </div>
                  </div>
                )}

              </div>
            </aside>

          </div>
        </div>
      </section>

      <style>{`
        * { box-sizing: border-box; }
        .container { width: 100%; margin-left: auto; margin-right: auto; }
        @media (max-width: 768px) { .container { padding-left: 1rem; padding-right: 1rem; } }
        button { transition: all 0.3s ease; }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: #000; }
        ::-webkit-scrollbar-thumb:hover { background: #333; }
      `}</style>
    </div>
  );
};

export default LocationDetailPage;