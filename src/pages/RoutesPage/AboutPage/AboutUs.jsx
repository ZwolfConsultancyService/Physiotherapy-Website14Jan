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
  Quote,
  ClipboardList,
  Activity,
  Dumbbell
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
          content="PhysioCentric, led by Dr. Divya Sharma, is New Delhi's premier physiotherapy clinic with 18+ years of sports physiotherapy experience. Restore movement, rebuild strength – book your consultation today."
        />
        <meta 
          name="keywords" 
          content="Dr. Divya Sharma physiotherapist, PhysioCentric clinic, physiotherapy New Delhi, sports physiotherapist, Gulmohar Park physio, back pain specialist, sports injury rehab" 
        />
        <link rel="canonical" href="https://www.physiocentric.in/about" />
        <meta property="og:title" content="About PhysioCentric – Expert Care by Dr. Divya Sharma" />
        <meta property="og:description" content="18+ years of sports physiotherapy experience. Personalised physiotherapy at PhysioCentric, New Delhi & Gurgaon." />
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
    <span className="text-black/60 text-xs tracking-[0.2em] uppercase font-medium">
      Who We Are
    </span>
  </div>

  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-[1.15] mb-6">
    Your Partners in <br className="hidden sm:block" />
    <span className="text-black/70">Movement &amp; Wellness</span>
  </h2>

  <div className="space-y-5 text-gray-600 leading-relaxed">
    <p className="text-base sm:text-lg">
      <strong className="text-black">PhysioCentric</strong> is a leading
      physiotherapy centre in <strong className="text-black">Gulmohar Park, New Delhi</strong> —
      rated <strong className="text-black">5.0 on Google by 37+ patients</strong>.
      We specialise in evidence-based physiotherapy to help you recover,
      move better and live pain-free.
    </p>

    <p>
      PhysioCentric is a clinic that combines skill with the highest level
      of patient care and empathy. Injury management requires a detailed
      history, assessment and a workable diagnosis which leads to the
      treatment plan — this is an integral part of the clinic ethos with
      each practitioner.
    </p>

    <p>
      Our physiotherapists treat <strong className="text-black">
        back pain, joint pain, sports injuries, post-surgical rehabilitation
        and neurological conditions
      </strong> — with personalised plans for patients of all ages. The
      growing team has well-educated and highly experienced physical
      therapists who take pride in the individual treatment plan they
      embark on for each patient's full recovery.
    </p>

    <blockquote className="border-l-4 border-black pl-6 py-3 bg-gray-50/50 -mx-4 sm:mx-0 px-4 sm:px-6 italic text-gray-700">
      <Quote className="inline-block w-5 h-5 text-black/30 mr-2" />
      We don’t just treat symptoms – we empower you to move better, live
      better, and thrive.
      <span className="block text-sm font-medium text-black not-italic mt-1">
        — Dr. Divya Sharma
      </span>
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
                  Dr. Divya Sharma holds an <strong>M.Phil. in Sports Biomechanics from Manchester 
                  Metropolitan University, UK</strong>, and a Bachelor's degree in Physiotherapy from 
                  the College of Allied Health Sciences, Manipal, Karnataka. She is an alumnus of 
                  the prestigious Mayo College Girls School.
                </p>
                <p>
                  As a sports physiotherapist with over 18 years of clinical experience, she excels 
                  in patient care. Manual therapy combined with precise and targeted rehabilitation 
                  enables her patients to recover from most musculoskeletal ailments. Biomechanics – 
                  how muscle forces cause motion in the human body – is her particular forte.
                </p>
                <p>
                  She now owns her own clinics, PhysioCentric in New Delhi and Gurgaon, where she 
                  collaborates with a team of experienced therapists to provide the best possible 
                  care for every patient.
                </p>
                <p>
                  Dr. Sharma has served as a Consultant Sports Physiotherapist with Team Tennis 
                  (India) Pvt. Ltd and The Indian Golf Union, and spent 8 years at Sporting Ethos 
                  Pvt Ltd, where she trained more than six therapists in her treatment methodologies. 
                  For five consecutive years, she worked as an on‑tour physiotherapist for golfers 
                  at the McLeod Russel Tour Championship – using taping techniques, therapeutic 
                  massage, deep tissue work and neuromuscular facilitation to help players manage 
                  strain and continue competing with minimal risk of further injury.
                </p>
                <p>
                  While in England, Divya worked closely with the college soccer team in Manchester 
                  and interned at the Junior Manchester United Club at Old Trafford.
                </p>
                <p className="text-sm text-gray-500 italic">
                  Fun fact: Divya is a keen traveller and birder who loves a good hectic holiday!
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-6">
                <span className="bg-black/5 px-4 py-2 text-sm text-black font-medium rounded-full">M.Phil. Sports Biomechanics (UK)</span>
                <span className="bg-black/5 px-4 py-2 text-sm text-black font-medium rounded-full">18+ Years Clinical Experience</span>
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
                <p className="text-xs uppercase tracking-widest text-black/50 font-medium">18+ Years</p>
                <p className="text-sm font-bold text-black">of Clinical Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE OFFER ─── */}
      <section className="bg-gray-50/80 py-16 sm:py-20 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-10 h-[2px] bg-black" />
              <span className="text-black/60 text-xs tracking-[0.2em] uppercase font-medium">Our Approach</span>
              <span className="w-10 h-[2px] bg-black" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-black leading-tight mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A thorough history and assessment of each patient's clinical condition helps us 
              ascertain the right treatment plan. Every therapist on our team has a deep 
              understanding of the investigations needed to accurately assess a condition, 
              making successful treatment possible.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 shadow-sm border border-gray-100 text-center">
              <ClipboardList className="w-8 h-8 mx-auto mb-4 text-black/70" />
              <h3 className="font-bold text-black mb-2">Assessment First</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Detailed history-taking and clinical assessment to identify the root cause, 
                not just the symptoms.
              </p>
            </div>
            <div className="bg-white p-8 shadow-sm border border-gray-100 text-center">
              <Activity className="w-8 h-8 mx-auto mb-4 text-black/70" />
              <h3 className="font-bold text-black mb-2">Targeted Treatment</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                In most cases, patients respond well to myofascial release followed by 
                supervised rehabilitation.
              </p>
            </div>
            <div className="bg-white p-8 shadow-sm border border-gray-100 text-center">
              <Dumbbell className="w-8 h-8 mx-auto mb-4 text-black/70" />
              <h3 className="font-bold text-black mb-2">Guided Exercise</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Exercise prescription built around good movement mechanics is the mainstay 
                of treatment after pain management.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 sm:p-10 shadow-sm border border-gray-100 max-w-4xl mx-auto">
            <h3 className="font-bold text-black mb-4 text-lg">Treatment Modalities We Use</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use a variety of treatment modalities to alleviate pain and restore joint function:
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Dry Needling",
                "IASTM",
                "Kinesiology Taping",
                "Cupping",
                "Myofascial Release",
                "Ultrasound Therapy",
                "Class 3 & Class 4 Laser Therapy",
                "IFT",
                "TENS",
              ].map((item) => (
                <span
                  key={item}
                  className="bg-black/5 px-4 py-2 text-sm text-black font-medium rounded-full"
                >
                  {item}
                </span>
              ))}
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