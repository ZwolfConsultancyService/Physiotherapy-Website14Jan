import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    id: 1,
    slug: "how-we-can-fix-any-problem-in-tailbone-in-back",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
    date: "JULY 12, 2023",
    title: "How we can fix any problem in tailbone in back.",
  },
  {
    id: 2,
    slug: "how-we-can-cover-injury-pain-by-exercise",
    image: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776",
    date: "JULY 12, 2023",
    title: "How we can cover injury pain by exercise",
  },
];

const LatestBlogsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* LEFT CONTENT */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-blue-600"></span>
            <p className="uppercase text-blue-600 tracking-wide">
              Company News
            </p>
          </div>

          <h2 className="text-3xl md:text-5xl text-slate-900 leading-tight mb-6">
            Latest Articles <br /> & Blogs
          </h2>

          <p className="text-gray-600 mb-6">
            If you need to repair or replace your Plumbing system,
            call today and talk to one of our Plumbing.
          </p>

          <button 
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-blue-600 hover:gap-3 transition-all"
          >
            Explore More <ArrowRight size={18} />
          </button>
        </div>

        {/* BLOG CARDS */}
        {blogs.map((blog) => (
          <div 
            key={blog.id} 
            className="group cursor-pointer"
            onClick={() => navigate(`/blog/${blog.slug}`)}
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <p className="mt-6 text-sm text-gray-500">
              {blog.date}
            </p>

            <h3 className="text-xl text-slate-900 mt-2 mb-4 leading-snug group-hover:text-blue-600 transition-colors">
              {blog.title}
            </h3>

            <button 
              className="flex items-center gap-2 text-blue-600 hover:gap-3 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/blog/${blog.slug}`);
              }}
            >
              Continue Reading <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestBlogsSection;