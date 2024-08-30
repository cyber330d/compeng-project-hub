// app/about/page.tsx
import React from "react";
import AboutHeader from "./components/AboutHeader";
import Introduction from "./components/Introduction";
import Story from "./components/Story";
import MissionVision from "./components/MissionVision";
import Values from "./components/Values";
import Impact from "./components/Impact";
import Testimonials from "./components/Testimonials";
import PartnersAndCollaboartors from "./components/PartnersAndCollaboartors";
import GetInvolved from "./components/GetInvolved";
// import CallToAction from "./components/CallToAction";
import FAQs from "./components/FAQs";
import FuturePlans from "./components/FuturePlans";
// import LegalPrivacy from "./components/LegalPrivacy";
import SupportResources from "./components/Support";
import Blogs from "./components/Blogs";
import ContactUs from "./components/ContactUs";

const AboutPage: React.FC = () => (
  <div className="bg-white text-dark min-h-screen py-16 w-full overflow-hidden">
    <AboutHeader />
    <Introduction />
    <MissionVision />
    <Story />
    <Values />
    <Impact />
    <PartnersAndCollaboartors />
    <Testimonials />
    <Blogs/>
    <GetInvolved />
    <FAQs />
    <FuturePlans />
    <SupportResources />
    {/* <CallToAction /> */}
    <ContactUs/>
  </div>
);

export default AboutPage;
