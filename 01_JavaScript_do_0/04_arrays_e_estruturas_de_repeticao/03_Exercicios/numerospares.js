const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i = 0; i < numeros.length; i++){
    const par = numeros[i] % 2
    if(par === 0){
        console.log(numeros[i])
    }
}