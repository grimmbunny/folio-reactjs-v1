import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import items from "../components/PortfolioItem";

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

            <ProfileCard />

            {/* coluna principal */}
            <div className="col-xl-8">
              <div className="card content-box-card">
                <div className="card-body portfolio-card">
                  <div className="top-info">
                    <div className="text">
                      <h1 className="main-title">
                        Projetos <span>selecionados</span>
                      </h1>
                      {/* <p>I'm here to help if you're searching for a product designer to bring your idea to life or a
                  design partner to help take your business to the next level.</p> */}
                    </div>
                  </div>
                  <div className="portfolio-area">
                    <div className="row g-4 parent-container row-cols-1 row-cols-md-2 ">
                      {items.map((item) => (
                        <div className="col-12 col-md-6">
                          <div key={item.id} className="portfolio-item">
                            <Link to={`/portfolio/${item.slug}`}>
                              <div className="image">
                                <img src={item.img} alt={item.title} />
                              </div>
                            </Link>
                            <div className="text">
                              <div className="info">
                                <Link
                                  to={`/portfolio/${item.slug}`}
                                  className="title"
                                >
                                  {item.title}
                                </Link>
                                <p className="subtitle">{item.subtitle}</p>
                                <div className="visite-btn">
                                  <Link to={item.link}>
                                    Visit Site
                                    <svg
                                      className="arrow-up"
                                      width={14}
                                      height={15}
                                      viewBox="0 0 14 15"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.91634 4.5835L4.08301 10.4168"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M4.66699 4.5835H9.91699V9.8335"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="pagination">
                      <ul className="list-unstyled">
                        <li className="prev">
                          <button>
                            <svg
                              className="icon"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                              />
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button>1</button>
                        </li>
                        <li>
                          <button>2</button>
                        </li>
                        <li>
                          <button>3</button>
                        </li>
                        <li>
                          <button className="next-page-btn">
                            <span className="dots">
                              <i className="fas fa-ellipsis-h" />
                            </span>
                            <span className="next-page">
                              <svg
                                className="icon icon-arrow-right"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="m6 17 5-5-5-5" />
                                <path d="m13 17 5-5-5-5" />
                              </svg>
                            </span>
                            <span className="next-page-number">
                              Next 4 pages
                            </span>
                          </button>
                        </li>
                        <li>
                          <button>100</button>
                        </li>
                        <li className="next">
                          <button>
                            <svg
                              className="icon"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                              />
                            </svg>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
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
