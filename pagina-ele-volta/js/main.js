/* =========================================================
   Método das 3 Cartas — interações
   - Smooth scroll para links âncora
   - FAQ: abre uma carta de cada vez (aprimoramento do <details>)
   - Reveal: elementos surgem suavemente ao entrar na tela
   Sem dependências, sem localStorage/sessionStorage.
   ========================================================= */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* --------------------------------------------------------
     1) Smooth scroll para links internos (#ancora)
     -------------------------------------------------------- */
  function initSmoothScroll() {
    var links = document.querySelectorAll('a[href^="#"]');

    Array.prototype.forEach.call(links, function (link) {
      link.addEventListener("click", function (event) {
        var hash = link.getAttribute("href");
        if (!hash || hash === "#") return;

        var target = document.querySelector(hash);
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({
          behavior: reduceMotion ? "auto" : "smooth",
          block: "start"
        });

        // mantém o foco acessível no destino, sem "pular" a página
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      });
    });
  }

  /* --------------------------------------------------------
     2) FAQ accordion — uma resposta aberta por vez
        (os <details> já funcionam sozinhos; isto só refina)
     -------------------------------------------------------- */
  function initFaqAccordion() {
    var items = document.querySelectorAll(".faq-item");

    Array.prototype.forEach.call(items, function (item) {
      item.addEventListener("toggle", function () {
        if (!item.open) return;
        Array.prototype.forEach.call(items, function (other) {
          if (other !== item) other.open = false;
        });
      });
    });
  }

  /* --------------------------------------------------------
     3) Reveal ao rolar
     -------------------------------------------------------- */
  function initReveal() {
    var revealables = document.querySelectorAll(".reveal");
    if (!revealables.length) return;

    // Sem suporte ou com "reduzir movimento": deixa tudo visível (padrão do CSS).
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    // Só agora "ligamos" o efeito — assim o conteúdo nunca fica preso invisível.
    document.body.classList.add("reveal-ready");

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    Array.prototype.forEach.call(revealables, function (el) {
      observer.observe(el);
    });
  }

  /* --------------------------------------------------------
     init
     -------------------------------------------------------- */
  function init() {
    initSmoothScroll();
    initFaqAccordion();
    initReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
