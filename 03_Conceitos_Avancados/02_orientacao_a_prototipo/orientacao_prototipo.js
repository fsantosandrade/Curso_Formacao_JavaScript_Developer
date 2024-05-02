// Orientação a protótipo é um objeto da qual outro objeto esta se baseando
// resumidamente é uma forma de fazermos heranças no javascript

const pessoa = {
    genero: 'masculino'
}

const felipe = {
    nome: 'Felipe',
    idade: 20,
    __proto__: pessoa
}

console.log(felipe.genero)