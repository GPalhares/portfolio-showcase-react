import { Card } from '@/components/ui/card';
import { ProjectDetail } from '@/data/projects';

interface ProjectTechDecisionsProps {
  project: ProjectDetail;
  language: 'pt-BR' | 'en';
}

const ProjectTechDecisions = ({
  project,
  language,
}: ProjectTechDecisionsProps) => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">
        {language === 'pt-BR' ? 'Decisões Tecnológicas' : 'Technical Decisions'}
      </h2>
      <div className="space-y-6">
        {project.techDecisions.map((decision, index) => (
          <Card key={index} className="p-6 border-0 bg-primary/5">
            <h3 className="text-xl font-semibold mb-2">{decision.title}</h3>
            <p>{decision.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectTechDecisions;
