// Questão 1
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log (numbers); */

// Questão 2
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (i = 0; i < numbers.length; i += 1) {
    resultado = resultado + numbers[i];
} console.log(resultado); */

// Questão 3
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (i = 0; i < numbers.length; i += 1) {
    resultado = resultado + numbers[i];

}
let media = resultado/numbers.length;
console.log(media); */

// Questão 4
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (let i = 0; i < numbers.length; i += 1) {
    resultado = resultado + numbers[i];

}
let media = resultado/numbers.length;

if (media > 20) {
    console.log ("valor maior que 20");
} else {
    console.log ("valor menor ou igual a 20");
} */

// Questão 5
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = numbers[0];

for (let i = 0; i < numbers.length; i+= 1){
    if (numbers[i] > maiorNumero){
        maiorNumero = numbers[i];
    }
} 
    console.log(maiorNumero);
 */


// Questão 6
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (let i = 0; i < numbers.length; i += 1){
    if (numbers[i] % 2 !== 0){
        resultado = resultado + 1
    }
}

if (resultado === 0) {
    console.log ("nenhum valor ímpar encontrado")
} else {
    console.log (resultado);
}
 */

// Questão 7
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[0];

for (let i = 0; i < numbers.length; i += 1){
    if (numbers[i] < menorNumero){
        menorNumero = numbers[i];
    }
} console.log (menorNumero); */

// Questão 8
/* let resultado = [];

for (let i = 1; i < 26; i += 1){
    resultado.push(i);
}
console.log(resultado); */

//Questão 9
/* let arrayQuestaoAnterior = [1,  2,  3,  4,  5,  6,  7,  8, 9, 10, 11, 12, 13, 14, 15, 16,17, 18, 19, 20, 21, 
    22, 23, 24, 25];
let resultado = [];
let divisao = 0;

for (let i = 0; i < arrayQuestaoAnterior.length; i += 1){
    divisao = arrayQuestaoAnterior [i]/2;
    resultado.push(divisao);
}
console.log (resultado);
 */