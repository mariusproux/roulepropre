import { useEffect, useState } from "react";
import { Calendar, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

/**
 * Barre d'action fixe en bas d'écran, uniquement sur mobile.
 * Apparaît après le hero pour garder l'action de réservation toujours à portée de pouce.
 */
const MobileBookingBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappHref = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    "Bonjour, je souhaite prendre rendez-vous pour un nettoyage de mon véhicule.",
  )}`;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-rp-foam bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_30px_-12px_rgba(6,32,58,0.25)] backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center gap-3">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contacter par WhatsApp"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform active:scale-95"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <button
          type="button"
          onClick={() =>
            document.getElementById("packages-selector")?.scrollIntoView({ behavior: "smooth" })
          }
          className="btn-primary h-12 flex-1"
        >
          <Calendar className="h-5 w-5" />
          Prendre rendez-vous
        </button>
      </div>
    </div>
  );
};

export default MobileBookingBar;
