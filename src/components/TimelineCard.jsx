import React from "react";
import { experiences } from "./CVData";

const defaultItems = experiences;

export default function TimelineCard({ items = defaultItems }) {
  return (
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
                <h4 className="title">Freelancer Multidisciplinar</h4>
                <h6 className="subtitle">Muzza Studio</h6>
                <ul className="details">
                  <li>
                    Entregou projetos de design, web e editorial para diversos
                    clientes (PMEs e pessoas físicas).
                  </li>
                  <li>
                    Atuou em projetos para Razow, Sapiens e Eleve Comunicação.
                  </li>
                </ul>
              </div>
            </li>
            <li className="timeline-item">
              <div className="date">
                <p>ABR/2025 &amp; OUT/2024</p>
              </div>
              <div className="info">
                <h4 className="title">Designer Gráfica (Temporária)</h4>
                <h6 className="subtitle">Agência Razow</h6>
                <ul className="details">
                  <li>Recontratada pela qualidade e agilidade nas entregas.</li>
                </ul>
              </div>
            </li>
            <li className="timeline-item">
              <div className="date">
                <p>FEV/2024 – MAI/2026</p>
              </div>
              <div className="info">
                <h4 className="title">Análise e Desenvolvimento de Sistemas</h4>
                <h6 className="subtitle">
                  Universidade Presbiteriana Mackenzie
                </h6>
              </div>
            </li>
            <li className="timeline-item">
              <div className="date">
                <p>2018 – Presente</p>
              </div>
              <div className="info">
                <h4 className="title">Freelancer Multidisciplinar</h4>
                <h6 className="subtitle">Muzza Studio</h6>
                <ul className="details">
                  <li>
                    Entregou projetos de design, web e editorial para diversos
                    clientes (PMEs e pessoas físicas).
                  </li>
                  <li>
                    Atuou em projetos para Razow, Sapiens e Eleve Comunicação.
                  </li>
                </ul>
              </div>
            </li>
            <li className="timeline-item">
              <div className="date">
                <p>ABR/2025 &amp; OUT/2024</p>
              </div>
              <div className="info">
                <h4 className="title">Designer Gráfica (Temporária)</h4>
                <h6 className="subtitle">Agência Razow</h6>
                <ul className="details">
                  <li>Recontratada pela qualidade e agilidade nas entregas.</li>
                </ul>
              </div>
            </li>
            <li className="timeline-item">
              <div className="date">
                <p>FEV/2024 – MAI/2026</p>
              </div>
              <div className="info">
                <h4 className="title">Análise e Desenvolvimento de Sistemas</h4>
                <h6 className="subtitle">
                  Universidade Presbiteriana Mackenzie
                </h6>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
