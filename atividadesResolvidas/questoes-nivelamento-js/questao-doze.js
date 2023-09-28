// 12. Suponha que você tenha um array de números inteiros. Como você usaria o método map() para criar um novo array onde cada número seja elevado ao quadrado e, em seguida, use o método filter() para criar outro array contendo apenas os números que são divisíveis por 3 a partir do array resultante do map()?

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Uso do map() para elevar ao quadrado cada número
const numerosAoQuadrado = numeros.map(numero => numero * numero);

// Uso do filter() para filtrar os números divisíveis por 3
const numerosDivisiveisPor3 = numerosAoQuadrado.filter(numero => numero % 3 === 0);

console.log(numerosDivisiveisPor3);