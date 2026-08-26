// App.jsx
import React, { useState, useEffect } from "react";
import MainLayout from "./layout/MainLayout/MainLayout";
import MainPage from "./pages/MainPage/MainPage";
import AboutUs from "./pages/RoutesPage/AboutPage/AboutUs";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./layout/ScrollToTop/ScrollToTop";
import ServicesPage from "./pages/RoutesPage/ServicesPage/ServicesPage";
import BlogPage from "./pages/RoutesPage/BlogPage/BlogPage";
import BlogDetailPage from "./pages/DetailPage/BlogDetailPage/BlogDetailPage";
import ContactPage from "./pages/RoutesPage/ContactPage/ContactPage";
import Loader from "./layout/Loader/Loader";
import ServiceDetailPage from "./pages/DetailPage/ServiceDetailPage/ServiceDetailPage";
import LocationDetailPage from "./pages/DetailPage/Locationdetailpage/Locationdetailpage";
import DoctorsPage from "./pages/DoctorsPage/DoctorsPage";
import CaseStudyPage from "./pages/RoutesPage/Casestudypage/Casestudypage";
import CaseStudyDetailPage from "./pages/DetailPage/Casestudydetailpage/Casestudydetailpage";

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const isServicesPage = location.pathname === "/services";
    if (!isServicesPage) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <MainLayout>
      <ScrollToTop />
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:slug" element={<BlogDetailPage />} />
        <Route path="/contacts" element={<ContactPage />} />

        {/* Service only page e.g. /service/biomechanical-correction-rehab */}
        <Route path="/service/:slug" element={<ServiceDetailPage />} />

        {/* Service + Location page e.g. /service/biomechanical-correction-rehab/anand-lok */}
        <Route path="/service/:slug/:locationSlug" element={<LocationDetailPage />} />

        {/* Case Studies — listing page e.g. /case-studies */}
        <Route path="/case-studies" element={<CaseStudyPage />} />

        {/* ✅ Case Study detail page now uses slug, e.g. /case-studies/frozen-shoulder-recovery */}
        <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />

        <Route path="/our-doctors" element={<DoctorsPage />} />
      </Routes>
    </MainLayout>
  );
};

export default App;