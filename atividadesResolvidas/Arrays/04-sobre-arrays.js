// // // // Durante a aula vimos as listas com duas dimensões, ou seja, arrays que contêm arrays, podendo ter um único array ou vários dentro do principal.

// // // // const nomes = ["Ana", "Juliana", "Leonardo"];
// // // // const idades = [30, 35, 28];
// // // // const faculdade = [false, true, true];

// // // // const funcionarios = [nomes, idades, faculdade];

// // // // O array funcionarios é um array de duas dimensões. Há 3 arrays dentro dele, e para acessar os valores em funcionarios precisamos de 2 colchetes “[ ] [ ]”. O primeiro colchete será usado para escolher qual dos 3 arrays dentro de funcionarios será acessado. podendo ser:

// // // // 0 -> nomes
// // // // 1 -> idades
// // // // 2 -> faculdade

// // // // O segundo colchete será usado para acessar a informação dentro do array escolhido.

// // // // Outra forma de chamar os arrays de 2 dimensões é matrizes. Matrizes podem ser visualizadas como uma tabela do Excel, onde cada campo representa um elemento, e precisamos de uma linha e uma coluna para acessar um campo. Então, as linhas são o primeiro colchete e a coluna o segundo colchete.

// // // // Arrays têm seu principal uso quando temos uma grande quantidade de informações com propósitos similares, como as notas de um aluno. Matrizes, por sua vez, são utilizadas quando precisamos de vários arrays similares ou com informações ligadas às outras, como as notas de uma classe com vários alunos.

// // // // As matrizes não são limitadas a 2 dimensões, podendo ter mais dimensões, de modo que cada dimensão é representada por um colchete. Porém, tome cuidado para não se perder dentro delas, já que se uma matriz passa a ter, por exemplo, 4 ou 5 dimensões, se torna bem difícil saber exatamente o que está sendo acessado e começamos a ter problemas para fazer a manutenção do código.

// // // Durante a aula usamos o método concat() para unir (concatenar) arrays gerando um novo com o resultado da concatenação. Neste caso, o método funcionou da seguinte forma:

// // // array1.concat(array2)
// // // Logo, o método foi utilizado com um array (no caso acima, array1) e recebeu como parâmetro outro array (array2). O resultado foi um novo array com todos os elementos de array1 e array2; isso acontece pois, quando o concat() recebe um array como parâmetro, são apenas os elementos dentro dele que são concatenados, e não o array em si.

// // // E se tentarmos usar esse método passando como parâmetro outro tipo de dado, que não seja array? Abra um arquivo index.js em seu computador e execute o seguinte código:

// // // const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
// // // const arrayConcat = arrayOriginal.concat("André", "Fernanda")

// // // console.log(arrayConcat)
// // // console.log(arrayOriginal)
// // // O resultado deve ser:

// // // [ 'Maria', 'Carlos', 'Eduardo', 'Samanta', 'André', 'Fernanda' ]
// // // [ 'Maria', 'Carlos', 'Eduardo', 'Samanta' ]
// // // Com o exemplo acima, vemos que o JavaScript concatena o array principal e as strings de texto passadas como parâmetro para criar outro array, mantendo o original sem alterações.

// // // Vamos fazer um novo teste, mas passando mais de um array como parâmetro.

// // // const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
// // // const arrayConcat = arrayOriginal.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])

// // // console.log(arrayConcat)
// // // console.log(arrayOriginal)
// // // O resultado é:

// // // [ 'Maria', 'Carlos', 'Eduardo', 'Samanta', 'André', 'Fernanda', 'Ricardo', 'Ana', 'Marcelo', 'Bia' ]
// // // [ 'Maria', 'Carlos', 'Eduardo', 'Samanta' ]
// // // Podemos passar mais de um array como parâmetro para que seus elementos sejam concatenados em um único array, junto com o que está sendo chamado com o método (no caso, arrayOriginal.

// // // Como um último teste, vamos ver o que acontece se um dos parâmetros for um array com dois elementos, um número e um array:

