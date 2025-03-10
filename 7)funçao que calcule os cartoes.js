function cartoesTransporte() {
    var saldo = 50; 
    var custoCartao = 5; 
    var quantidade = saldo / custoCartao; 
    return quantidade;
}

console.log("Você pode comprar:", cartoesTransporte(), "cartões de transporte.");