import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

// mapa simples id → dados (troque por fetch/CMS futuramente)
const PROJECTS = {
  tamatask: {
    title: "Tamatask · Task Manager Gamificado",
    year: "2025",
    category: "Product Design · UI/UX",
    cover: require("../assets/img/projects/tamatask square.jpg"),
    tools: ["Figma", "Blender", "React"],
    url: "https://tamatask.app",
    description: [
      "Tamatask é um gerenciador de tarefas inspirado em Tamagotchi, onde cada tarefa concluída alimenta seu mascote virtual.",
      "No projeto fui responsável pelo branding, fluxos de usuário, protótipos de alta fidelidade e hand‑off para desenvolvimento.",
    ],
    gallery: [
      require("../assets/img/projects/tamatask square.jpg"),
      require("../assets/img/projects/tamatask square.jpg"),
    ],
  },
  aimug: {
    title: "AIMug · AI Writing Tool",
    year: "2024",
    category: "UI/UX · Application",
    cover: require("../assets/img/projects/project-2.png"),
    tools: ["Figma", "Tailwind", "Next.js"],
    url: "https://aimug.ai",
    description: [
      "AIMug simplifica a criação de posts de blog e roteiros de vídeo usando IA.",
      "Desenvolvi o design system completo e protótipos responsivos.",
    ],
    gallery: [require("../assets/img/projects/tamatask square.jpg")],
  },
};

export default function PortfolioDetails() {
  const { slug } = useParams();
  const project = PROJECTS[slug];

  if (!project) {
    return (
      <div className="vh-100 d-flex flex-column justify-content-center align-items-center gap-3 text-center">
        <h1 className="display-5 fw-bold">Projeto não encontrado 😢</h1>
        <Link to="/portfolio" className="btn btn-primary">
          Voltar ao portfólio
        </Link>
      </div>
    );
  }

  return (
    <div id="page-content">
      <Header />

      <main className="portfolio-details-area py-5">
        <div className="container">
          <Link
            to="/portfolio"
            className="btn btn-sm btn-outline-secondary mb-4"
          >
            ← Voltar
          </Link>

          <div className="row g-5">
            {/* imagem de capa */}
            <div className="col-lg-7">
              <img
                src={project.cover}
                alt={project.title}
                className="img-fluid rounded-4 shadow"
              />
            </div>

            {/* metadata */}
            <div className="col-lg-5 d-flex flex-column gap-3">
              <h1 className="fw-bold">{project.title}</h1>
              <span className="badge bg-primary-subtle text-primary">
                {project.category}
              </span>
              <p className="text-muted mb-1">{project.year}</p>
              <p className="fw-semibold mb-1">Ferramentas:</p>
              <ul className="list-inline">
                {project.tools.map((t) => (
                  <li key={t} className="list-inline-item me-3">
                    • {t}
                  </li>
                ))}
              </ul>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-auto"
                >
                  Visitar projeto ↗
                </a>
              )}
            </div>
          </div>

          {/* descrição */}
          <section className="mt-5">
            {project.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>

          {/* galeria */}
          <section className="row g-4 mt-2 parent-container">
            {project.gallery.map((img, i) => (
              <div className="col-md-6" key={i}>
                <a href={img} className="gallery-popup d-block">
                  <img
                    src={img}
                    alt={project.title + " screenshot " + (i + 1)}
                    className="img-fluid rounded-3"
                  />
                </a>
              </div>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
