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
import { experiences, education } from "../components/CVData";

// bg shapes (resolve via webpack)
// import shape1 from "../assets/img/bg/banner-shape-1.png";
// import obj3d1 from "../assets/img/bg/object-3d-1.png";
// import obj3d2 from "../assets/img/bg/object-3d-2.png";

export default function About() {
  return (
    <div id="page-content">
      <Header />

      <section className="content-box-area mt-4">
        <div className="container">
          <div className="row g-4 ">
            {/* profile card */}
            <ProfileCard className="d-none d-md-block" />

            {/* about content */}
            <div className="col-xl-8">
              <div className="card content-box-card shadow rounded-4 p-lg-4 ">
                <div className="card-body">
                  {/* header block */}
                  <div className="top-info">
                    <div className="text">
                      <h1 className="main-title">
                        Sobre <span>Mim</span> 👋
                      </h1>
                      <p>
                        Designer e Desenvolvedora Web que une criatividade e
                        código para entregar soluções visuais estratégicas,
                        funcionais e acessíveis; em evolução contínua rumo à
                        Full-stack Designer T-Shaped.
                      </p>
                      <div className="personal-stats mt-4">
                        <span>
                          <FaBirthdayCake className="me-1" /> 28 anos
                        </span>
                        <span>
                          <FaMapMarkerAlt className="me-1" /> Niterói, RJ -
                          Brasil
                        </span>
                        <span>
                          <FaBriefcase className="me-1" /> Remoto ou Híbrido
                        </span>
                      </div>
                    </div>
                    <div className="available-btn">
                      <span>
                        <FaCircle className="me-1" /> Disponível
                      </span>
                    </div>
                  </div>

                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="cv-item">
                        <h3 className="mb-3">Experiência Profissional</h3>
                        <div className="scrollable-box">
                          {experiences.map((exp, idx) => (
                            <div key={idx} className="experience-entry">
                              <h4>{exp.title}</h4>
                              <span className="period">
                                {exp.subtitle} | {exp.date}
                              </span>
                              {exp.details && (
                                <ul>
                                  {exp.details.map((d, i) => (
                                    <li key={i}>{d}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="cv-item">
                        <h3 className="mb-3">Educação &amp; Cursos</h3>
                        {education.map((edu, idx) => (
                          <div key={idx} className="experience-entry">
                            <h4>{edu.title}</h4>
                            {edu.subtitle && (
                              <span className="period">
                                {edu.subtitle}
                                {edu.date ? ` | ${edu.date}` : ""}
                              </span>
                            )}
                            {edu.description && <p>{edu.description}</p>}
                          </div>
                        ))}
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
      <Footer />
    </div>
  );
}
