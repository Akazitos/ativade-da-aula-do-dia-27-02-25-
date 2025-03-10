function calcularMediaTemperaturas(temperaturas) {
    var somaTemperaturas = 0;
    var numeroDeDias = 7; 
    for (var i = 0; i < numeroDeDias; i++) {
        somaTemperaturas += temperaturas[i];
    }
    return somaTemperaturas / numeroDeDias;
}


var temperaturasSemana = [22, 24, 21, 23, 20, 19, 25];
console.log("A média das temperaturas da semana é: ", calcularMediaTemperaturas(temperaturasSemana), "°C");