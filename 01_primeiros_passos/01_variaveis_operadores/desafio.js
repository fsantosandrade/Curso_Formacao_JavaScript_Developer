let preComb = 5.79
let gastComb = 0.0833333333333333
let dist = 1580

let quantLitros = dist * gastComb

let preFinal = quantLitros * preComb

console.log(`Você, em ${dist}Km, irá gastar ${quantLitros.toFixed(2)} litros de combustível, custando ${preFinal.toFixed(2)}R$`)