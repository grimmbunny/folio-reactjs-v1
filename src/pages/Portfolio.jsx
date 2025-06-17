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
                      <div className="col-12 col-md-6">
                        <div className="portfolio-item">
                          <div className="image">
                            <img
                              src="assets/img/projects/tamatask square.jpg"
                              alt="project-1"
                              className="img-fluid w-100"
                            />
                            <a
                              href="assets/img/projects/tamatask square.jpg"
                              className="gallery-popup full-image-preview parent-container"
                            >
                              <svg
                                className="icon"
                                xmlns="http://www.w3.org/2000/svg"
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
                          <div className="text">
                            <div className="info">
                              <a
                                href="portfolio-details-tamatask.html"
                                className="title"
                              >
                                FlowSaaS - SaaS Application Tools
                              </a>
                              <p className="subtitle">
                                SaaS App | UI UX Design
                              </p>
                              <div className="visite-btn">
                                <a href="portfolio-details-tamatask.html">
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
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="portfolio-item">
                          <div className="image">
                            <img
                              src="assets/img/projects/project-2.png"
                              alt="project-2"
                              className="img-fluid w-100"
                            />
                            <a
                              href="assets/img/projects/project-2.png"
                              className="gallery-popup full-image-preview parent-container"
                            >
                              <svg
                                className="icon"
                                xmlns="http://www.w3.org/2000/svg"
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
                          <div className="text">
                            <div className="info">
                              <a
                                href="portfolio-details.html"
                                className="title"
                              >
                                AIMug - AI Writing Application Tools
                              </a>
                              <p className="subtitle">
                                Product Design | Application
                              </p>
                              <div className="visite-btn">
                                <a href="portfolio-details.html">
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
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="portfolio-item">
                          <div className="image">
                            <img
                              src="assets/img/projects/project-3.png"
                              alt="project-3"
                              className="img-fluid w-100"
                            />
                            <a
                              href="assets/img/projects/project-3.png"
                              className="gallery-popup full-image-preview parent-container"
                            >
                              <svg
                                className="icon"
                                xmlns="http://www.w3.org/2000/svg"
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
                          <div className="text">
                            <div className="info">
                              <a
                                href="portfolio-details.html"
                                className="title"
                              >
                                FlowArch - Architecture Service Website
                              </a>
                              <p className="subtitle">
                                UI UX Design | Development
                              </p>
                              <div className="visite-btn">
                                <a href="portfolio-details.html">
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
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
