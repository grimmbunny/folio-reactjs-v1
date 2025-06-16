import React from "react";
import {
  FaFigma,
  FaBehance,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaGithub,
} from "react-icons/fa";

/**
 * SkillsetCard – half‑width icon grid (two rows) just like your slider but static for now.
 * Swap for react‑slick later if you want the marquee effect.
 */
const skills = [
  { icon: <FaFigma />, label: "Figma" },
  { icon: <FaBehance />, label: "Illustrator" },
  { icon: <FaCss3Alt />, label: "CSS3" },
  { icon: <FaHtml5 />, label: "HTML5" },
  { icon: <FaJsSquare />, label: "JavaScript" },
  { icon: <FaReact />, label: "React" },
  { icon: <FaGithub />, label: "Git" },
  // add more if you want
];

export default function SkillsetCard() {
  return (
    <div className="card skillset-card shadow rounded-4 text-center">
      <div className="card-body py-4">
        <h3 className="card-title fw-bold mb-4">Skillset</h3>

        <div className="row row-cols-4 g-3 justify-content-center">
          {skills.map((s, idx) => (
            <div
              key={idx}
              className="col d-flex flex-column align-items-center gap-1"
            >
              <span className="fs-2">{s.icon}</span>
              <small className="text-muted">{s.label}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
