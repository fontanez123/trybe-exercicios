const readline = require('readline-sync');

const peso = readline.questionFloat('Qual seu peso(em kg)? ');
const altura = readline.questionFloat('Qual sua altura(em metros)? ');

const imc = peso / (altura * altura);

function resultado(imc) {
    if (imc < 18.5){
        return 'peso baixo (magreza)'
    } else if (imc >= 18.5 && imc < 34.9){
        return 'obesidade grau I'
    } else {
        return 'obesidade grau II'
    }
}

console.log(`Seu IMC é igual a ${imc} e você está com ${resultado(imc)}`);