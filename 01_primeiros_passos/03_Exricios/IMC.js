const peso = 57
const alt = 1.75
let imc = peso / (Math.pow(alt, 2))

if (imc < 18.5){
    console.log(`Seu imc é de ${imc.toFixed(1)}. Você está ABAIXO DO PESO!`)
}else if (imc <= 25){
    console.log(`Seu imc é de ${imc.toFixed(1)}. PESO NORMAL!`)
}else if (imc <= 30){
    console.log(`Seu imc é de ${imc.toFixed(1)}. Você está ACIMA DO PESO!`)
}else if (imc <= 40){
    console.log(`Seu imc é de ${imc.toFixed(1)}. Você está OBESO!`)
}else {
    console.log(`Seu imc é de ${imc.toFixed(1)}. OBESIDADE GRAVE!`)
}