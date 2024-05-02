const pessoa = {
    idade: 18
}

// Sobrescrita: retorna o primeiro valor que achar
const felipe = {
    nome: 'Felipe',
    idade: 20,
    __proto__: pessoa
}

console.log(felipe.idade)