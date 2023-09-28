//Escreva um loop "while" que calcule a média dos números de 1 a 50 e imprima o resultado.

let numero = 1;
let soma = 0;
let contador = 0;

while (numero <= 50) {
    soma += numero;
    contador++;
    numero++;
}

const media = soma / contador;
console.log(`A média dos números de 1 a 50 é: ${media}`);