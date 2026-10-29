// main.js: comportamentos pequenos do site, sem bibliotecas.

// 1. Botão "Menu" no celular: abre e fecha a lista de links.
const botaoMenu = document.querySelector(".menu-botao");
const linksMenu = document.querySelector(".menu-links");

if (botaoMenu && linksMenu) {
  botaoMenu.addEventListener("click", () => {
    const aberto = linksMenu.classList.toggle("aberto");
    botaoMenu.setAttribute("aria-expanded", aberto); // avisa leitores de tela
  });

  // Fecha o menu depois de clicar em um link
  linksMenu.addEventListener("click", (evento) => {
    if (evento.target.closest("a")) {
      linksMenu.classList.remove("aberto");
      botaoMenu.setAttribute("aria-expanded", "false");
    }
  });
}

// 2. Elementos com a classe "revelar" aparecem suavemente ao entrar na tela.
const revelaveis = document.querySelectorAll(".revelar");

if ("IntersectionObserver" in window) {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visivel");
        observador.unobserve(entrada.target); // anima só uma vez
      }
    });
  }, { threshold: 0.15 });

  revelaveis.forEach((el) => observador.observe(el));
} else {
  revelaveis.forEach((el) => el.classList.add("visivel"));
}
