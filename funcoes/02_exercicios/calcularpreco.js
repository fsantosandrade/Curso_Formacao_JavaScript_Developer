/*const prod = 100
// à vista Debito, à vista Pix dinheiro, em duas vezes e acima de duas vezes 
const pag = 'tres vezes'
let desconto
let valorFinal

if (pag === 'Débito'){
    valorFinal = prod - (prod * 0.10)
    console.log(`O valor no ${pag}, antes sendo ${prod}, agora fica ${valorFinal}!`)
}else if (pag === 'Dinheiro' || pag === 'PIX'){
    valorFinal = prod - (prod * 0.15)
    console.log(`O valor no ${pag}, antes sendo ${prod}, agora fica ${valorFinal}!`)
}else if (pag === 'duas vezes'){
    valorFinal = prod
    console.log(`O valor dividido em 2 vezes continua ${prod}, sem juros!`)
}else {
    valorFinal = prod + (prod * 0.10)
    console.log(`O valor dividido em mais de 2 vezes, antes sendo ${prod}, agora fica ${valorFinal}!`)
}*/

function noDebito(preco){
    return preco - (preco * 0.10)
}

function noDinheiroPix(preco){
    return preco - (preco * 0.15)
}

function emDuasVezes(preco){
    return preco
}

function emMaisDeDuas(preco){
    return preco + (preco * 0.10) 
}

function valorFinal(preco, pagamento){
    let precF

    if(pagamento === 1){
        precF = noDebito(preco)
        return `O valor no Débito, antes sendo ${preco}, agora fica ${precF}!`
    }else if(pagamento === 2){
        precF = noDinheiroPix(preco)
        return `O valor no Dinheiro ou PIX, antes sendo ${preco}, agora fica ${precF}!`
    }else if(pagamento === 3){
        precF = emDuasVezes(preco)
        return `O valor em até duas vezes continua ${precF}.`
    }else if(pagamento === 4){
        precF = emMaisDeDuas(preco)
        return `O valor em mais de duas vezes, antes sendo ${preco}, agora fica ${precF}!`
    }else{
        return 'Valor inválido!'
    }
}

(function (){
    let pag = 5
    const prec = 100
    
    console.log(valorFinal(prec, pag))
})()