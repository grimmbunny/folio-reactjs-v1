// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";

// 1) importa o jQuery e o plugin antes de qualquer código
import $ from "jquery";
import "magnific-popup"; // injeta em $.fn
import "magnific-popup/dist/magnific-popup.css";

// outros imports de bibliotecas/carrouséis e CSS
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";

// 2) importa o seu App
import App from "./App";

// 3) define as globals para que, se em algum outro lugar você chamar window.$,
//    ainda estará apontando para o mesmo objeto jQuery
window.$ = window.jQuery = $;

// 4) finalmente monta o React
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
