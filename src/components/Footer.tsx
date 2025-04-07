
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-foreground">Portfolio</h2>
            <p className="text-muted-foreground mt-2">
              Desenvolvedor Full Stack com foco em Front-end
            </p>
          </div>

          <div className="flex gap-4">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary p-2 transition-colors"
              aria-label="Github"
            >
              <Github size={20} />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary p-2 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary p-2 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>© {currentYear} Meu Portfolio. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
