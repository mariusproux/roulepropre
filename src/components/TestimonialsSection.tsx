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
    name: "Teinturier Jordan",
    content:
      "Arthur a été très professionnel et nous a rendu notre camion aussi propre que lorsque nous l'avons acheté. Faites appel à ses services, vous ne serez pas déçu ! 😉",
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
    content:
      "Arthur prend le temps de bien faire les choses !",
    rating: 5,
  },
  {
    name: "Simon ROCHARD",
    content:
      "Je recommande à 100%. Après l'intervention d'Arthur, ma voiture est comme neuve. En plus il m'a facilité la tâche en se déplaçant à mon domicile. Une valeur sûre !!",
    rating: 5,
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
