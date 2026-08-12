import { Handshake } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const partners = [
  "Freedom Camper",
  "Cugand Automobiles",
  "Coveto",
  "Finance Conseil",
  "C2C Martin Denis",
  "Boulangerie Joly",
].map((name, i) => ({ name, logo: `/images/partners/partner-${i + 1}.png` }));

const PartnersSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="partenaires" className="section-padding bg-white">
      <div className="container-custom">
        <div
          ref={elementRef}
          className={`reveal ${isVisible ? "is-visible" : ""}`}
        >
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="eyebrow">
              <Handshake className="h-4 w-4" />
              Partenaires
            </span>
            <h2 className="mt-4">Ils nous font confiance</h2>
          </div>

          <div className="mx-auto max-w-5xl">
            <Carousel
              opts={{ align: "start", loop: true }}
              plugins={[Autoplay({ delay: 4000 })]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {partners.map((partner, index) => (
                  <CarouselItem key={index} className="basis-1/2 pl-4 sm:basis-1/3 lg:basis-1/4">
                    <div className="flex h-32 items-center justify-center rounded-2xl border border-rp-foam bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <img
                        src={partner.logo}
                        alt={`Logo ${partner.name} — partenaire de Roule Propre`}
                        loading="lazy"
                        className="max-h-16 w-auto max-w-full object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
