// join
// Serve para juntar elementos de uma lista com ou sem algum separador entre os itens

const lista = [{nome: 'Felipe'}, {nome: 'Arthur'}, {nome: 'Amaral'}, {nome: 'Juca'}]

const nomeComA = lista.map(e => e.nome).filter(e => e.startsWith('A')).join(', ')

const nomeComAHtml = lista.filter(e => e.nome.startsWith('A'))
                            .map(e => `<li>${e.nome}</li>
`)
.join('')

console.log(nomeComAHtml)