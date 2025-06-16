
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-100 via-blue-50 to-green-100 overflow-hidden pt-20">
      <div className="container-custom relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-6 animate-fade-in flex flex-col justify-center">
            <Badge className="bg-yellow-100 text-gray-900 px-3 py-1 text-sm font-medium w-fit">
              ✋ Plus de 50 voitures nettoyées ce mois-ci !
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              Offrez à votre voiture{" "}
              <span className="text-blue-500 bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">une propreté éclatante</span>, le{" "}
              <span className="text-blue-500 bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">Smart Way</span>{" "}
              🚘✨
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl">
              Services de nettoyage automobile avec technologies avancées, personnalisées, et résultats premium.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-6 rounded-md">
                Prendre Rendez-vous
              </Button>
              <Button
                variant="outline"
                className="bg-white text-blue-500 font-medium px-6 py-6 rounded-md border border-blue-500 hover:bg-blue-50"
                onClick={() => {
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Voir les Prestations
              </Button>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center items-center h-full">
            <div className="relative z-10">
              <img
                src="/lovable-uploads/48c8cc34-53ac-45e0-a346-ed250df87a39.png"
                alt="ROULE PROPRE Logo"
                className="w-[500px] h-[500px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
