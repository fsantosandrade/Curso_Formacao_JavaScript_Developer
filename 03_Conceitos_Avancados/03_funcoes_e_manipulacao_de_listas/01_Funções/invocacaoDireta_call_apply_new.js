// Invocação direta

function teste1() {
    console.log('teste')
}

teste1()

// Invocação pelo Apply e Call
const pessoa = {
    nome: 'Felipe',
    idade: 20
}

function teste2(prefixo) {
    console.log(prefixo, this.nome)
}

// Apply
teste2.apply(pessoa, ['Iae,'])

// Call (sem colchetes)
teste2.call(pessoa, 'Iae,')