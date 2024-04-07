class Pessoa{
    nome
    idade
    anoDeNasc

    //constructor serve para passar valores bases
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
        this.anoDeNasc = 2024 - idade
    }

    descrever(){
        console.log(`Seu nome é ${this.nome} e sua idade é ${this.idade}`)
    }
}

function compararPessoas(p1, p2){
    if(p1.idade < p2.idade){
        return `${p1.nome} é mais novo que ${p2.nome}`
    }else{
        return `${p2.nome} é mais novo que ${p1.nome}`
    }
}

const felipe = new Pessoa('Felipe Santos', 19)
const cristyane = new Pessoa('Cristyane Santos', 13)

console.log(compararPessoas(felipe, cristyane))