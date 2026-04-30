"use strict";
const incrementarBtn = document.getElementById("incrementarBtn");
const resetarBtn = document.getElementById("resetarBtn");
const valorContador = document.getElementById("valorContador");
let contador = 0;
const renderizarContador = () => {
    if (!valorContador) {
        return;
    }
    valorContador.innerText = contador.toString();
};
if (incrementarBtn && resetarBtn && valorContador) {
    incrementarBtn.addEventListener("click", () => {
        contador += 1;
        renderizarContador();
    });
    resetarBtn.addEventListener("click", () => {
        contador = 0;
        renderizarContador();
    });
    renderizarContador();
}
//# sourceMappingURL=contador.js.map