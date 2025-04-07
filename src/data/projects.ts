
export interface TechDecision {
  title: string;
  description: string;
}

export interface Challenge {
  title: string;
  description: string;
}

export interface ProjectDetail {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technicalDetails: string;
  techDecisions: TechDecision[];
  challenges: Challenge[];
  images: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  completionDate: string;
}

// Dados de exemplo mais detalhados para cada projeto
export const projectsData: ProjectDetail[] = [
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
