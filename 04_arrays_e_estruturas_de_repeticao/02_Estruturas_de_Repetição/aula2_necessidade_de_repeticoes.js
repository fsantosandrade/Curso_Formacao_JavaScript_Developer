const notas = []

notas.push(5)
notas.push(7)
notas.push(8)
notas.push(2)
notas.push(5)

const soma1 = notas[0] + notas[1] + notas[2] + notas[3] + notas[4]

let soma = 0

for(let i = 0; i < notas.length; i++){
    soma = soma + notas[i]
}

console.log(soma / notas.length)