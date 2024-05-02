const pessoa = {
    genero: 'masculino'
}

// Primeira forma
/*
const felipe = {
    nome: 'Felipe',
    __proto__: pessoa
}*/

// Segunda forma
const felipe = Object.create(pessoa) 

felipe.nome = 'Felipe'

console.log(felipe.genero)