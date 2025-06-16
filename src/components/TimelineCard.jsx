import React from "react";

// Default timeline items; pass your own via props if needed
const defaultItems = [
  {
    date: "2018 – Presente",
    title: "Freelancer Multidisciplinar",
    subtitle: "Muzza Studio",
    details: [
      "Entregou projetos de design, web e editorial para diversos clientes (PMEs e pessoas físicas).",
      "Atuou em projetos para Razow, Sapiens e Eleve Comunicação.",
    ],
  },
  {
    date: "2021 – 2023",
    title: "Designer de Produto Jr.",
    subtitle: "Razow Marketing",
    details: [
      "Redesenhou o dashboard SaaS aumentando retenção em 12%.",
      "Criou design‑system acessível (WCAG AA) em Figma.",
    ],
  },
  {
    date: "2019 – 2020",
    title: "Estagiária de UI/UX",
    subtitle: "Eleve Comunicação",
    details: [
      "Pesquisa de usuários e prototipagem de landing pages B2B.",
      "Otimização de conversão +18% via testes A/B.",
    ],
  },
];

export default function TimelineCard({ items = defaultItems }) {
  return (
    <div className="card timeline-card shadow rounded-4">
      <div className="card-body">
        <h3 className="card-title fw-bold mb-4">Timeline</h3>

        <ul className="timeline-list list-unstyled m-0 d-flex flex-column gap-4">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="timeline-item d-flex flex-column flex-md-row gap-3"
            >
              <div
                className="date fw-semibold text-primary"
                style={{ minWidth: 120 }}
              >
                {item.date}
              </div>
              <div className="info flex-grow-1">
                <h4 className="title h6 fw-bold mb-1">{item.title}</h4>
                <h6 className="subtitle text-muted mb-2">{item.subtitle}</h6>
                {item.details && (
                  <ul className="details list-unstyled ms-3 d-flex flex-column gap-1">
                    {item.details.map((d, i) => (
                      <li key={i} className="d-flex gap-2">
                        <span
                          className="mt-1"
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "currentColor",
                          }}
                        ></span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
