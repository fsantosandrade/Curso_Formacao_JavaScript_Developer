let nota1 = 8 
let nota2 = 8
let nota3 = 8

let media = (nota1 + nota2 + nota3) / 3

if (media < 5){
    console.log(`Sua média foi ${media.toFixed(2)}. Reprovado!`)
}else if (media <= 7){
    console.log(`Sua média foi ${media.toFixed(2)}. Recuperação!`)
}else {
    console.log(`Sua média foi ${media.toFixed(2)}. Aprovado!`)
}