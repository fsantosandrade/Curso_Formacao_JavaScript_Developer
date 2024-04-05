let preEtn = 5.79
let preGas = 6.66
let combustivel = 'gasolina' 
let gastComb = 0.1
let dist = 100

let litrosGastos = dist * gastComb
let preFinal

if (combustivel === 'etanol'){
    preFinal = litrosGastos * preEtn
    console.log(`Você, em ${dist}Km, irá gastar ${litrosGastos.toFixed(2)} litros de ${combustivel}, custando ${preFinal.toFixed(2)}R$`)   
}else if (combustivel === 'gasolina'){
    preFinal = litrosGastos * preGas
    console.log(`Você, em ${dist}Km, irá gastar ${litrosGastos.toFixed(2)} litros de ${combustivel}, custando ${preFinal.toFixed(2)}R$`)   
}else {
    console.log("Combustivel indisponível")
}