import { Funcionario } from "./funcionario.js";

export class Desenvolvedor extends Funcionario{
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        let section = document.getElementById('cadastroSucesso');

        section.innerHTML = `
            <p>${this.nome} está programando em ${this.linguagem}</p>
        `;
    }
}
