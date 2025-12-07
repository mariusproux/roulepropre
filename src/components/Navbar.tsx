import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

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

  const handleNavClick = (targetId: string) => {
    setIsSheetOpen(false);
    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Choisir ma prestation", href: "#choisir" },
    { label: "Témoignages", href: "#temoignages" },
    { label: "FAQ", href: "#faq" },
  ];

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
            src="/lovable-uploads/c0bf4170-965e-40b7-b9cc-65555718f693.png" 
            alt="ROULE PROPRE Logo"
            className="h-12 w-12 mr-2"
          />
          <span className="text-xl font-bold text-gray-900">
            ROULE PROPRE
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-blue-500 font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button 
            onClick={() => handleNavClick("packages-selector")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md"
          >
            Prendre Rendez-vous
          </Button>
        </nav>

        {/* Mobile menu */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button
              className={`p-2 rounded-md transition-colors ${
                isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-gray-900 hover:bg-white/20"
              }`}
              aria-label="Ouvrir le menu"
            >
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-[280px] bg-gray-900 border-gray-800 p-0"
          >
            <SheetHeader className="p-6 border-b border-gray-800">
              <SheetTitle className="flex items-center text-white">
                <img 
                  src="/lovable-uploads/c0bf4170-965e-40b7-b9cc-65555718f693.png" 
                  alt="ROULE PROPRE Logo"
                  className="h-10 w-10 mr-2"
                />
                ROULE PROPRE
              </SheetTitle>
            </SheetHeader>
            
            <nav className="flex flex-col p-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href.replace("#", ""));
                  }}
                  className="text-gray-200 hover:text-blue-400 font-medium py-4 px-2 border-b border-gray-800 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              
              <Button 
                onClick={() => handleNavClick("packages-selector")}
                className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-medium w-full py-6"
              >
                Prendre Rendez-vous
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
