import React from "react";
import { FaPalette, FaCode, FaMobileAlt, FaPenNib } from "react-icons/fa";

const services = [
  {
    icon: <FaPalette />,
    title: "Brand & Visual",
    desc: "Identidade visual, guias de estilo e arte promocional que falam a língua da sua marca.",
  },
  {
    icon: <FaCode />,
    title: "Web Dev Front-end",
    desc: "Sites e SPAs acessíveis e performáticos usando React, Next e Bootstrap.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Apps Mobile",
    desc: "Protótipos e MVPs em React Native ou Expo – Android & iOS em sincronia.",
  },
  {
    icon: <FaPenNib />,
    title: "Ilustração 2D/3D",
    desc: "Arte editorial, mascotes e renders estilizados em Blender & ZBrush.",
  },
];

export default function ServicesCard() {
  return (
    <div className="card services-card shadow rounded-4 h-100">
      <div className="card-body p-4 d-flex flex-column gap-4">
        <h3 className="card-title fw-bold mb-2">Serviços</h3>

        {services.map((s, idx) => (
          <div key={idx} className="d-flex gap-3">
            <div className="fs-3 text-primary" style={{ width: 40 }}>
              {s.icon}
            </div>
            <div className="flex-grow-1">
              <h5 className="fw-semibold mb-1">{s.title}</h5>
              <p className="mb-0 small text-muted">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
