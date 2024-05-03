// filter
// Cria uma nova lista baseada na "condição" booleam imposta no filter

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const listaNumerosPares = lista.filter((element, i, listRef) => (element % 2 === 0))

console.log(listaNumerosPares) 