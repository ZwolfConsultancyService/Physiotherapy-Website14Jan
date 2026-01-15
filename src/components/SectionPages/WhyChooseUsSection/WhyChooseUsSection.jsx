import React from 'react';

export default function WhyChooseUsSection() {
  const stats = [
    {
      number: "25k",
      label: "Happy Customers"
    },
    {
      number: "12+",
      label: "Years Experience"
    },
    {
      number: "100%",
      label: "Satisfaction"
    }
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Left Image Section */}
        <div className="relative h-[200px] lg:h-auto">
          <img
            src="https://i.pinimg.com/736x/b7/3c/d9/b73cd905928cd9dba0376bc906a85098.jpg"
            alt="Chiropractic Treatment"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cyan-500/20"></div>
        </div>

        {/* Right Content Section */}
        <div className="bg-cyan-500 text-white px-8 py-12 md:px-12 lg:px-16 lg:py-20 flex flex-col justify-center">
          <div className="space-y-8">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl  leading-tight">
              Why Choose Us
            </h2>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed">
                We Proudly give quality, thorough chiropractic to the group and the encompassing regions.
              </p>

              <p className="text-base md:text-lg leading-relaxed opacity-95">
                Chiropractic mind is the act of utilizing spinal arrangement to ease a wide assortment of physical infirmities, including muscle strain, neck torment, endless back torment, and then some.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 md:gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-4xl md:text-5xl lg:text-6xl mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base  opacity-90">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}