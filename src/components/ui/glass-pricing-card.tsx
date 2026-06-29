import type { CSSProperties } from "react";
import { Check, X, Clock, ArrowRight } from "lucide-react";
import { RippleButton } from "@/components/ui/multi-type-ripple-buttons";

export interface GlassPricingCardProps {
  planName: string;
  description: string;
  /** Prix déjà formaté, ex. "Dès 60€". */
  price: string;
  duration: string;
  features: string[];
  excludedFeatures?: string[];
  isPopular?: boolean;
  buttonText?: string;
  onReserve: () => void;
  /** Classes supplémentaires (ex. animation d'entrée). */
  className?: string;
  style?: CSSProperties;
}

/**
 * Carte de tarif vitrée ("glassy"), pensée pour un fond sombre.
 * Adaptée du composant 21st.dev (animated-glassy-pricing) aux tokens Roule Propre :
 * prix en €, durée, features incluses/exclues, CTA à effet ripple.
 */
export const GlassPricingCard = ({
  planName,
  description,
  price,
  duration,
  features,
  excludedFeatures,
  isPopular = false,
  buttonText = "Réserver",
  onReserve,
  className = "",
  style,
}: GlassPricingCardProps) => {
  return (
    <div
      style={style}
      className={`relative flex w-full max-w-sm flex-1 flex-col rounded-3xl border p-7 backdrop-blur-xl transition-all duration-300 ${
        isPopular
          ? "border-rp-sky/40 bg-gradient-to-br from-white/20 to-white/[0.07] shadow-[0_30px_70px_-30px_rgba(92,210,242,0.55)] md:scale-[1.04]"
          : "border-white/12 bg-gradient-to-br from-white/10 to-white/[0.03] hover:-translate-y-1.5 hover:border-white/25"
      } ${className}`}
    >
      {isPopular && (
        <span className="absolute -top-3 right-6 rounded-full bg-gradient-to-r from-rp-sky to-rp-accent px-3 py-1 text-xs font-semibold text-rp-deep shadow">
          Le plus demandé
        </span>
      )}

      <div className="mb-5">
        <h3 className="text-2xl text-white">{planName}</h3>
        <p className="mt-1.5 text-sm text-blue-100/65">{description}</p>
      </div>

      <div>
        <div className="font-display text-[2rem] font-bold leading-none tracking-tight text-white">
          {price}
        </div>
        <div className="mt-2 inline-flex items-center gap-1.5 text-sm text-blue-100/55">
          <Clock className="h-4 w-4" />
          {duration}
        </div>
      </div>

      <div className="my-6 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.22)_50%,transparent)]" />

      <ul className="mb-7 flex flex-col gap-2.5 text-sm">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-blue-50/90">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-rp-sky" strokeWidth={3} />
            {feature}
          </li>
        ))}
        {excludedFeatures?.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-blue-100/40">
            <X className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={3} />
            {feature}
          </li>
        ))}
      </ul>

      <RippleButton
        onClick={onReserve}
        rippleColor={isPopular ? "rgba(6,32,58,0.25)" : "rgba(255,255,255,0.4)"}
        className={`group mt-auto flex w-full items-center justify-center gap-2 rounded-full py-3 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rp-sky focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
          isPopular
            ? "bg-gradient-to-r from-rp-sky to-rp-accent text-rp-deep hover:brightness-105"
            : "border border-white/25 bg-white/10 text-white hover:bg-white/20"
        }`}
      >
        {buttonText}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </RippleButton>
    </div>
  );
};
