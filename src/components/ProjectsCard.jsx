import React from "react";
import { Link } from "react-router-dom";
import project1 from "../assets/img/projects/tamatask square.jpg";
import project2 from "../assets/img/projects/tamatask square.jpg";

/**
 * ProjectsCard – 2x2 teaser grid linking to full Portfolio page.
 * Replace thumbnails or expand to React‑Slick later for auto‑scroll.
 */
const projects = [
  { src: project1, alt: "Dashboard SaaS", slug: "dashboard-saas" },
  { src: project2, alt: "e‑Commerce UI Kit", slug: "ecommerce-ui" },
  //   { src: project3, alt: "Illustration Series", slug: "illustration-series" },
  //   { src: project4, alt: "TamaTask Webapp", slug: "tamatask" },
];

export default function ProjectsCard() {
  return (
    <div className="card projects-card shadow rounded-4">
      <div className="card-body p-0 overflow-hidden">
        <div className="d-flex justify-content-between align-items-center p-4">
          <h3 className="card-title fw-bold m-0">Projetos em Destaque</h3>
          <Link to="/portfolio" className="btn btn-sm btn-outline-primary">
            Ver todos
          </Link>
        </div>

        <div className="row g-0">
          {projects.map((p, idx) => (
            <div key={idx} className="col-6 border-top border-end">
              <Link
                to={`/portfolio/${p.slug}`}
                className="d-block w-100 h-100 position-relative"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  className="img-fluid w-100 h-100 object-fit-cover"
                  style={{ aspectRatio: "1 / 1" }}
                />
                <span className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-25 opacity-0 hover-opacity-100 transition-opacity" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
