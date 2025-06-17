import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import {
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaBriefcase,
  FaCircle,
} from "react-icons/fa";

export default function Services() {
  return (
    <>
      <div id="page-content">
        <Header />
        <main>
          <section className="content-box-area mt-4">
            <div className="container">
              <div className="row g-4">
                <ProfileCard />

                <div className="col-xl-8">
                  <div className="card content-box-card">
                    <div className="card-body">
                      <div className="top-info">
                        <div className="text">
                          <h1 className="main-title">
                            Serviços &amp; <span>Metodologia</span>
                          </h1>
                          <p>
                            Do conceito à implementação, ofereço soluções
                            integradas de <b>Design e Desenvolvimento</b>
                            para elevar a sua presença digital.
                          </p>
                        </div>
                        <div className="available-btn">
                          <span>
                            <FaCircle className="me-1" /> Disponível
                          </span>
                        </div>
                      </div>
                      <div className="services-area-main">
                        <div className="row g-4">
                          <div className="col-lg-6">
                            <div className="service-category h-100">
                              <div className="category-header">
                                <i className="fas fa-object-group" />
                                <h4>UI/UX &amp; Product Design</h4>
                              </div>
                              <p>
                                Crio interfaces intuitivas e experiências de
                                usuário que não apenas encantam, mas também
                                convertem, baseadas em pesquisa e análise de
                                dados.
                              </p>
                              <ul className="service-list mt-3">
                                <li>Pesquisa de Usuário e Jornadas</li>
                                <li>Wireframes e Fluxos de Navegação</li>
                                <li>Protótipos interativos (Figma)</li>
                                <li>Design de Interface (UI)</li>
                                <li>Design Systems</li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="service-category h-100">
                              <div className="category-header">
                                <i className="fas fa-code" />
                                <h4>Desenvolvimento Front-End</h4>
                              </div>
                              <p>
                                Transformo layouts estáticos em interfaces web
                                interativas, rápidas e responsivas, utilizando
                                as tecnologias mais modernas do mercado.
                              </p>
                              <ul className="service-list mt-3">
                                <li>Landing Pages e Hotsites</li>
                                <li>Sites Institucionais e Portfólios</li>
                                <li>Conversão de Design (Figma para Código)</li>
                                <li>Componentização em React</li>
                                <li>Manutenção e otimização de código</li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="service-category h-100">
                              <div className="category-header">
                                <i className="fas fa-tags" />
                                <h4>Identidade Visual &amp; Branding</h4>
                              </div>
                              <p>
                                Desenvolvo identidades visuais completas que
                                comunicam a essência da sua marca e criam uma
                                conexão duradoura com seu público.
                              </p>
                              <ul className="service-list mt-3">
                                <li>Criação de Logotipos</li>
                                <li>Manual de Marca (Branding)</li>
                                <li>Paleta de Cores e Tipografia</li>
                                <li>Templates para Redes Sociais</li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="service-category h-100">
                              <div className="category-header">
                                <i className="fas fa-palette" />
                                <h4>Design Gráfico &amp; Arte Digital</h4>
                              </div>
                              <p>
                                Produzo peças de comunicação visual para meios
                                digitais e impressos, além de ilustrações e
                                elementos 3D para diferenciar seu projeto.
                              </p>
                              <ul className="service-list mt-3">
                                <li>Peças para Redes Sociais</li>
                                <li>Diagramação de E-books e Catálogos</li>
                                <li>Ilustrações Personalizadas</li>
                                <li>Modelagem 3D Básica (Blender)</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frequently-asked-questions mt-5">
                        <h2 className="main-common-title">
                          Perguntas Frequentes
                        </h2>
                        <div className="frequently-asked-questions-main">
                          <div className="accordion" id="accordionFAQ">
                            <div className="accordion-item">
                              <h4 className="accordion-header" id="headingOne">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  Como funciona o processo de um projeto?
                                  <span className="ms-auto">
                                    <span className="icon ms-4">
                                      <img
                                        className="icon-plus"
                                        src="assets/img/icons/plus.svg"
                                        alt="plus"
                                      />
                                      <img
                                        className="icon-minus d-none"
                                        src="assets/img/icons/minus.svg"
                                        alt="minus"
                                      />
                                    </span>
                                  </span>
                                </button>
                              </h4>
                              <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionFAQ"
                              >
                                <div className="accordion-body">
                                  <p>
                                    Meu processo é colaborativo e dividido em
                                    etapas claras: briefing para entender suas
                                    necessidades, proposta comercial, etapa de
                                    design (wireframe/layout), desenvolvimento
                                    e, por fim, a entrega final com os devidos
                                    ajustes.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h4 className="accordion-header" id="headingTwo">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                >
                                  Quais ferramentas você mais utiliza?
                                  <span className="ms-auto">
                                    <span className="icon ms-4">
                                      <img
                                        className="icon-plus"
                                        src="assets/img/icons/plus.svg"
                                        alt="plus"
                                      />
                                      <img
                                        className="icon-minus d-none"
                                        src="assets/img/icons/minus.svg"
                                        alt="minus"
                                      />
                                    </span>
                                  </span>
                                </button>
                              </h4>
                              <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#accordionFAQ"
                              >
                                <div className="accordion-body">
                                  <p>
                                    Para design, meu carro-chefe é o{" "}
                                    <b>Figma</b>, junto com o pacote Adobe
                                    (Photoshop, Illustrator, After Effects). No
                                    desenvolvimento, trabalho principalmente com{" "}
                                    <b>HTML, CSS, JavaScript e React</b>.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h4
                                className="accordion-header"
                                id="headingThree"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseThree"
                                  aria-expanded="false"
                                  aria-controls="collapseThree"
                                >
                                  Quanto custa um projeto?
                                  <span className="ms-auto">
                                    <span className="icon ms-4">
                                      <img
                                        className="icon-plus"
                                        src="assets/img/icons/plus.svg"
                                        alt="plus"
                                      />
                                      <img
                                        className="icon-minus d-none"
                                        src="assets/img/icons/minus.svg"
                                        alt="minus"
                                      />
                                    </span>
                                  </span>
                                </button>
                              </h4>
                              <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionFAQ"
                              >
                                <div className="accordion-body">
                                  <p>
                                    Cada projeto é único! O valor varia conforme
                                    a complexidade, escopo e prazo. Entre em
                                    contato para conversarmos sobre suas
                                    necessidades e eu prepararei um orçamento
                                    detalhado para você.
                                  </p>
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
        </main>
      </div>

      <Footer />
    </>
  );
}
