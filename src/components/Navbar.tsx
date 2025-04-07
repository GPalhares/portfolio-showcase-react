
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-foreground">
          Portfolio
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#hero" className="text-foreground hover:text-primary transition-colors">
            Início
          </a>
          <a href="#projects" className="text-foreground hover:text-primary transition-colors">
            Projetos
          </a>
          <a href="#skills" className="text-foreground hover:text-primary transition-colors">
            Habilidades
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contato
          </a>
          <Button className="btn-primary">
            Download CV
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm absolute top-full left-0 w-full shadow-md py-4 animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="#hero" 
              className="text-foreground py-2 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Início
            </a>
            <a 
              href="#projects" 
              className="text-foreground py-2 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Projetos
            </a>
            <a 
              href="#skills" 
              className="text-foreground py-2 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Habilidades
            </a>
            <a 
              href="#contact" 
              className="text-foreground py-2 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Contato
            </a>
            <Button className="btn-primary w-full">
              Download CV
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
