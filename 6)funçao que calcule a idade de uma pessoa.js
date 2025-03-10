//funçao que calcule a idade de uma pessoa considerando  o ano atual (2025) e o ano de nascimento
function idade(anoNascimento) {
    var idade = 2025 - anoNascimento;
    return idade;
}

console.log("Sua idade é: ", idade(2000));