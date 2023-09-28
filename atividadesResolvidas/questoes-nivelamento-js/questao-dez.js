// 10.	Dado um array de números, utilize um loop "for...of" para calcular a soma de todos os elementos do array.

const numeros = [1, 12, 10, 8, 6, 14];

let soma = 0;

// Loop "for...of" para calcular a soma
for (const numero of numeros) {
  soma += numero;
}

console.log("A soma de todos os elementos do array é:", soma);