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

const felipe = new Pessoa('Felipe Santos', 19)
const cristyane = new Pessoa('Cristyane Santos', 13)

felipe.descrever()
cristyane.descrever()

console.log(felipe)