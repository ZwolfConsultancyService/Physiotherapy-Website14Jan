import React from "react";
import { Link } from "react-router-dom";
import WhyChooseUsSection from "../../../components/SectionPages/WhyChooseUsSection/WhyChooseUsSection";
import TestimonialSection from "../../../components/SectionPages/TestimonialSection/TestimonialSection";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <div className="relative h-[400px] sm:h-[450px] md:h-[500px] bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
        </div>

        {/* Main Content */}
        <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center h-full max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl  text-white mb-4 sm:mb-6">
              About Us
            </h1>

            {/* Breadcrumb */}
            <div className="flex items-center text-white/90 text-sm sm:text-base">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="mx-2 sm:mx-3">/</span>
              <span className="text-white font-medium">About Us</span>
            </div>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/80 max-w-xl">
              Professional Care & Dedicated Service
            </p>
          </div>
        </div>

        {/* Bottom Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-12 sm:h-16"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0L50 10C100 20 200 40 300 45C400 50 500 40 600 35C700 30 800 30 900 35C1000 40 1100 50 1150 55L1200 60V120H0V0Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-[4/5] sm:aspect-[3/4] relative">
                {/* Actual Image */}
                <img
                  // src="/api/placeholder/600/800"
                  src="https://i.pinimg.com/736x/76/43/bb/7643bb9b2377267262cc635b7b3c7b8b.jpg"
                  alt="About Our Clinic"
                  className="w-full h-full object-cover"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>

                {/* Bottom Info Card */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base  text-gray-900">
                          25+ Years
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Of Excellence
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-20 blur-2xl"></div>
            <div className="hidden sm:block absolute -top-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center mb-4 mt-26">
                <div className="w-10 sm:w-12 h-1 bg-blue-600 mr-3 rounded-full"></div>
                <span className="text-blue-600  text-xs sm:text-sm tracking-widest uppercase">
                  Who We Are
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl  text-gray-900 mb-4 sm:mb-6 leading-tight">
                About Our Clinic
              </h2>
            </div>

            <div className="space-y-5 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl  text-gray-800 leading-snug">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                sed quia consequuntur magni dolores eos qui ratione voluptatem
                sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                dolor sit amet, consectetur, adipisci velit. sequi nesciunt.
                Neque porro quisquam est, qui dolor sit amet, consectetur.
              </p>

              <div className="pt-4 sm:pt-6 border-t border-gray-200">
                <h3 className="text-xl sm:text-2xl  text-gray-800 mb-3 sm:mb-4">
                  Our History
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  sed quia consequuntur magni dolores eos qui ratione voluptatem
                  sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                  quia dolor sit amet, consectetur, adipisci velit. sed quia non
                  numquam qui ratione voluptatem sequi nesciunt. Neque porro
                  quisquam est, qui dolorem ipsum quia dolor sit amet,
                  consectetur, adipiscil. sed quia non numquam qui ratione
                  voluptatem sequi nesciunt. pisci velit. sed quia non numquam
                  qui ratione voluptatem sequi nesciunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhyChooseUsSection />

      {/* Doctor Introduction Section */}
      <div className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            {/* Doctor Image */}
            <div className="order-1">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://i.pinimg.com/1200x/59/65/11/596511ec926f7c559e7f33e2e27d84b4.jpg"
                    alt="Doctor Julley"
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Decorative element */}
                <div className="hidden sm:block absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
              </div>
            </div>

            {/* Doctor Info */}
            <div className="order-2">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-1 bg-blue-600 mr-3 rounded-full"></div>
                  <span className="text-blue-600  text-sm tracking-widest uppercase">
                    Who I Am
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl  text-gray-900 mb-3 sm:mb-4">
                  Hello, I'm Doctor Julley
                </h2>
                <p className="text-lg sm:text-xl  text-gray-700">
                  Expert Clinical Chiropractor in NY
                </p>
              </div>

              <div className="space-y-4 sm:space-y-5">
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Chiropractic mind is the act of utilizing spinal arrangement
                  to ease a wide assortment of physical infirmities, including
                  amuscle strain, neck torment, endless back torment, and then
                  some. This is expert by altering the position of the spinal
                  segment to its appropriate shape, giving a non-intrusive/
                </p>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  At Healing Chiropractic our chiropractic group is prepared to
                  address with you to talk about your issues. We will outline a
                  program that is appropriate for you. We anticipate meeting
                  you.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-6 sm:mt-8">
                <div className="w-48 h-20 relative">
                  <svg viewBox="0 0 200 80" className="w-full h-full">
                    <path
                      d="M10 40 Q 30 10, 50 40 T 90 40 Q 110 60, 130 40 T 170 40"
                      stroke="#1e293b"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M30 50 Q 40 30, 60 50"
                      stroke="#1e293b"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TestimonialSection />
      {/* Clinic Comfortness Section */}
      <div className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-1 bg-blue-600 mr-3 rounded-full"></div>
                  <span className="text-blue-600  text-sm tracking-widest uppercase">
                    About Clinic
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl  text-gray-900 mb-6">
                  Clinic Comfortness
                </h2>
              </div>

              <div className="space-y-4 sm:space-y-5 mb-8">
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Bring to the table win-win survival strategies to ensure
                  proactive domination. At the end of the day, evolved from
                  generation X is on the runway heading towards a streamlined
                  cloud solution.
                </p>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide with
                  additional clickthroughs from clinic. Nanotechnology immersion
                  along the information.
                </p>
              </div>

              {/* Discover More Button */}
              
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://i.pinimg.com/736x/86/a5/2a/86a52ab0b7a65d81d4872fc35354863e.jpg"
                  alt="Clinic Comfortness"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white border-y border-gray-200 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                    <circle cx="19" cy="8" r="2" fill="currentColor" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl  text-gray-900 mb-2">
                1700+
              </h3>
              <p className="text-sm sm:text-base  text-gray-700">
                Happy Patients
              </p>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl  text-gray-900 mb-2">
                100%
              </h3>
              <p className="text-sm sm:text-base  text-gray-700">
                Satisfaction Guarantee
              </p>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl  text-gray-900 mb-2">
                27+
              </h3>
              <p className="text-sm sm:text-base  text-gray-700">
                Therapist & Staff
              </p>
            </div>

            {/* Stat 4 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl  text-gray-900 mb-2">
                10+
              </h3>
              <p className="text-sm sm:text-base  text-gray-700">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
