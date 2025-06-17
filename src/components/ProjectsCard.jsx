import React from "react";
import { Link } from "react-router-dom";
import project1 from "../assets/img/projects/tamatask square.jpg";
import project2 from "../assets/img/projects/tamatask square.jpg";

/**
 * ProjectsCard – 2x2 teaser grid linking to full Portfolio page.
 * Replace thumbnails or expand to React‑Slick later for auto‑scroll.
 */
const projects = [
  { src: project1, alt: "Dashboard SaaS", slug: "dashboard-saas" },
  { src: project2, alt: "e‑Commerce UI Kit", slug: "ecommerce-ui" },
  //   { src: project3, alt: "Illustration Series", slug: "illustration-series" },
  //   { src: project4, alt: "TamaTask Webapp", slug: "tamatask" },
];

export default function ProjectsCard() {
  return (
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
                stroke="#ff4c82"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.833 15L15.833 10"
                stroke="#ff4c82"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.833 5L15.833 10"
                stroke="#ff4c82"
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
                  {/* <div className="info">
                    <span className="category">Product Design</span>
                  </div> */}
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
                  {/* <div className="info">
                    <span className="category">Product Design</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
