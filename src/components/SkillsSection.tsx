
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, PaintBucket, Server, Settings, Smartphone } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Front-end",
    icon: <Code />,
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vue.js", "Next.js"],
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    title: "Back-end",
    icon: <Server />,
    skills: ["Node.js", "Express", "NestJS", "Python", "Java", "PHP"],
    color: "from-green-500/20 to-green-600/20"
  },
  {
    title: "Banco de Dados",
    icon: <Database />,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Redis"],
    color: "from-orange-500/20 to-orange-600/20"
  },
  {
    title: "Design",
    icon: <PaintBucket />,
    skills: ["Figma", "Adobe XD", "UI/UX", "Tailwind CSS", "Bootstrap", "Styled Components"],
    color: "from-purple-500/20 to-purple-600/20"
  },
  {
    title: "DevOps",
    icon: <Settings />,
    skills: ["Git", "Docker", "CI/CD", "AWS", "Heroku", "Vercel"],
    color: "from-red-500/20 to-red-600/20"
  },
  {
    title: "Mobile",
    icon: <Smartphone />,
    skills: ["React Native", "Flutter", "iOS", "Android"],
    color: "from-teal-500/20 to-teal-600/20"
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section py-24 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-block mb-2 px-4 py-1 bg-primary/10 text-primary font-medium rounded-full">
              Expertise
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Minhas Habilidades</h2>
          </div>
          <p className="text-muted-foreground max-w-lg mt-4 md:mt-0">
            Ao longo da minha carreira como desenvolvedor full stack, adquiri um conjunto
            diversificado de habilidades em várias tecnologias e frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-0 overflow-hidden"
            >
              <div className={`h-1 w-full bg-gradient-to-r ${category.color}`}></div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`bg-gradient-to-br ${category.color} p-3 rounded-lg text-primary group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-secondary text-sm text-foreground rounded-full transition-all hover:bg-primary/10 hover:scale-105"
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
