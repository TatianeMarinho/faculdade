export class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        let section = document.getElementById('apresentar');

        section.innerHTML = `
            <h2> Olá, me chamo ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}</h2>
        `;
    }

    trabalhar() {
        let section = document.getElementById('estadoAtual');

        section.innerHTML = `
            <p>${this.nome} está trabalhando<p>
        `;
    }
}
