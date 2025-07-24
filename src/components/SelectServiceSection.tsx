import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import KilometricRateModal from "./KilometricRateModal";

const services = [
  {
    id: "interieur",
    title: "Nettoyage Intérieur Simple",
    description: "Soin complet de l'habitacle",
    price: "À partir de 69€",
    duration: "~2 heures",
    features: [
      "Nettoyage des plastiques, vitreries intérieures", 
      "Aspiration complète de l'habitacle et du coffre", 
      "Aspiration tapis, moquette", 
      "Nettoyage contour des portes et contour du coffre", 
      "Habitacle parfumé"
    ]
  },
  {
    id: "exterieur",
    title: "Nettoyage Extérieur",
    description: "Brillance et protection",
    price: "À partir de 59€",
    duration: "~1.5 heures",
    features: ["Lavage carrosserie", "Nettoyage jantes", "Polissage vitres", "Cire protectrice"]
  },
  {
    id: "complet",
    title: "Formule Complète",
    description: "Le meilleur des deux mondes",
    price: "À partir de 119€",
    duration: "~3 heures",
    features: ["Intérieur + Extérieur", "Traitement cire premium", "Protection longue durée", "Parfum offert"]
  },
  {
    id: "interieur-shampoing",
    title: "Nettoyage Intérieur Shampoing",
    description: "Pour un intérieur rafraîchi en profondeur",
    price: "À partir de 89€",
    duration: "~2.5 heures",
    features: [
      "Nettoyage des plastiques, vitreries intérieures",
      "Aspiration complète de l'habitacle et du coffre",
      "Aspiration tapis, moquette",
      "Nettoyage contour des portes et contour du coffre",
      "Habitacle parfumé",
      "Shampoing des tapis et moquette",
      "Shampoing des sièges tissu",
      "Nettoyage des sièges cuir"
    ],
    excludedFeatures: [
      "Shampoing du coffre non inclus"
    ]
  }
];

const SelectServiceSection = () => {
  const [selectedService, setSelectedService] = useState(services[2].id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReservation = () => {
    setIsModalOpen(true);
  };

  const handleModalConfirm = () => {
    setIsModalOpen(false);
    // Ici on pourrait rediriger vers la page de réservation
    console.log("Redirection vers la réservation...");
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="choisir" className="section-padding bg-rp-blue/20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Choisissez Votre Prestation</h2>
          <p className="text-gray-600 text-lg">
            Sélectionnez le type de service qui correspond le mieux à vos besoins pour des résultats optimaux.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Première ligne - 3 cartes principales */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {services.slice(0, 3).map((service) => (
              <Card
                key={service.id}
                className={`transition-all duration-300 cursor-pointer overflow-hidden h-full ${
                  selectedService === service.id
                    ? "border-2 border-rp-accent shadow-xl scale-105"
                    : "border border-gray-200 hover:border-rp-accent/50 hover:shadow-lg"
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                <div
                  className={`h-2 w-full ${
                    selectedService === service.id ? "bg-rp-accent" : "bg-gray-200"
                  }`}
                ></div>
                <CardContent className="pt-6 pb-4 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-xl">{service.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                    </div>
                    {selectedService === service.id && (
                      <div className="h-6 w-6 rounded-full bg-rp-accent flex items-center justify-center text-white">
                        <Check size={14} />
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-4 flex-grow">
                    <div className="flex justify-between items-baseline border-t border-gray-100 pt-4">
                      <p className="font-semibold">{service.price}</p>
                      <span className="text-sm text-gray-500">{service.duration}</span>
                    </div>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-rp-accent mr-2 text-lg">✓</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Deuxième ligne - Carte shampoing sous la première carte */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card
              key={services[3].id}
              className={`transition-all duration-300 cursor-pointer overflow-hidden h-full ${
                selectedService === services[3].id
                  ? "border-2 border-rp-accent shadow-xl scale-105"
                  : "border border-gray-200 hover:border-rp-accent/50 hover:shadow-lg"
              }`}
              onClick={() => setSelectedService(services[3].id)}
            >
              <div
                className={`h-2 w-full ${
                  selectedService === services[3].id ? "bg-rp-accent" : "bg-gray-200"
                }`}
              ></div>
              <CardContent className="pt-6 pb-4 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-xl">{services[3].title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{services[3].description}</p>
                  </div>
                  {selectedService === services[3].id && (
                    <div className="h-6 w-6 rounded-full bg-rp-accent flex items-center justify-center text-white">
                      <Check size={14} />
                    </div>
                  )}
                </div>
                
                <div className="space-y-4 flex-grow">
                  <div className="flex justify-between items-baseline border-t border-gray-100 pt-4">
                    <p className="font-semibold">{services[3].price}</p>
                    <span className="text-sm text-gray-500">{services[3].duration}</span>
                  </div>
                  
                  <ul className="space-y-2">
                    {services[3].features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-rp-accent mr-2 text-lg">✓</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                    {services[3].excludedFeatures && services[3].excludedFeatures.map((feature, index) => (
                      <li key={`excluded-${index}`} className="flex items-start">
                        <span className="text-red-500 mr-2 text-lg">🚫</span>
                        <span className="text-sm text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            {/* Espaces vides pour maintenir l'alignement */}
            <div className="hidden md:block"></div>
            <div className="hidden md:block"></div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button className="btn-primary group" onClick={handleReservation}>
            Réserver cette prestation
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
      
      <KilometricRateModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleModalConfirm}
      />
    </section>
  );
};

export default SelectServiceSection;
