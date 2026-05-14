const hamburguerNAV = document.querySelector(".hamburguer-nav");
const buttonHAM      = document.querySelector(".buttonHAM");
const logoHeader     = document.querySelector("#logo");

// Estado inicial: menu oculto
hamburguerNAV.style.display = "none";

/* Fecha o menu hamburguer com animação de slide */
function fecharMenu() {
    hamburguerNAV.style.right = "-200px";
    setTimeout(() => {
        hamburguerNAV.style.display = "none";
    }, 500);
}

/* Abre o menu hamburguer com animação de slide */
function abrirMenu() {
    hamburguerNAV.style.display = "grid";
    hamburguerNAV.style.right   = "-200px";
    // Timeout mínimo forçado para garantir o reflow antes da transição CSS
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            hamburguerNAV.style.right = "0";
        });
    });
}

/* Fecha o menu ao clicar fora dele */
document.addEventListener("click", (event) => {
    if (
        hamburguerNAV.style.display !== "none" &&
        !hamburguerNAV.contains(event.target) &&
        !buttonHAM.contains(event.target)
    ) {
        fecharMenu();
    }
});

/* Alterna o menu ao clicar no botão hamburguer */
buttonHAM.addEventListener("click", () => {
    if (hamburguerNAV.style.display !== "none") {
        fecharMenu();
    } else {
        abrirMenu();
    }
});

/* Ajusta a logo e fecha o menu ao redimensionar a janela */
window.addEventListener("resize", () => {
    if (window.innerWidth >= 1051) {
        logoHeader.src = "../img/eemtv.png";
        fecharMenu();
    } else {
        logoHeader.src = "../img/eemtv-small.png";
    }
});

/* Define a logo correta no carregamento inicial */
if (window.innerWidth < 1051) {
    logoHeader.src = "../img/eemtv-small.png";
}