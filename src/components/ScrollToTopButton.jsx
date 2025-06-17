// src/components/ScrollToTopButton.jsx
import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa"; // Ícone de seta para cima

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostra o botão quando o usuário rola para baixo
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      // Mostra após 300px de rolagem
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Rola suavemente para o topo da página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Rolagem suave
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`scroll-to-top-btn d-block d-md-none ${
        isVisible ? "show" : ""
      }`}
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      title="Voltar ao topo"
    >
      <FaChevronUp />
    </button>
  );
};

export default ScrollToTopButton;
