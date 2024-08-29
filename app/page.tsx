import Image from "next/image";
import HeroSection from "./components/Hero";
import FeaturedProjects from "./components/FeaturedSection";
import HowItWorks from "./components/HowItWorks";
import AboutSection from "./components/About";
import Testimonials from "./components/Testimonials";
import CallToActionSection from "./components/CallToActionSection";
import BlogSection from "./components/BlogSection";
import PartnersSection from "./components/PartnersSection";
import StatisticsSection from "./components/StatisticsSection";
import ContactSection from "./components/Contact";
import FooterSection from "./components/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <FeaturedProjects />
      <HowItWorks />
      <AboutSection />
      <Testimonials />
      <CallToActionSection />
      <BlogSection />
      <PartnersSection />
      <StatisticsSection />
      <ContactSection />
    </div>
  );
}
