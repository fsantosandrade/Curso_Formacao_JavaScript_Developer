class Pessoa {
    nome
    peso
    altura

    constructor(nome, peso, altura){
        this.peso = peso
        this.nome = nome
        this.altura = altura
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura)
    }

    classificarImc(){
        const imc = this.calcularImc()
        
        if (imc < 18.5){
            return `Seu imc é de ${imc.toFixed(1)}. Você está ABAIXO DO PESO!`
        }else if (imc <= 25){
            return `Seu imc é de ${imc.toFixed(1)}. PESO NORMAL!`
        }else if (imc <= 30){
            return `Seu imc é de ${imc.toFixed(1)}. Você está ACIMA DO PESO!`
        }else if (imc <= 40){
            return `Seu imc é de ${imc.toFixed(1)}. Você está OBESO!`
        }else {
            return `Seu imc é de ${imc.toFixed(1)}. OBESIDADE GRAVE!`
        }
    }
}

const jose = new Pessoa('José', 70, 1.75)

console.log(jose.classificarImc())


class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

function descreverPessoa(pessoa) {
    console.log(`Nome: ${pessoa.nome}; Idade: ${pessoa.idade};`);
}

const renan = new Pessoa('Renan', 30);
console.log(descreverPessoa(renan));