// 7.	Escreva um loop "for" que encontre o maior número em um array de números.

const numeros = [9, 13, 45, 56, 6, 15, 55, 23, 8];
// Variável para armazenar o maior número encontrado
let maiorNumero = numeros[0];
// "for" para encontrar o maior número do array
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maiorNumero) {
    maiorNumero = numeros[i];
  }
}

console.log("O maior número no array é:", maiorNumero);