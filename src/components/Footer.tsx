
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-background py-12 border-t relative">
      <div className="container mx-auto px-4">
        {/* Scroll to top button */}
        <button 
          onClick={scrollToTop}
          className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-lg border border-border hover:bg-primary/5 transition-colors"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={20} className="text-primary" />
        </button>
      
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-foreground">
              <span className="text-primary">Port</span>folio
            </h2>
            <p className="text-muted-foreground mt-2">
              Desenvolvedor Full Stack com foco em Front-end
            </p>
          </div>

          <div className="flex gap-4">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary bg-foreground/5 hover:bg-primary/10 p-3 rounded-full transition-colors"
              aria-label="Github"
            >
              <Github size={18} />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary bg-foreground/5 hover:bg-primary/10 p-3 rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary bg-foreground/5 hover:bg-primary/10 p-3 rounded-full transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} Meu Portfolio. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
