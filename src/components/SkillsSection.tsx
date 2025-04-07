import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Code,
  Database,
  FlaskConical,
  Server,
  Settings,
  Smartphone,
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Front-end',
    icon: <Code />,
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Flutter',
      'SEO',
      'Lighthouse',
    ],
    color: 'from-blue-500/20 to-blue-600/20',
  },
  {
    title: 'Back-end',
    icon: <Server />,
    skills: ['Node.js', 'Express', 'NestJS', 'Java'],
    color: 'from-green-500/20 to-green-600/20',
  },
  {
    title: 'Banco de Dados',
    icon: <Database />,
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'SQLite'],
    color: 'from-orange-500/20 to-orange-600/20',
  },
  {
    title: 'Testes',
    icon: <FlaskConical />,
    skills: ['Jest', 'React Testing Library', 'Mocha', 'Chai', 'Puppeteer'],
    color: 'from-purple-500/20 to-purple-600/20',
  },
  {
    title: 'DevOps',
    icon: <Settings />,
    skills: ['Git', 'Docker', 'CI/CD', 'Vercel'],
    color: 'from-red-500/20 to-red-600/20',
  },
  {
    title: 'Mobile',
    icon: <Smartphone />,
    skills: ['React Native', 'Flutter'],
    color: 'from-teal-500/20 to-teal-600/20',
  },
];

const SkillsSection = () => {
  const { language } = useLanguage();

  const translations = {
    skills: language === 'pt-BR' ? 'Expertise' : 'Skills',
    title: language === 'pt-BR' ? 'Minhas Habilidades' : 'My Tech Stack',
    subtitle:
      language === 'pt-BR'
        ? 'Ao longo da minha jornada, desenvolvi a habilidade de aprender rápido — o que me permite dominar novas tecnologias com agilidade.'
        : 'Throughout my journey, I’ve developed the ability to learn quickly — allowing me to master new technologies with ease.',
  };

  return (
    <section id="skills" className="section py-24 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-block mb-2 px-4 py-1 bg-primary/10 text-primary font-medium rounded-full">
              {translations.skills}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              {translations.title}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-lg mt-4 md:mt-0">
            {translations.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 overflow-hidden"
            >
              <div
                className={`h-1 w-full bg-gradient-to-r ${category.color}`}
              ></div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`bg-gradient-to-br ${category.color} p-3 rounded-lg text-primary group-hover:scale-110 transition-transform`}
                  >
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
