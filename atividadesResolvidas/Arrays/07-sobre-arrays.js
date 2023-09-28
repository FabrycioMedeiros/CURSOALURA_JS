// // o método reduce() para “reduzir” uma lista de números para um único valor. Este método trabalha com parâmetros um pouco diferentes dos outros que vimos durante o curso. Por isso, vamos destrinchar o exemplo da aula para entender melhor as partes do código.

// // Em seu editor, crie um arquivo index.js e execute o seguinte código:

// // const numeros = [43, 50, 65, 12]

// // const soma = numeros.reduce((acc, atual) => atual + acc, 0)

// // console.log(soma) //170
// // O código acima é muito parecido com o que foi feito durante a aula. É importante notar que:

// // O método reduce() está trabalhando com dois parâmetros. O primeiro é a função callback obrigatória para retornar o cálculo e o segundo parâmetro é um número que representa o valor inicial do acumulador – no caso, 0.
// // A função callback foi escrita diretamente dentro do reduce(), e esta função também está recebendo dois parâmetros, ambos obrigatórios: o valor acumulado e o valor atual.
// // A função callback foi escrita na forma de arrow function; nesse caso, quando só temos uma linha de instrução dentro da função (atual + acc) não precisamos usar chaves e nem da palavra-chave return.
// // Caso você tenha mais de uma linha de instrução dentro de uma arrow function, as chaves {} e a palavra-chave return voltam a ser necessários.

// // Vamos reescrever o reduce() de uma forma um pouco mais extensa para separar melhor as partes do código:

// // const soma = numeros.reduce(function (acc, atual) {
// //  return atual + acc
// // }, 0)
// // Vendo o código acima, percebe-se melhor onde começam e terminam cada um dos parâmetros do reduce(): o primeiro parâmetro, uma função e o segundo, um número.

// // Uma terceira forma de reescrever seria escrevendo a função callback fora do reduce():

// // function operacaoNumerica(acc, atual) {
// //  return atual + acc
// // }

// // const soma = numeros.reduce(operacaoNumerica, 0)
// // O reduce() roda o loop no array “por baixo dos panos”, executando para cada elemento a instrução passada na função operacaoNumerica.

// Atribuir diretamente um array para outro com o sinal = faz com o que o JavaScript entenda que é como se eles fossem o mesmo array. Para evitar esse comportamento, devemos criar um array totalmente novo, com a ajuda do spread operator ... (ou operador de espalhamento).

// Porém, esse comportamento não acontece com strings, números e booleanos, que são tipos primitivos do JavaScript.

// Considere o seguinte código:

// let num1 = 10;
// let num2 = num1;

// num2 += 5;
// num1 += 1;

// console.log(`Num1 é ${num1}. Num2 é ${num2}`);

// Ao executar o código, teremos a frase “Num1 é 11. Num2 é 15”. Ou seja, com o código let num2 = num1, o JavaScript entende que queremos criar uma cópia de num1, e cria uma nova variável, com seu próprio espaço na memória guardando seu valor. Então, ao modificar uma das variáveis, a outra não é alterada.

// Esse comportamento de copiar um valor primitivo, o atribuindo a uma nova variável, é chamado de atribuição por valor e acontece somente com os tipos primitivos do JavaScript.

// O mesmo comportamento ocorre quando trabalhamos com parâmetros de funções. Veja o seguinte exemplo:

// let numeroOriginal = 10;
// function alteraNumero(numero) {
//   numero = 50;

//   console.log(`numero do parâmetro é ${numero}. numeroOriginal é ${numeroOriginal}`);
// }

// alteraNumero(numeroOriginal);

// Executando o código, teremos a frase “numero do parâmetro é 50. numeroOriginal é 10”. Ao chamar a função passando numeroOriginal como parâmetro, foi feita uma cópia de seu valor para ser utilizada como o parâmetro numero dentro da função. Dessa forma, mesmo alterando numero dentro da função, numeroOriginal permanece inalterado.

// Mas como você viu, com arrays não funciona bem dessa forma, afinal, eles não são um tipo primitivo. Considere o exemplo utilizado no vídeo passado:

// const notas = [7, 7, 8, 9];

// const novasNotas = notas;

// novasNotas.push(10);

// console.log(`As novas notas são ${novasNotas}`);
// console.log(`As notas originais são ${notas}`);

// A partir do código const novasNotas = notas, o JavaScript entende que novasNotas e notas passam a ser o mesmo array, e agora eles apontam para o mesmo espaço na memória. Como estamos lidando com dados mais complexos, o JavaScript faz isso por padrão para otimizar memória e performance, em vez de realizar uma cópia do array em toda nova atribuição.

// Uma atribuição de um array é chamada de atribuição por referência, pois nela é passada a referência do array em si, e não uma cópia de seu valor.

// O mesmo comportamento ocorre quando trabalhamos com parâmetros de funções. Veja o código abaixo:

// const arrayOriginal = [7, 7, 8, 9];
// function alteraArray(array) {
//   array.push(10);

//   console.log(`array do parâmetro é ${array}`);
//   console.log(`arrayOriginal é ${arrayOriginal}`);
// }

// alteraArray(arrayOriginal);

// Executando o código, teremos essa saída:

// array do parâmetro é 7,7,8,9,10
// arrayOriginal é 7,7,8,9,10

// Após passar arrayOriginal como parâmetro de alteraArray, o utilizamos como o parâmetro array. O código array.push(10) alterou ambos os arrays, assim como o que houve no exemplo que fizemos a atribuição. Ou seja, novamente, foi passada a referência do array em si, e não uma cópia dele.

// De forma análoga à solução do vídeo, caso queiramos passar uma cópia do array e não sua referência, trocamos o código alteraArray(arrayOriginal) por alteraArray([...arrayOriginal]). Assim, a saída será:

// array do parâmetro é 7,7,8,9,10
// arrayOriginal é 7,7,8,9