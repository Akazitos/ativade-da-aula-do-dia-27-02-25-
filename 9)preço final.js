function calcularPrecoFinal(preco, desconto) {
    var valorDesconto = (preco * desconto) / 100; 
    var precoFinal = preco - valorDesconto; 
    return precoFinal;
}


console.log("O preço final do produto é: R$", calcularPrecoFinal(100, 30));