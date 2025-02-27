// funçao que calcule  o valor da compra e calcule o troco que a pessoa deve receber

function troco (valorpago, valordosprodutos){
    var troco = valorpago - valordosprodutos
    return troco
}
console.log ("o seu troco e de: ", troco(200, 100));