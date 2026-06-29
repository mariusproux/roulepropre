import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { siteConfig } from "@/config/site";

const faqs = [
  {
    question: "Combien de temps dure un nettoyage ?",
    answer:
      "Un nettoyage intérieur dure généralement entre 2 h et 4 h, selon le niveau de saleté et la taille du véhicule. Pour un SUV ou un monospace très sale, comptez parfois davantage.",
  },
  {
    question: "Proposez-vous le service à domicile ?",
    answer: "Oui, nous nous déplaçons chez vous ou sur votre lieu de travail, partout dans le sud Loire.",
  },
  {
    question: "Comment réserver un rendez-vous ?",
    answer:
      "Choisissez votre prestation sur cette page puis envoyez votre demande en un clic via WhatsApp ou email. Nous vous confirmons rapidement un créneau adapté.",
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer:
      "Carte bancaire (sans contact), espèces et virement. Un paiement différé sur facture est possible pour les professionnels.",
  },
];

const FAQSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="section-padding bg-rp-foam scroll-mt-20">
      <div ref={elementRef} className="container-custom">
        <div className={`reveal mx-auto mb-12 max-w-2xl text-center ${isVisible ? "is-visible" : ""}`}>
          <span className="eyebrow">
            <HelpCircle className="h-4 w-4" />
            FAQ
          </span>
          <h2 className="mt-4">Questions fréquentes</h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                style={{ animationDelay: `${index * 90}ms` }}
                className={`overflow-hidden rounded-2xl border border-white bg-white px-2 shadow-[0_12px_30px_-22px_hsl(211_81%_13%/0.3)] transition-colors duration-300 hover:border-rp-blue/30 data-[state=open]:border-rp-blue/40 data-[state=open]:shadow-[0_24px_44px_-26px_hsl(216_91%_47%/0.45)] ${
                  isVisible ? "animate-rise" : "opacity-0"
                }`}
              >
                <AccordionTrigger className="px-4 py-5 text-left font-display text-lg font-semibold text-rp-deep transition-colors hover:no-underline hover:text-rp-blue data-[state=open]:text-rp-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-5 pt-0 text-rp-deep/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <p className="mt-10 text-center text-rp-deep/60">
          Une autre question ?{" "}
          <a
            href={`tel:${siteConfig.contact.phoneTel}`}
            className="font-semibold text-rp-blue underline-offset-4 hover:underline"
          >
            Appelez-nous au {siteConfig.contact.phoneDisplay}
          </a>
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
