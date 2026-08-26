// BlogDetailPage.jsx
import React, { useState, useEffect } from "react";
import { Search, Calendar, User, Tag, Home, ChevronRight, ArrowRight } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";

// ✅ Now pulled from .env (VITE_API_BASE_URL). Falls back to prod URL if not set.
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://api.physiocentricindia.com";

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

export default function BlogDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [blogPost, setBlogPost] = useState(null);
  const [recentNews, setRecentNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (slug) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      fetchBlogDetail();
      fetchSidebarData();
    }
  }, [slug]);

  const fetchBlogDetail = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}/api/blog`);
      if (!res.ok) throw new Error("Failed to fetch blogs");
      const data = await res.json();
      const allBlogs = Array.isArray(data) ? data : data.data || data.blogs || [];

      const matched = allBlogs.find((b) => {
        // pehle exact slug match
        if (b.slug && b.slug === slug) return true;
        // phir title se bana slug match
        const titleSlug = (b.title || "")
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, "")
          .trim()
          .replace(/\s+/g, "-");
        return titleSlug === slug;
      });

      if (!matched) throw new Error("Blog not found");
      setBlogPost(matched);

      // SEO meta tags
      document.title = `${matched.title} | PhysioCentric Blog`;
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.name = "description";
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = matched.excerpt || matched.title;

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchSidebarData = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/blog`);
      if (!res.ok) return;
      const data = await res.json();
      const blogs = Array.isArray(data) ? data : data.data || data.blogs || [];
      setRecentNews(blogs.slice(0, 4));
      const uniqueCats = [...new Set(blogs.map((b) => b.category).filter(Boolean))];
      setCategories(
        uniqueCats.map((cat) => ({
          name: cat,
          count: blogs.filter((b) => b.category === cat).length,
        }))
      );
      setTags([...new Set(blogs.flatMap((b) => b.tags || []))]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim()) navigate(`/blogs?search=${searchQuery}`);
  };

  if (loading) return (
    <div className="min-h-screen bg-white mt-12 flex items-center justify-center">
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

  if (error || !blogPost) return (
    <div className="min-h-screen bg-white mt-12 flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-700 mb-4">{error || "Blog not found"}</p>
        <button onClick={() => navigate("/blogs")}
          className="bg-black text-white px-6 py-2 text-xs tracking-widest uppercase hover:bg-gray-800 transition-colors">
          Back to Blogs
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 mt-10">

      {/* Hero Banner */}
      <div className="relative h-[240px] md:h-[320px] bg-cover bg-center"
        style={{ backgroundImage: `url('${getImageUrl(blogPost)}')` }}>
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center max-w-7xl">
          <h1 className="text-2xl sm:text-3xl md:text-5xl mt-14 md:mt-20 text-white mb-3 font-bold leading-tight line-clamp-2">
            {blogPost.title}
          </h1>
          <nav className="flex items-center gap-2 text-white/60 text-xs sm:text-sm flex-wrap">
            <button onClick={() => navigate("/")}
              className="hover:text-white transition-colors flex items-center gap-1">
              <Home className="w-3 h-3" /> Home
            </button>
            <ChevronRight className="w-3 h-3" />
            <button onClick={() => navigate("/blogs")}
              className="hover:text-white transition-colors">
              Blogs
            </button>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/90 truncate max-w-[160px] sm:max-w-[350px]">
              {blogPost.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Main */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Article */}
            <main className="lg:col-span-8 order-1">
              <article className="bg-white shadow-lg overflow-hidden">

                {/* Featured Image */}
                <div className="h-[220px] sm:h-[350px] md:h-[450px] overflow-hidden">
                  <img src={getImageUrl(blogPost)} alt={blogPost.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d";
                    }} />
                </div>

                <div className="p-5 sm:p-8 lg:p-10">

                  {/* Date Badge */}
                  <div className="inline-block bg-black text-white text-xs uppercase px-4 py-2 tracking-widest mb-5">
                    {new Date(blogPost.createdAt || blogPost.date || Date.now()).toLocaleDateString("en-US", {
                      year: "numeric", month: "long", day: "numeric",
                    })}
                  </div>

                  {/* Title */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 leading-tight">
                    {blogPost.title}
                  </h1>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-3 text-gray-400 text-sm mb-6 pb-5 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>By: <span className="text-black font-medium">{blogPost.author || "Admin"}</span></span>
                    </div>
                    {blogPost.category && (
                      <div className="flex items-center gap-2">
                        <Tag className="w-4 h-4" />
                        <span className="text-black capitalize">{blogPost.category}</span>
                      </div>
                    )}
                    {blogPost.tags?.length > 0 && (
                      <div className="flex flex-wrap gap-2 w-full mt-1">
                        {blogPost.tags.map((tag, i) => (
                          <span key={i}
                            className="text-xs px-2 py-1 bg-gray-100 text-gray-500 capitalize tracking-wide">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Body */}
                  <div className="prose max-w-none">
                    {blogPost.content ? (
                      <div className="text-gray-600 text-sm sm:text-base leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: blogPost.content }} />
                    ) : blogPost.description ? (
                      <div className="text-gray-600 text-sm sm:text-base leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: blogPost.description }} />
                    ) : (
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {blogPost.excerpt || "No content available."}
                      </p>
                    )}
                  </div>

                  {/* Back */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <button onClick={() => navigate("/blogs")}
                      className="flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-black hover:gap-3 transition-all">
                      <ChevronRight className="w-4 h-4 rotate-180" /> Back to Blogs
                    </button>
                  </div>
                </div>
              </article>
            </main>

            {/* Sidebar */}
            <aside className="lg:col-span-4 order-2">
              <div className="space-y-6 lg:sticky lg:top-8">

                {/* Search */}
                <div className="bg-white shadow-lg p-6">
                  <h3 className="text-xs tracking-widest uppercase font-semibold text-black mb-4">
                    Search
                  </h3>
                  <div className="relative">
                    <input type="text" placeholder="Search blogs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-black focus:outline-none text-sm" />
                    <button onClick={handleSearch}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors">
                      <Search className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Categories */}
                {categories.length > 0 && (
                  <div className="bg-white shadow-lg p-6">
                    <h3 className="text-xs tracking-widest uppercase font-semibold text-black mb-4 pb-3 border-b border-gray-100">
                      Categories
                    </h3>
                    <ul className="space-y-2">
                      {categories.map((cat, i) => (
                        <li key={i}>
                          <button onClick={() => navigate(`/blogs?category=${cat.name}`)}
                            className="text-gray-500 hover:text-black transition-colors flex items-center gap-3 w-full text-left text-sm group">
                            <span className="w-1.5 h-1.5 bg-black rounded-full group-hover:scale-150 transition-transform flex-shrink-0"></span>
                            <span className="capitalize">{cat.name}</span>
                            <span className="ml-auto text-gray-400 text-xs">({cat.count})</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Recent Posts */}
                {recentNews.length > 0 && (
                  <div className="bg-white shadow-lg p-6">
                    <h3 className="text-xs tracking-widest uppercase font-semibold text-black mb-4 pb-3 border-b border-gray-100">
                      Recent Posts
                    </h3>
                    <div className="space-y-4">
                      {recentNews.map((news, i) => (
                        <div key={i}
                          onClick={() => navigate(`/blogs/${getSlug(news)}`)}
                          className="flex gap-3 group cursor-pointer">
                          <div className="w-16 h-16 flex-shrink-0 overflow-hidden bg-gray-100">
                            <img src={getImageUrl(news)} alt={news.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              onError={(e) => {
                                e.target.src = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d";
                              }} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-semibold text-black group-hover:text-gray-500 transition-colors line-clamp-2 mb-1">
                              {news.title}
                            </h4>
                            <p className="text-xs text-gray-400 flex items-center gap-1">
                              <Calendar className="w-3 h-3 flex-shrink-0" />
                              {new Date(news.createdAt || Date.now()).toLocaleDateString("en-US", {
                                month: "short", day: "numeric", year: "numeric",
                              })}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags */}
                {tags.length > 0 && (
                  <div className="bg-white shadow-lg p-6">
                    <h3 className="text-xs tracking-widest uppercase font-semibold text-black mb-4 pb-3 border-b border-gray-100">
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag, i) => (
                        <button key={i}
                          onClick={() => navigate(`/blogs?tags=${tag}`)}
                          className="px-3 py-1.5 border border-gray-200 text-gray-500 hover:bg-black hover:text-white hover:border-black transition-all duration-300 text-xs capitalize tracking-wide">
                          {tag}
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
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .prose { color: #4b5563; }
        .prose h1, .prose h2, .prose h3, .prose h4 { color: #000; font-weight: bold; margin-top: 1.5rem; margin-bottom: 0.75rem; }
        .prose h1 { font-size: 1.5rem; }
        .prose h2 { font-size: 1.25rem; }
        .prose h3 { font-size: 1.1rem; }
        .prose p { margin-bottom: 1rem; line-height: 1.8; }
        .prose ul, .prose ol { margin-left: 1.5rem; margin-bottom: 1rem; }
        .prose li { margin-bottom: 0.4rem; line-height: 1.7; }
        .prose a { color: #000; text-decoration: underline; }
        .prose a:hover { color: #555; }
        .prose img { max-width: 100%; height: auto; margin: 1.5rem 0; }
        .prose strong { color: #111; }
        .prose blockquote { border-left: 3px solid #000; padding-left: 1rem; color: #555; font-style: italic; margin: 1.5rem 0; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: #000; }
        ::-webkit-scrollbar-thumb:hover { background: #333; }
      `}</style>
    </div>
  );
}