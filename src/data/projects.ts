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
    title: 'Cardapiro',
    description:
      'Solução completa para criação de cardápios digitais, com foco em performance, SEO e experiência do usuário.',
    longDescription:
      'O Cardapiro é uma plataforma desenvolvida para restaurantes que desejam criar e gerenciar cardápios digitais de forma prática e eficiente. Criado de forma independente, o projeto já conta com usuários reais testando a versão gratuita. A aplicação inclui recursos como personalização de cardápio, QR Code, integração com pedidos via WhatsApp e controle de destaques e promoções. Tudo foi construído com foco em performance, acessibilidade e otimização para mecanismos de busca (SEO).',
    technicalDetails:
      'Desenvolvido com React no front-end e Node.js no back-end, utilizando Firebase como banco de dados e autenticação. A aplicação é otimizada com técnicas de SEO e boas práticas de performance validadas pelo Google Lighthouse. Todo o desenvolvimento e infraestrutura foram pensados para garantir escalabilidade e uma boa experiência do usuário, mesmo em dispositivos móveis.',
    techDecisions: [
      {
        title: 'Gerenciamento de Estado com Context API 🗂️',
        description:
          'Utilizei o Context API para gerenciar o estado global da aplicação. Foram criados três contextos principais: Users Context, Tasks Context e Auth Context. Essa estrutura evita requisições desnecessárias e garante persistência entre páginas.',
      },
      {
        title: 'Custom Hooks 🪝',
        description:
          'Implementei Custom Hooks para requisições de dados e lógica de autenticação. Isso reduziu o uso de prop drilling e melhorou a organização do código.',
      },
      {
        title: 'Layout Mobile-First 📱',
        description:
          'Desenvolvido com abordagem Mobile-First para garantir responsividade. Todos os elementos foram pensados para oferecer uma boa experiência em dispositivos móveis.',
      },
    ],
    challenges: [
      {
        title: 'Performance com Muitos Produtos 🍃',
        description:
          'Implementei paginação e lazy loading para melhorar a performance do catálogo com grande volume de produtos e imagens. Foi necessário otimizar o carregamento de imagens para manter uma boa experiência de navegação.',
      },
      {
        title: 'Segurança nas Transações 🔒',
        description:
          'Utilizei tokens JWT e HTTPS para garantir a segurança das informações de pagamento e dados dos usuários, além de implementar autenticação segura com Single Sign-On via Google e Facebook.',
      },
      {
        title: 'Integração com Redes Sociais 🤝',
        description:
          'A integração com autenticação do Facebook apresentou diversos desafios técnicos, mas  está sendo finalizada com sucesso, oferecendo mais praticidade e segurança no login dos usuários.',
      },
      {
        title: 'Otimização de Performance para SEO 🚀',
        description:
          'Atingir uma boa nota no Google Lighthouse foi um dos maiores desafios do projeto, principalmente devido ao uso de imagens. Após várias otimizações, consegui alcançar uma pontuação de 90%, garantindo uma aplicação rápida e acessível.',
      },
    ],
    images: [
      '/assets/images/cardapiro/1.png',
      '/assets/images/cardapiro/2.png',
      '/assets/images/cardapiro/3.png',
      '/assets/images/cardapiro/4.png',
      '/assets/images/cardapiro/5.png',
      '/assets/images/cardapiro/6.png',
      '/assets/images/cardapiro/7.png',
      '/assets/images/cardapiro/8.png',
    ],
    tags: [
      'React',
      'Javascript',
      'Node.js',
      'Asaas',
      'Next.js',
      'Docker',
      'Firebase',
      'SEO',
      'Lighthouse',
      'Single Sign-On',
    ],
    liveUrl: 'https://cardapiro.com.br/',
    completionDate: 'Em andamento',
  },
  {
    id: 2,
    title: 'HC App',
    description:
      'Plataforma de aplicativos white-label para cassinos com mais de 3.000 apps e 1 milhão de acessos mensais.',
    longDescription:
      'HC App é uma plataforma robusta de aplicativos white-label, criada para influencers de cassinos online se conectarem com sua audiência. Através da plataforma, os influenciadores podem fazer lives via youtube, enviar notificações, promover campanhas personalizadas, divulgar estratégias de apostas esportivas e interagir em tempo real com seus seguidores. Atualmente, conta com mais de 3.000 apps ativos e mais de 1 milhão de acessos mensais.',
    technicalDetails:
      'O sistema foi desenvolvido com foco em escalabilidade e performance. Utilizei React e Javascript no frontend, com Firebase para autenticação, banco de dados em tempo real e notificações push. A estrutura modular permite a criação automatizada de novos apps personalizados para cada influencer. A interface foi construída com Material UI, Next.js, React.js, garantindo rapidez e responsividade.',
    techDecisions: [
      {
        title: 'Arquitetura Modular 🧩',
        description:
          'A plataforma foi projetada para suportar múltiplos apps personalizados com base em um core compartilhado, permitindo rápida replicação e manutenção centralizada.',
      },
      {
        title: 'Gerenciamento com Context API 🗂️',
        description:
          'Utilizei Context API para manter o estado global e evitar requisições desnecessárias em diferentes áreas da plataforma, como autenticação, conteúdo dinâmico e configurações por influencer.',
      },
      {
        title: 'Integração com Firebase 🔥',
        description:
          'O Firebase foi utilizado para autenticação, Firestore em tempo real e notificações push, garantindo uma experiência dinâmica e instantânea.',
      },
      {
        title: 'Notificações em Tempo Real 📡',
        description:
          'Implementei ferramentas para que os influencers possam enviar mensagens instantâneas para seus usuários, criando uma experiência interativa e engajadora.',
      },
      {
        title: 'Painel Admin White-Label 👤',
        description:
          'Cada influencer possui um painel administrativo exclusivo com controle total sobre conteúdos, promoções, notificações e personalização do seu próprio app.',
      },
    ],
    challenges: [
      {
        title: 'Escalabilidade com Muitos Aplicativos ⚙️',
        description:
          'Gerenciar milhares de apps ativos com performance e estabilidade foi um grande desafio, exigindo otimizações contínuas no banco de dados e no front end.',
      },
      {
        title: 'Alta Conectividade em Tempo Real 📶',
        description:
          'Manter notificações simultâneas para milhares de usuários conectados exigiu uma arquitetura eficiente e escalável com Firebase e WebSockets.',
      },
      {
        title: 'Integração com Sistema de Pagamentos e Tokenização 🔐',
        description:
          'Implementei um sistema de pagamentos completo utilizando a API do Asaas, com salvamento seguro do token do cartão de crédito. Foi um processo complexo que exigiu atenção redobrada à segurança, validação de dados sensíveis e conformidade com boas práticas de proteção de dados.',
      },
    ],
    images: [
      '/assets/images/hcapp/1.png',
      '/assets/images/hcapp/2.png',
      '/assets/images/hcapp/3.png',
      '/assets/images/hcapp/4.png',
    ],
    tags: [
      'React',
      'Typescript',
      'Firebase',
      'Javascript',
      'Material UI',
      'WebSockets',
      'Next.js',
    ],
    liveUrl: 'https://painel.hcapp.com.br/admin',
    completionDate: 'Janeiro 2025',
  },
  {
    id: 3,
    title: 'Plataforma de Checkout',
    description:
      'Sistema de checkout customizável para e-commerces, com layout dinâmico e integração com pagamentos.',
    longDescription:
      'Essa plataforma foi idealizada para oferecer uma experiência de finalização de compra mais fluida, rápida e personalizável. Atuei nesse projeto part-time ao longo da minha trajetória na HC App Software e Tecnologia, sendo responsável pela estruturação base do sistema. Embora o contrato com a empresa contratante tenha sido encerrado antes da entrega final, o projeto trouxe aprendizados sólidos com Angular e soluções modernas inspiradas em grandes plataformas de checkout.',
    technicalDetails:
      'O frontend foi construído majoritariamente com Angular, aproveitando recursos como módulos lazy-loaded, reactive forms, NgRx e services para garantir escalabilidade, organização e performance. No backend, utilizei Node.js com Firebase para estruturar uma API segura e responsiva. Os layouts foram baseados em protótipos do Figma, sempre priorizando responsividade e clareza na jornada de compra.',
    techDecisions: [
      {
        title: 'Layout Dinâmico e Intuitivo 🧭',
        description:
          'O design do checkout foi inspirado em experiências consolidadas no mercado, com foco em simplicidade, clareza nas etapas de compra e alta taxa de conversão.',
      },
      {
        title: 'Estrutura Modular com Angular 🧱',
        description:
          'Implementei uma arquitetura baseada em módulos lazy-loaded e reutilização de componentes, garantindo organização e melhor performance no carregamento.',
      },
      {
        title: 'Formulários Reativos e Validação Dinâmica 🧾',
        description:
          'Utilizei reactive forms do Angular para lidar com formulários complexos de maneira flexível, com validações dinâmicas e adaptáveis ao tipo de produto e usuário.',
      },
      {
        title: 'Backend com Node.js e Firebase 🔧',
        description:
          'Implementei a base da API para receber e tratar dados de pedidos, carrinho e pagamento, com foco em escalabilidade e segurança.',
      },
      {
        title: 'Colaboração com Design via Figma 🎨',
        description:
          'Interagi com o time de design utilizando Figma como ponte de validação visual, garantindo fidelidade no layout e responsividade.',
      },
    ],
    challenges: [
      {
        title: 'Manutenção de Estado entre Etapas do Checkout 🧠',
        description:
          'Gerenciar o estado global entre múltiplas etapas do processo de checkout exigiu estratégias eficientes com Services e RxJS, evitando perda de dados e mantendo fluidez.',
      },
      {
        title: 'Adaptação do Layout para Diversos Fluxos de Compra 🧩',
        description:
          'Criar componentes que se adaptassem a diferentes tipos de produto e jornada de compra foi um desafio técnico e de UX.',
      },
      {
        title: 'Integração Inicial com Gateways de Pagamento 💳',
        description:
          'Estruturei a base para futuras integrações com gateways de pagamento, prevendo suporte a checkout transparente, cartões e carteiras digitais.',
      },
    ],
    images: [
      '/assets/images/checkout/1.png',
      '/assets/images/checkout/2.png',
      '/assets/images/checkout/3.png',
    ],
    tags: [
      'Angular',
      'Typescript',
      'Node.js',
      'JavaScript',
      'MongoDB',
      'Checkout',
      'UX',
      'Figma',
    ],
    completionDate: 'Incompleto (Contrato encerrado em 2024)',
  },
  {
    id: 4,
    title: 'VEFORMA',
    description:
      'Sistema white-label de e-commerce com visualização interativa de produtos em 3D e realidade aumentada.',
    longDescription:
      'O VEFORMA é uma plataforma white-label voltada para e-commerces que desejam oferecer experiências imersivas de compra por meio de realidade aumentada. Com suporte à exibição de modelos 3D interativos, o sistema permite que os consumidores visualizem os produtos em escala real diretamente do navegador, aumentando a confiança na compra e, consequentemente, a taxa de conversão.',
    technicalDetails:
      'Participei do projeto VEFORMA nos primeiros meses, sendo responsável pela estrutura inicial do sistema. Utilizei React, Next.js e TypeScript para construir a base do projeto, incluindo a integração com a biblioteca modelViewer para renderização de modelos 3D. A arquitetura foi pensada para ser responsiva, SEO-friendly e preparada para suportar grandes volumes de tráfego, com suporte a múltiplos domínios personalizados e rotas dinâmicas por cliente.',

    techDecisions: [
      {
        title: 'Exibição Interativa com modelViewer 🧊',
        description:
          'Utilizei a biblioteca modelViewer do Google para renderizar modelos 3D em tempo real no navegador com suporte a AR (realidade aumentada) via dispositivos móveis.',
      },
      {
        title: 'Arquitetura White-Label 🏷️',
        description:
          'A estrutura modular permite que múltiplas lojas compartilhem a mesma base de código, cada uma com seu domínio, tema e catálogo de produtos personalizado.',
      },
      {
        title: 'Renderização com SSR e SEO-Friendly ⚙️',
        description:
          'Utilizei Next.js com Server-Side Rendering (SSR) e geração de páginas estáticas para garantir performance e otimização de SEO em todas as páginas de produto.',
      },
      {
        title: 'Integração com Gateways de Pagamento 💳',
        description:
          'Incluí suporte a diferentes métodos de pagamento e checkout transparente, com planos de expansão para integração com plataformas como Asaas.',
      },
      {
        title: 'Painel de Controle do Cliente 🧑‍💼',
        description:
          'Cada cliente possui um painel de administração para gerenciar seus produtos, modelos 3D, pedidos e configurações do site.',
      },
    ],
    challenges: [
      {
        title: 'Suporte Multiplataforma com Modelos 3D 📱',
        description:
          'Ajustar a renderização de modelos 3D para diferentes tamanhos de tela e sistemas operacionais (iOS/Android/Desktop) foi desafiador, especialmente mantendo a performance e a responsividade.',
      },
      {
        title: 'Gerenciamento de Recursos Pesados 🔄',
        description:
          'O carregamento otimizado de arquivos .glb e .usdz exigiu técnicas como compressão, pré-carregamento seletivo e lazy loading para manter a fluidez da navegação.',
      },
      {
        title: 'Customização White-Label Automatizada ⚙️',
        description:
          'Foi necessário criar uma lógica robusta de roteamento dinâmico e customização por cliente, mantendo segurança e performance mesmo com múltiplas lojas ativas simultaneamente.',
      },
    ],
    images: [
      '/assets/images/veforma/1.png',
      '/assets/images/veforma/2.png',
      '/assets/images/veforma/3.png',
      '/assets/images/veforma/4.png',
      '/assets/images/veforma/5.png',
      '/assets/images/veforma/6.png',
      '/assets/images/veforma/7.png',
    ],
    tags: [
      'React',
      'Next.js',
      'TypeScript',
      'modelViewer',
      '3D',
      'White-label',
    ],
    completionDate: 'Janeiro 2025',
  },
];
