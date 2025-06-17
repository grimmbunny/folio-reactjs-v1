import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";

export default function DesignGallery({ title, images }) {
  return (
    <div id="page-content">
      <Header />
      <section className="content-box-area mt-4">
        <div className="container">
          <div className="row g-4">
            <ProfileCard />
            <div className="col-xl-8">
              <div className="card content-box-card">
                <div className="card-body portfolio-card">
                  <h1 className="main-title mb-4">{title}</h1>
                  <div className="row g-3">
                    {images.map((src, idx) => (
                      <div key={idx} className="col-md-6">
                        <img
                          src={src}
                          alt={`${title} ${idx + 1}`}
                          className="img-fluid w-100 rounded"
                        />
                      </div>
                    ))}
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
