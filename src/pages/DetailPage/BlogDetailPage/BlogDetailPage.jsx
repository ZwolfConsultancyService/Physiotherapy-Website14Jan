import React, { useState, useEffect } from "react";
import { Search, Calendar } from "lucide-react";

// NOTE: Import this in your actual file
// import { useParams, useNavigate } from 'react-router-dom';

// ==================== BLOG POSTS DATA ====================
const blogPostsData = {
  "how-we-can-cover-injury-pain-by-exercise": {
    id: 1,
    title: "How We Can Cover Injury Pain By Exercise",
    slug: "how-we-can-cover-injury-pain-by-exercise",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    author: "admin",
    date: "July 12, 2023",
    category: "exercise",
    comments: 0,
    content: `Libero enim sed faucibus turpis. Sed viverra tellus in hac habitasse platea dictumst. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  "are-the-grains-good-or-bad-for-you": {
    id: 2,
    title: "Are The Grains Good Or Bad For You?",
    slug: "are-the-grains-good-or-bad-for-you",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
    author: "admin",
    date: "July 12, 2023",
    category: "exercise",
    comments: 0,
    content: `Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisl ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  "the-inflammation-diet-to-detox-approach": {
    id: 3,
    title: "The Inflammation - Diet To Detox Approach",
    slug: "the-inflammation-diet-to-detox-approach",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
    author: "admin",
    date: "July 12, 2023",
    category: "wellness",
    comments: 0,
    content: `Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
  "the-12-benefits-of-practicing-the-yoga": {
    id: 4,
    title: "The 12 Benefits Of Practicing The Yoga",
    slug: "the-12-benefits-of-practicing-the-yoga",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
    author: "admin",
    date: "July 12, 2023",
    category: "wellness",
    comments: 0,
    content: `Yoga provides numerous benefits for both physical and mental health. Taking seamless key performance indicators offline to maximise the long tail. From improved flexibility to stress reduction, regular yoga practice can transform your life in meaningful ways.`,
  },
};

export default function BlogDetailPage() {
  // NOTE: In your actual component, use:
  // const { slug } = useParams();
  // const navigate = useNavigate();

  // For demo, getting slug from URL
  const getSlugFromURL = () => {
    const path = window.location.pathname;
    const parts = path.split("/");
    return (
      parts[parts.length - 1] || "how-we-can-cover-injury-pain-by-exercise"
    );
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [currentSlug, setCurrentSlug] = useState(getSlugFromURL());

  // Get blog post data based on slug
  const blogPost =
    blogPostsData[currentSlug] ||
    blogPostsData["how-we-can-cover-injury-pain-by-exercise"];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentSlug]);

  const recentNews = [
    {
      title: "How We Can Cover Injury Pain By Exercise",
      slug: "how-we-can-cover-injury-pain-by-exercise",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&h=150&fit=crop",
      date: "July 12, 2023",
    },
    {
      title: "Are The Grains Good Or Bad For You?",
      slug: "are-the-grains-good-or-bad-for-you",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=150&fit=crop",
      date: "July 12, 2023",
    },
    {
      title: "The Inflammation - Diet To Detox Approach",
      slug: "the-inflammation-diet-to-detox-approach",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=200&h=150&fit=crop",
      date: "July 12, 2023",
    },
    {
      title: "The 12 Benefits Of Practicing The Yoga",
      slug: "the-12-benefits-of-practicing-the-yoga",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=200&h=150&fit=crop",
      date: "July 12, 2023",
    },
  ];

  const categories = [
    { name: "Exercise", count: 2 },
    { name: "Wellness", count: 2 },
  ];

  const tags = [
    "Chiropractic",
    "Clinic",
    "Exercise",
    "Physio",
    "Spine Pain",
    "Wellness",
  ];

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  const handleRecentNewsClick = (slug) => {
    window.location.href = `/blog/${slug}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-12">
      {/* Hero Banner */}
      <div
        className="relative h-[300px] bg-cover bg-center"
        style={{
          backgroundImage: `url('${blogPost.image}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center max-w-7xl">
          <h1 className="text-3xl md:text-5xl mt-20 text-white mb-6">
            {blogPost.title}
          </h1>

          <nav className="flex items-center gap-2 text-white/90 text-sm">
            <button
              onClick={() => handleNavigation("/")}
              className="hover:text-white transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <button
              onClick={() => handleNavigation("/blog")}
              className="hover:text-white transition-colors"
            >
              Blog
            </button>
            <span>/</span>
            <span className="text-white">{blogPost.title}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Content - Blog Post */}
            <main className="lg:col-span-8">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Featured Image */}
                <div className="relative h-[400px] sm:h-[500px] overflow-hidden">
                  <img
                    src={blogPost.image}
                    alt={blogPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 lg:p-12">
                  {/* Date Badge */}
                  <div className="inline-block bg-blue-600 text-white text-xs  uppercase px-4 py-2 rounded mb-6">
                    {blogPost.date}
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-8">
                    <div className="flex items-center gap-2">
                      <span>By:</span>
                      <span className="text-gray-700 ">{blogPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-700 capitalize">
                        {blogPost.category}
                      </span>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="prose max-w-none">
                    <p className="text-gray-700 text-base leading-relaxed mb-6">
                      {blogPost.content}
                    </p>

                    {/* Two Column Section */}
                    <h2 className="text-2xl sm:text-3xl  text-[#0a1f44] mt-12 mb-6">
                      Two Column Text Sample
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <p className="text-gray-700 text-base leading-relaxed">
                          Nam libero tempore, cum soluta nobis est eligendi
                          optio cumque nihil impedit quo minus id quod maxime
                          placeat facere possimus, omnis voluptas assumenda est.
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-700 text-base leading-relaxed">
                          Nam libero tempore, cum soluta nobis est eligendi
                          optio cumque nihil impedit quo minus id quod maxime
                          placeat facere possimus, omnis voluptas assumenda est.
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                      Here is main text quis nostrud exercitation ullamco
                      laboris nisi here is itealic text ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat{" "}
                      <a
                        href="#"
                        className="text-pink-500 underline hover:text-pink-600"
                      >
                        here is link
                      </a>{" "}
                      cupidatat nonproident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </article>
            </main>

            {/* Right Sidebar */}
            <aside className="lg:col-span-4">
              <div className="space-y-8 lg:sticky lg:top-8">
                {/* Search Widget */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter Search Keywords"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none"
                    />
                    <button
                      onClick={handleSearch}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-pink-500"
                    >
                      <Search className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Categories Widget */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl  text-[#0a1f44] mb-6 pb-3 border-b-2 border-pink-500">
                    Categories
                  </h3>
                  <ul className="space-y-3">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <button className="text-gray-700 hover:text-pink-500 transition-colors flex items-center gap-2">
                          <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                          {category.name} ({category.count})
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recent News Widget */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl  text-[#0a1f44] mb-6 pb-3 border-b-2 border-pink-500">
                    Recent News
                  </h3>
                  <div className="space-y-4">
                    {recentNews.map((news, index) => (
                      <div
                        key={index}
                        onClick={() => handleRecentNewsClick(news.slug)}
                        className="flex gap-4 group cursor-pointer"
                      >
                        <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                          <img
                            src={news.image}
                            alt={news.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm  text-gray-800 group-hover:text-pink-500 transition-colors mb-2 line-clamp-2">
                            {news.title}
                          </h4>
                          <p className="text-xs text-gray-500 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {news.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags Widget */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl text-[#0a1f44] mb-6 pb-3 border-b-2 border-pink-500">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <button
                        key={index}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-pink-500 hover:text-white transition-all duration-300 text-sm"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .prose {
          color: #374151;
        }

        .prose h2 {
          color: #0a1f44;
          font-weight: bold;
        }

        .prose a {
          color: #ec4899;
          text-decoration: underline;
        }

        .prose a:hover {
          color: #db2777;
        }

        /* Scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #ec4899;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #db2777;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
