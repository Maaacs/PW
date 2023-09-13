class Empregado {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    getSalario() {
        return this.salario;
    }

    setSalario(novoSalario) {
        if (novoSalario >= 0) {
            this.salario = novoSalario;
        } else {
            console.error("Erro: O salário não pode ser um valor negativo.");
        }
    }

    static somaSalarios(empregados) {
        return empregados.reduce((total, empregado) => total + empregado.getSalario(), 0);
    }
}

// inserir novos valores nessas variáveis, pois elas serão usadas no método 
const empregado1 = new Empregado("Max", 3000);
const empregado2 = new Empregado("Pedro", 4000);

// mostra o salário de cada empregado
console.log(`${empregado1.nome}: Salário atual = ${empregado1.getSalario()}`);
console.log(`${empregado2.nome}: Salário atual = ${empregado2.getSalario()}`);

// aumento de 10%
empregado1.setSalario(empregado1.getSalario() * 1.10);
empregado2.setSalario(empregado2.getSalario() * 1.10);


// Mostra o novo salário de cada empregado após o aumento
console.log(`${empregado1.nome}: Novo salário = ${empregado1.getSalario()}`);
console.log(`${empregado2.nome}: Novo salário = ${empregado2.getSalario()}`);

const empregados = [empregado1, empregado2];
const somaSalarios = Empregado.somaSalarios(empregados);
console.log(`Soma dos salários dos empregados: ${somaSalarios}`);
