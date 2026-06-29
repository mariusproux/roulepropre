import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { siteConfig } from "@/config/site";

const testimonials = [
  {
    name: "Teinturier Jordan",
    content:
      "Arthur a été très professionnel et nous a rendu notre camion aussi propre que lorsque nous l'avons acheté. Faites appel à ses services, vous ne serez pas déçu !",
    rating: 5,
  },
  {
    name: "Morgan Cruanes",
    content:
      "Travail parfait pour le prix, franchement rien à dire, ma voiture était comme neuve, et pourtant il y avait du boulot ! Merci Arthur, vous pouvez lui faire confiance les yeux fermés !",
    rating: 5,
  },
  {
    name: "L'AR.E de Pédaler Alban",
    content: "Arthur prend le temps de bien faire les choses !",
    rating: 5,
  },
  {
    name: "Simon Rochard",
    content:
      "Je recommande à 100%. Après l'intervention d'Arthur, ma voiture est comme neuve. En plus il s'est déplacé à mon domicile. Une valeur sûre !",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section id="temoignages" className="section-padding bg-rp-foam scroll-mt-20">
      <div className="container-custom">
        <div ref={elementRef} className={`reveal ${isVisible ? "is-visible" : ""}`}>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="eyebrow">
              <Star className="h-4 w-4" />
              Avis clients
            </span>
            <h2 className="mt-4">Ils nous confient leur véhicule</h2>
            <a
              href={siteConfig.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-rp-deep/60 transition-colors hover:text-rp-blue"
            >
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                    style={{ animation: isVisible ? `scale-in 0.4s ease-out ${i * 80}ms both` : undefined }}
                  />
                ))}
              </span>
              5/5 sur les avis Google
            </a>
          </div>

          <div className="mx-auto max-w-3xl">
            <Carousel
              setApi={setApi}
              opts={{ align: "start", loop: true }}
              plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <figure className="glass-card group relative overflow-hidden p-8 transition-transform duration-300 hover:-translate-y-1 md:p-12">
                      <Quote
                        aria-hidden="true"
                        className="absolute right-8 top-8 h-12 w-12 text-rp-blue/10 transition-transform duration-500 group-hover:scale-110 group-hover:text-rp-blue/15"
                        fill="currentColor"
                      />
                      <div className="mb-5 flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <blockquote className="relative text-lg leading-relaxed text-rp-deep/90 md:text-xl">
                        « {testimonial.content} »
                      </blockquote>
                      <figcaption className="mt-7 flex items-center gap-4">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-rp-blue to-rp-accent font-display text-lg font-bold text-white">
                          {testimonial.name.charAt(0)}
                        </span>
                        <span className="font-semibold text-rp-deep">{testimonial.name}</span>
                      </figcaption>
                    </figure>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Points de navigation interactifs */}
            <div className="mt-8 flex justify-center gap-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => api?.scrollTo(i)}
                  aria-label={`Voir l'avis ${i + 1}`}
                  aria-current={current === i}
                  className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rp-blue focus-visible:ring-offset-2 ${
                    current === i ? "w-8 bg-rp-blue" : "w-2.5 bg-rp-deep/20 hover:bg-rp-deep/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
