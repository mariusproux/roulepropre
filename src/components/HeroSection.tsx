
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-blue-100 via-blue-50 to-green-100 overflow-hidden pt-16 pb-8">
      <div className="container-custom relative z-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 animate-fade-in flex flex-col justify-center order-2 md:order-1">
            <Badge className="bg-yellow-100 text-gray-900 px-3 py-1.5 text-xs font-medium w-fit rounded-full">
              ✋ Plus de 50 voitures nettoyées ce mois-ci !
            </Badge>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              Offrez à votre voiture{" "}
              <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">une propreté éclatante</span>, le{" "}
              <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">Smart Way</span>{" "}
              🚗✨
            </h1>
            
            <p className="text-base md:text-lg text-gray-600 max-w-xl leading-relaxed">
              Services de nettoyage automobile avec technologies avancées, personnalisées, et résultats premium.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-md transition-all duration-300 hover:shadow-lg">
                Prendre Rendez-vous
              </Button>
              <Button
                variant="outline"
                className="bg-white text-blue-500 font-medium px-6 py-3 rounded-md border border-blue-500 hover:bg-blue-50 transition-all duration-300"
                onClick={() => {
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Voir les Prestations
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center items-center order-1 md:order-2">
            <div className="relative z-10 animate-scale-in">
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-3xl scale-110"></div>
              <img
                src="/lovable-uploads/fbc53842-1cfa-4b40-bbf5-3289f6a111de.png"
                alt="ROULE PROPRE Logo"
                className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
