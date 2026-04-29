"use strict";
class Saudacao {
    constructor(nome) {
        this.nome = nome;
    }
    mostrar() {
        const elemento = document.getElementById("mensagem");
        if (elemento) {
            elemento.innerText = `Olá, ${this.nome}. TypeScript funcionando!`;
        }
    }
}
const app = new Saudacao("Mauro");
app.mostrar();
//# sourceMappingURL=site.js.map