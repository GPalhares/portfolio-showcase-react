import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { ProjectDetail } from '@/data/projects';

interface ProjectHeroProps {
  project: ProjectDetail;
  currentImage: number;
  language: 'pt-BR' | 'en';
}

const ProjectHero = ({ project, currentImage, language }: ProjectHeroProps) => {
  return (
    <div className="relative w-full h-[55vh] bg-gradient-to-b from-secondary to-background overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={`${project.images[currentImage]}`}
          alt={project.title}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      </div>

      <div className="container mx-auto px-4 h-full flex flex-col justify-end mt-5 relative z-10">
        <Link to="/" className="mb-8">
          <Button variant="ghost" className="group">
            <ArrowLeft
              size={16}
              className="mr-2 group-hover:-translate-x-1 transition-transform"
            />
            {language === 'pt-BR'
              ? 'Voltar para todos projetos'
              : 'Back to all projects'}
          </Button>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-sm">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-4 pb-5">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button className="flex items-center gap-2">
                <ExternalLink size={16} />
                {language === 'pt-BR' ? 'Ver Site' : 'Live Site'}
              </Button>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="flex items-center gap-2">
                <Github size={16} />
                {language === 'pt-BR' ? 'Ver Código' : 'View Code'}
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectHero;
