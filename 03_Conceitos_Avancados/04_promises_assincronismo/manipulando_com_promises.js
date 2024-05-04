const fs = require('fs')

const testeDeLeitura = fs.promises.readFile('tarefasTeste.csv')

testeDeLeitura
    .then((arquivo) => arquivo.toString('utf-8'))
    .then((texto) => texto.split('\n'))
    .then((lista) => lista.map((linha) => {
        const [nome, feito] = linha.split(';')
        let batata = null
        return batata = {
            nome,
            feito
        }
    }))
    .then((result) => console.log(result))
    .catch((error) => console.error(error))