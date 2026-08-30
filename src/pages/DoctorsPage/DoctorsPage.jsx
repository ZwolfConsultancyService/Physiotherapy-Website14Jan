import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Phone, MapPin, Clock, Award, Users, Star,
  ChevronRight, Stethoscope, Heart, Activity, Zap,
  GraduationCap, BadgeCheck,
} from "lucide-react";

// ── Image imports ─────────────────────────────────────────────────
import headDoctor from "../../assets/teamfolder/head.jpeg";
import doctor1 from "../../assets/teamfolder/01.jpeg";
import doctor2 from "../../assets/teamfolder/02.jpeg";
import doctor3 from "../../assets/teamfolder/03.jpeg";
import doctor4 from "../../assets/teamfolder/04.jpeg";
import doctor5 from "../../assets/teamfolder/05.jpeg";
import doctor6 from "../../assets/teamfolder/06.jpeg";
import doctor7 from "../../assets/teamfolder/07.jpeg";
import doctor8 from "../../assets/teamfolder/08.jpeg";
import doctor9 from "../../assets/teamfolder/09.jpeg";


// ─── Team Data ────────────────────────────────────────────────────
const team = [
  {
    name: "Dr.Akansha",
    role: "Senior Physiotherapist",
    specialization: "Sports Injuries & Rehabilitation",
    image: doctor1,
    bio: "Akansha (PT) graduated from Amity University, Noida and completed her Master's from Jamia Hamdard in Sports Physiotherapy. She has experience in treating post-operative knee, hip, and shoulder rehabilitation while working at the ABTP center at Sitaram Bhartiya Hospital for 2 years. Her experience-based learning makes her empathetic towards pain and dysfunction. She has successfully treated many patients at Physiocentric with manual therapy, dry needling, and exercise-based rehabilitation. Her treatment is targeted and unique, while keeping it individualistic for rehabilitation. Her free time is spent reading and exploring good coffee.",
  },
  {
    name: "Dr Kanika Bisht",
    role: "Neurological Physiotherapist",
    specialization: "Neurological & Stroke Rehabilitation",
    image: doctor2,
    bio: "Kanika Bisht is a Masters in Sports Physiotherapy from MYAS-GNDU Department of Sports Sciences and Medicine, Guru Nanak Dev University Amritsar. She did her Bachelor's in Physiotherapy from Banarsidas Chandiwala Institute of Physiotherapy, New Delhi. She excels in treating both musculoskeletal and sports related injuries, helping the patient achieve both short and long term goals. Her rehabilitation protocols are precise and specific. She specialises in various manual techniques like MFR, Dry Needling, Kinesiotaping, IASTM and Cupping. Kanika led the on-field physical therapy support at The Lloyd Delhi Golf Club League for the years 2022 and 2023, where she was responsible for managing both acute and chronic golf related injuries, getting the golfers ready for their game as well as providing recovery techniques post match. In her spare time she loves to dance, spend time with close ones, and has a keen interest in exploring new places.",
  },
  {
    name: "Dr.Kiran Negi",
    role: "Pediatric Physiotherapist",
    specialization: "Pediatric & Women's Health",
    image: doctor3,
    bio: "Dr. Kiran Negi is a highly dedicated and skilled physiotherapist with over 5 years of clinical experience in sports and musculoskeletal physiotherapy. She has developed strong expertise in injury prevention, rehabilitation, and performance enhancement, working with athletes across recreational to elite levels. Her treatment centers on finding and fixing root causes, not just symptoms. She combines evidence-based manual therapy, dry needling, progressive strength loading, and movement retraining to restore function. She is also a Certified Clinical Kinesio Taping Practitioner. With a patient-centric approach and deep knowledge of the musculoskeletal system, she is committed to helping individuals — whether an athlete, working professional, or someone dealing with everyday aches — move stronger and pain-free with a tailored program for each individual's goals.",
  },
  {
    name: "Dr Mamta Bisht",
    role: "Orthopaedic Physiotherapist",
    specialization: "Joint Pain & Manual Therapy",
    image: doctor4,
    bio: "Mamta Bisht holds a Master's in Physiotherapy (2018–2020) from Manav Rachna International Institute of Research and Studies, Faridabad, Haryana, and a Bachelor's in Physiotherapy (2013–2018) from Banarsidas Chandiwala Institute of Physiotherapy, Kalkaji, Delhi. Her expertise encompasses the treatment of musculoskeletal and sports-related injuries, emphasizing injury assessment, diagnosis, and structured rehabilitation protocols. She integrates strength and conditioning, movement analysis and correction, along with recovery optimization to promote safe, efficient, and high-performance outcomes. She has over 7 years of hands-on experience in myofascial release (MFR), dry needling, Kinesio taping, muscle energy techniques (METs), and mobilisations (Maitland & McKenzie techniques). She is a fitness enthusiast who enjoys reading healthcare journals, listening to music, and spending time with family.",
  },
  {
    name: "Dr.Raimey Rijiju",
    role: "Cardiopulmonary Physiotherapist",
    specialization: "Chest & Cardiac Rehabilitation",
    image: doctor5,
    bio: "Raimey Rijiju holds a Master's in Sports Physiotherapy from SDM College of Physiotherapy, SDM University, Dharwad, Karnataka, and completed her Bachelor's in Physiotherapy from HNB Garhwal University, Uttarakhand. Her area of expertise lies in treating both musculoskeletal and sports related injuries, focusing on injury assessment and diagnosis, structured rehabilitation protocols, strength & conditioning integration, movement analysis and correction, as well as recovery optimization. Her approach integrates clinical expertise with evidence-based protocols to ensure safe, efficient, and high-performance recovery outcomes. She also practices various treatment approaches such as MFR, dry needling, Kinesiotaping, and METs. During her leisure time, she enjoys singing, dancing, reading books, and spending time with family & friends.",
  },
  {
    name: "Dr Priyanka Dureja",
    role: "Sports & Exercise Physiotherapist",
    specialization: "Performance & Injury Prevention",
    image: doctor6,
    bio: "Priyanka Dureja, MPT (Ortho.), is a physiotherapist with more than 15 years of clinical experience. She did her Bachelor's from Banarsidas Chandiwala Institute of Physiotherapy, GGSIPU, and her Master's in Orthopaedic Physiotherapy from Prakash Institute of Physiotherapy, Rehabilitation and Allied Medical Sciences, CCSU. Priyanka is on point with her assessment and diagnosis, and her treatment is simple yet effective for patient care and wellbeing. Her clinical interest is in treating spine and pelvic dysfunctions by combining kinesiology, education, and individually tailored therapeutic and cognitive exercises. She has successfully worked with disc prolapse cases, preventing the need for surgery, and has treated many sciatica and other nerve radiculopathy cases by incorporating neuromuscular control. She is a certified pelvic floor specialist working towards women's health and fitness, and uses innovation and technology to improve healthcare practices. She has a keen interest in human biomechanics, emphasising correct functioning of muscles around each joint for pain relief and efficient muscle functioning. In her free time, she spends time with friends or animal support groups, and loves to travel and explore new places.",
  },
  {
    name: "Dr.Vaishali Parasher",
    role: "Geriatric Physiotherapist",
    specialization: "Elderly Care & Fall Prevention",
    image: doctor7,
    bio: "Dr Vaishali Parasher holds a Master's in Sports Physiotherapy from Manav Rachna University, Faridabad, Haryana, and completed her Bachelor's in Physical Therapy from Jamia Hamdard, New Delhi. With more than six years of clinical experience, her areas of expertise include posture alignment, sports rehab training, manual therapy, musculoskeletal conditions, orthopedic conditions, pre & post-operative rehabilitation, complex surgeries rehab, and sports injuries. She proficiently uses techniques such as cupping, IASTM, Dry Needling, taping, rehabilitation programmes, soft tissue release, and fitness training. Her strong skill in assessing clinical conditions enables her to make correct diagnoses and treatment plans. She has a strong passion and enthusiasm for travel.",
  },
  {
    name: "Dr.Zoya",
    role: "Pain Management Specialist",
    specialization: "Chronic Pain & Dry Needling",
    image: doctor8,
    bio: "Zoya Zaidi did her Masters in Sports Physiotherapy from Manav Rachna International Institute of Research and Studies. Her areas of interest are posture re-education, sport injury specific rehabilitation, and post surgery rehabilitation. She is a certified Mulligan therapist and is proficient in techniques like Dry Needling, Taping, Cupping, Myofascial Release, MET (Muscle Energy Technique), and Neurodynamic solutions. Her assessment and treatment are precise, with a focus on building a strong practice using various approaches that target the root cause of dysfunction for long lasting benefits. In her free time she likes to spend time with her family and hang out with friends.",
  },
  {
    name: "Dr.Akanksha Kundalia",
    role: "Senior Physiotherapist",
    specialization: "12+ years of experience in physiotherapy and rehabilitation.",
    image: doctor9,
    bio: "Akansha Kundaliya has done her Bachelors from Dr D. Y Patil Vidyapeeth, Pune and Masters in Orthopaedic from Chaudhary Charan Singh  University, UPShe has a clinical experience of more than 12 years. Akansha focuses on detailed clinical assessment, identifying the underlying movement dysfunction, and restoring optimal biomechanics rather than simply treating the site of pain.Her treatment integrates hands-on techniques like Mulligan and Maitland, myofascial techniques and dry needling—with an individualized, graded rehabilitation program. This helps to restore good movement mechanics and sustainable recovery.She is a hands on mother and in her free time she spends time with family.",
  },
];




