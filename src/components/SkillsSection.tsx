
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, PaintBucket, Server, Settings, Smartphone } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Front-end",
    icon: <Code />,
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vue.js", "Next.js"]
  },
  {
    title: "Back-end",
    icon: <Server />,
    skills: ["Node.js", "Express", "NestJS", "Python", "Java", "PHP"]
  },
  {
    title: "Banco de Dados",
    icon: <Database />,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Redis"]
  },
  {
    title: "Design",
    icon: <PaintBucket />,
    skills: ["Figma", "Adobe XD", "UI/UX", "Tailwind CSS", "Bootstrap", "Styled Components"]
  },
  {
    title: "DevOps",
    icon: <Settings />,
    skills: ["Git", "Docker", "CI/CD", "AWS", "Heroku", "Vercel"]
  },
  {
    title: "Mobile",
    icon: <Smartphone />,
    skills: ["React Native", "Flutter", "iOS", "Android"]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Minhas Habilidades</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ao longo da minha carreira como desenvolvedor full stack, adquiri um conjunto diversificado
            de habilidades em várias tecnologias e frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-medium">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-secondary text-sm text-foreground rounded-full transition-colors hover:bg-primary/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
