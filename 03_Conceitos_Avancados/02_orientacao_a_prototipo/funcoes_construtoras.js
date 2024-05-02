// Funções construtoras iniciam com letra maiúscula e, com seu escopo próprio
// utiliza-se o this com os atributos de parâmetro e, com isso podemos 
// adicionar elementos com o operador "new", construindo elementos que 
// derivam daquela função. Basicamente é o equivalente a uma classe.

function Pessoa (nome, idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome}`)
}

const felipe = new Pessoa('Felipe', 20)

felipe.falar()