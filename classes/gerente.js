import { Funcionario } from "./funcionario.js";

export class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        let section = document.getElementById('cadastroSucesso');

        section.innerHTML = `
            <p>${this.nome} está gerenciando o departamento de ${this.departamento}</p>
        `;
    }
}
