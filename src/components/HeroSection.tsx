
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center py-20 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-700/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto flex flex-col md:flex-row md:items-center relative z-10">
        <div className="md:w-1/2 space-y-6 mb-10 md:mb-0 md:pr-10">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full">
            <p className="text-primary font-medium">Desenvolvedor Full Stack</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Transformando ideias em <span className="heading-gradient">experiências digitais</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Criação de interfaces modernas e funcionais com foco em experiência do usuário e performance.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="btn-primary group">
              Ver Projetos
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="flex items-center gap-2 group">
              Contato 
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-96 animate-float">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-primary rounded-full opacity-10 blur-3xl"></div>
            <div className="relative w-full h-full">
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-lg rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full bg-gradient-to-br from-primary to-blue-700 flex justify-center items-center">
                  <span className="text-white text-4xl font-bold">FD</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary rounded-full border-4 border-background flex items-center justify-center shadow-lg">
                <span className="text-primary font-bold">React</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#projects" className="flex flex-col items-center text-primary hover:text-primary/80 transition-colors">
          <span className="mb-2 text-sm">Scroll</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
