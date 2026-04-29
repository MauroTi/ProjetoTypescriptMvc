"use strict";
class Saudacao {
    constructor(nome) {
        this.nome = nome;
    }
    mensagem() {
        return `Ola, ${this.nome}. TypeScript funcionando!`;
    }
}
const nomeInput = document.getElementById("nomeInput");
const saudarBtn = document.getElementById("saudarBtn");
const mensagem = document.getElementById("mensagem");
if (nomeInput && saudarBtn && mensagem) {
    saudarBtn.addEventListener("click", () => {
        const nome = nomeInput.value.trim() || "Visitante";
        const app = new Saudacao(nome);
        mensagem.innerText = app.mensagem();
    });
}
//# sourceMappingURL=site.js.map