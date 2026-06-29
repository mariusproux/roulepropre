import { Handshake } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const partners = Array.from({ length: 6 }, (_, i) => ({
  name: `Partenaire ${i + 1}`,
  logo: `/images/partners/partner-${i + 1}.png`,
}));

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
                    <div className="flex h-32 items-center justify-center rounded-2xl border border-rp-foam bg-white p-6 transition-shadow duration-300 hover:shadow-md">
                      <img
                        src={partner.logo}
                        alt={`Logo ${partner.name}`}
                        loading="lazy"
                        className="max-h-20 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
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
