
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-blue-50 to-green-50 overflow-hidden pt-20">
      <div className="container-custom relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center bg-rp-green text-gray-900 px-3 py-1 text-sm font-medium rounded-full">
              👋 Plus de 50 voitures nettoyées ce mois-ci !
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              Offrez à votre voiture{" "}
              <br className="hidden md:block" />
              <span className="text-blue-500 bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
                une propreté <br className="hidden md:block" />
                éclatante
              </span>, le{" "}
              <span className="text-blue-500 bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
                Smart Way
              </span>
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
          
          <div className="hidden md:flex justify-center items-center">
            <div className="relative z-10 animate-float">
              <img
                src="/lovable-uploads/b1c38cd4-cd16-4d47-a7ce-d95c6868077b.png"
                alt="ROULE PROPRE Logo"
                className="w-[400px] h-[400px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
