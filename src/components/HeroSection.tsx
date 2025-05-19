
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center opacity-[0.03] z-0"></div>
      <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-[120px] z-10"></div>
      
      <div className="container-custom relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="badge animate-pulse-light">
              🚙 Plus de 50 voitures nettoyées ce mois-ci !
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
              Offrez à votre voiture une propreté éclatante, le{" "}
              <span className="text-rp-accent">Smart Way</span> 🚗✨
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
          
          <div className="hidden md:block relative animate-fade-in">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-rp-blue rounded-full filter blur-3xl opacity-60"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-rp-green rounded-full filter blur-3xl opacity-60"></div>
            
            <div className="relative z-10 p-4">
              <img
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="Car cleaning"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover animate-float"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 w-48 animate-float">
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
