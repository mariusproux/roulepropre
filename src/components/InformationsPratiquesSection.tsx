import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const InformationsPratiquesSection = () => {
  const items = [
    "Une prise électrique doit être disponible à moins de 30 mètres.",
    "Un supplément peut être appliqué en cas de salissures importantes (taches incrustées, poils d'animaux, etc.).",
    "Le gabarit du véhicule peut entraîner un ajustement tarifaire.",
    "Frais de déplacement applicables selon la distance.",
    "Tarifs exonérés de TVA selon l'article 293 B du CGI. Une facture détaillée est remise après chaque intervention.",
    "Service mobile : intervention sur tout le sud Loire et ses environs, à votre domicile ou votre lieu de travail.",
    "Produits écologiques : solutions respectueuses des matériaux et de l'environnement.",
    "Résultat impeccable : intérieur propre, sain et rafraîchi.",
    "Paiement simplifié : espèces, carte bancaire (sans contact), virement (factures)."
  ];

  return (
    <section className="bg-rp-blue/20 pt-12 pb-16">
      <div className="container-custom">
        <div className="text-center mb-6">
          <h2>Informations pratiques</h2>
        </div>

        <Card className="max-w-[800px] mx-auto bg-white shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            {items.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle 
                  size={20} 
                  color="#1E88E5" 
                  className="mt-0.5 flex-shrink-0" 
                />
                <span className="text-base leading-6 text-left">{item}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default InformationsPratiquesSection;