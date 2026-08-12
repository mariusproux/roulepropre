import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useScrollPast } from "@/hooks/useScrollPast";
import { scrollToBooking } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#choisir", label: "Choisir ma prestation" },
  { href: "#temoignages", label: "Témoignages" },
  { href: "#faq", label: "FAQ" },
];

const Navbar = () => {
  const isScrolled = useScrollPast(50);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const goToBooking = () => {
    scrollToBooking();
    setIsMobileMenuOpen(false);
  };

  // Sur le hero sombre (non scrollé) le texte est clair ; une fois scrollé, fond blanc + texte sombre.
  const onLight = isScrolled || isMobileMenuOpen;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        onLight ? "bg-white/85 py-3 shadow-[0_8px_30px_-12px_rgba(6,32,58,0.25)] backdrop-blur-md" : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <img
            src={siteConfig.branding.logo}
            alt="Logo Roule Propre"
            className="h-11 w-11"
          />
          <span
            className={`font-display text-lg font-extrabold tracking-tight transition-colors ${
              onLight ? "text-rp-deep" : "text-white"
            }`}
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            ROULE PROPRE
          </span>
        </a>

        {/* Navigation bureau */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                onLight ? "text-rp-deep/70 hover:text-rp-blue" : "text-blue-50/90 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button onClick={goToBooking} className="btn-primary !px-5 !py-2.5 text-sm">
            Prendre rendez-vous
          </Button>
        </nav>

        {/* Bouton menu mobile */}
        <button
          className={`md:hidden ${onLight ? "text-rp-deep" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="border-t border-rp-foam bg-white md:hidden">
          <div className="container-custom flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-3 font-medium text-rp-deep/80 transition-colors hover:bg-rp-foam hover:text-rp-blue"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button onClick={goToBooking} className="btn-primary mt-2 w-full">
              Prendre rendez-vous
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
