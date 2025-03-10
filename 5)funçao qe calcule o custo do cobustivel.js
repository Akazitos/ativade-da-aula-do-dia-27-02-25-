//crie uma funcao que calcule o custo do combustivel para uma vijam, considerando um preco fixodo bombustivel de 5.50 por litro, recebendo a distancia e o consumo de carro (quantos km por litro)
function custoViagem(distancia, consumo) {
    var custo = (distancia / consumo) * 5.50;
    return custo;
}

console.log("O custo da viagem é de: R$", custoViagem(200, 10));