
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, X } from "lucide-react";

const services = [
  {
    id: "interieur",
    title: "Nettoyage Intérieur Simple",
    description: "Soin complet de l'habitacle, du sol au plafond",
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

  return (
    <section id="choisir" className="section-padding bg-rp-blue/20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Choisissez Votre Prestation</h2>
          <p className="text-gray-600 text-lg">
            Sélectionnez le type de service qui correspond le mieux à vos besoins pour des résultats optimaux.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <Card
              key={service.id}
              className={`transition-all duration-300 cursor-pointer overflow-hidden ${
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
              <CardContent className="pt-6 pb-4">
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
                
                <div className="space-y-4">
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
                    {service.excludedFeatures && service.excludedFeatures.map((feature, index) => (
                      <li key={`excluded-${index}`} className="flex items-start">
                        <span className="text-red-500 mr-2 text-lg">🚫</span>
                        <span className="text-sm text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="btn-primary group">
            Réserver cette prestation
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SelectServiceSection;
