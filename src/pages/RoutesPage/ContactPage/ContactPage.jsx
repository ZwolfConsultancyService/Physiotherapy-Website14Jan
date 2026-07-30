import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  User,
  Calendar,
  ChevronDown,
  Send,
  ArrowRight,
} from "lucide-react";

const API_BASE_URL =
  "https://dr-abhishek-physiotherapist-backend.onrender.com/api";

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
    if (submitStatus) setSubmitStatus(null);
  };

  const validate = () => {
    const e = {};
    if (!formData.fullName.trim()) e.fullName = "Full name is required";
    if (!formData.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = "Invalid email";
    if (!formData.phone.trim()) e.phone = "Phone is required";
    else if (!/^\d{10}$/.test(formData.phone.replace(/[-\s]/g, "")))
      e.phone = "Must be 10 digits";
    if (!formData.preferredDate) e.preferredDate = "Date is required";
    if (!formData.preferredTime) e.preferredTime = "Time is required";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch(`${API_BASE_URL}/appointment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          phoneNumber: formData.phone,
          date: formData.preferredDate,
          preferredDate: formData.preferredDate,
          time: formData.preferredTime,
          preferredTime: formData.preferredTime,
          message: formData.message,
          notes: formData.message,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setSubmitStatus("success");
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          preferredDate: "",
          preferredTime: "",
          message: "",
        });
        setSubmitStatus(null);
      }, 4000);
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- Styles ---
  const inputBaseStyle = (field) => ({
    width: "100%",
    padding: "11px 14px 11px 42px",
    border: `1px solid ${errors[field] ? "#e53e3e" : "#d1d5db"}`,
    borderRadius: "4px",
    fontSize: "14px",
    fontFamily: "'IBM Plex Sans', sans-serif",
    color: "#000",
    background: "#fff",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s, box-shadow 0.2s",
  });

  return (
    <div className="pc-contact">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        <title>Book Appointment – PhysioCentric | Physiotherapy Clinic New Delhi</title>
        <meta
          name="description"
          content="Book a physiotherapy appointment at PhysioCentric, Gulmohar Park, New Delhi. Call 09810513841 or fill our online form. Mon–Sat, 09AM–7PM."
        />
        <meta
          name="keywords"
          content="book physiotherapy appointment Delhi, contact physiotherapist New Delhi, PhysioCentric appointment, physio clinic Gulmohar Park contact"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.physiocentric.in/contacts" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.physiocentric.in/contacts" />
        <meta
          property="og:title"
          content="Book Appointment – PhysioCentric Physiotherapy, New Delhi"
        />
        <meta
          property="og:description"
          content="Book your physiotherapy session online or call 09810513841. Located in Gulmohar Park, New Delhi."
        />
        <meta property="og:image" content="https://www.physiocentric.in/og-image.jpg" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="PhysioCentric" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Book Physiotherapy Appointment – PhysioCentric, New Delhi"
        />
        <meta
          name="twitter:description"
          content="Online appointment booking for PhysioCentric, New Delhi's top-rated physio clinic."
        />
        <meta name="twitter:image" content="https://www.physiocentric.in/og-image.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ContactPage",
                "url": "https://www.physiocentric.in/contacts",
                "name": "Book Appointment – PhysioCentric",
                "description":
                  "Online appointment booking and contact information for PhysioCentric physiotherapy clinic in New Delhi.",
                "inLanguage": "en-IN",
              },
              {
                "@type": "MedicalBusiness",
                "name": "PhysioCentric",
                "url": "https://www.physiocentric.in",
                "telephone": "+919810513841",
                "email": "reception.physiocentric@gmail.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "A-2, Block A, Gulmohar Park",
                  "addressLocality": "New Delhi",
                  "addressRegion": "Delhi",
                  "postalCode": "110049",
                  "addressCountry": "IN",
                },
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                    ],
                    "opens": "10:00",
                    "closes": "19:00",
                  },
                ],
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 28.5467,
                  "longitude": 77.209,
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5.0",
                  "reviewCount": "37",
                  "bestRating": "5",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <style>{`
        .pc-contact, .pc-contact * { box-sizing: border-box; }
        .pc-contact {
          font-family: 'IBM Plex Sans', sans-serif;
          background: #fff;
          min-height: 100vh;
          color: #000;
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
        }
        .pc-contact .serif { font-family: 'Fraunces', serif; }
        .pc-contact .mono { font-family: 'IBM Plex Mono', monospace; }
        .pc-contact input::placeholder,
        .pc-contact textarea::placeholder { color: #9ca3af; }
        .pc-contact input:focus,
        .pc-contact textarea:focus,
        .pc-contact select:focus { border-color: #000 !important; box-shadow: 0 0 0 1px #000; }
        .pc-contact input[type="date"]::-webkit-calendar-picker-indicator { opacity: 0.5; cursor: pointer; filter: invert(1); }

        /* ── Hero ── */
        .pc-hero {
          position: relative;
          height: 320px;
          background: #000;
          overflow: hidden;
        }
        .pc-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding-bottom: 48px;
        }

        /* ── Info cards ── */
        .pc-info-wrap { border-bottom: 1px solid #e5e7eb; background: #fafafa; }
        .pc-info-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        }
        .info-card {
          padding: 24px 20px;
          background: #fff;
          border-bottom: 2px solid #000;
        }
        @media (min-width: 640px) {
          .info-card { border-bottom: none; border-right: 1px solid #e5e7eb; }
          .info-card:last-child { border-right: none; }
        }

        /* ── Main layout ── */
        .pc-main-container { max-width: 1200px; margin: 0 auto; padding: 48px 24px 80px; }
        .grid-main { display: grid; grid-template-columns: 1fr 1.5fr; gap: 48px; }
        .grid-two { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .pc-form-inner { padding: 36px 32px; }
        .pc-cta {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 20px;
          padding: 16px 20px;
          border-radius: 4px;
          background: #000;
          color: #fff;
          text-decoration: none;
          border: 1px solid #000;
          transition: background 0.2s;
        }

        /* ── Responsive breakpoints ── */
        @media (max-width: 820px) {
          .grid-main { grid-template-columns: 1fr !important; gap: 32px; }
        }
        @media (max-width: 640px) {
          .grid-two { grid-template-columns: 1fr !important; gap: 14px; }
        }
        @media (max-width: 600px) {
          .pc-hero { height: 240px; }
          .pc-hero-inner { padding: 0 16px; padding-bottom: 28px; }
          .pc-main-container { padding: 32px 16px 56px; }
          .pc-form-inner { padding: 24px 18px; }
          .pc-info-grid { grid-template-columns: repeat(2, 1fr); }
          .info-card { padding: 18px 14px; }
          .pc-cta { padding: 14px 16px; gap: 12px; }
        }
        @media (max-width: 400px) {
          .pc-info-grid { grid-template-columns: repeat(2, 1fr); }
          .info-card { padding: 16px 12px; }
          .pc-form-inner { padding: 20px 14px; }
        }
      `}</style>

      {/* ─── HERO ─── */}
      <div className="pc-hero">
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&h=640&fit=crop"
          alt="PhysioCentric contact and appointment booking"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.2,
          }}
          loading="eager"
          fetchpriority="high"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, #000 0%, #111 100%)",
          }}
          aria-hidden="true"
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "4px",
            background: "#fff",
          }}
          aria-hidden="true"
        />
        <div className="pc-hero-inner">
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
            <span style={{ width: "40px", height: "2px", background: "#fff" }} aria-hidden="true" />
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "#fff",
                fontWeight: 500,
                fontFamily: "'IBM Plex Mono', monospace",
              }}
            >
              PhysioCentric
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(1.9rem, 8vw, 3.5rem)",
              fontWeight: 600,
              color: "#fff",
              margin: 0,
              lineHeight: 1.08,
            }}
          >
            Get in <span style={{ fontStyle: "italic" }}>Touch</span>
          </h1>
          <nav aria-label="Breadcrumb" style={{ marginTop: "16px" }}>
            <ol
              style={{
                display: "flex",
                gap: "8px",
                fontSize: "13px",
                color: "rgba(255,255,255,0.5)",
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              <li>
                <a href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
                  Home
                </a>
              </li>
              <li aria-hidden="true" style={{ color: "rgba(255,255,255,0.3)" }}>
                /
              </li>
              <li>
                <span style={{ color: "#fff" }} aria-current="page">
                  Contact Us
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* ─── INFO CARDS ─── */}
      <div className="pc-info-wrap">
        <div className="pc-info-grid">
          {[
            { icon: Phone, label: "Call Us", lines: ["098105 13841"] },
            { icon: Mail, label: "Email", lines: ["reception.physiocentric@gmail.com"] },
            {
              icon: MapPin,
              label: "Location",
              lines: ["A-2, Block A, Gulmohar Park", "New Delhi, Delhi 110049"],
            },
            { icon: Clock, label: "Hours", lines: ["Mon–Sat: 09am – 7pm", "Sun: Closed"] },
          ].map((item, i) => (
            <div key={i} className="info-card">
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "#f1f1f1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "12px",
                }}
                aria-hidden="true"
              >
                <item.icon size={16} style={{ color: "#000" }} strokeWidth={1.5} />
              </div>
              <div
                style={{
                  fontSize: "10px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#6b7280",
                  fontWeight: 600,
                  marginBottom: "6px",
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                {item.label}
              </div>
              {item.lines.map((line, j) => (
                <div
                  key={j}
                  style={{
                    fontSize: "13px",
                    color: "#000",
                    lineHeight: 1.6,
                    wordBreak: "break-word",
                  }}
                >
                  {line}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ─── MAIN GRID ─── */}
      <div className="pc-main-container">
        <div className="grid-main">
          {/* LEFT */}
          <div>
            <div style={{ marginBottom: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <span style={{ width: "28px", height: "2px", background: "#000" }} aria-hidden="true" />
                <span
                  style={{
                    fontSize: "10px",
                    letterSpacing: "3.5px",
                    textTransform: "uppercase",
                    color: "#6b7280",
                    fontWeight: 600,
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  Find Us
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: "clamp(1.3rem, 5vw, 1.9rem)",
                  fontWeight: 600,
                  color: "#000",
                  margin: "0 0 10px",
                }}
              >
                Visit Our <span style={{ fontStyle: "italic" }}>Clinic</span>
              </h2>
              <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: 1.7, margin: 0 }}>
                Located in Gulmohar Park, New Delhi. Walk-ins welcome during working hours.
              </p>
            </div>

            {/* MAP */}
            <div
              style={{
                borderRadius: "4px",
                overflow: "hidden",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              }}
            >
              <div style={{ height: "4px", background: "#000" }} aria-hidden="true" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17279.444892527215!2d77.19908151661608!3d28.546738155120085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c2bae79c4b%3A0x8c6cf571e1cd86ce!2sPhysioCentric!5e0!3m2!1sen!2sin!4v1777618165437!5m2!1sen!2sin"
                width="100%"
                height="280"
                style={{ border: 0, display: "block", maxWidth: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PhysioCentric location map – Gulmohar Park, New Delhi"
              />
              <div
                style={{
                  padding: "12px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#fafafa",
                  borderTop: "1px solid #e5e7eb",
                }}
              >
                <MapPin size={14} style={{ color: "#000", flexShrink: 0 }} />
                <address
                  style={{
                    fontSize: "12px",
                    color: "#000",
                    fontStyle: "normal",
                    fontFamily: "'IBM Plex Sans', sans-serif",
                  }}
                >
                  A-2, Block A, Gulmohar Park, New Delhi 110049
                </address>
              </div>
            </div>

            {/* CALL CTA */}
            <a
              href="tel:09810513841"
              aria-label="Call PhysioCentric at 09810513841"
              className="pc-cta"
              onMouseEnter={(e) => (e.currentTarget.style.background = "#333")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#000")}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
                aria-hidden="true"
              >
                <Phone size={17} style={{ color: "#fff" }} />
              </div>
              <div style={{ minWidth: 0 }}>
                <div
                  style={{
                    fontSize: "10px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.5)",
                    marginBottom: "2px",
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  Call Direct
                </div>
                <div style={{ fontSize: "16px", fontWeight: 600, whiteSpace: "nowrap" }}>
                  09810513841
                </div>
              </div>
              <ArrowRight size={18} style={{ marginLeft: "auto", opacity: 0.5, flexShrink: 0 }} />
            </a>
          </div>

          {/* RIGHT — FORM */}
          <div
            style={{
              background: "#fff",
              borderRadius: "4px",
              border: "1px solid #e5e7eb",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              overflow: "hidden",
            }}
          >
            <div style={{ height: "4px", background: "#000" }} aria-hidden="true" />
            <div className="pc-form-inner">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <span style={{ width: "28px", height: "2px", background: "#000" }} aria-hidden="true" />
                <span
                  style={{
                    fontSize: "10px",
                    letterSpacing: "3.5px",
                    textTransform: "uppercase",
                    color: "#6b7280",
                    fontWeight: 600,
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  Schedule a Visit
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: "clamp(1.3rem, 5vw, 1.9rem)",
                  fontWeight: 600,
                  color: "#000",
                  margin: "0 0 6px",
                }}
              >
                Book an <span style={{ fontStyle: "italic" }}>Appointment</span>
              </h2>
              <p style={{ fontSize: "14px", color: "#6b7280", margin: "0 0 24px" }}>
                Fill in your details — we'll confirm within 24 hours.
              </p>

              {submitStatus === "success" && (
                <div
                  role="alert"
                  style={{
                    display: "flex",
                    gap: "12px",
                    padding: "12px 16px",
                    background: "#f0fdf4",
                    border: "1px solid #bbf7d0",
                    borderRadius: "4px",
                    marginBottom: "20px",
                  }}
                >
                  <span style={{ color: "#16a34a", fontWeight: 700 }} aria-hidden="true">
                    ✓
                  </span>
                  <div>
                    <div style={{ fontWeight: 600, color: "#15803d", fontSize: "14px" }}>
                      Appointment Booked!
                    </div>
                    <div style={{ fontSize: "13px", color: "#16a34a" }}>
                      We'll confirm within 24 hours.
                    </div>
                  </div>
                </div>
              )}
              {submitStatus === "error" && (
                <div
                  role="alert"
                  style={{
                    display: "flex",
                    gap: "12px",
                    padding: "12px 16px",
                    background: "#fef2f2",
                    border: "1px solid #fecaca",
                    borderRadius: "4px",
                    marginBottom: "20px",
                  }}
                >
                  <span style={{ color: "#dc2626", fontWeight: 700 }} aria-hidden="true">
                    !
                  </span>
                  <div>
                    <div style={{ fontWeight: 600, color: "#991b1b", fontSize: "14px" }}>
                      Booking Failed
                    </div>
                    <div style={{ fontSize: "13px", color: "#dc2626" }}>
                      Please try again or call us directly.
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                {/* Full Name */}
                <Field label="Full Name" required error={errors.fullName}>
                  <InputWrap icon={User}>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      disabled={isSubmitting}
                      autoComplete="name"
                      style={inputBaseStyle("fullName")}
                    />
                  </InputWrap>
                </Field>

                <div className="grid-two">
                  <Field label="Email" required error={errors.email}>
                    <InputWrap icon={Mail}>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        disabled={isSubmitting}
                        autoComplete="email"
                        style={inputBaseStyle("email")}
                      />
                    </InputWrap>
                  </Field>
                  <Field label="Phone" required error={errors.phone}>
                    <InputWrap icon={Phone}>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit number"
                        disabled={isSubmitting}
                        autoComplete="tel"
                        style={inputBaseStyle("phone")}
                      />
                    </InputWrap>
                  </Field>
                </div>

                <div className="grid-two">
                  <Field label="Preferred Date" required error={errors.preferredDate}>
                    <InputWrap icon={Calendar}>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split("T")[0]}
                        disabled={isSubmitting}
                        aria-label="Preferred appointment date"
                        style={inputBaseStyle("preferredDate")}
                      />
                    </InputWrap>
                  </Field>
                  <Field label="Preferred Time" required error={errors.preferredTime}>
                    <InputWrap icon={Clock} arrow>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        aria-label="Preferred appointment time"
                        style={{
                          ...inputBaseStyle("preferredTime"),
                          appearance: "none",
                          cursor: "pointer",
                          paddingRight: "40px",
                        }}
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((s, i) => (
                          <option key={i}>{s}</option>
                        ))}
                      </select>
                    </InputWrap>
                  </Field>
                </div>

                <Field label="Message (Optional)">
                  <div style={{ position: "relative" }}>
                    <Send
                      size={16}
                      style={{
                        position: "absolute",
                        left: "13px",
                        top: "13px",
                        color: "#9ca3af",
                        pointerEvents: "none",
                      }}
                    />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your condition or symptoms..."
                      rows={4}
                      disabled={isSubmitting}
                      style={{
                        width: "100%",
                        padding: "11px 14px 11px 42px",
                        border: "1px solid #d1d5db",
                        borderRadius: "4px",
                        fontSize: "14px",
                        fontFamily: "'IBM Plex Sans', sans-serif",
                        color: "#000",
                        resize: "none",
                        outline: "none",
                        background: "#fff",
                        boxSizing: "border-box",
                        lineHeight: 1.6,
                        transition: "border-color 0.2s",
                      }}
                    />
                  </div>
                </Field>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-label="Submit appointment booking form"
                  style={{
                    width: "100%",
                    padding: "14px 20px",
                    marginTop: "8px",
                    background: isSubmitting ? "#6b7280" : "#000",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) e.currentTarget.style.background = "#333";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = isSubmitting ? "#6b7280" : "#000";
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Spinner />
                      Booking...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Book Appointment
                    </>
                  )}
                </button>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "11px",
                    color: "#9ca3af",
                    marginTop: "14px",
                    marginBottom: 0,
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  By submitting, you agree to our terms and conditions.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── HELPERS ─── */
function Field({ label, required, error, children }) {
  return (
    <div style={{ marginBottom: "18px" }}>
      <label
        style={{
          display: "block",
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "#6b7280",
          marginBottom: "6px",
          fontFamily: "'IBM Plex Mono', monospace",
        }}
      >
        {label}
        {required && (
          <span style={{ color: "#9ca3af", marginLeft: "4px" }} aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p
          role="alert"
          style={{
            fontSize: "12px",
            color: "#e53e3e",
            marginTop: "4px",
            marginBottom: 0,
            fontFamily: "'IBM Plex Sans', sans-serif",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}

function InputWrap({ icon: Icon, arrow, children }) {
  return (
    <div style={{ position: "relative" }}>
      <Icon
        size={16}
        style={{
          position: "absolute",
          left: "13px",
          top: "50%",
          transform: "translateY(-50%)",
          color: "#9ca3af",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      {children}
      {arrow && (
        <ChevronDown
          size={16}
          style={{
            position: "absolute",
            right: "13px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#9ca3af",
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
}

function Spinner() {
  return (
    <div
      style={{
        width: "16px",
        height: "16px",
        border: "2px solid rgba(255,255,255,0.3)",
        borderTopColor: "#fff",
        borderRadius: "50%",
        animation: "spin 0.65s linear infinite",
        flexShrink: 0,
      }}
      aria-label="Loading"
    />
  );
}

// Inject keyframes for spinner (guard against duplicate injection on re-render)
if (typeof document !== "undefined" && !document.getElementById("pc-spin-keyframes")) {
  const styleSheet = document.createElement("style");
  styleSheet.id = "pc-spin-keyframes";
  styleSheet.textContent = `
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(styleSheet);
}