import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import WaveDivider from "./WaveDivider";
import WaterBackdrop from "./WaterBackdrop";

const CTASection = () => {
  return (
    <section className="surface-deep relative overflow-hidden text-white">
      {/* La section précédente (foam) coule dans le bassin sombre */}
      <WaveDivider fill="#EAF6FC" flip className="absolute left-0 top-0 w-full" />

      <WaterBackdrop />

      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-rp-accent/20 blur-3xl" />
        <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-rp-blue/30 blur-3xl" />
      </div>

      <div className="container-custom relative z-10 py-28 md:py-36">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-white">Prêt à voir votre voiture briller ?</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-blue-100/85">
            Réservez votre créneau et découvrez la différence Roule Propre, sans bouger de
            chez vous.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              onClick={() =>
                document.getElementById("packages-selector")?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-primary group text-base"
            >
              Prendre rendez-vous
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <a
              href={`tel:${siteConfig.contact.phoneTel}`}
              className="btn-secondary border-white/25 bg-white/10 text-white hover:bg-white/20"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.contact.phoneDisplay}
            </a>
          </div>

          <p className="mt-9 inline-flex items-center gap-2 text-sm text-blue-100/75">
            <ShieldCheck className="h-4 w-4 text-rp-sky" />
            Sans engagement · Satisfaction garantie
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
