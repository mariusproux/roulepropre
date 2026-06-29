
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import InformationsPratiquesSection from "@/components/InformationsPratiquesSection";
import SelectServiceSection from "@/components/SelectServiceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import MobileBookingBar from "@/components/MobileBookingBar";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <InformationsPratiquesSection />
      <SelectServiceSection />
      <TestimonialsSection />
      <PartnersSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <MobileBookingBar />
    </div>
  );
};

export default Index;
