const {gets, print} = require('./funcoes_auxiliares')

const mediaf = gets()

function media(valor){
    if(valor < 5){
        return `Reprovado`
    }else if(valor < 7){
        return `Recuperação`
    }else{
        return `Aprovado`
    }
}

print(media(mediaf))