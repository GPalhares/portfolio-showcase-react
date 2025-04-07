
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent z-[-1]" />
      <div className="container mx-auto flex flex-col md:flex-row md:items-center">
        <div className="md:w-1/2 space-y-6 mb-10 md:mb-0 md:pr-10 animate-fade-in">
          <p className="text-primary font-medium">Olá, eu sou</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Desenvolvedor <span className="heading-gradient">Full Stack</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Especializado em desenvolvimento front-end com React e criação de experiências digitais incríveis.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button className="btn-primary">Ver Projetos</Button>
            <Button variant="outline" className="flex items-center gap-2">
              Contato <ArrowDown size={16} />
            </Button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full opacity-10 blur-3xl"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
              <div className="w-full h-full bg-gradient-to-br from-primary/80 to-blue-700/80 flex justify-center items-center">
                <span className="text-white text-4xl font-bold">FD</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#projects" className="text-primary">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
