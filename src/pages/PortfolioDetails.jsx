// src/pages/PortfolioDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import portfolioItems from "../components/PortfolioItem";

export default function PortfolioDetails() {
  const { slug } = useParams();
  const item = portfolioItems.find((p) => p.slug === slug);

  if (!item) {
    return (
      <div id="page-content">
        <Header />
        <main className="container py-5">
          <h2>Projeto não encontrado.</h2>
          <Link to="/portfolio" className="btn btn-primary mt-3">
            Voltar ao Portfólio
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Função para renderizar parágrafos que podem conter HTML (como <b> ou <i>)
  const renderHTML = (rawHTML) =>
    React.createElement("p", { dangerouslySetInnerHTML: { __html: rawHTML } });

  return (
    <div id="page-content">
      <Header />

      <main>
        <section className="content-box-area mt-4">
          <div className="container">
            <div className="row g-4">
              {/* sidebar/profile column */}{" "}
              <ProfileCard className="d-none d-md-block" />
              {/* details column */}
              <div className="col-xl-8">
                <div className="card content-box-card">
                  <div className="card-body portfolio-card">
                    <div className="portfolio-details-area">
                      {/* Main image */}
                      <div className="main-image mb-4">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="img-fluid w-100 rounded"
                        />
                      </div>

                      {/* Short info */}
                      <div className="portfolio-details-text mb-4">
                        <div className="short-info d-flex flex-wrap mb-3">
                          <div className="info-item me-5">
                            <p className="subtitle mb-1">Client For:</p>
                            <h4 className="card-title">{item.clientFor}</h4>
                          </div>
                          <div className="info-item">
                            <p className="subtitle mb-1">Services:</p>
                            <h4 className="card-title">
                              {item.services.join(", ")}
                            </h4>
                            <a
                              href={item.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="website d-inline-flex align-items-center mt-2"
                            >
                              Live Demo
                              <svg
                                className="ms-1"
                                width={14}
                                height={15}
                                viewBox="0 0 14 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.91634 4.5835L4.08301 10.4168"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M4.66699 4.5835H9.91699V9.8335"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>

                        {/* Overview */}
                        <div className="overview mb-4">
                          <h4 className="card-title mb-3">Overview</h4>
                          {/* O 'dangerouslySetInnerHTML' é usado para renderizar o negrito (**) do seu texto como HTML */}
                          {item.overview.map((paragraph, idx) => (
                            <p
                              key={idx}
                              dangerouslySetInnerHTML={{ __html: paragraph }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Inner images */}
                      <div className="inner-images mb-4">
                        <div className="row g-3">
                          {item.innerImages.map((imgSrc, idx) => (
                            <div key={idx} className="col-md-6">
                              <div className="image-item">
                                <img
                                  src={imgSrc}
                                  alt={`${item.title} screenshot ${idx + 1}`}
                                  className="img-fluid w-100 rounded"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* ======== CORREÇÃO #1 ======== */}
                      {/* 'text1' agora é uma string, então renderizamos diretamente */}
                      <div className="more-info-block mb-4">
                        <h4 className="card-title mb-3">
                          Funcionalidades e Desafios
                        </h4>
                        <p dangerouslySetInnerHTML={{ __html: item.text1 }} />
                      </div>

                      {/* ======== CORREÇÃO #2 ======== */}
                      {/* 'text2' é um array, então usamos .map para renderizar */}
                      <div className="more-info-block mb-4">
                        <h3 className="more-info-title mb-3">Conclusão</h3>
                        {item.text2.map((paragraph, idx) => (
                          <p
                            key={idx}
                            dangerouslySetInnerHTML={{ __html: paragraph }}
                          />
                        ))}
                      </div>

                      {/* Back button */}
                      <div className="prev-and-next-btn">
                        <Link to="/portfolio" className="btn btn-prev">
                          Voltar ao Portfólio
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