// ─── Component ────────────────────────────────────────────────────
export default function DoctorsPage() {
  const [flippedCards, setFlippedCards] = useState({});

  const setFlip = (index, value) => {
    setFlippedCards((prev) => ({ ...prev, [index]: value }));
  };

  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* ───────────────── SEO HEAD ───────────────── */}
      <Helmet>
        {/* Primary Meta */}
        <title>Our Physiotherapy Team – PhysioCentric New Delhi | Dr. Divya Sharma & Experts</title>
        <meta
          name="description"
          content="Meet Dr. Divya Sharma and PhysioCentric's team of 8+ expert physiotherapists in New Delhi. Specialists in sports rehab, neurological therapy, orthopaedics, women's health & chronic pain."
        />
        <meta name="keywords" content="physiotherapist New Delhi, Dr Divya Sharma physiotherapist, PhysioCentric doctors, physiotherapy team Delhi, sports physio Delhi, neurological physiotherapist Delhi, women's health physio New Delhi, orthopaedic physiotherapist Gulmohar Park" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.physiocentric.in/doctors" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.physiocentric.in/doctors" />
        <meta property="og:title" content="Meet Our Physiotherapy Experts – PhysioCentric, New Delhi" />
        <meta property="og:description" content="Dr. Divya Sharma and a team of 8 specialist physiotherapists dedicated to your recovery. Serving New Delhi from Gulmohar Park." />
        <meta property="og:image" content="https://www.physiocentric.in/og-image.jpg" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="PhysioCentric" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Expert Physiotherapy Team – PhysioCentric, New Delhi" />
        <meta name="twitter:description" content="Meet Dr. Divya Sharma & our 8 specialist physiotherapists at PhysioCentric, New Delhi's top-rated physio clinic." />
        <meta name="twitter:image" content="https://www.physiocentric.in/og-image.jpg" />

        {/* Structured Data – Team + Physician */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalBusiness",
                "name": "PhysioCentric",
                "url": "https://www.physiocentric.in",
                "telephone": "+919810513841",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "A-2, Block A, Gulmohar Park",
                  "addressLocality": "New Delhi",
                  "addressRegion": "Delhi",
                  "postalCode": "110049",
                  "addressCountry": "IN"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5.0",
                  "reviewCount": "37",
                  "bestRating": "5"
                }
              },
              {
                "@type": "Physician",
                "name": "Dr. Divya Sharma",
                "jobTitle": "Chief Physiotherapist & Founder",
                "description": "Dr. Divya Sharma is the founder and chief physiotherapist at PhysioCentric with over 10 years of clinical experience in orthopaedic and manual therapy.",
                "worksFor": {
                  "@type": "MedicalBusiness",
                  "name": "PhysioCentric",
                  "url": "https://www.physiocentric.in"
                },
                "hasCredential": [
                  { "@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "BPT – Bachelor of Physiotherapy" },
                  { "@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "MPT (Orthopaedics) – Master of Physiotherapy" },
                  { "@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "Certified Manual Therapist" }
                ],
                "medicalSpecialty": "PhysicalTherapy",
                "url": "https://www.physiocentric.in/doctors"
              },
              ...team.map((doc) => ({
                "@type": "Person",
                "name": doc.name,
                "jobTitle": doc.role,
                "description": doc.specialization,
                "worksFor": {
                  "@type": "MedicalBusiness",
                  "name": "PhysioCentric"
                }
              }))
            ]
          })}
        </script>
      </Helmet>

      {/* ── HERO ── */}
      <section className="relative bg-black text-white overflow-hidden mt-8" aria-label="Team hero section">
        <div
          className="absolute inset-0 opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6" aria-hidden="true">
              <div className="w-12 h-0.5 bg-white opacity-40" />
              <span className="text-xs tracking-widest uppercase text-gray-400 font-semibold">
                PhysioCentric · New Delhi
              </span>
            </div>
            <h1
              className="text-5xl md:text-7xl font-black text-white leading-[1.0] mb-6 tracking-tight"
              style={{ fontFamily: "Lexend Peta, sans-serif" }}
            >
              Meet Our
              <br />
              <span className="text-gray-400">Expert Team</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
              Our board-certified physiotherapists bring years of specialized experience
              to deliver personalized, result-driven care for every patient.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contacts">
                <button
                  className="bg-white text-black px-8 py-4 text-xs tracking-widest uppercase font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                  aria-label="Book a physiotherapy appointment"
                >
                  Book Appointment
                </button>
              </Link>
              <a href="tel:+919810513841" aria-label="Call PhysioCentric at 098105 13841">
                <button className="border border-white/30 text-white px-8 py-4 text-xs tracking-widest uppercase font-bold hover:border-white transition-all duration-300">
                  098105 13841
                </button>
              </a>
              <a href="tel:+919810513841" aria-label="Call PhysioCentric at 098105 18407">
                <button className="border border-white/30 text-white px-8 py-4 text-xs tracking-widest uppercase font-bold hover:border-white transition-all duration-300">
                  098105 18407
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} aria-hidden="true" />
      </section>

      {/* ── HEAD DOCTOR SECTION ── */}
      <section className="bg-white py-20 md:py-28 border-b border-gray-100" aria-label="Chief physiotherapist profile">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-16" aria-hidden="true">
            <div className="w-12 h-0.5 bg-black" />
            <span className="text-xs tracking-widest uppercase font-semibold text-black">
              Our Lead Expert
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — Image */}
            <div className="relative">
              <div className="absolute -bottom-5 -right-5 w-full h-full border-2 border-black z-0" aria-hidden="true" />
              <div className="relative z-10 overflow-hidden bg-gray-100">
                <img
                  src={headDoctor}
                  alt="Dr. Divya Sharma – Chief Physiotherapist and Founder of PhysioCentric, New Delhi"
                  className="w-full object-contain"
                  style={{ maxHeight: "560px" }}
                  loading="eager"
                  fetchpriority="high"
                  width={560}
                  height={560}
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 left-6 z-20 bg-black text-white px-6 py-3 flex items-center gap-3 shadow-xl">
                <BadgeCheck size={18} className="text-white" aria-hidden="true" />
                <div>
                  <div className="text-xs text-gray-400 tracking-widest uppercase">Certified</div>
                  <div className="text-sm font-bold tracking-wide">Chief Physiotherapist</div>
                </div>
              </div>
            </div>

            {/* Right — Info */}
            <div className="space-y-7 pt-6 lg:pt-0">
              <div>
                <p className="text-xs tracking-widest uppercase text-gray-400 font-semibold mb-2">
                  Head of PhysioCentric
                </p>
                <h2
                  className="text-4xl md:text-5xl font-black text-black leading-tight"
                  style={{ fontFamily: "Lexend Peta, sans-serif" }}
                >
                  Dr. Divya
                  <br />
                  <span className="text-gray-400">Sharma</span>
                </h2>
              </div>

              <div className="w-16 h-0.5 bg-black" aria-hidden="true" />

              <p className="text-gray-600 text-base leading-relaxed">
                Dr. Divya Sharma is an alumnus of the prestigious Mayo College Girls School.
                As a sports physiotherapist with over 18 years of clinical experience, she
                excels in patient care — combining manual therapy with precise, targeted
                rehabilitation to help patients recover from most musculoskeletal ailments.
                Biomechanics, the study of how muscle forces cause motion in the human body,
                is her forte.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                She now owns her own clinic, Physiocentric, in New Delhi and Gurgaon, where
                she collaborates with her team of experienced therapists to provide the best
                care for every patient. She has been a Consultant Sports Physiotherapist with
                Team Tennis (India) Pvt. Ltd and The Indian Golf Union, and spent 8 years at
                Sporting Ethos Pvt Ltd training many therapists in similar treatment
                methodologies. Divya was the on-tour physiotherapist for golfers for five
                consecutive years at the McLeod Russel Tour Championship, using taping
                techniques, therapeutic massage, deep tissue work, and neuromuscular
                facilitation to help players manage strain and continue competing with
                minimal risk of further injury. While in England, she worked closely with
                the college soccer team in Manchester and interned at the Jr. Manchester
                United Club at Old Trafford. Divya is a keen traveller, birder, and loves a
                hectic holiday!
              </p>

              {/* Qualifications */}
              <div className="space-y-3">
                <p className="text-xs tracking-widest uppercase text-gray-400 font-semibold">
                  Qualifications
                </p>
                {[
                  "M.Phil. in Sports Biomechanics — Manchester Metropolitan University, UK",
                  "BPT — College of Allied Health Sciences, Manipal, Karnataka",
                  "Alumnus, Mayo College Girls School",
                  "18+ Years Clinical Experience",
                ].map((q, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <GraduationCap size={14} className="text-white" />
                    </div>
                    <span className="text-sm text-gray-600">{q}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR TEAM (FLIP CARDS) ── */}
      <section className="bg-gray-50 py-20 md:py-28" aria-label="Physiotherapy team members">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4" aria-hidden="true">
              <div className="w-12 h-0.5 bg-black" />
              <span className="text-xs tracking-widest uppercase font-semibold text-black">Our Team</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2
                className="text-4xl md:text-5xl text-black leading-tight max-w-lg"
                style={{ fontFamily: "Lexend Peta, sans-serif" }}
              >
                The Specialists Behind Your Recovery
              </h2>
              <p className="text-gray-500 text-base leading-relaxed max-w-sm">
                Each of our 8 physiotherapists is highly qualified, continuously trained,
                and deeply committed to your well-being. Tap a card to see their specialization.
              </p>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((doc, i) => {
              const isFlipped = !!flippedCards[i];
              return (
                <div
                  key={i}
                  className="group w-full cursor-pointer"
                  style={{ perspective: "1200px" }}
                  onMouseEnter={() => setFlip(i, true)}
                  onMouseLeave={() => setFlip(i, false)}
                  onClick={() => setFlip(i, !isFlipped)}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isFlipped}
                  aria-label={`${doc.name}, ${doc.role}. Tap to ${isFlipped ? "show photo" : "show details"}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setFlip(i, !isFlipped);
                    }
                  }}
                >
                  <div
                    className="relative w-full transition-transform duration-700 min-h-[380px] sm:min-h-[400px] lg:min-h-[440px]"
                    style={{
                      aspectRatio: "3/4.3",
                      transformStyle: "preserve-3d",
                      transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    }}
                  >
                    {/* FRONT FACE — image only */}
                    <div
                      className="absolute inset-0 bg-gray-100 rounded-2xl border-2 border-gray-200 shadow-sm group-hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <img
                        src={doc.image}
                        alt={`${doc.name} – ${doc.role} at PhysioCentric New Delhi`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width={300}
                        height={400}
                      />
                    </div>

                    {/* BACK FACE — details */}
                    <div
                      className="absolute inset-0 bg-black rounded-2xl border-2 border-black shadow-xl overflow-hidden flex flex-col items-center text-center px-5 py-6"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      {/* Fixed header — icon + name + role, never shrinks or clips */}
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div
                          className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center mb-3"
                          aria-hidden="true"
                        >
                          <Stethoscope size={16} className="text-white" />
                        </div>
                        <h3 className="text-base font-bold text-white leading-tight mb-1 px-2">
                          {doc.name}
                        </h3>
                        {/* <p className="text-[10px] text-gray-400 tracking-widest uppercase mb-3">
                          {doc.role}
                        </p> */}
                        <div className="w-10 h-0.5 bg-white/30 mb-3" aria-hidden="true" />
                      </div>

                      {/* Scrollable bio — only this part scrolls if content is long */}
                      <div className="flex-1 min-h-0 overflow-y-auto w-full">
                        {doc.bio ? (
                          <p className="text-xs text-gray-300 leading-relaxed text-left">
                            {doc.bio}
                          </p>
                        ) : (
                          <p className="text-sm text-gray-300 leading-relaxed">
                            {doc.specialization}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── VISIT US ── */}
      <section className="bg-black text-white py-20" aria-label="Visit PhysioCentric">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6" aria-hidden="true">
                <div className="w-10 h-0.5 bg-white opacity-40" />
                <span className="text-xs tracking-widest uppercase text-gray-400 font-semibold">Find Us</span>
              </div>
              <h2
                className="text-4xl md:text-5xl text-white leading-tight mb-8"
                style={{ fontFamily: "Lexend Peta, sans-serif" }}
              >
                Visit PhysioCentric Today
              </h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-white/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <MapPin size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 tracking-widest uppercase mb-1">Address</p>
                    <address className="text-gray-300 text-sm leading-relaxed not-italic">
                      A-2, Block A, Gulmohar Park,<br />New Delhi, Delhi 110049
                    </address>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-white/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Phone size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 tracking-widest uppercase mb-1">Phone</p>
                    <a href="tel:+919810513841" className="text-gray-300 hover:text-white transition-colors text-sm" aria-label="Call PhysioCentric">
                      098105 13841
                    </a>
                    <a href="tel:+09810518407" className="text-gray-300 hover:text-white transition-colors text-sm" aria-label="Call PhysioCentric">
                      098105 18407
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-white/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Clock size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 tracking-widest uppercase mb-1">Hours</p>
                    <p className="text-gray-300 text-sm">Mon – Sat: 9:00 AM – 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-white/10 p-10 text-center">
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                Ready to start your recovery journey? Book a session with one of our experts today.
              </p>
              <Link to="/contacts">
                <button className="w-full bg-white text-black py-4 text-xs tracking-widest uppercase font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
                  Book Appointment <ChevronRight size={16} aria-hidden="true" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}