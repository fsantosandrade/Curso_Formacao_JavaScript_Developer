function adicao(x, y){
    return x + y
}

function multiplicacao(x, y){
    return x * y
}

function calcular(x, operador, y) {
    console.log(operador(x, y))
}

calcular(10, multiplicacao, 2)
calcular(10, adicao, 2)