import React, { useState } from "react";
import { Search, Calendar, User, MessageSquare, Tag } from "lucide-react";

// NOTE: Import this in your actual file
// import { useNavigate } from 'react-router-dom';

export default function BlogPage() {
  // NOTE: Uncomment this in your actual component
  // const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "How we can cover injury pain by exercise",
      slug: "how-we-can-cover-injury-pain-by-exercise",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
      excerpt:
        "Libero enim sed faucibus turpis. Sed viverra tellus in hac habitasse platea dictumst. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris [...]",
      category: "Exercise",
      author: "admin",
      date: "July 12, 2023",
      comments: 0,
    },
    {
      id: 2,
      title: "Are The Grains Good Or Bad For You?",
      slug: "are-the-grains-good-or-bad-for-you",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      excerpt:
        "Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisl ut aliquip [...]",
      category: "Exercise",
      author: "admin",
      date: "July 12, 2023",
      comments: 0,
    },
    {
      id: 3,
      title: "The Inflammation - Diet To Detox Approach",
      slug: "the-inflammation-diet-to-detox-approach",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
      excerpt:
        "Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris [...]",
      category: "Wellness",
      author: "admin",
      date: "July 12, 2023",
      comments: 0,
    },
  ];

  const recentNews = [
    {
      title: "How We Can Cover Injury Pain By Exercise",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&h=150&fit=crop",
      date: "July 12, 2023",
    },
    {
      title: "Are The Grains Good Or Bad For You?",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=150&fit=crop",
      date: "July 12, 2023",
    },
    {
      title: "The Inflammation - Diet To Detox Approach",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=200&h=150&fit=crop",
      date: "July 12, 2023",
    },
    {
      title: "The 12 Benefits Of Practicing The Yoga",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=200&h=150&fit=crop",
      date: "July 12, 2023",
    },
  ];

  const categories = [{ name: "Exercise", count: 3 }];

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

  const handleReadMore = (slug) => {
    // In your actual component, use: navigate(`/blog/${slug}`);
    window.location.href = `/blog/${slug}`;
  };

  const handlePostClick = (slug) => {
    // In your actual component, use: navigate(`/blog/${slug}`);
    window.location.href = `/blog/${slug}`;
  };

  const handleRecentNewsClick = (slug) => {
    // In your actual component, use: navigate(`/blog/${slug}`);
    window.location.href = `/blog/${slug}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-12">
      {/* Hero Banner */}
      <div
        className="relative h-[300px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=800&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center max-w-7xl">
          <h1 className="text-4xl md:text-6xl mt-10 text-white mb-6">Blog</h1>

          {/* <nav className="flex items-center gap-2 text-white/90 text-sm">
            <button className="hover:text-white transition-colors">Home</button>
            <span>/</span>
            <span className="text-white">Blog</span>
          </nav> */}
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Content - Blog Posts */}
            <main className="lg:col-span-8">
              <div className="space-y-12">
                {blogPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Featured Image */}
                    <div
                      onClick={() => handlePostClick(post.slug)}
                      className="relative h-[400px] overflow-hidden group cursor-pointer"
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Icon Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-pink-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      {/* Date Badge */}
                      <div className="inline-block bg-pink-500 text-white text-xs  uppercase px-4 py-2 rounded mb-4">
                        {post.date}
                      </div>

                      {/* Title */}
                      <h2
                        onClick={() => handlePostClick(post.slug)}
                        className="text-3xl  text-[#0a1f44] mb-4 hover:text-pink-500 transition-colors cursor-pointer"
                      >
                        {post.title}
                      </h2>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-6">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>
                            By:{" "}
                            <span className="text-gray-700">{post.author}</span>
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Tag className="w-4 h-4" />
                          <span>{post.category}</span>
                        </div>
                      </div>

                      {/* Excerpt */}
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {post.excerpt}
                      </p>

                      {/* Read More Button */}
                      <button
                        onClick={() => handleReadMore(post.slug)}
                        className="inline-block bg-pink-500 text-white  px-8 py-3 rounded-lg hover:bg-pink-600 transition-all duration-300"
                      >
                        READ MORE
                      </button>
                    </div>
                  </article>
                ))}
              </div>
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
                          {category.name}
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
                        onClick={() =>
                          handleRecentNewsClick(
                            news.title.toLowerCase().replace(/\s+/g, "-")
                          )
                        }
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
                  <h3 className="text-xl  text-[#0a1f44] mb-6 pb-3 border-b-2 border-pink-500">
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
      `}</style>
    </div>
  );
}
