import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelopeOpenText } from "react-icons/fa";

export default function LetsTalkCard() {
  return (
    <div className="card cta-card shadow rounded-4 text-center bg-primary text-light">
      <div className="card-body p-5 d-flex flex-column align-items-center gap-3">
        <FaEnvelopeOpenText className="fs-1" />
        <h3 className="fw-bold mb-1">Let’s talk</h3>
        <p className="mb-3">
          Tem um projeto em mente ou quer tirar uma dúvida? Vamos conversar!
        </p>
        <Link to="/contact" className="btn btn-light fw-semibold">
          Enviar mensagem
        </Link>
      </div>
    </div>
  );
}
