import React, { useEffect } from "react"; // Importe useEffect
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
// Se o jQuery não for acessível globalmente, você pode tentar importar:
// import $ from 'jquery'; // Certifique-se de que o jQuery está configurado para ser importado assim.
// Na maioria dos casos de temas, ele já está no window.$

export default function DesignGallery({ title, images }) {
  useEffect(() => {
    // Inicializa o Magnific Popup assim que o componente é montado
    // Verifica se jQuery e magnificPopup estão disponíveis
    if (window.$ && window.$.fn && window.$.fn.magnificPopup) {
      window.$(".popup-gallery").magnificPopup({
        delegate: "a", // Seletor para os itens filhos clicáveis
        type: "image", // Tipo de conteúdo que será exibido (imagem)
        gallery: {
          enabled: true, // Habilita a navegação entre imagens na galeria
        },
        // Você pode adicionar mais opções do Magnific Popup aqui
        // Por exemplo: closeOnContentClick: true, closeBtnInside: false, etc.
      });
    }
  }, [images]); // O efeito será re-executado se a prop 'images' mudar

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
                  <div className="btn-gallery">
                    <Link
                      to="/portfolio"
                      className="btn btn-outline-primary mb-3"
                    >
                      {" "}
                      {/* Altera para btn-outline-primary */}
                      <i className="fas fa-arrow-left me-2"></i>
                      Voltar ao Portfólio
                    </Link>
                  </div>
                  {/* Adicione a classe 'popup-gallery' ao container da sua grade de imagens */}
                  <div className="row g-3 popup-gallery">
                    {images.map((src, idx) => (
                      <div key={idx} className="col-12 col-md-6 col-lg-4">
                        {/* Novo container para o corte quadrado e link do lightbox */}
                        <div className="image-square-container">
                          {/* O 'href' do link deve ser a URL da imagem em tamanho real para o lightbox */}
                          <a href={src} title={`${title} ${idx + 1}`}>
                            <img
                              src={src}
                              alt={`${title} ${idx + 1}`}
                              className="img-fluid w-100 rounded gallery-image" // Adicione a classe 'gallery-image'
                            />
                          </a>
                        </div>
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
