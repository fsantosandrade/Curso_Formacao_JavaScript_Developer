const {gets, print} = require('./funcoes_auxiliares')

const n = gets()
print(n)

function maiorParMenorImpar(){
    let maiorPar = null
    let menorImpar = null
    for(let i = 0; i < n; i++){
        const n1 = gets()
        if(n1 % 2 === 0){
            if(maiorPar === null || n1 > maiorPar){
                maiorPar = n1
            }
        }else{
            if(menorImpar === null || n1 < menorImpar){
                menorImpar = n1
            }
        }
    }
    return `Maior par: ${maiorPar} e menor ímpar: ${menorImpar}`
}

print(maiorParMenorImpar())
