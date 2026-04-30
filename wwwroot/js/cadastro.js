"use strict";
const cadastroForm = document.getElementById("cadastroForm");
const cadastroNome = document.getElementById("Input_Nome");
const cadastroEmail = document.getElementById("Input_Email");
const cadastroSubmitBtn = document.getElementById("cadastroSubmitBtn");
function emailEhValido(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
if (cadastroForm && cadastroNome && cadastroEmail && cadastroSubmitBtn) {
    const atualizarEstadoBotao = () => {
        const nomeValido = cadastroNome.value.trim().length >= 3;
        const emailValido = emailEhValido(cadastroEmail.value.trim());
        cadastroSubmitBtn.disabled = !(nomeValido && emailValido);
    };
    cadastroNome.addEventListener("input", atualizarEstadoBotao);
    cadastroEmail.addEventListener("input", atualizarEstadoBotao);
    atualizarEstadoBotao();
}
//# sourceMappingURL=cadastro.js.map