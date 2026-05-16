/* =========================================
   MENU HAMBURGUER
   ========================================= */
const hamburguerNAV = document.querySelector(".hamburguer-nav");
const buttonHAM      = document.querySelector(".buttonHAM");

hamburguerNAV.style.display = "none";

function fecharMenu() {
    hamburguerNAV.style.right = "-200px";
    setTimeout(() => {
        hamburguerNAV.style.display = "none";
    }, 500);
}

function abrirMenu() {
    hamburguerNAV.style.display = "grid";
    hamburguerNAV.style.right   = "-200px";
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            hamburguerNAV.style.right = "0";
        });
    });
}

document.addEventListener("click", (event) => {
    if (hamburguerNAV.style.display !== "none" &&
        !hamburguerNAV.contains(event.target) &&
        !buttonHAM.contains(event.target)) {
        fecharMenu();
    }
});

buttonHAM.addEventListener("click", () => {
    if (hamburguerNAV.style.display !== "none") {
        fecharMenu();
    } else {
        abrirMenu();
    }
});

window.addEventListener("resize", () => {
    fecharMenu();
});

/* =========================================
   DARK MODE LOGIC
   ========================================= */
const switchDark       = document.querySelector("#switch");
const switchDarkMobile = document.querySelector("#switch-mobile-input");

function aplicarDark(isDark) {
    // Aplica a classe no body
    if (isDark) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }

    // Sincroniza os dois botões (Desktop e Mobile)
    if (switchDark) switchDark.checked = isDark;
    if (switchDarkMobile) switchDarkMobile.checked = isDark;

    // Salva a preferência
    localStorage.setItem("dark-mode", isDark);
}

// Inicialização: Carrega o que está salvo
const darkSalvo = localStorage.getItem("dark-mode") === "true";
aplicarDark(darkSalvo);

// Ouvinte do Switch Desktop
if (switchDark) {
    switchDark.addEventListener("change", () => {
        aplicarDark(switchDark.checked);
    });
}

// Ouvinte do Switch Mobile
if (switchDarkMobile) {
    switchDarkMobile.addEventListener("change", () => {
        aplicarDark(switchDarkMobile.checked);
    });
}