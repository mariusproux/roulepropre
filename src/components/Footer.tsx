import { Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";

const quickLinks = [
  { href: "#services", label: "Nos services" },
  { href: "#choisir", label: "Choisir une prestation" },
  { href: "#temoignages", label: "Témoignages" },
  { href: "#faq", label: "FAQ" },
];

const Footer = () => {
  return (
    <footer className="bg-rp-deep pt-16 pb-28 text-white md:pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marque */}
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src={siteConfig.branding.logo}
                alt="Logo Roule Propre"
                className="h-10 w-10"
              />
              <span className="font-display text-xl font-extrabold">
                <span className="text-rp-sky">ROULE</span> PROPRE
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-blue-100/75">
              Lavage et nettoyage automobile écologique, à domicile, dans la région nantaise
              et le sud Loire.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-rp-blue"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-rp-blue"
              >
                <Instagram size={18} />
              </a>
              <a
                href={siteConfig.social.google}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Avis Google"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-bold transition-colors hover:bg-rp-blue"
              >
                G
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-display text-base font-semibold">Liens rapides</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-blue-100/75 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-base font-semibold">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phoneTel}`}
                  className="flex items-center gap-3 text-blue-100/75 transition-colors hover:text-white"
                >
                  <Phone size={16} className="text-rp-sky" />
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 text-blue-100/75 transition-colors hover:text-white"
                >
                  <Mail size={16} className="text-rp-sky" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-blue-100/75">
                <MapPin size={16} className="text-rp-sky" />
                Aigrefeuille-sur-Maine &amp; sud Loire
              </li>
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="font-display text-base font-semibold">Horaires</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li className="flex justify-between">
                <span className="text-blue-100/75">Mardi – Vendredi</span>
                <span>8 h – 18 h</span>
              </li>
              <li className="flex justify-between">
                <span className="text-blue-100/75">Samedi</span>
                <span>8 h – 12 h</span>
              </li>
              <li className="flex justify-between">
                <span className="text-blue-100/75">Lundi &amp; Dimanche</span>
                <span>Fermé</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-blue-100/70">
              © {new Date().getFullYear()} Roule Propre. Tous droits réservés.
            </p>
            <nav aria-label="Liens légaux">
              <div className="flex flex-col items-center gap-2 text-sm sm:flex-row sm:gap-5">
                <Link to="/mentions-legales" className="text-blue-100/70 transition-colors hover:text-white">
                  Mentions légales
                </Link>
                <Link to="/cgu" className="text-blue-100/70 transition-colors hover:text-white">
                  CGU
                </Link>
                <Link to="/politique-de-confidentialite" className="text-blue-100/70 transition-colors hover:text-white">
                  Politique de confidentialité
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
