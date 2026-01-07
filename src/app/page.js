"use client";
import "./landing.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import PopularCoursesSection from "./components/PopularCoursesSection";
import AboutSection from "./components/AboutSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";

const Home = () => {
  return (
    <div className="landing-page">
      <div className="animated-bg"></div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PopularCoursesSection />
      <AboutSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
