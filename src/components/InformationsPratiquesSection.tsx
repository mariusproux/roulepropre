import { Plug, BadgeEuro, Car, Navigation, ReceiptText, MapPin, Leaf, CreditCard, Info } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const items = [
  { icon: Plug, text: "Une prise électrique disponible à moins de 30 mètres." },
  { icon: BadgeEuro, text: "Supplément possible si salissures importantes (taches incrustées, poils d'animaux…)." },
  { icon: Car, text: "Le gabarit du véhicule peut entraîner un ajustement tarifaire." },
  { icon: Navigation, text: "Frais de déplacement applicables selon la distance." },
  { icon: ReceiptText, text: "TVA non applicable (art. 293 B du CGI). Facture détaillée après chaque intervention." },
  { icon: MapPin, text: "Service mobile sur tout le sud Loire, à domicile ou au travail." },
  { icon: Leaf, text: "Produits écologiques, respectueux des matériaux et de l'environnement." },
  { icon: CreditCard, text: "Paiement simplifié : espèces, carte bancaire (sans contact), virement." },
];

const InformationsPratiquesSection = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.12);

  return (
    <section className="bg-rp-foam section-padding">
      <div ref={elementRef} className="container-custom">
        <div className={`reveal mx-auto mb-12 max-w-2xl text-center ${isVisible ? "is-visible" : ""}`}>
          <span className="eyebrow">
            <Info className="h-4 w-4" />
            Bon à savoir
          </span>
          <h2 className="mt-4">Informations pratiques</h2>
          <p className="mt-4 text-lg text-rp-deep/60">
            Tout est transparent, du déplacement au paiement.
          </p>
        </div>

        <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <li
              key={item.text}
              style={{ animationDelay: `${i * 70}ms` }}
              className={`group flex items-start gap-4 rounded-2xl border border-white bg-white/90 p-5 shadow-[0_12px_30px_-22px_hsl(211_81%_13%/0.4)] backdrop-blur-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_-26px_hsl(211_81%_13%/0.45)] ${
                isVisible ? "animate-rise" : "opacity-0"
              }`}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rp-blue to-rp-accent text-white shadow-[0_8px_18px_-8px_hsl(216_91%_47%/0.8)] transition-transform duration-300 group-hover:scale-110">
                <item.icon className="h-5 w-5" strokeWidth={1.9} />
              </span>
              <span className="pt-0.5 text-[0.95rem] leading-relaxed text-rp-deep/80">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default InformationsPratiquesSection;
