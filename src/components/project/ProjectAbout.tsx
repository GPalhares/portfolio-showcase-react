import { ProjectDetail } from '@/data/projects';

interface ProjectAboutProps {
  project: ProjectDetail;
  language: 'pt-BR' | 'en';
}

const ProjectAbout = ({ project, language }: ProjectAboutProps) => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">
        {language === 'pt-BR' ? 'Sobre o Projeto' : 'About the Project'}
      </h2>
      <p className="text-lg mb-6">{project.longDescription}</p>

      <h3 className="text-xl font-semibold mb-3">
        {language === 'pt-BR' ? 'Detalhes Técnicos' : 'Technical Details'}
      </h3>
      <p className="mb-6">{project.technicalDetails}</p>
    </section>
  );
};

export default ProjectAbout;
