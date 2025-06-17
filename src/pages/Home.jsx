import React from "react";
// import { Helmet, HelmetProvider } from "@dr.pogodin/react-helmet";

import ProfileCard from "../components/ProfileCard";

// import { FaGithub, FaBehance, FaLinkedinIn, FaLink } from "react-icons/fa";
import { FaWhatsapp, FaRegEnvelope } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import portfolioItems from "../components/PortfolioItem";

export default function Home() {
  return (
    <div id="page-content">
      <Header />

      <main>
        <section className="home-area">
          <div className="container">
            <div className="row g-4">
              <ProfileCard />
              <div className="col-xl-4">
                {/* TIMELINE */}
                <div className="card timeline-card mb-4">
                  <div className="card-body">
                    <h3 className="card-title">Timeline</h3>
                    <div className="timeline-main mt-24">
                      <ul className="timeline-list timeline-slider list-unstyled">
                        <li className="timeline-item">
                          <div className="date">
                            <p>2018 – Presente</p>
                          </div>
                          <div className="info">
                            <h4 className="title">
                              Freelancer Multidisciplinar
                            </h4>
                            <h6 className="subtitle">Muzza Studio</h6>
                            <ul className="details">
                              <li>
                                Entregou projetos de design, web e editorial
                                para diversos clientes (PMEs e pessoas físicas).
                              </li>
                              <li>
                                Atuou em projetos para Razow, Sapiens e Eleve
                                Comunicação.
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="timeline-item">
                          <div className="date">
                            <p>ABR/2025 &amp; OUT/2024</p>
                          </div>
                          <div className="info">
                            <h4 className="title">
                              Designer Gráfica (Temporária)
                            </h4>
                            <h6 className="subtitle">Agência Razow</h6>
                            <ul className="details">
                              <li>
                                Recontratada pela qualidade e agilidade nas
                                entregas.
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="timeline-item">
                          <div className="date">
                            <p>FEV/2024 – MAI/2026</p>
                          </div>
                          <div className="info">
                            <h4 className="title">
                              Análise e Desenvolvimento de Sistemas
                            </h4>
                            <h6 className="subtitle">
                              Universidade Presbiteriana Mackenzie
                            </h6>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* SKILLSET */}
                <div className="card skillset-card">
                  <div className="card-body">
                    <h3 className="card-title">Skillset</h3>
                    {/* TOOLS */}
                    <div className="tools-main mt-24">
                      <div className="tools-slider gap-4">
                        <div className="expertise-item text-center">
                          <div className="image mb-2">
                            <img
                              src="assets/img/icons/photoshop.svg"
                              alt="Photoshop"
                            />
                          </div>
                          <h4 className="title fs-6 mb-0">Photoshop</h4>
                        </div>
                        <div className="expertise-item text-center">
                          <div className="image mb-2">
                            <img
                              src="assets/img/icons/indesign.svg"
                              alt="InDesign"
                            />
                          </div>
                          <h4 className="title fs-6 mb-0">InDesign</h4>
                        </div>
                        <div className="expertise-item text-center">
                          <div className="image mb-2">
                            <img
                              src="assets/img/icons/illustrator.svg"
                              alt="Illustrator"
                            />
                          </div>
                          <h4 className="title fs-6 mb-0">Illustrator</h4>
                        </div>
                        <div className="expertise-item text-center">
                          <div className="image mb-2">
                            <img src="assets/img/icons/adobe.svg" alt="Adobe" />
                          </div>
                          <h4 className="title fs-6 mb-0">Adobe</h4>
                        </div>
                        <div className="expertise-item text-center">
                          <div className="image mb-2">
                            <img src="assets/img/icons/figma.svg" alt="Figma" />
                          </div>
                          <h4 className="title fs-6 mb-0">Figma</h4>
                        </div>
                        <div className="expertise-item text-center">
                          <div className="image mb-2">
                            <img src="assets/img/icons/css.svg" alt="CSS3" />
                          </div>
                          <h4 className="title fs-6 mb-0">CSS</h4>
                        </div>
                        <div className="expertise-item text-center">
                          <div className="image mb-2">
                            <img src="assets/img/icons/html.svg" alt="HTML5" />
                          </div>
                          <h4 className="title fs-6 mb-0">HTML</h4>
                        </div>
                        <div className="expertise-item text-center">
                          <div className="image mb-2">
                            <img
                              src="assets/img/icons/javascript.svg"
                              alt="JavaScript"
                            />
                          </div>
                          <h4 className="title fs-6 mb-0">JavaScript</h4>
                        </div>
                        <div className="expertise-item text-center">
                          <div className="image mb-2">
                            <img
                              src="assets/img/icons/bootstrap.svg"
                              alt="Bootstrap"
                            />
                          </div>
                          <h4 className="title fs-6 mb-0">Bootstrap</h4>
                        </div>
                        <div className="expertise-item text-center">
                          <div className="image mb-2">
                            <img src="assets/img/icons/react.svg" alt="React" />
                          </div>
                          <h4 className="title fs-6 mb-0">React</h4>
                        </div>
                        <div className="expertise-item text-center">
                          <div className="image mb-2">
                            <img
                              src="assets/img/icons/github.svg"
                              alt="GitHub"
                            />
                          </div>
                          <h4 className="title fs-6 mb-0">GitHub</h4>
                        </div>
                        <div className="expertise-item text-center">
                          <div className="image mb-2">
                            <img src="assets/img/icons/vite.svg" alt="Vite" />
                          </div>
                          <h4 className="title fs-6 mb-0">Vite</h4>
                        </div>
                      </div>
                    </div>
                    {/* SOFT SKILLS */}
                    <div className="skills-main mt-4">
                      <div className="skills-slider d-flex flex-wrap gap-2">
                        <span className="skill-item badge ">multitasking</span>
                        <span className="skill-item badge ">autonomia</span>
                        <span className="skill-item badge ">visão 360º</span>
                        <span className="skill-item badge ">flexibilidade</span>
                        <span className="skill-item badge ">tech fluency</span>
                        <span className="skill-item badge  ">
                          growth mindset
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card card-projects">
                  <div className="card-body">
                    <h3 className="card-title">
                      Recent Projects{" "}
                      <a className="link-btn" href="/portfolio">
                        All Projects
                        <svg
                          className="icon"
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.16699 10H15.8337"
                            stroke="#4770FF"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10.833 15L15.833 10"
                            stroke="#4770FF"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10.833 5L15.833 10"
                            stroke="#4770FF"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </h3>
                    <div className="projects-main mt-24">
                      <div className="row g-4 parent-container">
                        <div className="col-lg-12">
                          <div className="project-item">
                            <div className="image ratio ratio-1x1">
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
                              <div className="info">
                                <span className="category">Product Design</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="project-item">
                            <div className="image ratio ratio-1x1">
                              <img
                                src="assets/img/projects/tamatask square.jpg"
                                alt="project-2"
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
                              <div className="info">
                                <span className="category">Product Design</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="services-area mt-24">
              <div className="row g-4">
                <div className="col-xl-8">
                  <div className="card services-card">
                    <div className="card-body">
                      <h3 className="card-title">
                        Serviços
                        <a className="link-btn" href="/services">
                          Todos os serviços
                          <svg
                            className="icon"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.16699 10H15.8337"
                              stroke="#4770FF"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10.833 15L15.833 10"
                              stroke="#4770FF"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10.833 5L15.833 10"
                              stroke="#4770FF"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </h3>
                      <div className="services-main mt-24">
                        <div className="row g-4">
                          <div className="col-lg-6">
                            <div className="service-category">
                              <div className="category-header">
                                <i className="fas fa-palette" />
                                <h4>Design</h4>
                              </div>
                              <ul className="service-list">
                                <li>Design digital &amp; social</li>
                                <li>Design para impressos</li>
                                <li>Ilustração e 3D</li>
                                <li>Design de interface/UI</li>
                                <li>
                                  Criação ou ajuste de wireframes e protótipos
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="service-category">
                              <div className="category-header">
                                <i className="fas fa-code" />
                                <h4>Developer</h4>
                              </div>
                              <ul className="service-list">
                                <li>Landing pages</li>
                                <li>Portfolio</li>
                                <li>Componentização em framework</li>
                                <li>Manutenção de código front-end</li>
                                <li>Conversão de design para código</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="card lets-talk-together-card">
                    <div className="card-body">
                      <div className="scrolling-info">
                        <div className="slider-item">
                          <p>
                            Disponível para projetos 🚀 Disponível para
                            oportunidades fixas 🎨 Disponível para projetos 🚀
                            Disponível para oportunidades fixas 🎨
                          </p>
                        </div>
                      </div>
                      <h3 className="card-title">
                        Para orçamentos,{" "}
                        <span className="d-block">dúvidas e contato</span>
                      </h3>

                      <div className="contact-info-wrap">
                        <a
                          href="mailto:muzzastudio@outlook.com"
                          className="contact-info-link d-flex align-items-center gap-2"
                        >
                          <FaRegEnvelope size={16} />
                          muzzastudio@outlook.com
                        </a>

                        <a
                          href="mailto:flavuskka@gmail.com"
                          className="contact-info-link d-flex align-items-center gap-2"
                        >
                          <FaRegEnvelope size={16} />
                          flavuskka@gmail.com
                        </a>

                        <a
                          href="https://wa.me/5521967332761"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-info-link d-flex align-items-center gap-2"
                        >
                          <FaWhatsapp size={16} />
                          +55 (21) 96733-2761
                        </a>
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
