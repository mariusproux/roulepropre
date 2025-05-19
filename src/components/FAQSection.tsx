
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Combien de temps dure un nettoyage complet ?",
    answer:
      "La durée d'un nettoyage complet (intérieur et extérieur) varie généralement entre 2h30 et 3h30 selon le niveau de saleté et la taille du véhicule. Pour un SUV ou un monospace très sale, comptez jusqu'à 4h."
  },
  {
    question: "Utilisez-vous des produits écologiques ?",
    answer:
      "Absolument ! Nous utilisons exclusivement des produits biodégradables et respectueux de l'environnement. Nos méthodes permettent également d'économiser jusqu'à 80% d'eau par rapport à un lavage traditionnel."
  },
  {
    question: "Proposez-vous le service à domicile ?",
    answer:
      "Oui, nous nous déplaçons chez vous ou sur votre lieu de travail sans frais supplémentaires dans un rayon de 15km. Au-delà, un supplément kilométrique s'applique."
  },
  {
    question: "Comment réserver un rendez-vous ?",
    answer:
      "Vous pouvez réserver directement en ligne via notre formulaire de réservation, par téléphone ou par email. Nous vous confirmerons rapidement la disponibilité et vous proposerons un créneau adapté à vos besoins."
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer:
      "Nous acceptons les paiements par carte bancaire, espèces, virement et chèques. Pour les professionnels, un paiement différé sur facture est possible après établissement d'un contrat."
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-rp-gray/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Questions Fréquentes</h2>
          <p className="text-gray-600 text-lg">
            Tout ce que vous devez savoir sur nos services de nettoyage automobile.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-1 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Vous ne trouvez pas la réponse à votre question ?{" "}
            <a href="#" className="text-rp-accent font-medium hover:underline">
              Contactez-nous directement
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
