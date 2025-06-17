import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import items from "../components/PortfolioItem";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const selectedItems = items.filter((it) => it.selected).slice(0, 4);
  const categories = [
    "all",
    ...new Set(items.flatMap((i) => i.categories || [])),
  ];
  const filtered =
    filter === "all"
      ? items
      : items.filter((it) => (it.categories || []).includes(filter));

  return (
    <div id="page-content">
      <Header />

      <section className="content-box-area mt-4">
        <div className="container">
          <div className="row g-4">
            {/* coluna lateral com perfil */}
            <ProfileCard className="d-none d-md-block" />

            {/* coluna principal */}
            <div className="col-xl-8">
              <div className="card content-box-card">
                <div className="card-body portfolio-card">
                  <div className="top-info">
                    <div className="text">
                      <h1 className="main-title">
                        Projetos <span>selecionados</span>
                      </h1>
                    </div>
                  </div>
                  <div className="portfolio-area mb-5">
                    <div className="row g-4 parent-container row-cols-1 row-cols-md-2">
                      {selectedItems.map((item) => (
                        <div key={item.id} className="col-12 col-md-6">
                          <div className="portfolio-item">
                            <Link to={`/portfolio/${item.slug}`}>
                              <div className="image">
                                <img src={item.img} alt={item.title} />
                              </div>
                            </Link>
                            <div className="text">
                              <div className="info">
                                <Link
                                  to={`/portfolio/${item.slug}`}
                                  className="title"
                                >
                                  {item.title}
                                </Link>
                                <p className="subtitle">
                                  {item.services?.join(", ")}
                                </p>
                                <div className="visite-btn">
                                  <Link to={item.website}>
                                    Link
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
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="top-info">
                    <div className="text">
                      <h2 className="main-title">
                        Todos <span>(2023-2025)</span>
                      </h2>
                    </div>
                  </div>
                  <div className="portfolio-filters mb-3">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={filter === cat ? "active" : ""}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                  <div className="portfolio-area">
                    <div className="row g-3 parent-container row-cols-1 row-cols-md-2 ">
                      {filtered.map((item) => (
                        <div className="col-12 col-md-6 col-lg-4">
                          <div key={item.id} className="portfolio-item">
                            <Link to={`/portfolio/${item.slug}`}>
                              <div className="image ">
                                <img src={item.img} alt={item.title} />
                              </div>
                            </Link>
                            <div className="text">
                              <div className="info">
                                <Link
                                  to={`/portfolio/${item.slug}`}
                                  className="title"
                                >
                                  {item.title}
                                </Link>
                                <p className="subtitle">
                                  {item.services?.join(", ")}
                                </p>
                                <div className="visite-btn">
                                  <Link to={item.website}>
                                    Link
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
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
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