// // // const arrayOriginal = [50, 60, 70]
// // // const arrayConcat = arrayOriginal.concat([80, [90, 100]])

// // // console.log(arrayConcat)
// // // console.log(arrayOriginal)
// // // O resultado no terminal agora é:

// // // [ 50, 60, 70, 80, [ 90, 100 ] ]
// // // [ 50, 60, 70 ]
// // // Vimos anteriormente que, quando recebe um array como parâmetro, concat() vai concatenar apenas os elementos. Porém, este método não extrai os elementos do array de forma recursiva; ou seja, não vai extrair os elementos de arrays que estejam “aninhados”. Dessa forma, 80 foi extraído do array com sucesso, porém 90 e 100 não, o método considerou [90, 100] como um único elemento.

// // // concat() é um método útil quando não se deseja alterar o array original, e sim fazer uma cópia alterada. Caso isso não seja necessário, considere utilizar push() ou splice() para inserir novos elementos ou fazer alterações no array original.

// // Acessando elementos de uma matriz

// // Podemos criar uma lista de duas dimensões (ou matriz) com o seguinte código:

// // const funcionarios = [
// //   ["Ana", "Juliana", "Leonardo"],
// //   [30, 35, 28]
// // ];

// // Com base nessa matriz, qual dos códigos abaixo eu posso utilizar para imprimir a frase “Leonardo tem idade 28”?


// // Alternativa correta
// // console.log(`${funcionarios[0][2]} tem idade ${funcionarios[1][2]}`)

// // Para imprimir o nome, acessamos a lista de nomes escrevendo funcionarios[0] e, logo em seguida, adicionamos [2] para acessar o nome da posição 2. Para imprimir a idade, acessamos a lista de idades escrevendo funcionarios[1] e, logo em seguida, adicionamos [2] para acessar a idade da posição 2.

// Os laços de repetição, como o for, são ferramentas essenciais na programação. São utilizados para, entre outras coisas, percorrer arrays e executar blocos de código para cada elemento.

// Porém, quando usamos for para executar códigos em loop, temos que deixar claro qual é a condição de execução do loop. Caso contrário, o programa não sabe em que momento deve parar de executar o loop, acaba ficando “preso” e entrando em loop infinito.

// O loop infinito pode travar seu navegador, o terminal em que o código estiver sendo executado, ou até mesmo o computador, então é importante saber como evitá-lo.

// Abaixo temos um exemplo de for que imprime no terminal números de 0 a 10:

// for (let indice = 0; indice <= 10; indice++) {
//   console.log(indice);
// }

// O código executa corretamente e o programa é capaz de encerrar o loop, pois a condição de execução indice <= 10 está correta, a variável indice que faz o controle do loop começa em 0 e ao fim de cada ciclo do loop, é aumentada em 1 (indice++). Quando o valor da variável de controle indice chega a 11, depois de imprimir o número 10 no terminal, a comparação indice <= 10 se torna false e isso encerra o loop.

// O loop infinito pode acontecer caso alguma das expressões seja passada de forma incorreta ou esteja faltando. Por exemplo a terceira, responsável por alterar indice após o bloco de código dentro do for ter sido executado:

// for (let indice = 0; indice <= 10; ) {
//   console.log(indice);
// }

// A mesma coisa acontecerá se o for for executado sem a segunda expressão, que é a condição de execução.

// for (let indice = 0; ; indice++) {
//   console.log(indice);
// }


// Outro caso que pode gerar loop infinito é o de alterações feitas na variável de controle dentro do bloco do for, o que não é uma boa prática:

// for (let indice = 0; indice < 10; indice++) {
//   indice--;
//   console.log(indice);
// }
// OBS: Como mencionamos acima, o loop infinito pode travar o terminal ou computador. Se durante seus estudos você perceber que executou um código com loop infinito, finalize a execução do programa o mais rápido possível no terminal pressionando “Ctrl + C”.