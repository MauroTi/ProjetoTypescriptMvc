class Saudacao {
    private nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    public mensagem(): string {
        return `Ola, ${this.nome}. TypeScript funcionando!`;
    }
}

const nomeInput = document.getElementById("nomeInput") as HTMLInputElement | null;
const saudarBtn = document.getElementById("saudarBtn") as HTMLButtonElement | null;
const mensagem = document.getElementById("mensagem") as HTMLParagraphElement | null;

if (nomeInput && saudarBtn && mensagem) {
    saudarBtn.addEventListener("click", () => {
        const nome: string = nomeInput.value.trim() || "Visitante";
        const app = new Saudacao(nome);
        mensagem.innerText = app.mensagem();
    });
}
