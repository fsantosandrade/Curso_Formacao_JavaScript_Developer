const pessoa = {
    nome: 'Felipe Santos', 
    idade: 19,
    descrever: function(){
        console.log(`Seu nome é ${this.nome} e sua idade é ${this.idade}`)
    }
}

console.log(pessoa['nome'])