
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ["hero", "projects", "skills", "contact"];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "#hero", label: "Início" },
    { href: "#projects", label: "Projetos" },
    { href: "#skills", label: "Habilidades" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#" 
          className={`text-2xl font-bold transition-all ${
            isScrolled ? "text-foreground" : "text-foreground"
          }`}
        >
          <span className="text-primary">Port</span>folio
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className={`transition-colors relative py-1 ${
                activeSection === link.href.substring(1) 
                  ? "text-primary font-medium" 
                  : "text-foreground hover:text-primary"
              }`}
            >
              {link.label}
              {activeSection === link.href.substring(1) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </a>
          ))}
          
          <Button className="btn-primary flex items-center gap-2">
            <Download size={16} />
            Download CV
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-foreground focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg absolute top-full left-0 w-full shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className={`text-foreground py-3 border-b border-gray-100 ${
                  activeSection === link.href.substring(1)
                    ? "text-primary font-medium"
                    : "hover:text-primary"
                }`}
                onClick={() => {
                  toggleMenu();
                  setActiveSection(link.href.substring(1));
                }}
              >
                {link.label}
              </a>
            ))}
            
            <Button className="btn-primary w-full flex items-center justify-center gap-2 mt-2">
              <Download size={16} />
              Download CV
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
