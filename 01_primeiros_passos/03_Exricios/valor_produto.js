const prod = 100
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
}