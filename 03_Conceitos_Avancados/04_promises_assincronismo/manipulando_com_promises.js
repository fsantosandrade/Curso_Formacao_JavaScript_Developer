const fs = require('fs')

// Usando os métodos then, catch e finaly
// const testeDeLeitura = fs.promises.readFile('tarefasTeste.csv')

// testeDeLeitura
//     .then((arquivo) => arquivo.toString('utf-8'))
//     .then((texto) => texto.split('\n'))
//     .then((lista) => lista.map((linha) => {
//         const [nome, feito] = linha.split(';')
//         let batata = null
//         return batata = {
//             nome,
//             feito
//         }
//     }))
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error))]
//     .finally(() => console.log('Finalizou!'))


// Usando await e async

async function buscarArquivo() {
    try {const testeDeLeitura = await fs.promises.readFile('tarefasTeste.csv')
    const textoDoArquivo = testeDeLeitura.toString('utf-8')
    const textoEmLinhas = textoDoArquivo.split('\n')
    const textoEmLista = textoEmLinhas.map((linhas) => {
        const [nome, feito] = linhas.split(';')
        return {
            nome,
            feito
        }
    })
    console.log(textoEmLista)
    } catch (error) {
        console.error(error)
    } finally {
        console.log('Finalizou!')
    }
}

buscarArquivo()