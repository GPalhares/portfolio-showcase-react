
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

// Interface estendida para incluir mais detalhes técnicos
interface ProjectDetail {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technicalDetails: string;
  techDecisions: {
    title: string;
    description: string;
  }[];
  challenges: {
    title: string;
    description: string;
  }[];
  images: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  completionDate: string;
}

// Dados de exemplo mais detalhados para cada projeto
const projectsData: ProjectDetail[] = [
  {
    id: 1,
    title: "E-commerce Moderno",
    description: "Loja virtual completa com React, Redux e integração com API de pagamentos.",
    longDescription: "Um e-commerce completo desenvolvido com as mais modernas tecnologias front-end e back-end. O projeto inclui um catálogo de produtos, carrinho de compras, sistema de pagamento integrado com Stripe, autenticação de usuários e painel administrativo.",
    technicalDetails: "Este projeto foi construído com uma arquitetura de microsserviços, separando a API de produtos, o sistema de pagamentos e o serviço de autenticação. Utilizei Docker para containerização e implantação contínua via GitHub Actions.",
    techDecisions: [
      {
        title: "Redux para Gerenciamento de Estado",
        description: "Escolhi Redux para gerenciar o estado global da aplicação devido à complexidade do carrinho de compras e ao fluxo de autenticação."
      },
      {
        title: "Stripe para Pagamentos",
        description: "A integração com Stripe foi selecionada por sua robustez, segurança e facilidade de implementação, além de suportar múltiplas moedas."
      },
      {
        title: "Node.js no Backend",
        description: "O backend foi construído com Express.js para criar APIs RESTful eficientes e escaláveis."
      }
    ],
    challenges: [
      {
        title: "Performance com Muitos Produtos",
        description: "Implementei paginação e lazy loading para melhorar a performance do catálogo com grande volume de produtos."
      },
      {
        title: "Segurança nas Transações",
        description: "Utilizei tokens JWT e HTTPS para garantir a segurança das informações de pagamento e dados dos usuários."
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1561069934-eee225952461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    tags: ["React", "Redux", "Node.js", "Stripe", "Docker", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    completionDate: "Março 2023"
  },
  {
    id: 2,
    title: "App de Dashboard",
    description: "Dashboard administrativo com visualizações de dados e gráficos interativos.",
    longDescription: "Um dashboard administrativo completo para visualização e análise de dados empresariais. O aplicativo apresenta múltiplos gráficos interativos, tabelas de dados filtráveis e exportáveis, e um sistema de alertas em tempo real.",
    technicalDetails: "Este projeto foi desenvolvido com React e TypeScript para garantir tipagem forte e melhor manutenção. Utilizei o Tailwind CSS para estilização e Chart.js para os gráficos interativos. O backend foi construído com Firebase para autenticação e armazenamento de dados.",
    techDecisions: [
      {
        title: "TypeScript para Tipo Seguro",
        description: "O TypeScript foi escolhido para garantir uma base de código mais robusta e prevenir erros comuns durante o desenvolvimento."
      },
      {
        title: "Chart.js para Visualização",
        description: "Utilizei o Chart.js pela sua flexibilidade na criação de gráficos interativos e responsivos que se adaptam a diferentes tamanhos de tela."
      },
      {
        title: "Firebase Realtime Database",
        description: "O Firebase foi selecionado para fornecer atualizações em tempo real dos dados, crucial para um dashboard dinâmico."
      }
    ],
    challenges: [
      {
        title: "Otimização de Performance",
        description: "Implementei memo, useMemo e useCallback para otimizar a renderização de componentes complexos com muitos dados."
      },
      {
        title: "Filtros Complexos",
        description: "Desenvolvi um sistema avançado de filtros que permite aos usuários criar consultas personalizadas para análise de dados."
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    tags: ["React", "Tailwind", "Chart.js", "Firebase", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
    completionDate: "Julho 2023"
  },
  {
    id: 3,
    title: "Rede Social",
    description: "Plataforma de rede social com autenticação, posts e mensagens em tempo real.",
    longDescription: "Uma rede social moderna com recursos avançados como feed personalizado, sistema de mensagens em tempo real, notificações push, e compartilhamento de conteúdo multimídia. O aplicativo é totalmente responsivo e funciona em dispositivos móveis e desktop.",
    technicalDetails: "Construí este aplicativo com React no frontend, Socket.io para comunicação em tempo real, e uma API RESTful com Node.js/Express. O banco de dados utilizado foi MongoDB para armazenar publicações, usuários e mensagens.",
    techDecisions: [
      {
        title: "Socket.io para Tempo Real",
        description: "Implementei Socket.io para fornecer mensagens e notificações instantâneas sem a necessidade de atualizar a página."
      },
      {
        title: "AWS S3 para Armazenamento",
        description: "Utilizei o Amazon S3 para armazenamento de arquivos multimídia devido à sua escalabilidade e confiabilidade."
      },
      {
        title: "JWT para Autenticação",
        description: "Escolhi JSON Web Tokens para autenticação segura e stateless, facilitando a escalabilidade da aplicação."
      }
    ],
    challenges: [
      {
        title: "Escalabilidade",
        description: "Projetei a arquitetura para suportar milhares de usuários simultâneos usando balanceamento de carga e cache."
      },
      {
        title: "Privacidade e Segurança",
        description: "Implementei controles granulares de privacidade que permitem aos usuários determinar quem pode ver seu conteúdo."
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    tags: ["React", "Firebase", "Socket.io", "CSS", "MongoDB", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    completionDate: "Janeiro 2024"
  }
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const { theme } = useTheme();
  const { language } = useLanguage();

  useEffect(() => {
    // Encontra o projeto com base no ID da URL
    if (id) {
      const foundProject = projectsData.find((p) => p.id === parseInt(id));
      if (foundProject) {
        setProject(foundProject);
        // Reset image index when project changes
        setCurrentImage(0);
      }
    }
  }, [id]);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-16 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              {language === "pt-BR" ? "Projeto não encontrado" : "Project not found"}
            </h2>
            <Link to="/">
              <Button>
                <ArrowLeft className="mr-2" size={16} />
                {language === "pt-BR" ? "Voltar para a página inicial" : "Back to home"}
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero section with current image */}
        <div className="relative w-full h-[50vh] bg-gradient-to-b from-secondary to-background overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={project.images[currentImage]} 
              alt={project.title} 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
          </div>
          
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-12 relative z-10">
            <Link to="/" className="mb-8">
              <Button variant="ghost" className="group">
                <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                {language === "pt-BR" ? "Voltar para todos projetos" : "Back to all projects"}
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
            
            <div className="flex gap-4">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="flex items-center gap-2">
                    <ExternalLink size={16} />
                    {language === "pt-BR" ? "Ver Site" : "Live Site"}
                  </Button>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Github size={16} />
                    {language === "pt-BR" ? "Ver Código" : "View Code"}
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Content area */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content - 2/3 width on large screens */}
            <div className="lg:col-span-2 space-y-10">
              {/* Gallery section */}
              <section>
                <h2 className="text-2xl font-bold mb-6">
                  {language === "pt-BR" ? "Galeria" : "Gallery"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.images.map((image, index) => (
                    <div 
                      key={index}
                      className={`overflow-hidden rounded-lg cursor-pointer border-2 transition-all ${
                        currentImage === index 
                          ? 'border-primary scale-[1.02]' 
                          : 'border-transparent hover:border-primary/30'
                      }`}
                      onClick={() => setCurrentImage(index)}
                    >
                      <img 
                        src={image} 
                        alt={`${project.title} - imagem ${index + 1}`}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform" 
                      />
                    </div>
                  ))}
                </div>
              </section>

              {/* About section */}
              <section>
                <h2 className="text-2xl font-bold mb-4">
                  {language === "pt-BR" ? "Sobre o Projeto" : "About the Project"}
                </h2>
                <p className="text-lg mb-6">{project.longDescription}</p>

                <h3 className="text-xl font-semibold mb-3">
                  {language === "pt-BR" ? "Detalhes Técnicos" : "Technical Details"}
                </h3>
                <p className="mb-6">{project.technicalDetails}</p>
              </section>

              {/* Technical decisions */}
              <section>
                <h2 className="text-2xl font-bold mb-6">
                  {language === "pt-BR" ? "Decisões Tecnológicas" : "Technical Decisions"}
                </h2>
                <div className="space-y-6">
                  {project.techDecisions.map((decision, index) => (
                    <Card key={index} className="p-6 bg-secondary/30 border-0">
                      <h3 className="text-xl font-semibold mb-2">{decision.title}</h3>
                      <p>{decision.description}</p>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Challenges and Solutions */}
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
            </div>

            {/* Sidebar - 1/3 width on large screens */}
            <div>
              <div className="sticky top-24 space-y-8">
                {/* Project Info Card */}
                <Card className="overflow-hidden border-0 bg-secondary/20">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">
                      {language === "pt-BR" ? "Informações do Projeto" : "Project Info"}
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">
                          {language === "pt-BR" ? "Concluído em" : "Completed"}
                        </div>
                        <div>{project.completionDate}</div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">
                          {language === "pt-BR" ? "Tecnologias" : "Technologies"}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="bg-background/50">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div className="pt-2 space-y-3">
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                            <Button className="w-full flex items-center justify-center gap-2">
                              <ExternalLink size={16} />
                              {language === "pt-BR" ? "Ver Site" : "Live Demo"}
                            </Button>
                          </a>
                        )}
                        
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                              <Github size={16} />
                              {language === "pt-BR" ? "Código Fonte" : "Source Code"}
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
                    {language === "pt-BR" ? "Outros Projetos" : "Other Projects"}
                  </h3>
                  
                  <div className="space-y-4">
                    {projectsData
                      .filter(p => p.id !== project.id)
                      .slice(0, 2)
                      .map(otherProject => (
                        <Link 
                          key={otherProject.id} 
                          to={`/project/${otherProject.id}`}
                          className="block group"
                        >
                          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-background/50 transition-colors">
                            <div className="w-12 h-12 rounded overflow-hidden flex-shrink-0">
                              <img 
                                src={otherProject.images[0]} 
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
                      
                    <Link to="/" className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors mt-2">
                      {language === "pt-BR" ? "Ver todos os projetos" : "See all projects"}
                      <ArrowLeft className="ml-1 rotate-180" size={14} />
                    </Link>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
