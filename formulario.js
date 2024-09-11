import { Gerente } from './classes/gerente.js';
import { Desenvolvedor } from './classes/desenvolvedor.js';

function cadastrar(funcionario) {
    funcionario.seApresentar();
    funcionario.trabalhar();
    
    if (funcionario instanceof Gerente) {
        funcionario.gerenciar();
    } else if (funcionario instanceof Desenvolvedor) {
        funcionario.programar();
    }
}

try {

    const btnEnviar = document.getElementById('btn');

    btnEnviar.addEventListener('click', function() {
        event.preventDefault();
    
        const nome = document.getElementById('nome').value;
        const idade = document.getElementById('idade').value;
        const cargo = document.getElementById('cargo').value;
        const departamento = document.getElementById('departamento').value;
        const linguagem = document.getElementById('linguagem').value;
        

        if (!nome || !cargo || !departamento || !linguagem) {
            throw new Error('Preencha todos os campos');
        } else {
            if (cargo === 'gerente') {

                const novoFuncionario = new Gerente(nome, idade, cargo, departamento);
                cadastrar(novoFuncionario);

            } else if (cargo === 'desenvolvedor') {

                const novoFuncionario = new Desenvolvedor(nome, idade, cargo, linguagem);
                cadastrar(novoFuncionario);
                
            }
        }
    });
} catch(error) {
    console.log(error.message);

    alert(error.message);
        }
        