function calcularImposto(preco) {
    var imposto = preco * 0.18; 
    return imposto;
}

console.log("O valor do imposto sobre o produto é: R$", calcularImposto(100));