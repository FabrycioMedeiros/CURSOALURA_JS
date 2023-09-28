// 5.	Crie um programa que determine se um número é primo ou não, usando declarações "if". Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.

function primeNumber(numero) {
  // se número menor ou igual a 1, não é primo
  if (numero <= 1) {
    return false;
  }
  // Caso o número seja 2, é primo
  if (numero === 2) {
    return true;
  }

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false; // Se for divisível, não é primo
    }
  }
      return true; // Se não for divisível por nenhum número além de 1 e ele mesmo, é primo
}

const numero = 17; // Alterar número para verificar a condição

if (primeNumber(numero)) {
  console.log(`${numero} é um número primo.`);
} else {
  console.log(`${numero} não é um número primo.`);
}