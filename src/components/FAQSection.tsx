import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "Combien de temps dure un nettoyage ?",
    answer:
      "La durée d'un nettoyage intérieur varie généralement entre 2h et 4h ou plus selon le niveau de saleté et la taille du véhicule. Pour un SUV ou un monospace très sale, comptez jusqu'à + de 4h."
  },
  {
    question: "Proposez-vous le service à domicile ?",
    answer:
      "Oui, nous nous déplaçons chez vous ou sur votre lieu de travail."
  },
  {
    question: "Comment réserver un rendez-vous ?",
    answer:
      "Vous pouvez réserver directement en ligne via notre formulaire de réservation, par téléphone ou par email. Nous vous confirmerons rapidement la disponibilité et vous proposerons un créneau adapté à vos besoins."
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer:
      "Nous acceptons les paiements par carte bancaire, espèces, virement et chèques. Un paiement différé sur facture est possible."
  },
];

const FAQSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section id="faq" className="section-padding bg-rp-gray/30">
      <div className="container-custom">
        <div ref={elementRef} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
      </div>
    </section>
  );
};

export default FAQSection;
