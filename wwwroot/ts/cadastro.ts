const cadastroForm = document.getElementById("cadastroForm") as HTMLFormElement | null;
const cadastroNome = document.getElementById("Input_Nome") as HTMLInputElement | null;
const cadastroEmail = document.getElementById("Input_Email") as HTMLInputElement | null;
const cadastroSubmitBtn = document.getElementById("cadastroSubmitBtn") as HTMLButtonElement | null;

function emailEhValido(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

if (cadastroForm && cadastroNome && cadastroEmail && cadastroSubmitBtn) {
    const atualizarEstadoBotao = (): void => {
        const nomeValido = cadastroNome.value.trim().length >= 3;
        const emailValido = emailEhValido(cadastroEmail.value.trim());
        cadastroSubmitBtn.disabled = !(nomeValido && emailValido);
    };

    cadastroNome.addEventListener("input", atualizarEstadoBotao);
    cadastroEmail.addEventListener("input", atualizarEstadoBotao);
    atualizarEstadoBotao();
}
