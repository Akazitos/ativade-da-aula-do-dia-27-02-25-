function calcularRefeicoes(quantidadeKg) {
    var quantidadeEmGramas = quantidadeKg * 1000; 
    var refeicoes = quantidadeEmGramas / 250; 
    return refeicoes;
}


console.log("Você pode fazer", calcularRefeicoes(2), "refeições com 2kg de alimento.");