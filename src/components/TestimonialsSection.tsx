
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="temoignages" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Ce que disent nos clients</h2>
          <p className="text-gray-600 text-lg">
            Découvrez les témoignages de clients satisfaits de nos services de nettoyage automobile.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="flex-shrink-0 w-full">
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
                ))}
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
              aria-label="Témoignage précédent"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
              aria-label="Témoignage suivant"
            >
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  currentIndex === index ? "bg-rp-accent" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Voir témoignage ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
