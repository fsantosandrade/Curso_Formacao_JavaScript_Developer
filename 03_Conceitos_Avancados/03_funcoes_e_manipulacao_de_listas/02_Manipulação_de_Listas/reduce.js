// reduce
// Serve para percorrer uma lista e transformá-la em um único valor

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const somaDeTodosOsElementos = lista.reduce((previous, current, i, list) => {
    return previous + current
}, 0//valor inicial
)

console.log(somaDeTodosOsElementos)