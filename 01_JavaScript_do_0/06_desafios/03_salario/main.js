function imposto(valor){
    let imposto = null
    if(valor >= 0 && valor <= 1100){
        imposto = valor * 0.5
        return imposto
    }else if(valor <= 2500){
        imposto = valor * 0.10
        return imposto
    }else{
        imposto = valor * 0.15
        return imposto
    }
}

(function (){
    const {gets, print} = require('./funcoes_auxiliares')
    const salarioBruto = gets()
    const beneficios = gets()
    const percentualImposto = imposto(salarioBruto)

    const calcFinal = salarioBruto - percentualImposto + beneficios
    
    print(calcFinal)
})()