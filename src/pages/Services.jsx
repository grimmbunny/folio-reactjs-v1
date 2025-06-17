import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaHammer, FaPaintBrush, FaCog } from "react-icons/fa";

export default function Services() {
  return (
    <>
      <div id="page-content">
        <Header />
        <main className="construction-mode creative text-center py-5">
          <div className="icon-ensemble d-flex justify-content-center align-items-center mb-4">
            <FaHammer size={40} className="mx-2 swing-animation " />
            <FaCog size={40} className="mx-2 spin-animation" />
            <FaPaintBrush size={40} className="mx-2 bounce-animation" />
          </div>
          <h2 className="mb-3 card-title justify-content-center">
            404 🚧 Está Quase Pronto!
          </h2>
          <p className="lead profile-subtitle">
            Mudando e ajustando detalhes da página de serviços
          </p>
          <p className="mt-4 camisinha-note">
            Fique à vontade para tomar um café ☕ enquanto isso!
          </p>
        </main>
      </div>
    </>
  );
}
