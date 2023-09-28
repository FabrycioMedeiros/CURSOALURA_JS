// // Vimos como usar os loops para percorrer um array utilizando o "for":

// // const notas = [10, 6.5, 8, 7.5];

// // let somaDasNotas = 0;

// // for (let i = 0; i < notas.length; i++) {
// //   somaDasNotas += notas[i];
// // }

// // const media = somaDasNotas / notas.length;

// // console.log(`A média das notas é ${media}.`);


// // Agora, se quisermos percorrer matrizes, um único for não será suficiente. Mas podemos usar o for várias vezes, uma para cada dimensão da matriz. Assim, uma matriz de duas dimensões usará dois for, um dentro do outro. Começaremos criando mais alguns arrays e uma matriz de 2 dimensões.

// // const notas1 = [10 , 6.5, 8 ,7.5]
// // const notas2 = [9  , 6  , 6]
// // const notas3 = [8.5, 9.5]
 
// // const notasGerais = [notas1,notas2,notas3]
 
// // let media = 0


// // Com a matriz criada, vamos iterar sobre os elementos. Mas não poderemos usar o mesmo for utilizado da última vez, já que agora notasGerais[i] contém um array e não mais um valor numérico. Por isso usaremos outro for para acessar esse array.

// // for (let i = 0; i < notasGerais.length; i++) {
// //   for (let j = 0; j < notasGerais[i].length; j++) {
// //     media += notasGerais[i][j]/notasGerais[i].length;
// //   }
// // }


// // Vamos entender um pouco melhor as partes que compõem esse código.

// // No primeiro for criamos uma let i e vamos executar o bloco de código enquanto i for menor que notasGerais.length. Como temos 3 elementos (nesse caso, arrays), o primeiro for será executado 3 vezes, com i=0,i=1,i=2.

// // O segundo for tem uma nova variável, a let j, já que não podemos usar uma nova let i porque ela já está definida, e vamos executá-lo enquanto j for menor que notasGerais[i].length. Como cada notasGerais[i] é um array, podemos obter a propriedade de tamanho dele utilizando o .length.

// // O código dentro do segundo for vai acumular o valor de notasGerais[i][j], lembrando que notasGerais[i] é um dos 3 arrays iniciais. Assim, o parâmetro [j] vai acessar o elemento dentro array escolhido pelo notasGerais[i], retornando um número que podemos usar na nossa conta.

// // Então ficamos com o seguinte código:

// // const notas1 = [10 , 6.5, 8 ,7.5]
// // const notas2 = [9  , 6  , 6]
// // const notas3 = [8.5, 9.5]
 
// // const notasGerais = [notas1,notas2,notas3]
 
// // let media = 0
 
// // for (let i = 0; i < notasGerais.length; i++) {
// //   for (let j = 0; j < notasGerais[i].length; j++) {
// //     media += notasGerais[i][j]/notasGerais[i].length;
// //   }
// // }
 
// // console.log(media)


// // No entanto, este código retorna uma média de 24. Como tal média é possível se não temos nenhum número maior do que 10? O que acontece é que para conseguir a média entre todos os arrays, temos que somar as médias dos arrays de notas, 8+7+9 e dividir pela quantidade de arrays em notasGerais.

// // const notas1 = [10, 6.5, 8 ,7.5]
// // const notas2 = [9, 6, 6]
// // const notas3 = [8.5, 9.5]
 
// // const notasGerais = [notas1,notas2,notas3]
 
// // let media = 0
 
// // for (let i = 0; i < notasGerais.length; i++) {
// //   for (let j = 0; j < notasGerais[i].length; j++) {
// //     media += notasGerais[i][j]/notasGerais[i].length;
// //   }
// // }
 
// // media = media/notasGerais.length
 
// // console.log(media)

// // Com isso usamos o for para passar por todos os elementos da matriz, e nesse caso, calcular a média dos valores deles.

// Para saber mais: 

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for
// possibilidades do for


// A estrutura for tem uma sintaxe mais complexa que o for of, com mais expressões, mas por causa disso fornece um maior leque de possibilidades de acordo com a nossa necessidade.

// Por exemplo, podemos percorrer um array do fim ao início:

// const numeros = [100, 200, 300, 400, 500, 600];

// for (let i = numeros.length - 1; i >= 0; i--) {
//   console.log(numeros[i]);
// }

// Declaramos o valor inicial da variável de controle como o valor da última posição do array (numeros.length - 1); realizamos um decremento (i--) ao invés de um incremento e a condição de execução é i >= 0. Ou seja, nesse caso, a variável i começará do valor 5 e irá até 0.

// Ao executar o código, no terminal aparecerá:

// 600
// 500
// 400
// 300
// 200
// 100

// Outra possibilidade é alterar a quantidade incrementada ou decrementada, utilizando o mesmo código acima, mas alterando o decremento para i -= 2. Então, teremos o seguinte:

// const numeros = [100, 200, 300, 400, 500, 600];

// for (let i = numeros.length - 1; i >= 0; i -= 2) {
//   console.log(numeros[i]);
// }

// O valor de i será diminuído de 2 em 2 a cada iteração (lembrando que a expressão i -= 2 equivale a i = i - 2). Assim, os valores de i serão 5, 3 e 1, e no terminal aparecerá:

// 600
// 400
// 200

// Também temos controle sobre a condição de execução, então se alterarmos esse último código para ter a condição numeros[i] > 300, teremos o seguinte:

// const numeros = [100, 200, 300, 400, 500, 600];

// for (let i = numeros.length - 1; numeros[i] >= 300; i -= 2) {
//   console.log(numeros[i]);
// }COPIAR CÓDIGO
// E no terminal aparecerá:

// 600
// 400

// Por fim, até agora utilizamos a estrutura for apenas para percorrer arrays, mas ela pode ser utilizada para repetir qualquer instrução conforme a necessidade. Por exemplo, podemos criar dinamicamente um array com todos os números pares de 0 a 100:

// const numerosPares = [];

// for (let i = 0; i <= 100; i += 2) {
//   numerosPares.push(i);
// }

// console.log(numerosPares);

// No terminal aparecerá:

// [
//    0,  2,  4,  6,  8, 10,  12, 14, 16, 18, 20,
//   22, 24, 26, 28, 30, 32,  34, 36, 38, 40, 42,
//   44, 46, 48, 50, 52, 54,  56, 58, 60, 62, 64,
//   66, 68, 70, 72, 74, 76,  78, 80, 82, 84, 86,
//   88, 90, 92, 94, 96, 98, 100
// ]

// Na maioria dos casos, você não precisará realizar repetições mais complexas como essas, mas nunca se sabe, certo? Por isso, conhecer os recursos de uma linguagem e suas possibilidades pode ser uma “mão na roda” no futuro.

// Para percorrer todos os elementos de um array e do início ao fim, o for of fornece uma sintaxe mais sucinta que o for.
