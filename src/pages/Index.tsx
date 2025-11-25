
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

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-50 to-green-50">
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
    </div>
  );
};

export default Index;
