// Uma promise é, simplesmente, uma tarefa que será executada, porém fora do
// nosso controle. Sendo assim, basicamnete fazemos uma "promessa" e teremos
// o resultado quando o mesmo ficar pronto.

// Exemplo:

const numeroAleatorio = new Promise((resolve, rejec) => { 
    // resolve = deu certo | rejec = deu errado
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100)
        resolve(numero)
    }, 2000)
})

console.log('Preparando resposta...')

numeroAleatorio
    .then((value) => { // caso deu certo
        console.log(value)
        return value + 10
    })
    .then((value) => { // podem ter vários then
        console.log(value)
    })
    .catch((error) => { // caso deu errado
        console.error(error)
    })
    .finally(() => { // idependente do resultado
        console.log('Finalizado')
    })