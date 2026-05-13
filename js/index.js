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

window.addEventListener("resize", () => {
    if (window.innerWidth > 1144) {
        hamburguerNAV.style.right = "-200px";
        setTimeout(() => {
            hamburguerNAV.style.display = "none";
        }, 500);
    }
});