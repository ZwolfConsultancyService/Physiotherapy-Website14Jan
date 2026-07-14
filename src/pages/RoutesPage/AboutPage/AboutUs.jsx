import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import WhyChooseUsSection from "../../../components/SectionPages/WhyChooseUsSection/WhyChooseUsSection";
///import TestimonialSection from "../../../components/SectionPages/TestimonialSection/TestimonialSection";
import { 
  Award, 
  Users, 
  ThumbsUp, 
  Heart, 
  Shield, 
  Clock, 
  Star, 
  ChevronRight,
  Quote 
} from "lucide-react";
import head from '../../../assets/teamfolder/head.jpeg'
import about from '../../../assets/aboutsection.png'

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">

      {/* ─── SEO ─── */}
      <Helmet>
        <title>About PhysioCentric – Dr. Divya Sharma | Physiotherapy Clinic New Delhi</title>
        <meta 
          name="description" 
          content="PhysioCentric, led by Dr. Divya Sharma, is New Delhi's premier physiotherapy clinic with 25+ years of experience. Restore movement, rebuild strength – book your consultation today."
        />
        <meta 
          name="keywords" 
          content="Dr. Divya Sharma physiotherapist, PhysioCentric clinic, physiotherapy New Delhi, best physio in Delhi, Gulmohar Park physio, back pain specialist, sports injury rehab" 
        />
        <link rel="canonical" href="https://www.physiocentric.in/about" />
        <meta property="og:title" content="About PhysioCentric – Expert Care by Dr. Divya Sharma" />
        <meta property="og:description" content="25+ years, 1700+ happy patients. Personalised physiotherapy at PhysioCentric, New Delhi." />
        <meta property="og:image" content="https://www.physiocentric.in/og-about.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "AboutPage",
                "name": "About PhysioCentric",
                "description": "PhysioCentric is a leading physiotherapy centre in Gulmohar Park, New Delhi, founded by Dr. Divya Sharma. We specialise in pain relief, sports rehabilitation, and post-surgical recovery.",
                "url": "https://www.physiocentric.in/about"
              },
              {
                "@type": "MedicalBusiness",
                "name": "PhysioCentric",
                "foundingDate": "2000",
                "founder": {
                  "@type": "Person",
                  "name": "Dr. Divya Sharma",
                  "jobTitle": "Chief Physiotherapist"
                },
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "A-2, Block A, Gulmohar Park",
                  "addressLocality": "New Delhi",
                  "postalCode": "110049",
                  "addressCountry": "IN"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "127"
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* ─── HERO ─── */}
      <section className="relative h-[480px] sm:h-[520px] md:h-[560px] bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0  bg-cover bg-center"
          style={{ backgroundImage: `url(${about})` }} />
        </div>

        <div className="relative z-20 container mx-auto px-4 sm:px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-white/60" />
              <span className="text-white/60 text-xs tracking-[0.25em] uppercase font-light">Our Story</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-[1.1] mb-4">
              About <span className="text-white/80">PhysioCentric</span>
            </h1>
            <p className="text-white/70 text-base sm:text-lg max-w-lg mb-6 leading-relaxed">
              Restore · Rebuild · Recover – led by <strong className="text-white">Dr. Divya Sharma</strong>
            </p>
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center text-white/50 text-sm space-x-2">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-white/30" aria-hidden="true">/</li>
                <li className="text-white font-medium" aria-current="page">About Us</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-20" aria-hidden="true">
          <svg className="w-full h-12 sm:h-16" preserveAspectRatio="none" viewBox="0 0 1200 120" fill="none">
            <path d="M0 0L50 10C100 20 200 40 300 45C400 50 500 40 600 35C700 30 800 30 900 35C1000 40 1100 50 1150 55L1200 60V120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ─── INTRO: CLINIC + DOCTOR ─── */}
      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image with badge */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-gray-50 overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] sm:aspect-[3/4] relative">
                <img
                  src={about}
                  alt="Dr. Divya Sharma and team at PhysioCentric clinic, New Delhi"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
               
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-[2px] bg-black" />
              <span className="text-black/60 text-xs tracking-[0.2em] uppercase font-medium">Who We Are</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-[1.15] mb-6">
              Your Partners in <br className="hidden sm:block" /> 
              <span className="text-black/70">Movement &amp; Wellness</span>
            </h2>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p className="text-base sm:text-lg">
                <strong className="text-black">PhysioCentric</strong> was founded with a singular mission: 
                to provide world‑class physiotherapy care that restores function, relieves pain, 
                and rebuilds confidence. Under the expert leadership of <strong className="text-black">Dr. Divya Sharma</strong>, 
                our clinic has become a trusted name in New Delhi for orthopaedic, neurological, 
                and sports rehabilitation.
              </p>
              <p>
                Dr. Sharma brings over 25 years of clinical experience, having treated thousands 
                of patients with conditions ranging from chronic back pain to post‑surgical recovery. 
                Her patient‑first philosophy ensures that every treatment plan is as unique as the 
                person receiving it.
              </p>
              <blockquote className="border-l-4 border-black pl-6 py-3 bg-gray-50/50 -mx-4 sm:mx-0 px-4 sm:px-6 italic text-gray-700">
                <Quote className="inline-block w-5 h-5 text-black/30 mr-2" />
                “We don’t just treat symptoms – we empower you to move better, live better, 
                and thrive.”
                <span className="block text-sm font-medium text-black not-italic mt-1">— Dr. Divya Sharma</span>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

   

      {/* ─── DR. DIVYA SHARMA – SPOTLIGHT ─── */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-[2px] bg-black" />
                <span className="text-black/60 text-xs tracking-[0.2em] uppercase font-medium">Meet the Founder</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-black leading-tight mb-4">
                Dr. Divya Sharma
              </h2>
              <p className="text-lg text-black/70 font-medium mb-3">Chief Physiotherapist &amp; Founder, PhysioCentric</p>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Dr. Divya Sharma is a renowned physiotherapist with over two decades of clinical 
                  experience in orthopaedics, neurology, and sports medicine. She holds a Master’s 
                  degree in Physiotherapy from the prestigious <strong>All India Institute of Physical 
                  Medicine &amp; Rehabilitation (AIIPMR)</strong> and has been a visiting consultant at 
                  leading hospitals in Delhi.
                </p>
                <p>
                  Her passion for hands‑on therapy and her commitment to continuous learning have 
                  made her a sought‑after expert for complex musculoskeletal conditions. She 
                  regularly conducts workshops and has published research on innovative 
                  rehabilitation techniques.
                </p>
                <p>
                  At PhysioCentric, Dr. Sharma personally oversees every patient’s journey – from 
                  initial assessment to final discharge – ensuring the highest standard of care.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-6">
                <span className="bg-black/5 px-4 py-2 text-sm text-black font-medium rounded-full">Member – IAP</span>
                <span className="bg-black/5 px-4 py-2 text-sm text-black font-medium rounded-full">Certified Dry Needling</span>
                <span className="bg-black/5 px-4 py-2 text-sm text-black font-medium rounded-full">Sports Rehab Specialist</span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-100 aspect-[3/4] overflow-hidden shadow-xl">
                <img
                  src={head}
                  alt="Dr. Divya Sharma – physiotherapist at PhysioCentric New Delhi"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 shadow-lg border border-black/10">
                <p className="text-xs uppercase tracking-widest text-black/50 font-medium">25+ Years</p>
                <p className="text-sm font-bold text-black">of Clinical Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* ─── WHY CHOOSE US (imported) ─── */}
      <WhyChooseUsSection />

      {/* ─── TESTIMONIALS (imported) ─── */}
      {/* <TestimonialSection /> */}

      {/* ─── CTA ─── */}
      <section className="bg-gray-50/80 py-16 sm:py-20 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Ready to Move Better?</h2>
          <p className="text-gray-500 max-w-md mx-auto mb-8 text-sm sm:text-base">
            Book your consultation with Dr. Divya Sharma and experience the PhysioCentric difference.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 text-sm font-medium tracking-wider hover:bg-gray-800 transition-colors group"
          >
            Schedule an Appointment
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
}