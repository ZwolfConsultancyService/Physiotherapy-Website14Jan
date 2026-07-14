// BlogPage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Search, Calendar, Home, ChevronRight } from "lucide-react";

const API_BASE_URL = "https://dr-abhishek-physiotherapist-backend.onrender.com/api";

const getSlug = (blog) => {
  if (blog.slug) return blog.slug;
  return (blog.title || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
};

const getImageUrl = (blog) => {
  if (blog.images?.length > 0 && blog.images[0].url) return blog.images[0].url;
  if (blog.image) return blog.image;
  if (blog.featuredImage) return blog.featuredImage;
  if (blog.thumbnail) return blog.thumbnail;
  return "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d";
};

const BlogPage = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("");
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchBlogs();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    let result = blogs;
    if (search.trim()) {
      result = result.filter((b) =>
        b.title?.toLowerCase().includes(search.toLowerCase()) ||
        b.excerpt?.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (activeTag) {
      result = result.filter((b) =>
        b.tags?.includes(activeTag) || b.category === activeTag
      );
    }
    setFiltered(result);
  }, [search, activeTag, blogs]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}/blog`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      const list = Array.isArray(data) ? data : data.data || data.blogs || [];
      setBlogs(list);
      setFiltered(list);
      setTags([...new Set(list.flatMap((b) => b.tags || []))]);
      setCategories([...new Set(list.map((b) => b.category).filter(Boolean))]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ── Loading ──
  if (loading) {
    return (
      <div className="pc-blog min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-6" aria-hidden="true">
            <div className="absolute inset-0 border-4 border-gray-100 rounded-full" />
            <div className="absolute inset-0 border-4 border-transparent border-t-black rounded-full animate-spin" />
            <div className="absolute inset-4 bg-black rounded-full animate-pulse" />
          </div>
          <p className="text-xs tracking-widest uppercase text-black/40" aria-live="polite">
            Loading blogs...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pc-blog min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-black/60 mb-4">Failed to load blogs</p>
          <button
            onClick={fetchBlogs}
            className="bg-black text-white px-6 py-2 text-xs tracking-widest uppercase hover:bg-gray-800 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pc-blog min-h-screen bg-white">
      {/* ─── Fonts & base styles ─── */}
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* ... meta tags as before ... */}
      </Helmet>

      <style>{`
        .pc-blog { font-family: 'IBM Plex Sans', sans-serif; }
        .pc-blog .serif { font-family: 'Fraunces', serif; }
        .pc-blog .mono { font-family: 'IBM Plex Mono', monospace; }
        .pc-blog .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .pc-blog .animate-spin { animation: spin 0.8s linear infinite; }
        .pc-blog .animate-pulse { animation: pulse 1.5s ease-in-out infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        .pc-blog input:focus, .pc-blog button:focus-visible { outline: 2px solid #000; outline-offset: 2px; }
      `}</style>

      {/* ─── SEO ──────────────────────────────────────────────── */}
      <Helmet>
        <title>Physiotherapy Blog & Articles – PhysioCentric New Delhi | Health Tips & Guides</title>
        <meta
          name="description"
          content="Read expert physiotherapy articles, health tips, and patient guides from PhysioCentric, New Delhi. Topics include back pain, sports injuries, posture, joint health & recovery advice."
        />
        <meta name="keywords" content="physiotherapy blog Delhi, back pain tips, sports injury recovery, physiotherapy health articles, joint pain advice, posture correction tips, PhysioCentric blog New Delhi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.physiocentric.in/blogs" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.physiocentric.in/blogs" />
        <meta property="og:title" content="Physiotherapy Blog – PhysioCentric, New Delhi" />
        <meta property="og:description" content="Expert physiotherapy articles and health guides from PhysioCentric. Learn about pain management, injury recovery, and wellness tips." />
        <meta property="og:image" content="https://www.physiocentric.in/og-image.jpg" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="PhysioCentric" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Physiotherapy Blog & Health Tips – PhysioCentric, New Delhi" />
        <meta name="twitter:description" content="Expert health articles on physiotherapy, pain relief, and injury recovery from New Delhi's top-rated physio clinic." />
        <meta name="twitter:image" content="https://www.physiocentric.in/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "url": "https://www.physiocentric.in/blogs",
            "name": "PhysioCentric Blog – Physiotherapy Health Tips & Guides",
            "description": "Expert physiotherapy articles, recovery guides, and health tips from PhysioCentric, New Delhi.",
            "inLanguage": "en-IN",
            "publisher": {
              "@type": "MedicalBusiness",
              "name": "PhysioCentric",
              "url": "https://www.physiocentric.in",
              "logo": { "@type": "ImageObject", "url": "https://www.physiocentric.in/logo.png" }
            }
          })}
        </script>
      </Helmet>

      {/* ─── BANNER ──────────────────────────────────────────── */}
      <div className="relative h-[240px] md:h-[300px] bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-90" aria-hidden="true" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center max-w-7xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-10 h-[2px] bg-white/50" aria-hidden="true" />
            <span className="mono text-white/50 text-[11px] tracking-[0.25em] uppercase font-medium">PhysioCentric</span>
          </div>
          <h1 className="serif text-3xl md:text-5xl text-white mb-4 font-bold tracking-tight">
            Blogs &amp; Articles
          </h1>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-white/60 text-sm list-none p-0 m-0">
              <li>
                <button
                  onClick={() => navigate("/")}
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <Home className="w-4 h-4" aria-hidden="true" /> Home
                </button>
              </li>
              <li aria-hidden="true"><ChevronRight className="w-3 h-3" /></li>
              <li><span className="text-white" aria-current="page">Blogs</span></li>
            </ol>
          </nav>
        </div>
        {/* bottom white wave */}
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg className="w-full h-8 md:h-12" preserveAspectRatio="none" viewBox="0 0 1200 120" fill="none">
            <path d="M0 0L50 10C100 20 200 40 300 45C400 50 500 40 600 35C700 30 800 30 900 35C1000 40 1100 50 1150 55L1200 60V120H0V0Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* ─── MAIN GRID ────────────────────────────────────────── */}
      <section className="py-10 md:py-16" aria-label="Blog articles">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* ─── BLOG GRID ──────────────────────────────────── */}
            <main className="lg:col-span-8 order-2 lg:order-1">

              {/* Search – mobile */}
              <div className="relative mb-6 lg:hidden">
                <label htmlFor="blog-search-mobile" className="sr-only">Search blogs</label>
                <input
                  id="blog-search-mobile"
                  type="search"
                  placeholder="Search blogs..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full px-4 py-3 border border-black focus:outline-none focus:ring-1 focus:ring-black text-sm bg-white"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-black/40" aria-hidden="true" />
              </div>

              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-black/40 text-lg">No blogs found.</p>
                  <button
                    onClick={() => { setSearch(""); setActiveTag(""); }}
                    className="mt-4 mono text-xs tracking-widest uppercase underline text-black hover:no-underline"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {filtered.map((blog) => (
                    <article
                      key={blog._id || blog.id}
                      className="bg-white border border-black/10 shadow-sm hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
                      onClick={() => navigate(`/blogs/${getSlug(blog)}`)}
                    >
                      <div className="overflow-hidden h-[200px]">
                        <img
                          src={getImageUrl(blog)}
                          alt={`${blog.title} – PhysioCentric physiotherapy article`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          width={400}
                          height={200}
                          onError={(e) => {
                            e.target.src = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d";
                          }}
                        />
                      </div>
                      <div className="p-5">
                        {blog.tags?.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-3" aria-label="Blog tags">
                            {blog.tags.slice(0, 2).map((tag, i) => (
                              <span
                                key={i}
                                className="mono text-[10px] px-2 py-1 bg-black/5 text-black/60 tracking-wide capitalize"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        <h2 className="serif text-base md:text-lg font-semibold text-black mb-2 leading-snug group-hover:text-black/60 transition-colors line-clamp-2">
                          {blog.title}
                        </h2>
                        {(blog.excerpt || blog.content) && (
                          <p className="text-black/50 text-sm mb-4 line-clamp-2">
                            {blog.excerpt || blog.content?.replace(/<[^>]*>/g, "").substring(0, 120) + "..."}
                          </p>
                        )}
                        <div className="flex items-center justify-between pt-3 border-t border-black/10">
                          <time
                            dateTime={new Date(blog.createdAt || Date.now()).toISOString()}
                            className="text-xs text-black/40 flex items-center gap-1 mono"
                          >
                            <Calendar className="w-3 h-3" aria-hidden="true" />
                            {new Date(blog.createdAt || Date.now()).toLocaleDateString("en-US", {
                              year: "numeric", month: "short", day: "numeric",
                            })}
                          </time>
                          <button
                            className="mono text-xs tracking-widest uppercase font-semibold text-black flex items-center gap-1 hover:gap-2 transition-all"
                            aria-label={`Read full article: ${blog.title}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/blogs/${getSlug(blog)}`);
                            }}
                          >
                            Read <ChevronRight className="w-3 h-3" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </main>

            {/* ─── SIDEBAR ─────────────────────────────────────── */}
            <aside className="lg:col-span-4 order-1 lg:order-2" aria-label="Blog filters and recent posts">
              <div className="space-y-6 lg:sticky lg:top-8">

                {/* Search – desktop */}
                <div className="bg-white border border-black/10 shadow-sm p-6 hidden lg:block">
                  <h2 className="mono text-xs tracking-widest uppercase font-semibold text-black mb-4">
                    Search
                  </h2>
                  <div className="relative">
                    <label htmlFor="blog-search-desktop" className="sr-only">Search blogs</label>
                    <input
                      id="blog-search-desktop"
                      type="search"
                      placeholder="Search blogs..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full px-4 py-3 border border-black focus:outline-none focus:ring-1 focus:ring-black text-sm bg-white"
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-black/40" aria-hidden="true" />
                  </div>
                </div>

                {/* Categories */}
                {categories.length > 0 && (
                  <div className="bg-white border border-black/10 shadow-sm p-6">
                    <h2 className="mono text-xs tracking-widest uppercase font-semibold text-black mb-4 pb-3 border-b border-black/10">
                      Categories
                    </h2>
                    <ul className="space-y-2">
                      <li>
                        <button
                          onClick={() => setActiveTag("")}
                          className={`text-sm w-full text-left flex items-center gap-2 py-1 transition-colors ${activeTag === "" ? "text-black font-semibold" : "text-black/50 hover:text-black"}`}
                        >
                          <span className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" aria-hidden="true" />
                          All Categories
                        </button>
                      </li>
                      {categories.map((cat, i) => (
                        <li key={i}>
                          <button
                            onClick={() => setActiveTag(cat)}
                            className={`text-sm w-full text-left flex items-center gap-2 py-1 transition-colors capitalize ${activeTag === cat ? "text-black font-semibold" : "text-black/50 hover:text-black"}`}
                            aria-pressed={activeTag === cat}
                          >
                            <span className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" aria-hidden="true" />
                            {cat}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tags */}
                {tags.length > 0 && (
                  <div className="bg-white border border-black/10 shadow-sm p-6">
                    <h2 className="mono text-xs tracking-widest uppercase font-semibold text-black mb-4 pb-3 border-b border-black/10">
                      Tags
                    </h2>
                    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by tag">
                      {tags.map((tag, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveTag(activeTag === tag ? "" : tag)}
                          aria-pressed={activeTag === tag}
                          className={`mono px-3 py-1.5 text-xs capitalize tracking-wide border transition-all duration-300 ${activeTag === tag
                            ? "bg-black text-white border-black"
                            : "border-black/20 text-black/60 hover:bg-black hover:text-white hover:border-black"}`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Recent Posts */}
                <div className="bg-white border border-black/10 shadow-sm p-6">
                  <h2 className="mono text-xs tracking-widest uppercase font-semibold text-black mb-4 pb-3 border-b border-black/10">
                    Recent Posts
                  </h2>
                  <div className="space-y-4">
                    {blogs.slice(0, 4).map((blog, i) => (
                      <div
                        key={i}
                        className="flex gap-3 group cursor-pointer"
                        onClick={() => navigate(`/blogs/${getSlug(blog)}`)}
                      >
                        <div className="w-16 h-16 flex-shrink-0 overflow-hidden bg-black/5">
                          <img
                            src={getImageUrl(blog)}
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                            width={64}
                            height={64}
                            onError={(e) => {
                              e.target.src = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d";
                            }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xs font-semibold text-black group-hover:text-black/60 transition-colors line-clamp-2 mb-1">
                            {blog.title}
                          </h3>
                          <time
                            dateTime={new Date(blog.createdAt || Date.now()).toISOString()}
                            className="text-xs text-black/40 flex items-center gap-1 mono"
                          >
                            <Calendar className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                            {new Date(blog.createdAt || Date.now()).toLocaleDateString("en-US", {
                              month: "short", day: "numeric", year: "numeric",
                            })}
                          </time>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;