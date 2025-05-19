
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 shadow-md backdrop-blur-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img 
            src="/lovable-uploads/b1c38cd4-cd16-4d47-a7ce-d95c6868077b.png" 
            alt="ROULE PROPRE Logo"
            className="h-12 w-12 mr-2"
          />
          <span className="text-xl font-bold text-gray-900">
            ROULE PROPRE
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#services"
            className="text-gray-700 hover:text-blue-500 font-medium transition-colors"
          >
            Services
          </a>
          <a
            href="#choisir"
            className="text-gray-700 hover:text-blue-500 font-medium transition-colors"
          >
            Choisir ma prestation
          </a>
          <a
            href="#temoignages"
            className="text-gray-700 hover:text-blue-500 font-medium transition-colors"
          >
            Témoignages
          </a>
          <a
            href="#faq"
            className="text-gray-700 hover:text-blue-500 font-medium transition-colors"
          >
            FAQ
          </a>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md">
            Prendre Rendez-vous
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in-fast">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-500 font-medium transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#choisir"
              className="text-gray-700 hover:text-blue-500 font-medium transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Choisir ma prestation
            </a>
            <a
              href="#temoignages"
              className="text-gray-700 hover:text-blue-500 font-medium transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Témoignages
            </a>
            <a
              href="#faq"
              className="text-gray-700 hover:text-blue-500 font-medium transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-medium w-full">
              Prendre Rendez-vous
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
