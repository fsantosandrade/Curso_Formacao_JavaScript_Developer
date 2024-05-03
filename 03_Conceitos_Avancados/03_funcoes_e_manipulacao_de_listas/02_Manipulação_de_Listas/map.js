// map
// Serve para converter uma coisa para outra, nesse caso: uma lista de objetos para uma lista de nomes

class Pessoa {
    constructor(nome){
        this.nome = nome
    }   
}

const lista = [new Pessoa('Felipe'), new Pessoa('Shirley'), new Pessoa('Cristiano'), new Pessoa('Cristyane')]

const listaEmHtml = (element, i) => {
    return`
    <li>
        ${element.nome}
    </li>
    `
}

const listaDeNomes = lista.map(listaEmHtml)

console.log(listaDeNomes)