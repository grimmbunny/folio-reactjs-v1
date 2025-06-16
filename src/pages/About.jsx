import React from "react";
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import Footer from "../components/Footer";
import {
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaBriefcase,
  FaCircle,
} from "react-icons/fa";
// import initLegacy from "../legacy/legacy-home";

// bg shapes (resolve via webpack)
// import shape1 from "../assets/img/bg/banner-shape-1.png";
// import obj3d1 from "../assets/img/bg/object-3d-1.png";
// import obj3d2 from "../assets/img/bg/object-3d-2.png";

export default function About() {
  // useEffect(() => {
  //   initLegacy(); // aciona o bootstrap jQuery
  // }, []);

  return (
    <div id="page-content">
      <Header />
      <main>
        <section className="content-box-area mt-4">
          <div className="container">
            <div className="row g-4">
              {/* profile card */}
              <div className="col-xl-4 d-flex">
                <ProfileCard />
              </div>

              {/* about content */}
              <div className="col-xl-8">
                <div className="card content-box-card shadow rounded-4 p-lg-4 p-3">
                  <div className="card-body">
                    {/* header block */}
                    <div className="d-flex justify-content-between flex-wrap align-items-start mb-4">
                      <div className="me-3">
                        <h1 className="main-title fw-bold mb-3">
                          Sobre <span>Mim</span> 👋
                        </h1>
                        <p className="mb-3">
                          Designer e Desenvolvedora Web que une criatividade e
                          código para entregar soluções visuais estratégicas,
                          funcionais e acessíveis; em evolução contínua rumo à
                          Full‑stack Designer T‑Shaped.
                        </p>
                        <div className="personal-stats d-flex flex-wrap gap-3 fs-6">
                          <span>
                            <FaBirthdayCake className="me-1" /> 28 anos
                          </span>
                          <span>
                            <FaMapMarkerAlt className="me-1" /> Niterói‑RJ,
                            Brasil
                          </span>
                          <span>
                            <FaBriefcase className="me-1" /> Remoto ou híbrido
                          </span>
                        </div>
                      </div>

                      <span className="badge bg-success align-self-start">
                        <FaCircle className="me-1" /> Disponível
                      </span>
                    </div>
                    <div className="row g-4">
                      <div className="col-lg-12">
                        <div className="cv-item">
                          <h3 className="mb-3">Experiência Profissional</h3>
                          <div className="scrollable-box">
                            <div className="experience-entry">
                              <h4>Designer Gráfica (Temporária)</h4>
                              <span className="period">
                                Agência Razow | ABR/2025 &amp; OUT/2024
                              </span>
                              <ul>
                                <li>
                                  Criação de peças digitais e impressas para
                                  campanhas pontuais.{" "}
                                </li>
                                <li>
                                  Recontratada pela qualidade e agilidade nas
                                  entregas.{" "}
                                </li>
                              </ul>
                            </div>
                            <div className="experience-entry">
                              <h4>Designer Gráfica &amp; Social Media</h4>
                              <span className="period">
                                D&amp;D Cosméticos | FEV/2024 - DEZ/2024
                              </span>
                              <ul>
                                <li>
                                  Desenvolvimento de KVs, impressos e conteúdo
                                  para redes sociais.{" "}
                                </li>
                                <li>
                                  Aumento do engajamento digital com peças
                                  promocionais.{" "}
                                </li>
                              </ul>
                            </div>
                            <div className="experience-entry">
                              <h4>Multidisciplinar Freelancer</h4>
                              <span className="period">
                                Muzza Studio | 2018 - Presente
                              </span>
                              <ul>
                                <li>
                                  Entrega de projetos de design, web e editorial
                                  para diversos clientes (PMEs e pessoas
                                  físicas).{" "}
                                </li>
                                <li>
                                  Atuação em projetos para clientes como Razow,
                                  Sapiens e Eleve Comunicação.{" "}
                                </li>
                              </ul>
                            </div>
                            <div className="experience-entry">
                              <h4>Designer Gráfica</h4>
                              <span className="period">
                                Fundação de Arte de Niterói | JAN/2022 -
                                DEZ/2022
                              </span>
                              <ul>
                                <li>
                                  Liderou branding e redes sociais de
                                  instituições culturais e direção de arte do
                                  ciclo "Modernismo(s)".{" "}
                                </li>
                              </ul>
                            </div>
                            <div className="experience-entry">
                              <h4>Designer Gráfica</h4>
                              <span className="period">
                                Agência Razow | SET/2020 - DEZ/2021
                              </span>
                              <ul>
                                <li>
                                  Criação de identidades e conteúdos para Evelyn
                                  Regly, VacaCast e MyMake.{" "}
                                </li>
                                <li>
                                  Desenvolvimento da identidade visual completa
                                  do podcast VacaCast.{" "}
                                </li>
                              </ul>
                            </div>
                            <div className="experience-entry">
                              <h4>Diagramadora &amp; Capista</h4>
                              <span className="period">
                                Editora Dialética | FEV/2021 - OUT/2021
                              </span>
                              <ul>
                                <li>
                                  Diagramação de livros físicos/digitais e
                                  criação de capas para autores.{" "}
                                </li>
                              </ul>
                            </div>
                            <div className="experience-entry">
                              <h4>Artista 2D &amp; UI/UX Designer</h4>
                              <span className="period">
                                ICAD / Vision Lab, PUC-Rio | JAN/2018 - DEZ/2019
                              </span>
                              <ul>
                                <li>
                                  Atuação no jogo Shape Arena (Premiado na
                                  SBGames 2019) como artista e UI designer.
                                </li>
                                <li>
                                  Criação do projeto solo de card-game
                                  "Constelário", exibido na SBGames 2019.{" "}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="cv-item">
                          <h3 className="mb-3">Educação &amp; Cursos</h3>
                          <div className="experience-entry">
                            <h4>Análise e Desenvolvimento de Sistemas</h4>
                            <span className="period">
                              Universidade Presbiteriana Mackenzie | FEV/24 -
                              MAI/26
                            </span>
                          </div>
                          <div className="experience-entry">
                            <h4>Pós-graduação em UI/UX</h4>
                            <span className="period">
                              Faculdade Unyleya | FEV/20 - FEV/21
                            </span>
                          </div>
                          <div className="experience-entry">
                            <h4>Desenho Industrial (Bacharelado)</h4>
                            <span className="period">
                              PUC-Rio | AGO/15 - DEZ/19
                            </span>
                          </div>
                          <div className="experience-entry">
                            <h4>Cursos Livres Relevantes</h4>
                            <p>
                              UX/UI &amp; Front-End (Origamid), Bootcamp Design
                              (Baseline), Google UX Design (Coursera).{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="cv-item">
                          <h3 className="mb-3">Principais Competências</h3>
                          <div className="row">
                            <div className="col-sm-6">
                              <h4 className="mb-2">Design &amp; UI/UX</h4>
                              <ul className="skills-list">
                                <li>Figma</li>
                                <li>Photoshop</li>
                                <li>Illustrator</li>
                                <li>After Effects</li>
                                <li>Blender</li>
                              </ul>
                            </div>
                            <div className="col-sm-6">
                              <h4 className="mb-2">Front-End</h4>
                              <ul className="skills-list">
                                <li>HTML &amp; CSS/SASS</li>
                                <li>JavaScript ES6+</li>
                                <li>React</li>
                                <li>Git &amp; Bootstrap</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="cv-item">
                          <div className="row align-items-center">
                            <div className="col-md-5 mb-4 mb-md-0">
                              <h3 className="mb-3">Idiomas</h3>
                              <div className="language-skill">
                                <div className="skill-info">
                                  <span>Português</span>
                                  <span>Nativo</span>
                                </div>
                                <div className="progress">
                                  <div
                                    className="progress-bar"
                                    style={{ width: "100%" }}
                                  />
                                </div>
                              </div>
                              <div className="language-skill mb-0">
                                <div className="skill-info">
                                  <span>Inglês</span>
                                  <span>Avançado (C1)</span>
                                </div>
                                <div className="progress">
                                  <div
                                    className="progress-bar"
                                    style={{ width: "90%" }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-7">
                              <h3 className="mb-3">Hobbies &amp; Interesses</h3>
                              <div className="hobbies-container">
                                <span className="skill-item">Arte</span>
                                <span className="skill-item">Animais</span>
                                <span className="skill-item">Games</span>
                                <span className="skill-item">Storytelling</span>
                                <span className="skill-item">
                                  Lira acrobática
                                </span>
                                <span className="skill-item">Tecnologia</span>
                                <span className="skill-item">
                                  Estética alternativa
                                </span>
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
          </div>
        </section>
        {/* <div className="background-shapes">
          <div className="shape-1 common-shape">
            <img src="assets/img/bg/banner-shape-1.png" alt="banner-shape-1" />
          </div>
          <div className="shape-2 common-shape">
            <img src="assets/img/bg/banner-shape-1.png" alt="banner-shape-1" />
          </div>
          <div className="threed-shape-1 move-with-cursor" data-value={1}>
            <img src="assets/img/bg/object-3d-1.png" alt="object-3d-1" />
          </div>
          <div className="threed-shape-2 move-with-cursor" data-value={1}>
            <img src="assets/img/bg/object-3d-2.png" alt="object-3d-2" />
          </div>
        </div> */}
      </main>
      <Footer />
    </div>
  );
}
