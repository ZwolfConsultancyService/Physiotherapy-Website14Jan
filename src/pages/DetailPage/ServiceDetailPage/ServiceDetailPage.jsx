import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Download, Phone, Mail, ChevronRight, Home } from "lucide-react";

// ==================== SERVICES DETAIL DATA ====================
const servicesDetailData = {
  physiotherapy: {
    id: 1,
    title: "Physiotherapy",
    slug: "physiotherapy",
    bannerImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=800&fit=crop",
    mainImage:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    benefitImage:
      "https://images.unsplash.com/photo-1612351443858-1baa1d95e59e?w=800&h=600&fit=crop",
    description:
      "Physiotherapy is medical therapy which helps a patient in the rehabilitation of various types of diseases and disabilities. Indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.",
    longDescription:
      "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.",
    benefits: {
      title: "Benefit of Therapy",
      description:
        "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved.",
      points: [
        "Those who do not know how to pursue",
        "Pleasure rationally encounter",
        "Consequences that are extremely painful.",
        "Nor again is there anyone who loves or pursues",
      ],
    },
    whyChoose: {
      title: "Why Choose Us",
      points: [
        {
          title: "Dynamically procrastinate B2C users after installed.",
          description:
            "Expert care with advanced technology and personalized treatment plans.",
        },
        {
          title: "Nanotechnology immersion along the information.",
          description:
            "Cutting-edge techniques for optimal recovery and rehabilitation.",
        },
        {
          title: "Taking seamless key performance indicators offline.",
          description:
            "Comprehensive assessment and continuous progress tracking.",
        },
        {
          title: "Collaboratively administrate empowered markets.",
          description:
            "Teachings of the great explorer of the truth The master-builder of human happiness No one rejects, dislikes, or avoids. Expound the actual.",
        },
      ],
    },
    sidebar: {
      services: [
        "Physiotherapy",
        "Joint Mobilization",
        "Manual Hand Therapy",
        "Sport Injury Therapy",
        "Laser Therapy",
        "Occupational Therapy",
        "Geriatric Therapy",
        "Trigger Point Therapy",
        "Neurological Therapy",
      ],
    },
  },
  "joint-mobilization": {
    id: 2,
    title: "Joint Mobilization",
    slug: "joint-mobilization",
    bannerImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=800&fit=crop",
    mainImage:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop",
    benefitImage:
      "https://images.unsplash.com/photo-1612351443858-1baa1d95e59e?w=800&h=600&fit=crop",
    description:
      "Joint mobilization therapy helps restore normal joint movement and reduce pain. This specialized technique uses passive movements to improve joint function and flexibility. Donec vitae pellentesque diam volutpat commodo sed egestas egestas.",
    longDescription:
      "Our expert therapists use precise manual techniques to restore joint mobility and alleviate pain. Joint mobilization is effective for treating arthritis, post-surgical stiffness, and various musculoskeletal conditions. Collaboratively administrate empowered markets via plug-and-play networks.",
    benefits: {
      title: "Benefits of Joint Mobilization",
      description:
        "Experience improved joint function and reduced pain through our specialized mobilization techniques.",
      points: [
        "Improved range of motion in affected joints",
        "Reduced joint stiffness and discomfort",
        "Effective pain relief and management",
        "Enhanced overall joint function",
      ],
    },
    whyChoose: {
      title: "Why Choose Us",
      points: [
        {
          title: "Expert manual therapy techniques for optimal results.",
          description:
            "Our therapists are specially trained in advanced joint mobilization methods and techniques.",
        },
        {
          title: "Personalized treatment plans tailored to you.",
          description:
            "Each session is customized to your specific condition and recovery goals.",
        },
        {
          title: "Evidence-based approach for proven effectiveness.",
          description:
            "We use proven techniques backed by clinical research and best practices.",
        },
        {
          title: "Comprehensive care for complete recovery.",
          description:
            "Combined with other therapeutic modalities for optimal results and faster recovery process.",
        },
      ],
    },
    sidebar: {
      services: [
        "Physiotherapy",
        "Joint Mobilization",
        "Manual Hand Therapy",
        "Sport Injury Therapy",
        "Laser Therapy",
        "Occupational Therapy",
        "Geriatric Therapy",
        "Trigger Point Therapy",
        "Neurological Therapy",
      ],
    },
  },
  "manual-hand-therapy": {
    id: 3,
    title: "Manual Hand Therapy",
    slug: "manual-hand-therapy",
    bannerImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=800&fit=crop",
    mainImage:
      "https://images.unsplash.com/photo-1612351443858-1baa1d95e59e?w=800&h=600&fit=crop",
    benefitImage:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop",
    description:
      "Manual hand therapy specializes in treating hand, wrist, and finger conditions through targeted therapeutic techniques. At imperdiet dui accumsan sit amet nulla facilisi. Sed risus pretium quam vulputate dignissim suspendisse.",
    longDescription:
      "Our certified hand therapists provide comprehensive treatment for hand injuries, post-surgical rehabilitation, and chronic hand conditions using advanced manual therapy techniques. Efficiently unleash cross-media information without cross-media value.",
    benefits: {
      title: "Benefits of Hand Therapy",
      description:
        "Restore hand function and reduce pain through our specialized manual therapy techniques.",
      points: [
        "Improved grip strength and coordination",
        "Enhanced dexterity and fine motor skills",
        "Reduced hand and wrist pain",
        "Faster recovery from hand injuries",
      ],
    },
    whyChoose: {
      title: "Why Choose Us",
      points: [
        {
          title: "Certified hand therapists with expertise.",
          description:
            "Our team includes specialists with advanced training in hand rehabilitation and therapy.",
        },
        {
          title: "Custom splinting available for support.",
          description:
            "We create custom splints and braces to support your recovery and healing process.",
        },
        {
          title: "Comprehensive assessment and planning.",
          description:
            "Detailed evaluation of hand function and personalized treatment planning for best results.",
        },
        {
          title: "Post-surgical expertise and care.",
          description:
            "Specialized care for hand surgery recovery and comprehensive rehabilitation programs.",
        },
      ],
    },
    sidebar: {
      services: [
        "Physiotherapy",
        "Joint Mobilization",
        "Manual Hand Therapy",
        "Sport Injury Therapy",
        "Laser Therapy",
        "Occupational Therapy",
        "Geriatric Therapy",
        "Trigger Point Therapy",
        "Neurological Therapy",
      ],
    },
  },
  "sport-injury-therapy": {
    id: 4,
    title: "Sport Injury Therapy",
    slug: "sport-injury-therapy",
    bannerImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=800&fit=crop",
    mainImage:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    benefitImage:
      "https://images.unsplash.com/photo-1612351443858-1baa1d95e59e?w=800&h=600&fit=crop",
    description:
      "Specialized treatment for sports-related injuries to help athletes recover and return to peak performance. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Nulla facilisi cras fermentum odio eu.",
    longDescription:
      "Our sports injury therapy program combines advanced techniques with sport-specific rehabilitation to ensure safe and effective recovery for athletes of all levels. Dramatically visualize customer directed convergence without revolutionary ROI.",
    benefits: {
      title: "Benefits of Sports Therapy",
      description:
        "Get back in the game with our comprehensive sports injury treatment and rehabilitation.",
      points: [
        "Faster recovery times for athletes",
        "Injury prevention strategies and training",
        "Performance optimization techniques",
        "Safe and effective return to sport",
      ],
    },
    whyChoose: {
      title: "Why Choose Us",
      points: [
        {
          title: "Sports medicine expertise and experience.",
          description:
            "Our therapists specialize in treating athletic injuries and performance enhancement techniques.",
        },
        {
          title: "Sport-specific protocols and programs.",
          description:
            "Rehabilitation programs tailored to your specific sport, position, and performance goals.",
        },
        {
          title: "Functional training for real results.",
          description:
            "Focus on movements and skills specific to your athletic activities and requirements.",
        },
        {
          title: "Performance testing for safety.",
          description:
            "Comprehensive assessment to ensure safe return to competitive play and peak performance.",
        },
      ],
    },
    sidebar: {
      services: [
        "Physiotherapy",
        "Joint Mobilization",
        "Manual Hand Therapy",
        "Sport Injury Therapy",
        "Laser Therapy",
        "Occupational Therapy",
        "Geriatric Therapy",
        "Trigger Point Therapy",
        "Neurological Therapy",
      ],
    },
  },
  "laser-therapy": {
    id: 5,
    title: "Laser Therapy",
    slug: "laser-therapy",
    bannerImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=800&fit=crop",
    mainImage:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop",
    benefitImage:
      "https://images.unsplash.com/photo-1612351443858-1baa1d95e59e?w=800&h=600&fit=crop",
    description:
      "Advanced laser therapy for pain relief, tissue healing, and inflammation reduction using cutting-edge technology. Varius sit amet mattis vulputate. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae.",
    longDescription:
      "Our state-of-the-art laser therapy treatments accelerate healing, reduce inflammation, and provide effective pain management without medication. Quickly maximize timely deliverables for real-time schemas and improved outcomes.",
    benefits: {
      title: "Benefits of Laser Therapy",
      description:
        "Experience advanced healing with our non-invasive laser treatment technology.",
      points: [
        "Drug-free pain relief solution",
        "Accelerated tissue healing process",
        "Reduced inflammation and swelling",
        "Non-invasive treatment option",
      ],
    },
    whyChoose: {
      title: "Why Choose Us",
      points: [
        {
          title: "Latest laser technology for best results.",
          description:
            "We use the most advanced therapeutic laser systems available in the market today.",
        },
        {
          title: "Certified practitioners you can trust.",
          description:
            "Our staff is specially trained in laser therapy protocols and safety procedures.",
        },
        {
          title: "Multiple applications for various conditions.",
          description:
            "Effective for various conditions from acute injuries to chronic pain management.",
        },
        {
          title: "Quick sessions with no downtime.",
          description:
            "Treatment sessions are typically short with no downtime or recovery period required.",
        },
      ],
    },
    sidebar: {
      services: [
        "Physiotherapy",
        "Joint Mobilization",
        "Manual Hand Therapy",
        "Sport Injury Therapy",
        "Laser Therapy",
        "Occupational Therapy",
        "Geriatric Therapy",
        "Trigger Point Therapy",
        "Neurological Therapy",
      ],
    },
  },
  "occupational-therapy": {
    id: 6,
    title: "Occupational Therapy",
    slug: "occupational-therapy",
    bannerImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=800&fit=crop",
    mainImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    benefitImage:
      "https://images.unsplash.com/photo-1612351443858-1baa1d95e59e?w=800&h=600&fit=crop",
    description:
      "Occupational therapy helps individuals regain independence in daily activities and improve quality of life. Ut lectus arcu bibendum at varius vel. Id velit ut tortor pretium viverra suspendisse potenti. Semper feugiat nibh sed.",
    longDescription:
      "Our occupational therapists work with you to develop skills needed for daily living, work, and leisure activities through personalized therapeutic interventions. Collaboratively administrate empowered markets via plug-and-play networks.",
    benefits: {
      title: "Benefits of Occupational Therapy",
      description:
        "Regain independence and confidence in your daily activities and routines.",
      points: [
        "Improved daily living skills",
        "Enhanced independence at home",
        "Better overall quality of life",
        "Effective adaptive strategies",
      ],
    },
    whyChoose: {
      title: "Why Choose Us",
      points: [
        {
          title: "Holistic approach to your recovery.",
          description:
            "We address physical, cognitive, and emotional aspects of your complete recovery journey.",
        },
        {
          title: "Home assessments available for you.",
          description:
            "We can evaluate and modify your home environment for safety and accessibility.",
        },
        {
          title: "Adaptive equipment expertise provided.",
          description:
            "Expert guidance on assistive devices and adaptive equipment selection for daily use.",
        },
        {
          title: "Life skills training programs.",
          description:
            "Comprehensive programs for work, self-care, and leisure activities to enhance independence.",
        },
      ],
    },
    sidebar: {
      services: [
        "Physiotherapy",
        "Joint Mobilization",
        "Manual Hand Therapy",
        "Sport Injury Therapy",
        "Laser Therapy",
        "Occupational Therapy",
        "Geriatric Therapy",
        "Trigger Point Therapy",
        "Neurological Therapy",
      ],
    },
  },
  "geriatric-therapy": {
    id: 7,
    title: "Geriatric Therapy",
    slug: "geriatric-therapy",
    bannerImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=800&fit=crop",
    mainImage:
      "https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?w=800&h=600&fit=crop",
    benefitImage:
      "https://images.unsplash.com/photo-1612351443858-1baa1d95e59e?w=800&h=600&fit=crop",
    description:
      "Specialized therapy for elderly patients focusing on mobility, balance, and maintaining independence in daily activities.",
    longDescription:
      "Our geriatric therapy program is designed to help seniors maintain their quality of life, prevent falls, and manage age-related conditions with compassionate, personalized care.",
    benefits: {
      title: "Benefits of Geriatric Therapy",
      description:
        "Maintain independence and quality of life through specialized senior care.",
      points: [
        "Improved balance and fall prevention",
        "Enhanced mobility and strength",
        "Pain management for chronic conditions",
        "Maintained independence in daily tasks",
      ],
    },
    whyChoose: {
      title: "Why Choose Us",
      points: [
        {
          title: "Specialized geriatric care expertise.",
          description:
            "Our therapists have extensive training in treating age-related conditions and senior health.",
        },
        {
          title: "Compassionate and patient approach.",
          description:
            "We understand the unique needs of elderly patients and provide gentle, effective care.",
        },
        {
          title: "Fall prevention programs available.",
          description:
            "Comprehensive balance and stability training to reduce fall risk and increase confidence.",
        },
        {
          title: "Family involvement and education.",
          description:
            "We work with families to ensure continuity of care and support at home.",
        },
      ],
    },
    sidebar: {
      services: [
        "Physiotherapy",
        "Joint Mobilization",
        "Manual Hand Therapy",
        "Sport Injury Therapy",
        "Laser Therapy",
        "Occupational Therapy",
        "Geriatric Therapy",
        "Trigger Point Therapy",
        "Neurological Therapy",
      ],
    },
  },
  "trigger-point-therapy": {
    id: 8,
    title: "Trigger Point Therapy",
    slug: "trigger-point-therapy",
    bannerImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=800&fit=crop",
    mainImage:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop",
    benefitImage:
      "https://images.unsplash.com/photo-1612351443858-1baa1d95e59e?w=800&h=600&fit=crop",
    description:
      "Targeted treatment for muscle knots and trigger points to relieve pain and restore normal muscle function.",
    longDescription:
      "Our trigger point therapy uses specialized techniques to release tight muscle bands and knots, providing effective relief from chronic pain and muscle tension.",
    benefits: {
      title: "Benefits of Trigger Point Therapy",
      description:
        "Experience relief from chronic muscle pain and tension through targeted treatment.",
      points: [
        "Reduced muscle pain and tension",
        "Improved muscle flexibility",
        "Enhanced range of motion",
        "Relief from referred pain patterns",
      ],
    },
    whyChoose: {
      title: "Why Choose Us",
      points: [
        {
          title: "Expert trigger point identification.",
          description:
            "Our therapists are skilled at locating and treating problematic trigger points effectively.",
        },
        {
          title: "Multiple treatment techniques used.",
          description:
            "We combine manual therapy, dry needling, and other methods for optimal results.",
        },
        {
          title: "Long-lasting pain relief achieved.",
          description:
            "Our treatments address the root cause, not just symptoms, for lasting relief.",
        },
        {
          title: "Customized treatment plans created.",
          description:
            "Each session is tailored to your specific pain patterns and muscle tension areas.",
        },
      ],
    },
    sidebar: {
      services: [
        "Physiotherapy",
        "Joint Mobilization",
        "Manual Hand Therapy",
        "Sport Injury Therapy",
        "Laser Therapy",
        "Occupational Therapy",
        "Geriatric Therapy",
        "Trigger Point Therapy",
        "Neurological Therapy",
      ],
    },
  },
  "neurological-therapy": {
    id: 9,
    title: "Neurological Therapy",
    slug: "neurological-therapy",
    bannerImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=800&fit=crop",
    mainImage:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
    benefitImage:
      "https://images.unsplash.com/photo-1612351443858-1baa1d95e59e?w=800&h=600&fit=crop",
    description:
      "Specialized rehabilitation for neurological conditions including stroke, Parkinson's, and spinal cord injuries.",
    longDescription:
      "Our neurological therapy program helps patients recover from brain and nervous system conditions through evidence-based rehabilitation techniques and compassionate care.",
    benefits: {
      title: "Benefits of Neurological Therapy",
      description:
        "Improve function and independence after neurological injury or illness.",
      points: [
        "Improved motor control and coordination",
        "Enhanced balance and stability",
        "Increased strength and endurance",
        "Better quality of life and independence",
      ],
    },
    whyChoose: {
      title: "Why Choose Us",
      points: [
        {
          title: "Neuro-rehabilitation specialists on staff.",
          description:
            "Our therapists have advanced training in treating neurological conditions and disorders.",
        },
        {
          title: "Evidence-based treatment protocols.",
          description:
            "We use the latest research-backed techniques for optimal recovery and outcomes.",
        },
        {
          title: "Advanced equipment and technology.",
          description:
            "State-of-the-art tools and devices to support your rehabilitation journey.",
        },
        {
          title: "Comprehensive care coordination.",
          description:
            "We work with your medical team to ensure integrated, holistic treatment approach.",
        },
      ],
    },
    sidebar: {
      services: [
        "Physiotherapy",
        "Joint Mobilization",
        "Manual Hand Therapy",
        "Sport Injury Therapy",
        "Laser Therapy",
        "Occupational Therapy",
        "Geriatric Therapy",
        "Trigger Point Therapy",
        "Neurological Therapy",
      ],
    },
  },
};

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [expandedIndex, setExpandedIndex] = useState(3);

  // Get service data based on URL slug, fallback to physiotherapy
  const serviceData =
    servicesDetailData[slug] || servicesDetailData["physiotherapy"];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 500);
  }, [slug]);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleSidebarClick = (serviceName) => {
    const serviceSlug = serviceName.toLowerCase().replace(/\s+/g, "-");
    navigate(`/service/${serviceSlug}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-4 border-pink-300/20 animate-ping absolute"></div>
            <div className="w-20 h-20 rounded-full border-4 border-pink-600/40 animate-pulse absolute top-2 left-2"></div>
            <div className="w-16 h-16 rounded-full border-t-4 border-r-4 border-blue-600 animate-spin mx-auto relative z-10"></div>
            <div className="w-4 h-4 rounded-full bg-blue-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 mt-10">
      {/* ==================== BANNER ==================== */}
      <div
        className="relative h-[300px] bg-cover bg-center"
        style={{
          backgroundImage: `url('${serviceData.bannerImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center max-w-7xl">
          <h1
            className="text-4xl md:text-5xl mt-20 text-white mb-4"
            style={{
              fontFamily: "'Zalando Sans Expanded', sans-serif",
              fontWeight: 200,
            }}
          >
            {serviceData.title}
          </h1>

          <nav className="flex items-center gap-2 text-white/90 text-sm">
            <button
              onClick={() => navigate("/")}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Home className="w-4 h-4" />
              Home
            </button>
            <span>/</span>
            <span className="text-white">{serviceData.title}</span>
          </nav>
        </div>
      </div>

      {/* ==================== MAIN CONTENT ==================== */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* ==================== LEFT SIDEBAR ==================== */}
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden lg:sticky lg:top-8">
                {/* Services List */}
                <div className="bg-pink-600 text-white px-6 py-4">
                  <h3 className="text-xl">Physiotherapy</h3>
                </div>

                <nav className="py-4">
                  {serviceData.sidebar.services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => handleSidebarClick(service)}
                      className={`w-full text-left px-6 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 ${
                        service === serviceData.title
                          ? "bg-gray-50 text-pink-600 "
                          : "text-gray-700"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </nav>

                {/* Download Brochure */}
                <div className="p-6 bg-[#1a1d3d]">
                  <button className="w-full flex items-center justify-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-500 transition-all duration-300">
                    <Download className="w-5 h-5" />
                    <span className="">Download Brochure</span>
                  </button>
                </div>

                {/* Contact Info */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Phone className="w-5 h-5 text-pink-600" />
                    <div>
                      <p className="text-sm text-gray-500">Call Us</p>
                      <p className="">1800-456-7890</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <Mail className="w-5 h-5 text-pink-600" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="">info@example.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* ==================== RIGHT CONTENT ==================== */}
            <main className="lg:col-span-9">
              {/* Main Image */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <img
                  src={serviceData.mainImage}
                  alt={serviceData.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Description */}
              <div
                className="bg-white rounded-xl shadow-lg p-8 mb-8"
                style={{
                  fontFamily: "'Gantari', sans-serif",
                  fontWeight: 400,
                }}
              >
                <h2 className="text-3xl  text-gray-900 mb-6">
                  {serviceData.title}
                </h2>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {serviceData.description}
                </p>

                <p className="text-gray-600 text-base leading-relaxed">
                  {serviceData.longDescription}
                </p>
              </div>

              {/* Benefit Section */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Left - Image */}
                  <div className="h-full">
                    <img
                      src={serviceData.benefitImage}
                      alt="Benefits"
                      className="w-full h-full object-cover min-h-[300px]"
                    />
                  </div>

                  {/* Right - Content */}
                  <div
                    className="p-8"
                    style={{
                      fontFamily: "'Gantari', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    <h3 className="text-2xl  text-gray-900 mb-4">
                      {serviceData.benefits.title}
                    </h3>

                    <p className="text-gray-600 mb-6">
                      {serviceData.benefits.description}
                    </p>

                    <ul className="space-y-3">
                      {serviceData.benefits.points.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <ChevronRight className="w-5 h-5 text-[#8ab72e] mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Why Choose Us - Accordion */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl  text-gray-900 mb-6">
                  {serviceData.whyChoose.title}
                </h3>

                <div className="space-y-4">
                  {serviceData.whyChoose.points.map((item, index) => (
                    <div
                      key={index}
                      className="border-2 border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`text-2xl  transition-colors ${
                              expandedIndex === index
                                ? "text-[#dc2743]"
                                : "text-gray-400"
                            }`}
                          >
                            {expandedIndex === index ? "−" : "+"}
                          </span>
                          <span className="text-left  text-gray-800">
                            {item.title}
                          </span>
                        </div>
                      </button>

                      <div
                        className={`transition-all duration-300 overflow-hidden ${
                          expandedIndex === index ? "max-h-48" : "max-h-0"
                        }`}
                      >
                        <div className="px-4 pb-4 pt-2 text-gray-600 border-t border-gray-200">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8 bg-gradient-to-r from-pink-600 to-pink-500 rounded-xl shadow-lg p-8 text-white text-center">
                <h3 className="text-2xl  mb-4">Visit Today</h3>
                <p className="mb-6 text-lg">
                  You'll know the minute you arrive this is the place. We are
                  here to surpass your desires.
                </p>
                <button className="px-8 py-3 bg-white text-pink-600 rounded-lg hover:bg-gray-100 transition-all duration-300  shadow-lg">
                  MAKE APPOINTMENT
                </button>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style>{`
        * {
          box-sizing: border-box;
        }

        .container {
          width: 100%;
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        /* Smooth transitions */
        button {
          transition: all 0.3s ease;
        }

        /* Scrollbar styling */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #8ab72e;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #6d9424;
        }
      `}</style>
    </div>
  );
};

export default ServiceDetailPage;
