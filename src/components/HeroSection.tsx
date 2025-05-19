
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden pt-20">
      <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-[120px] z-10"></div>
      
      <div className="container-custom relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="badge animate-pulse-light">
              🚙 Plus de 50 voitures nettoyées ce mois-ci !
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
              Offrez à votre voiture une{" "}
              <span className="text-rp-accent bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">propreté éclatante</span>, le{" "}
              <span className="text-rp-accent bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Smart Way</span> 🚗✨
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl">
              Services de nettoyage automobile avec technologies avancées, prestations
              personnalisées, et résultats premium.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="btn-primary group">
                Prendre Rendez-vous
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="btn-secondary"
                onClick={() => {
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Voir les Prestations
              </Button>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center items-center relative animate-fade-in">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-rp-blue rounded-full filter blur-3xl opacity-60"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-rp-green rounded-full filter blur-3xl opacity-60"></div>
            
            <div className="relative z-10 p-4 animate-float">
              <img
                src="/lovable-uploads/9c96e22a-b9c5-4136-bf4f-05339a70db1d.png"
                alt="ROULE PROPRE Logo"
                className="w-[300px] h-[300px] object-contain"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 w-48">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Disponible</span>
                </div>
                <p className="mt-2 text-gray-600 text-xs">Notre équipe est prête à intervenir sous 24h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-20"></div>
    </section>
  );
};

export default HeroSection;
