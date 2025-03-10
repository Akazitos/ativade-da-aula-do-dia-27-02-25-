function calcularAssinaturaAnual(precoMensal) {
    var precoAnual = precoMensal * 12; 
    return precoAnual;
}

console.log("O valor total da assinatura anual é: R$", calcularAssinaturaAnual(50));