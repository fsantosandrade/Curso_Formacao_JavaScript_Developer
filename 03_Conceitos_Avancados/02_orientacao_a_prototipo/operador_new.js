function Pessoa (nome, idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function(){
    console.log(`Meu nome é ${this.nome}`)
}

// usando o new
const felipe = new Pessoa('Felipe', 20)

// usando o call
// obs: Não funciona os métodos passados pelo prototype
const cris = {
    genero: 'feminino'
}

Pessoa.call(cris, 'Cristyane', 13)

console.log(cris)
console.log(felipe)
