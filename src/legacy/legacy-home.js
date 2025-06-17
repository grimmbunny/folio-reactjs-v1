/* eslint-disable no-undef, import/first */

// src/legacy/legacy-home.js
import $ from "jquery";
import ClipboardJS from "clipboard";
import "magnific-popup/dist/jquery.magnific-popup.js";
import "slick-carousel"; // caso ainda use sliders Slick

// Deixa jQuery global para plugins que esperam window.jQuery
window.$ = window.jQuery = $;

/**
 * Chame initLegacy() dentro de um useEffect no Home.jsx
 * após o markup React já estar no DOM.
 */
export default function initLegacy() {
  /* ---------- Dark-mode ---------- */
  const isDark = localStorage.getItem("darkMode") === "true";
  $("body").toggleClass("dark-theme", isDark);
  $("#page-content").fadeIn(0);

  $(".theme-control-btn").on("click", () => {
    $("body").toggleClass("dark-theme");
    localStorage.setItem("darkMode", $("body").hasClass("dark-theme"));
  });

  /* ---------- Mobile menu ---------- */
  $(".mobile-menu-control-bar").on("click", () =>
    $(".mobile-menu-overlay, .navbar-main").addClass("show")
  );
  $(".mobile-menu-overlay").on("click", () =>
    $(".mobile-menu-overlay, .navbar-main").removeClass("show")
  );

  /* ---------- Parallax cursor ---------- */
  document.querySelectorAll(".move-with-cursor").forEach((el) => {
    document.addEventListener("mousemove", ({ clientX: x, clientY: y }) => {
      el.style.transition = "transform 0.6s cubic-bezier(0.34,1.56,0.64,1)";
      el.style.transform = `translate(${x * 0.01}px,${y * 0.01}px) rotate(${
        0.01 * (x + y)
      }deg)`;
    });
  });

  /* ---------- Botões de copiar ---------- */
  new ClipboardJS(".btn-copy");
  $(".btn-copy").on("click", function () {
    $(this).addClass("active");
    setTimeout(() => $(this).removeClass("active"), 1000);
  });

  /* ---------- Lightbox Magnific ---------- */
  // $(".parent-container").magnificPopup({
  //   delegate: ".gallery-popup",
  //   type: "image",
  //   gallery: { enabled: true },
  // });

  const $g = $(".parent-container");
  if ($g.length) {
    $g.magnificPopup({
      delegate: ".gallery-popup",
      type: "image",
      gallery: { enabled: true },
    });
  }

  /* ---------- Sliders Slick (se usados) ---------- */
  $(".client-feedback-slider, .article-publications-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    speed: 500,
    prevArrow: '<i class="fas left icon fa-arrow-left"></i>',
    nextArrow: '<i class="fas right icon fa-arrow-right"></i>',
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
  });

  /* ---------- Duplica pistas horizontais ---------- */
  document
    .querySelectorAll(
      ".slider-main, .tools-slider, .skills-slider, .timeline-slider"
    )
    .forEach((track) => {
      if (track.children.length < 10) track.innerHTML += track.innerHTML;
    });
}
