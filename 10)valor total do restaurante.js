function calcularContaRestaurante() {
    var totalPratos = 25 + 30 + 20 + 35 + 40;
    var totalFinal = totalPratos * 1.10; 
    return totalFinal;
}

console.log("O valor total da conta (com gorjeta) é: R$", calcularContaRestaurante());