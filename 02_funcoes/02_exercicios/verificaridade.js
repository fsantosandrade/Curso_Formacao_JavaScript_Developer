function ehMaior(idade){
    if(idade < 18){
        return `Sua idade é ${idade}. Você é de menor!`
    }else if(idade <= 100){
        return `Sua idade é ${idade}. Você é de maior!`
    }else{
        return 'Idade inválida'
    }
}

(function (){
    console.log(ehMaior(101))
})()