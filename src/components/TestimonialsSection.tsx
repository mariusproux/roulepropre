import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Marie L.",
    role: "Propriétaire Audi A3",
    content:
      "Je suis impressionnée par le résultat ! Ma voiture n'avait jamais été aussi propre, même les taches tenaces sur les sièges ont disparu. Service rapide et personnel très aimable.",
    rating: 5,
  },
  {
    name: "Thomas D.",
    role: "Flotte d'entreprise",
    content:
      "Nous faisons appel à ROULE PROPRE pour l'entretien mensuel de notre flotte de 8 véhicules. Leur service est toujours impeccable et leur flexibilité un vrai plus pour notre entreprise.",
    rating: 5,
  },
  {
    name: "Sophie M.",
    role: "Propriétaire BMW Série 3",
    content:
      "Le traitement céramique appliqué sur ma voiture lui a donné une brillance incroyable ! Et plus de 3 mois après, l'effet déperlant est toujours présent. Je recommande vivement.",
    rating: 5,
  },
  {
    name: "Alexandre F.",
    role: "Propriétaire Tesla Model 3",
    content:
      "Service à domicile très pratique, je n'ai pas eu à bouger de chez moi. Intervention professionnelle et résultat impeccable sur mon véhicule électrique.",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="temoignages" className="section-padding bg-white">
      <div className="container-custom">
        <div ref={elementRef} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Ce que disent nos clients</h2>
          <p className="text-gray-600 text-lg">
            Découvrez les témoignages de clients satisfaits de nos services de nettoyage automobile.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-none shadow-md">
                    <CardContent className="p-8 md:p-10">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            className={`${
                              i < testimonial.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>

                      <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6">
                        "{testimonial.content}"
                      </blockquote>

                      <div className="flex items-center">
                        <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-rp-accent font-bold text-xl">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <p className="font-medium text-gray-900">{testimonial.name}</p>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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

export default TestimonialsSection;
