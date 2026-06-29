import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Leaf, Sparkles } from "lucide-react";
import WaveDivider from "./WaveDivider";
import WaterBackdrop from "./WaterBackdrop";

const scrollToPackages = () =>
  document.getElementById("packages-selector")?.scrollIntoView({ behavior: "smooth" });

const HeroSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Parallaxe d'eau subtile : la profondeur réagit au scroll (désactivée si reduced-motion).
  useEffect(() => {
    const el = parallaxRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translateY(${Math.min(window.scrollY, 600) * 0.18}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="surface-deep relative overflow-hidden pt-28 pb-0 text-white md:pt-36">
      {/* Décor d'eau génératif */}
      <WaterBackdrop />

      {/* Reflets ambiants (avec parallaxe) */}
      <div ref={parallaxRef} aria-hidden="true" className="absolute inset-0 overflow-hidden will-change-transform">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-rp-accent/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-rp-blue/30 blur-3xl" />
      </div>

      <div className="container-custom relative z-10 pb-24 md:pb-32">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Colonne texte */}
          <div className="order-2 flex flex-col gap-6 md:order-1">
            <span className="eyebrow text-rp-sky animate-rise" style={{ animationDelay: "40ms" }}>
              <Leaf className="h-4 w-4" />
              Lavage auto écologique · à domicile
            </span>

            <h1 className="animate-rise text-white" style={{ animationDelay: "120ms" }}>
              Votre voiture,{" "}
              <span className="relative whitespace-nowrap text-rp-sky">
                éclatante
                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 18"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 h-3 w-full text-rp-accent"
                >
                  <path d="M2,12 C80,2 220,2 298,10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>{" "}
              sans bouger de chez vous.
            </h1>

            <p className="animate-rise max-w-md text-lg leading-relaxed text-blue-100/90" style={{ animationDelay: "200ms" }}>
              Detailing intérieur et extérieur réalisé chez vous ou sur votre lieu de
              travail, avec des produits respectueux de votre véhicule et de l'environnement.
            </p>

            <div className="animate-rise flex flex-col gap-3 pt-2 sm:flex-row" style={{ animationDelay: "280ms" }}>
              <Button onClick={scrollToPackages} className="btn-primary group">
                Prendre rendez-vous
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button onClick={scrollToPackages} className="btn-secondary border-white/25 bg-white/10 text-white hover:bg-white/20">
                Voir les prestations
              </Button>
            </div>

            <div className="animate-rise flex items-center gap-2 pt-2 text-sm text-blue-100/80" style={{ animationDelay: "360ms" }}>
              <MapPin className="h-4 w-4 text-rp-sky" />
              Nantes, Aigrefeuille-sur-Maine &amp; tout le sud Loire
            </div>
          </div>

          {/* Colonne logo / goutte */}
          <div className="order-1 flex justify-center md:order-2">
            <div className="relative animate-scale-in">
              <div aria-hidden="true" className="absolute inset-0 scale-110 rounded-full bg-rp-sky/30 blur-3xl" />
              <div className="gloss-sheen relative flex h-64 w-64 items-center justify-center rounded-full bg-white/95 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] md:h-80 md:w-80">
                <img
                  src="/lovable-uploads/c0bf4170-965e-40b7-b9cc-65555718f693.png"
                  alt="Logo Roule Propre"
                  className="animate-float h-44 w-44 object-contain md:h-56 md:w-56"
                />
              </div>
              {/* Pastille flottante */}
              <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-rp-deep shadow-xl">
                <Sparkles className="h-5 w-5 text-rp-accent" />
                <div className="leading-tight">
                  <p className="text-lg font-bold">+50</p>
                  <p className="text-xs text-rp-deep/60">voitures ce mois</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vague de transition vers la section suivante (blanche) */}
      <WaveDivider fill="#FFFFFF" className="absolute bottom-0 left-0 w-full" />
    </section>
  );
};

export default HeroSection;
