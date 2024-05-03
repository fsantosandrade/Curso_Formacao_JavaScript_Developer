// A diferença entre functions declradas normalmente e arrow functions 
// é que as arrow functions não possuem contexto isolado, como no exemplo:

function funcao1() {
    console.log(this)
}                                                         

const funcao2 = () => {
    console.log(this)
}

const felipe = {
    nome: 'Felipe',
    funcao1,
    funcao2
}

felipe.funcao1()
felipe.funcao2()