
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink, Code, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { projectsData } from "@/data/projects";

const ProjectsSection = () => {
  const { language } = useLanguage();
  
  const translations = {
    portfolio: language === 'pt-BR' ? 'Portfolio' : 'Portfolio',
    recentProjects: language === 'pt-BR' ? 'Projetos Recentes' : 'Recent Projects',
    description: language === 'pt-BR' 
      ? 'Conheça alguns dos projetos que desenvolvi utilizando as mais recentes tecnologias web para criar interfaces dinâmicas e funcionais.'
      : 'Explore some of the projects I\'ve developed using the latest web technologies to create dynamic and functional interfaces.',
    viewDetails: language === 'pt-BR' ? 'Ver Detalhes' : 'View Details',
    allProjects: language === 'pt-BR' ? 'Ver Todos Projetos' : 'View All Projects'
  };
  
  return (
    <section id="projects" className="section py-24 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-block mb-2 px-4 py-1 bg-primary/10 text-primary font-medium rounded-full">
              {translations.portfolio}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">{translations.recentProjects}</h2>
          </div>
          <p className="text-muted-foreground max-w-lg mt-4 md:mt-0">
            {translations.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card 
              key={project.id} 
              className="project-card group h-full flex flex-col hover:shadow-lg transition-all duration-300 border-0 overflow-hidden"
              style={{ 
                transformStyle: "preserve-3d", 
                transform: `perspective(1000px) rotateY(0deg)`,
                transition: "transform 0.5s ease"
              }}
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 flex items-end justify-center p-6 transition-opacity duration-300">
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors"
                      >
                        <Github size={18} className="text-white" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors"
                      >
                        <ExternalLink size={18} className="text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <CardContent className="flex-1 flex flex-col p-6">
                <div className="pt-2 pb-4 flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <span className="text-primary text-xs font-mono px-2 py-1 bg-primary/5 rounded">#{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 text-xs font-medium bg-secondary rounded-full border border-primary/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Link to={`/project/${project.id}`} className="w-full">
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2 mt-auto group">
                    <Code size={16} />
                    {translations.viewDetails}
                    <ArrowRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="btn-primary group">
            {translations.allProjects}
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
