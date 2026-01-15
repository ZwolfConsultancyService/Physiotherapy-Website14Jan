import React, { useState, useEffect } from "react";
import MainLayout from "./layout/MainLayout/MainLayout";
import MainPage from "./pages/MainPage/MainPage";
import AboutUs from "./pages/RoutesPage/AboutPage/AboutUs";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./layout/ScrollToTop/ScrollToTop";
import ServicesPage from "./pages/RoutesPage/ServicesPage/ServicesPage";
import ServiceDetailPage from "./pages/DetailPage/ServiceDetailPage/ServiceDetailPage";
import BlogPage from "./pages/RoutesPage/BlogPage/BlogPage";
import BlogDetailPage from "./pages/DetailPage/BlogDetailPage/BlogDetailPage";
import ContactPage from "./pages/RoutesPage/ContactPage/ContactPage";
import Loader from "./layout/Loader/Loader"; // Adjust path as needed

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if current path is NOT /services
    const isServicesPage = location.pathname === "/services";
    
    if (!isServicesPage) {
      setLoading(true);
      
      // Simulate loading time
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000); // 1 second loader

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <MainLayout>
      <ScrollToTop />
      
      {loading && <Loader />}
      
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} /> 

        <Route path="/service/:slug" element={<ServiceDetailPage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
      </Routes>
    </MainLayout>
  );
};

export default App;