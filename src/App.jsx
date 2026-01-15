// import MainLayout from "./layout/MainLayout/MainLayout";
// import MainPage from "./pages/MainPage/MainPage";

// const App = () => {
//   return (
//     <MainLayout>
//       <MainPage />
//     </MainLayout>
//   );
// };

// export default App;
import React from "react";
import MainLayout from "./layout/MainLayout/MainLayout";
import MainPage from "./pages/MainPage/MainPage";
import AboutUs from "./pages/RoutesPage/AboutPage/AboutUs";

// import BlogPage from "./pages/RoutesPage/BlogPage/BlogPage";
// import ContactPage from "./pages/RoutesPage/ContactPage/ContactPage";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./layout/ScrollToTop/ScrollToTop";
import ServicesPage from "./pages/RoutesPage/ServicesPage/ServicesPage";
import ServiceDetailPage from "./pages/DetailPage/ServiceDetailPage/ServiceDetailPage";

const App = () => {
  return (
    <MainLayout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<ServicesPage />} />
        {/* 
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} /> */}

        <Route path="/service/:slug" element={<ServiceDetailPage />} />
      </Routes>
    </MainLayout>
  );
};

export default App;