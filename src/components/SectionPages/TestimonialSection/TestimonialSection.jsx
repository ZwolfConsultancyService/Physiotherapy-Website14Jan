import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section
      className="relative w-full min-h-[70vh] flex items-center justify-center text-white overflow-hidden bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15, 40, 80, 0.85), rgba(15, 40, 80, 0.85)), url('https://images.unsplash.com/photo-1526256262350-7da7584cf5eb')",
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center">

        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Robert Mick"
            className="w-20 h-20 rounded-full border-4 border-white object-cover"
          />
        </div>

        {/* Text */}
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci sed quia non numquam qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est. O sed quia consequuntur
          magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>

        <h4 className="text-lg ">– Robert Mick</h4>
      </div>

      {/* Left Arrow */}
      <button className="absolute left-6 md:left-16 w-12 h-12 rounded-full border border-white/50 flex items-center justify-center hover:bg-white/10 transition">
        <ChevronLeft size={22} />
      </button>

      {/* Right Arrow */}
      <button className="absolute right-6 md:right-16 w-12 h-12 rounded-full border border-white/50 flex items-center justify-center hover:bg-white/10 transition">
        <ChevronRight size={22} />
      </button>
    </section>
  );
};

export default TestimonialSection;
  