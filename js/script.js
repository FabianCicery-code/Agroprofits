function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");

    nav.classList.toggle("responsive");
}

function seleccionar() {
    const nav = document.getElementById("nav");

    nav.classList.remove("responsive");
}