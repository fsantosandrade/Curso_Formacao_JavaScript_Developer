class Carro{
    marca
    cor
    gastoDeComb

    constructor(marca, cor, gastoDeComb){
        this.marca = marca
        this.cor = cor
        this.gastoDeComb = gastoDeComb
    }

    calcularValor(quantKm, valorComb){
        const calc = (this.gastoDeComb * quantKm) * valorComb
        return calc.toFixed(1)
    }
}

const uno = new Carro('Fiat', 'cinza', 1/12)
const palio = new Carro('Fiat', 'preto', 1/10)

console.log(uno.calcularValor(70, 5))
console.log(palio.calcularValor(70, 5))

