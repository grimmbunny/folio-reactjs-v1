/* eslint-disable import/first */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/* -------- libs globais que o script jQuery espera -------- */
import $ from "jquery";
window.$ = window.jQuery = $; // torna jQuery global
import "slick-carousel"; // JS da Slick
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "magnific-popup/dist/magnific-popup.css";
import "./assets/css/style.css";

// import "./assets/css/responsive.css";

/* -------- React root -------- */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
