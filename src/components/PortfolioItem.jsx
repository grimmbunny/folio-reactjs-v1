// src/components/PortfolioItem.jsx
import tamaImg from "../assets/img/projects/tamatask square.jpg";

const portfolioItems = [
  {
    id: 1,
    slug: "tama",
    title: "TamaTask Webapp",
    categories: ["Web"],
    selected: true,
    img: "../assets/img/projects/tamatask square-s.jpg",
    // miniaturas internas
    innerImages: [],
    clientFor: "Personal Project",
    services: ["HTML", "CSS", "JavaScript (Vanilla)", "LocalStorage", "Vercel"], // Atualizado
    website: "https://webapp-tamatask.vercel.app/",
    // array de parágrafos
    overview: [
      "O projeto é uma aplicação web chamada TamaTask WebApp que combina gerenciador de tarefas, temporizador Pomodoro e um mascote virtual. A interface é inspirada em um Tamagotchi: o usuário pode alimentar, dar carinho e fazer o pet dormir, acumulando pontos de experiência (XP) e subindo de nível.",
    ],

    text1:
      "Para criar uma experiência completa de produtividade e bem-estar, a aplicação integra diversas ferramentas essenciais. O usuário pode gerenciar suas atividades com uma **lista de tarefas** dinâmica, que permite adicionar e marcar itens como concluídos. Para o gerenciamento de tempo, foi implementado um **temporizador Pomodoro** completo, com controles para iniciar, pausar e reiniciar os ciclos de foco. A gamificação é um elemento central, visível nos **indicadores de progresso** (XP, tarefas, foco, comida, amor e descanso), que evoluem conforme as interações. O ambiente é complementado por um **player de músicas 'lo-fi'** com seleção de faixas e volume, e um **bloco de notas** para anotações rápidas, enquanto **notificações (toasts)** celebram as recompensas em XP, reforçando o engajamento.",
    text2: [
      "O código é totalmente em HTML, CSS e JavaScript (vanilla), sem frameworks. Há ainda um módulo opcional para usar localStorage e salvar o progresso do usuário (nível, XP e tarefas). Os assets incluem imagens do pet/reações e sons de aviso.",
      "“Gamificação” com funcionalidades de produtividade / manipulação do DOM, controle de áudio, animações por CSS e integração com APIs do navegador (como o localStorage).",
    ],
  },
  {
    id: 12,
    slug: "portfolio-2025",
    title: "Portfólio 2025",
    categories: ["Web"],
    selected: true,
    img: "../assets/img/projects/portfolio 2025-s.jpg",
    innerImages: [],
    clientFor: "Projeto Pessoal",
    services: [
      "React",
      "React Router",
      "jQuery",
      "Bootstrap",
      "Magnific Popup",
      "Slick Carousel",
      "HTML",
      "CSS",
      "Vercel",
    ], // Atualizado
    website: "https://www.madebyflavia.com/",
    overview: [
      "Este portfólio web foi desenvolvido com React, integrando o React Router para navegação entre páginas e componentes personalizados que organizam as seções como Home, Sobre, Serviços e Portfólio.",
      "Embora baseado em uma estrutura moderna com React, o projeto também incorpora recursos visuais legados utilizando jQuery, permitindo integrar plugins como Magnific Popup (para lightbox em galerias) e Slick Carousel (para sliders responsivos). Para isso, o carregamento inicial do app expõe jQuery no escopo global e aplica estilos adicionais por meio de arquivos CSS convertidos de JavaScript vanilla.",
    ],
    text1: `O portfólio apresenta:

• Lista de projetos filtrável com categorias, carregada dinamicamente.

• Páginas de detalhes para cada projeto, acessadas via rota com slug (por exemplo, /portfolio/tama).

• Um script legado (legacy-home.js) que cuida de interações visuais como:
  – Alternância de modo escuro,
  – Menu mobile com animação,
  – Efeitos de transição nas galerias de imagem.`,
    text2: [
      "O layout é responsivo e foi iniciado a partir do Create React App. O projeto utiliza Bootstrap para estruturação de grid, React Icons para ícones personalizados e recursos adicionais herdados do template original em HTML/CSS.",
      "Principais tecnologias: React · React Router · jQuery · Bootstrap · Magnific Popup · Slick Carousel · HTML/CSS modularizado",
    ],
  },
  {
    id: 2,
    slug: "design-social",
    title: "Trabalhos de design - Social Media",
    categories: ["Design"],
    img: "https://i.imgur.com/Qe3aCI0.jpg",
    website: "/portfolio/design-social",
    services: [],
  },
  {
    id: 3,
    slug: "design-diagramacao",
    title: "Trabalhos de design - Diagramação",
    categories: ["Design"],
    img: "https://i.imgur.com/AqNjAn6.png",
    website: "/portfolio/design-diagramacao",
    services: [],
  },
  {
    id: 4,
    slug: "design-slides",
    title: "Trabalhos de design - Slides e Pitch Decks",
    categories: ["Design"],
    img: "https://i.imgur.com/bWbqbbR.png",
    website: "/portfolio/design-slides",
    services: [],
  },
  {
    id: 5,
    slug: "design-branding",
    title: "Trabalhos de design - Branding e ID visual",
    categories: ["Design"],
    img: "https://i.imgur.com/y776Qs8.png",
    website: "/portfolio/design-branding",
    services: [],
  },
  {
    id: 6,
    slug: "pawsitiva",
    title: "Web Design Pawsitiva",
    categories: ["Web"],
    img: "https://i.imgur.com/AMTcIDI.png",
    innerImages: [],
    clientFor: "Concept",
    services: ["Figma"], // Atualizado
    website:
      "https://www.figma.com/design/VOdXNAVVW4MsxGN3rlHjNO/Wireframe-1?node-id=1-2",
    overview: ["Feito no figma, ainda não implementada"],
    text1: "",
    text2: [],
  },
  {
    id: 7,
    slug: "studio-muza",
    title: "Studio website",
    categories: ["Web"],
    img: "https://i.imgur.com/TtjgZcG.png",
    innerImages: [],
    clientFor: "",
    services: [
      "HTML",
      "CSS",
      "JavaScript (Vanilla)",
      "jQuery",
      "Bootstrap",
      "Vercel",
    ], // Atualizado
    website: "https://studiomuza-32m8dcbc2-grimmbunnys-projects.vercel.app/",
    overview: ["Responsivo. HTML, CSS, vanilla JS & JQuery, Bootstrap."],
    text1: "",
    text2: [],
  },
  {
    id: 8,
    slug: "clone-disney",
    title: "Clone da Disney+",
    categories: ["Web"],
    img: "https://i.imgur.com/Vb4uwWd.png",
    innerImages: [],
    clientFor: "Estudo",
    services: ["HTML", "SASS", "JavaScript (Vanilla)", "Gulp", "Vercel"], // Atualizado
    website: "https://clone-disneyplus-bs1y5h2ac-grimmbunny.vercel.app/",
    overview: ["Responsivo. HTML, SASS, vanilla JS, Gulp."],
    text1: "",
    text2: [],
  },
  {
    id: 9,
    slug: "portfolio-dev",
    title: "Personal portfolio Dev - Design 2023",
    categories: ["Web"],
    img: "https://i.imgur.com/lSCp5Zc.png",
    innerImages: [],
    clientFor: "Projeto próprio",
    services: ["HTML", "CSS", "JavaScript (Vanilla)", "Vercel"], // Atualizado
    website: "https://madebyflavia.dev/",
    overview: ["Responsivo. HTML, CSS, vanilla JS."],
    text1: "",
    text2: [],
  },
  {
    id: 10,
    slug: "portfolio-art",
    title: "Personal portfolio - Arte 2023",
    categories: ["Web"],
    img: "https://i.imgur.com/1mzHhep.png",
    innerImages: [],
    clientFor: "Projeto próprio",
    services: ["HTML", "CSS", "JavaScript (Vanilla)", "Vercel"], // Atualizado
    website: "https://madebyflavia.art/",
    overview: ["Responsivo. HTML, CSS, vanilla JS."],
    text1: "",
    text2: [],
  },
  {
    id: 11,
    slug: "landing-ebac",
    title: "Clone landing page EBAC",
    categories: ["Web"],
    img: "https://i.imgur.com/czr5LVm.png",
    innerImages: [],
    clientFor: "Estudo",
    services: ["HTML", "SASS", "JavaScript (Vanilla)", "Parcel", "Vercel"], // Atualizado
    website: "https://landingpage-proj-mt39959mr-grimmbunny.vercel.app/",
    overview: ["Responsivo. HTML, SASS, vanilla JS, Parcel."],
    text1: "",
    text2: [],
  },
  {
    id: 13,
    slug: "cliente1",
    title: "Portfolio",
    categories: ["Web"],
    img: "../assets/img/projects/cliente1.jpg",
    innerImages: [],
    clientFor: "Adriana",
    services: ["JavaScript", "Vercel"], // Atualizado
    website: "https://demo-cliente1.vercel.app",
    overview: ["Website desenvolvido como demonstração para o cliente 1."],
    text1: "Projeto implementado utilizando JS e estilização personalizada.",
    text2: ["Possui páginas institucionais e componentes reutilizáveis."],
  },
];

export default portfolioItems;
