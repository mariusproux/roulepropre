
import { Facebook, Instagram, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="font-bold text-2xl mb-4">
              <span className="text-rp-sky">ROULE</span> PROPRE
            </div>
            <p className="text-gray-400 mb-6">
              Services de nettoyage automobile avec technologies avancées,
              prestations personnalisées, et résultats premium.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-rp-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-rp-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-rp-accent transition-colors"
                aria-label="Avis Google"
              >
                <span className="font-bold">G</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Nos Services
                </a>
              </li>
              <li>
                <a
                  href="#choisir"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Choisir une Prestation
                </a>
              </li>
              <li>
                <a
                  href="#temoignages"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Témoignages
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-rp-sky" />
                <span className="text-gray-400">01 23 45 67 89</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-rp-sky" />
                <a
                  href="mailto:contact@roulepropre.fr"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  contact@roulepropre.fr
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Horaires</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-400">Lundi - Vendredi</span>
                <span className="text-white">8h - 19h</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Samedi</span>
                <span className="text-white">9h - 18h</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Dimanche</span>
                <span className="text-white">Fermé</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} ROULE PROPRE. Tous droits réservés.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Mentions Légales
              </a>
              <a
                href="#"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                CGU
              </a>
              <a
                href="#"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Politique de Confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
