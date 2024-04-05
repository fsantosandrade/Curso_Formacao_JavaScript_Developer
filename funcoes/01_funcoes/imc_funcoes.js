function imcCalc(peso, alt){
    return peso / (Math.pow(alt, 2))
}

function classificacao(imc){
    if (imc < 18.5){
    return `Seu imc é de ${imc.toFixed(1)}. Você está ABAIXO DO PESO!`
    }else if (imc <= 25){
        return `Seu imc é de ${imc.toFixed(1)}. PESO NORMAL!`
    }else if (imc <= 30){
        return `Seu imc é de ${imc.toFixed(1)}. Você está ACIMA DO PESO!`
    }else if (imc <= 40){
        return `Seu imc é de ${imc.toFixed(1)}. Você está OBESO!`
    }else {
        return `Seu imc é de ${imc.toFixed(1)}. OBESIDADE GRAVE!`
    }
}

function main(){
    const imcP = imcCalc(57, 1.75)
    console.log(classificacao(imcP))
}

main()