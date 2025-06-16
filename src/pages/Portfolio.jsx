import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";

// imgs (coloque em /public/assets ou importe)
import tamataskThumb from "../assets/img/projects/tamatask square.jpg";
import proj2Thumb from "../assets/img/projects/project-2.png";
import proj3Thumb from "../assets/img/projects/project-3.png";

export default function Portfolio() {
  return (
    <div id="page-content">
      <Header />

      <section className="content-box-area mt-4">
        <div className="container">
          <div className="row g-4">
            {/* coluna lateral com perfil */}
            <div className="col-xl-4">
              <ProfileCard />
            </div>

            {/* coluna principal */}
            <div className="col-xl-8">
              <div className="card content-box-card">
                <div className="card-body portfolio-card">
                  <h1 className="main-title mb-4">
                    Projetos <span>selecionados</span>
                  </h1>

                  {/* ---------- grid de projetos ---------- */}
                  <div className="row g-4 parent-container row-cols-1 row-cols-md-2">
                    {[
                      {
                        img: tamataskThumb,
                        title: "Tamatask – Product Design",
                        link: "/portfolio/tamatask",
                        desc: "Product Design · UI/UX",
                      },
                      {
                        img: proj2Thumb,
                        title: "AIMug – AI Writing Tool",
                        link: "/portfolio/aimug",
                        desc: "UI/UX · Application",
                      },
                      {
                        img: proj3Thumb,
                        title: "FlowArch – Website",
                        link: "/portfolio/flowarch",
                        desc: "UI/UX · Dev",
                      },
                    ].map((p) => (
                      <div className="col" key={p.link}>
                        <div className="portfolio-item">
                          <div className="image">
                            <img
                              src={p.img}
                              alt={p.title}
                              className="img-fluid w-100"
                            />
                            {/* lightbox */}
                            <a
                              href={p.img}
                              className="gallery-popup full-image-preview parent-container"
                            >
                              <svg
                                className="icon"
                                viewBox="0 0 20 20"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              >
                                <path d="M10 4.167v11.666M4.167 10h11.666" />
                              </svg>
                            </a>
                          </div>

                          <div className="info mt-3">
                            <Link to={p.link} className="title d-block">
                              {p.title}
                            </Link>
                            <p className="subtitle small text-muted mb-2">
                              {p.desc}
                            </p>
                            <Link to={p.link} className="visite-btn">
                              Visit Site&nbsp;↗
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* paginação placeholder */}
                  <nav className="mt-5">
                    <ul className="pagination justify-content-center mb-0 gap-2">
                      <li className="page-item">
                        <button className="page-link">‹</button>
                      </li>
                      {[1, 2, 3].map((n) => (
                        <li key={n} className="page-item">
                          <button className="page-link">{n}</button>
                        </li>
                      ))}
                      <li className="page-item">
                        <button className="page-link">›</button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
