// Quando criamos uma função ela se lembra do contexto na qual foi declarada

function soma(x) {
    return function (y) {
        return x + y
    }
}

const somaX = soma(10)

console.log(somaX(10))
console.log(somaX(20))