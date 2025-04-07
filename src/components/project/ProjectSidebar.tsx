import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { ProjectDetail } from '@/data/projects';

interface ProjectSidebarProps {
  project: ProjectDetail;
  otherProjects: ProjectDetail[];
  language: 'pt-BR' | 'en';
}

const ProjectSidebar = ({
  project,
  otherProjects,
  language,
}: ProjectSidebarProps) => {
  return (
    <div className="sticky top-24 space-y-8">
      {/* Project Info Card */}
      <Card className="overflow-hidden border-0 bg-secondary/20">
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4">
            {language === 'pt-BR' ? 'Informações do Projeto' : 'Project Info'}
          </h3>

          <div className="space-y-4">
            <div>
              <div className="text-sm text-muted-foreground mb-1">
                {language === 'pt-BR' ? 'Concluído em' : 'Completed'}
              </div>
              <div>{project.completionDate}</div>
            </div>

            <Separator />

            <div>
              <div className="text-sm text-muted-foreground mb-1">
                {language === 'pt-BR' ? 'Tecnologias' : 'Technologies'}
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-background/50"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            <div className="pt-2 space-y-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full flex items-center justify-center gap-2">
                    <ExternalLink size={16} />
                    {language === 'pt-BR' ? 'Ver Site' : 'Live Demo'}
                  </Button>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <Github size={16} />
                    {language === 'pt-BR' ? 'Código Fonte' : 'Source Code'}
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </Card>

      {/* Navigation between projects */}
      <Card className="border-0 bg-secondary/10 p-6">
        <h3 className="text-xl font-bold mb-4">
          {language === 'pt-BR' ? 'Outros Projetos' : 'Other Projects'}
        </h3>

        <div className="space-y-4">
          {otherProjects
            .filter((p) => p.id !== project.id)
            .slice(0, 2)
            .map((otherProject) => (
              <Link
                key={otherProject.id}
                to={`/project/${otherProject.id}`}
                className="block group"
              >
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-background/50 transition-colors">
                  <div className="w-12 h-12 rounded overflow-hidden flex-shrink-0">
                    <img
                      src={`../${otherProject.images[0]}`}
                      alt={otherProject.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium group-hover:text-primary transition-colors">
                      {otherProject.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {otherProject.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}

          <Link
            to="/"
            className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors mt-2"
          >
            {language === 'pt-BR'
              ? 'Ver todos os projetos'
              : 'See all projects'}
            <ArrowLeft className="ml-1 rotate-180" size={14} />
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default ProjectSidebar;
