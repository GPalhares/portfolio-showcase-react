
import { Card } from "@/components/ui/card";
import { ProjectDetail } from "@/data/projects";

interface ProjectChallengesProps {
  project: ProjectDetail;
  language: "pt-BR" | "en";
}

const ProjectChallenges = ({ project, language }: ProjectChallengesProps) => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">
        {language === "pt-BR" ? "Desafios e Soluções" : "Challenges and Solutions"}
      </h2>
      <div className="space-y-6">
        {project.challenges.map((challenge, index) => (
          <Card key={index} className="p-6 border-0 bg-primary/5">
            <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
            <p>{challenge.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectChallenges;
