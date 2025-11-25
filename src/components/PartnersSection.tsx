import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const partners = [
  {
    name: "Partner 1",
    logo: "/images/partners/partner-1.png",
  },
  {
    name: "Partner 2",
    logo: "/images/partners/partner-2.png",
  },
  {
    name: "Partner 3",
    logo: "/images/partners/partner-3.png",
  },
  {
    name: "Partner 4",
    logo: "/images/partners/partner-4.png",
  },
  {
    name: "Partner 5",
    logo: "/images/partners/partner-5.png",
  },
  {
    name: "Partner 6",
    logo: "/images/partners/partner-6.png",
  },
];

const PartnersSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="partenaires" className="section-padding bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container-custom">
        <div ref={elementRef} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Nos Partenaires</h2>
            <p className="text-gray-600 text-lg">
              Ils nous font confiance et nous accompagnent dans notre mission.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 8000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {partners.map((partner, index) => (
                  <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                      <img
                        src={partner.logo}
                        alt={`Logo ${partner.name} - Partenaire de Roule Propre`}
                        className="w-32 h-32 object-contain grayscale hover:grayscale-0 transition-all duration-300"
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
