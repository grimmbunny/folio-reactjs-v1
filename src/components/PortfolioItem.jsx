import tamaImg from "../assets/img/projects/tamatask square.jpg";

const portfolioItems = [
  {
    id: 1,
    slug: "tama",
    title: "Tama",
    subtitle: "WebApp",
    // imagem principal
    mainImage: tamaImg,
    img: tamaImg,
    // miniaturas internas
    innerImages: [tamaImg, tamaImg],
    clientFor: "FlexiFlow",
    services: ["Product Design", "Development"],
    link: "https://…",
    website: "https://demo.flexiflow.com",
    // array de parágrafos
    overview: [
      "Este projeto consistiu na criação de um dashboard responsivo…",
      "Foram usadas React, Tailwind e Charts.js para visualização de dados.",
    ],
    // array de objetos desafio/solução
    challenges: [
      {
        title: "Responsive em telas pequenas",
        description: "Os gráficos ficavam ilegíveis em mobile.",
        solution: "Simplificamos os dashboards e criamos painéis colapsáveis.",
      },
      {
        title: "Performance de carregamento",
        description: "Dados eram grandes e lentos para processar.",
        solution: "Implementamos lazy‐loading e cache local.",
      },
    ],
    // resultado final
    results:
      "O app alcançou 40% mais engajamento e reduziu o tempo de carregamento em 60%.",
  },
  {
    id: 2,
    title: "Tama",
    subtitle: "WebApp",
    img: tamaImg, // JPEG importado
    link: "https://…",
  },
  {
    id: 3,
    title: "Tama",
    subtitle: "WebApp",
    img: tamaImg, // JPEG importado
    link: "https://…",
  },
  {
    id: 4,
    title: "Tama",
    subtitle: "WebApp",
    img: tamaImg, // JPEG importado
    link: "https://…",
  },
  // se tiver mais itens, bote aqui…
];

export default portfolioItems;
