import { Wind, Droplets, Lightbulb, CircleDot, Truck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    title: "Nettoyage intérieur complet",
    description:
      "On redonne vie à l'habitacle : aspiration complète (habitacle + coffre), tableau de bord, vitres intérieures, recoins difficiles d'accès, et élimination des mauvaises odeurs.",
    icon: Wind,
  },
  {
    title: "Shampoing sièges & moquettes",
    description:
      "Aspiration puis shampoing des sièges, moquettes et tapis. Tissu, cuir ou alcantara : on utilise le produit adapté à chaque surface pour un rendu comme neuf.",
    icon: Droplets,
  },
  {
    title: "Rénovation des optiques",
    description:
      "Phares ternis ou opaques ? On les restaure plutôt que de les changer. Vous y gagnez en visibilité et passez le contrôle technique plus sereinement.",
    icon: Lightbulb,
  },
  {
    title: "Nettoyage jantes alu",
    description:
      "Décontamination, brossage et finition pour des jantes alu impeccables, protégées et brillantes.",
    icon: CircleDot,
  },
];

const ServicesSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="section-padding bg-white">
      <div ref={elementRef} className="container-custom">
        <div className={`reveal mx-auto mb-14 max-w-2xl text-center ${isVisible ? "is-visible" : ""}`}>
          <span className="eyebrow">
            <Droplets className="h-4 w-4" />
            Nos services
          </span>
          <h2 className="mt-4">Un soin sur mesure, pièce par pièce</h2>
          <p className="mt-4 text-lg text-rp-deep/60">
            Des prestations pensées pour chaque besoin et chaque type de véhicule, avec des
            produits écologiques.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <article
              key={service.title}
              style={{ animationDelay: `${i * 90}ms` }}
              className={`glass-card card-hover group flex flex-col p-7 ${isVisible ? "animate-rise" : "opacity-0"}`}
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rp-blue to-rp-accent text-white shadow-[0_10px_24px_-10px_hsl(216_91%_47%/0.8)] transition-transform duration-300 group-hover:scale-105">
                <service.icon className="h-7 w-7" strokeWidth={1.75} />
              </div>
              <h3 className="text-xl">{service.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-rp-deep/65">
                {service.description}
              </p>
            </article>
          ))}

          {/* Carte mise en avant : service mobile (différenciateur) */}
          <article
            style={{ animationDelay: "380ms" }}
            className={`surface-deep card-hover relative flex flex-col justify-between overflow-hidden p-7 text-white md:col-span-2 lg:col-span-4 ${
              isVisible ? "animate-rise" : "opacity-0"
            }`}
          >
            <div aria-hidden="true" className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-rp-accent/20 blur-2xl" />
            <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-rp-sky backdrop-blur">
                  <Truck className="h-7 w-7" strokeWidth={1.75} />
                </div>
                <h3 className="text-2xl text-white">On vient à vous</h3>
                <p className="mt-3 text-blue-100/85">
                  Particulier ou professionnel, on intervient sur votre lieu de vie ou de
                  travail — vous n'avez rien à déplacer. Il suffit d'une prise électrique à
                  moins de 30 m.
                </p>
              </div>
              <a
                href="#choisir"
                className="btn-secondary shrink-0 border-white/25 bg-white/10 text-white hover:bg-white/20"
              >
                Choisir ma prestation
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
