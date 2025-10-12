import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import BookingModal from "@/components/BookingModal";

const CTASection = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section className="py-20 bg-blue-green-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-70">
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-rp-blue rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-rp-green rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à redonner vie à votre véhicule ?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Réservez dès maintenant un rendez-vous pour bénéficier de nos services de nettoyage professionnels et découvrir la différence ROULE PROPRE.
          </p>
          <Button 
            onClick={() => setIsBookingOpen(true)}
            className="btn-primary group text-lg px-8 py-6"
          >
            Prendre Rendez-vous Maintenant
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <div className="mt-10 pt-6 border-t border-gray-200/30">
            <p className="text-gray-600 flex items-center justify-center">
              <span className="text-xl mr-2">✓</span>
              Sans engagement - Satisfaction garantie
            </p>
          </div>
        </div>
      </div>
      
      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </section>
  );
};

export default CTASection;
