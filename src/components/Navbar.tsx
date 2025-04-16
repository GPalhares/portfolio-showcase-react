import { useState, useEffect } from "react";
import { Menu, X, Download, Globe, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

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
    { href: "#hero", label: t("inicio") },
    { href: "#projects", label: t("projetos") },
    { href: "#skills", label: t("habilidades") },
    { href: "#contact", label: t("contato") },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm py-3"
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
          <span className="text-primary">Dev</span>palhares
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

          <div className="flex items-center gap-2">
            {/* Botão de Tema */}
            <Toggle
              aria-label={theme === "dark" ? t("temaClaro") : t("temaEscuro")}
              pressed={theme === "dark"}
              onPressedChange={toggleTheme}
              className="bg-background/10 hover:bg-accent/30 px-3"
            >
              {theme === "light" ? <Sun size={18} /> : <Moon size={18} />}
            </Toggle>

            {/* Botão de Idioma */}
            <Toggle
              aria-label={language === "pt-BR" ? t("ingles") : t("portugues")}
              pressed={language === "en"}
              onPressedChange={toggleLanguage}
              className="bg-background/10 hover:bg-accent/30 px-3"
            >
              <Globe size={18} />
              <span className="ml-1 text-xs font-medium">
                {language === "pt-BR" ? "PT" : "EN"}
              </span>
            </Toggle>
          </div>
          {language === "en" ? (
            <a href="/assets/Gabriel Palhares Full Stack (en).pdf" download>
              <Button className="btn-primary flex items-center gap-2">
                <Download size={16} />
                {t("Download Resume")}
              </Button>
            </a>
          ) : (
            <a href="/assets/Gabriel Palhares Full Stack.pdf" download>
              <Button className="btn-primary flex items-center gap-2">
                <Download size={16} />
                {t("Download CV")}
              </Button>
            </a>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          {/* Botão de Tema Mobile */}
          <Toggle
            aria-label={theme === "dark" ? t("temaClaro") : t("temaEscuro")}
            pressed={theme === "dark"}
            onPressedChange={toggleTheme}
            className="bg-background/10 hover:bg-accent/30"
          >
            {theme === "light" ? <Sun size={18} /> : <Moon size={18} />}
          </Toggle>

          {/* Botão de Idioma Mobile */}
          <Toggle
            aria-label={language === "pt-BR" ? t("ingles") : t("portugues")}
            pressed={language === "en"}
            onPressedChange={toggleLanguage}
            className="bg-background/10 hover:bg-accent/30"
          >
            <Globe size={18} />
          </Toggle>

          <button
            className="p-2 text-foreground focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg absolute top-full left-0 w-full shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-foreground py-3 border-b border-gray-100 dark:border-gray-800 ${
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
              {t("downloadCv")}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
