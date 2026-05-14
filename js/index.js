const hamburguerNAV = document.querySelector(".hamburguer-nav")
const buttonHAM = document.querySelector(".buttonHAM")
const html = document.querySelector("html")

hamburguerNAV.style.display = "none";

html.addEventListener("click", (event) => {
    if (!hamburguerNAV.contains(event.target) && !buttonHAM.contains(event.target)){
        hamburguerNAV.style.right = "-200px";
        setTimeout(() => {
            hamburguerNAV.style.display = "none";
        }, 1000)
    }
})

buttonHAM.addEventListener("click", (event) => {
    if (hamburguerNAV.style.display != "none"){
        hamburguerNAV.style.right = "-200px";
        setTimeout(() => {
            hamburguerNAV.style.display = "none";
        }, 1000)
        
    } else {
        hamburguerNAV.style.display = "inline";
        hamburguerNAV.style.right = "-200px";
        setTimeout(() => {
            hamburguerNAV.style.right = "0"
        }, 0)
    }
})

const Logoheader = document.querySelector("#logo")

window.addEventListener("resize", () => {
    if (window.innerWidth > 1051) {
        Logoheader.src = "../img/eemtv.png"
        hamburguerNAV.style.right = "-200px";
        setTimeout(() => {
            hamburguerNAV.style.display = "none";
        }, 500);
    } else if (window.innerWidth < 1051){
        Logoheader.src = "../img/eemtv-small.png"
    }
});
    