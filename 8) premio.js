function dividirPremio() {
    var premioTotal = 5000; 
    var numeroPessoas = 5; 
    var valorPorPessoa = premioTotal / numeroPessoas; 
    return valorPorPessoa;
}

console.log("Cada pessoa receberá: R$", dividirPremio());