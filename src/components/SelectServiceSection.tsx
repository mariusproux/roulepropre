import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import KilometricRateModal from "./KilometricRateModal";
import BookingModal from "./BookingModal";
import WaveDivider from "./WaveDivider";
import { GlassPricingCard, type GlassPricingCardProps } from "@/components/ui/glass-pricing-card";

type Plan = Omit<GlassPricingCardProps, "onReserve">;

const plans: Plan[] = [
  {
    planName: "Intérieur simple",
    description: "Soin complet de l'habitacle",
    price: "Dès 60€",
    duration: "~2 h",
    features: [
      "Plastiques et vitres intérieures",
      "Aspiration habitacle + coffre",
      "Aspiration tapis et moquette",
      "Habitacle parfumé",
    ],
  },
  {
    planName: "Intérieur shampoing",
    description: "Un intérieur rafraîchi en profondeur",
    price: "Dès 80€",
    duration: "~2 h 30",
    isPopular: true,
    features: [
      "Plastiques et vitres intérieures",
      "Aspiration habitacle + coffre",
      "Shampoing tapis et moquette",
      "Sièges tissu, cuir ou alcantara",
      "Habitacle parfumé",
    ],
    excludedFeatures: ["Shampoing du coffre non inclus"],
  },
  {
    planName: "Rénovation des optiques",
    description: "Restauration complète de vos phares",
    price: "Dès 90€",
    duration: "~1 h 30",
    features: ["Masquage des contours", "Ponçage à l'eau", "Polissage", "Nettoyage intermédiaire", "Protection finale"],
  },
  {
    planName: "Nettoyage jantes alu",
    description: "Éclat et protection pour vos jantes",
    price: "Dès 20€ / jante",
    duration: "~1 h",
    features: [
      "Rinçage initial",
      "Nettoyant jantes + brossage",
      "Décontamination ferreuse si besoin",
      "Rinçage et séchage",
      "Détails à la main",
    ],
  },
];

const SelectServiceSection = () => {
  const [bookingService, setBookingService] = useState("");
  const [isKilometricModalOpen, setIsKilometricModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const { elementRef: cardsRef, isVisible } = useScrollAnimation(0.1);

  // Logo en filigrane qui suit le scroll (parallaxe), désactivé si reduced-motion.
  useEffect(() => {
    const section = sectionRef.current;
    const logo = logoRef.current;
    if (!section || !logo) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        // Progression du scroll à travers la section (-1 → 1)
        const progress = (window.innerHeight / 2 - (rect.top + rect.height / 2)) / window.innerHeight;
        logo.style.transform = `translate3d(-50%, calc(-50% + ${progress * 90}px), 0) rotate(${progress * 12}deg)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const handleReserve = (planName: string) => {
    setBookingService(planName);
    setIsKilometricModalOpen(true);
  };

  return (
    <section
      ref={sectionRef}
      id="packages-selector"
      className="surface-deep relative overflow-hidden scroll-mt-20 py-28 text-white md:py-36"
    >
      {/* Vagues de transition : la section claire coule dans le bassin sombre, puis ressort */}
      <WaveDivider fill="#EAF6FC" flip className="absolute left-0 top-0 z-[1] w-full" />
      <WaveDivider fill="#EAF6FC" className="absolute bottom-0 left-0 z-[1] w-full" />

      {/* Logo en filigrane qui suit le scroll */}
      <div
        ref={logoRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[min(120vw,1100px)] -translate-x-1/2 -translate-y-1/2 will-change-transform"
      >
        <img
          src="/lovable-uploads/c0bf4170-965e-40b7-b9cc-65555718f693.png"
          alt=""
          className="mx-auto w-full opacity-[0.06] [filter:grayscale(1)_brightness(2)]"
        />
      </div>

      {/* Halos ambiants */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <div className="absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-rp-accent/15 blur-3xl" />
        <div className="absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-rp-blue/25 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow text-rp-sky">
            <Check className="h-4 w-4" />
            Tarifs
          </span>
          <h2 id="choisir" className="mt-4 scroll-mt-24 text-white">Choisissez votre prestation</h2>
          <p className="mt-4 text-lg text-blue-100/75">
            Sélectionnez votre formule et réservez en deux clics, par WhatsApp ou email.
          </p>
        </div>

        <div ref={cardsRef} className="mx-auto flex max-w-6xl flex-wrap items-stretch justify-center gap-6">
          {plans.map((plan, i) => (
            <GlassPricingCard
              key={plan.planName}
              {...plan}
              onReserve={() => handleReserve(plan.planName)}
              style={{ animationDelay: `${i * 110}ms` }}
              className={isVisible ? "fade-rise" : "opacity-0"}
            />
          ))}
        </div>
      </div>

      <KilometricRateModal
        isOpen={isKilometricModalOpen}
        onClose={() => setIsKilometricModalOpen(false)}
        onConfirm={() => {
          setIsKilometricModalOpen(false);
          setIsBookingModalOpen(true);
        }}
      />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        selectedService={bookingService}
      />
    </section>
  );
};

export default SelectServiceSection;
