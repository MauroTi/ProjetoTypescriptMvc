const incrementarBtn = document.getElementById("incrementarBtn") as HTMLButtonElement | null;
const resetarBtn = document.getElementById("resetarBtn") as HTMLButtonElement | null;
const valorContador = document.getElementById("valorContador") as HTMLSpanElement | null;

let contador: number = 0;

const renderizarContador = (): void => {
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
