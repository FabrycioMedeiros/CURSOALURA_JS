// // Para saber mais: 

// // for...of vs callbacks

// // Até agora vimos várias formas de fazer o que parece ser a mesma coisa: for, for…of, forEach()... Com tantas opções, como posso escolher qual usar no meu código?

// // Antes, vamos dar uma olhada em cada um deles:

// // for
// // A forma mais “clássica” de se efetuar um loop em JavaScript e em várias outras linguagens, o for é muito conveniente pois pode ser utilizado com qualquer tipo de iterável e é construído de uma forma que deixa muito claro quais são todas as “fases” de cada loop - também chamamos um loop de laço de repetição ou de iteração.

// // O que é um “iterável”? Além de arrays, strings, sets (conjuntos) e maps (mapas ou dicionários) são considerados iteráveis. Não vamos falar dos dois últimos tipos neste curso, mas se você tiver interesse em saber mais sobre conjuntos, dicionários e outras estruturas de dados, pode dar uma olhada neste artigo; o que precisamos saber agora é que um iterável, aqui, representa uma sequência de elementos que pode ser percorrida (ou seja, iterada) utilizando ferramentas próprias para isso. É importante fazer uma distinção entre array e iterável, pois nem todo método que funciona em um array vai funcionar em outros iteráveis - veremos isso em seguida.

// // const lista = [1, 2, 3, 4, 5];

// // for (let indice = 0; indice < lista.length; indice++) {
// //  console.log(lista[indice]); 
// // }

// // O que queremos dizer com “deixar claro as fases da iteração” pode ser visto no exemplo acima: a expressão entre parênteses () após a palavra-chave for. Dentro da expressão temos:

// // uma variável contadora, que é criada antes do início do laço (let indice);
// // uma expressão de teste (indice < lista.length), que é executada antes de cada iteração e que verifica se o código dentro do bloco {} deve ou não ser executado;
// // por último, uma expressão que é executada ao final de cada laço, normalmente um incremento (++) ou decremento (--) da variável contadora.
// // Ou seja: como as fases de cada laço são declaradas de forma explícita, elas também podem ser alteradas conforme a necessidade do código, o que faz com que o for seja muito versátil e possa ser utilizado em casos específicos, quando os outras formas de sintaxe mais reduzida (como os que vamos ver em seguida) não atendem. O laço pode ser decremental ao invés de incremental (percorrer um array de trás para frente), a variável contadora pode receber outro valor como let indice = 2 ou let indice = outraVariavel + 1 (desde que esse valor seja avaliado como número), a condição de teste pode ser o tamanho do array como no exemplo, ou outro (indice < lista.length - 1) e o incremento ou decremento ao final do laço pode receber qualquer operador aritmético ou ser o resultado de uma operação, como indice = indice + 2 ou indice *= 2.

// // É possível, inclusive, usar o for para executar algoritmos mais complexos, que também não seriam possíveis com outros métodos, por exemplo:

// // const lista = [1, 2, 3, 4, 5];

// // for (let i = 0, j = 0; i < lista.length; i++, j++) {
// //  console.log(lista[i] + j); 
// // }

// // //1
// // //3
// // //5
// // //7
// // //9

// // Ainda há outras formas de se trabalhar com as condições do for, que você pode conferir na documentação sobre for no MDN.

// // for…of
// // Adicionado às funcionalidades do JavaScript na versão ES6, é um tipo de laço de repetição diferente do for tradicional, embora utilize a mesma palavra-chave:

// // const lista = [1, 2, 3, 4, 5];
// // let soma = 0;

// // for (let elemento of lista) {
// //  soma += elemento;
// // }

// // console.log(soma) //15

// // O for…of pode ser executado utilizando qualquer tipo de iterável: além de arrays, strings, sets (conjuntos) e maps (mapas ou dicionários) são considerados objetos iteráveis. Não vamos falar dos dois últimos tipos neste curso, mas se você tiver interesse em saber mais sobre conjuntos, dicionários e outras estruturas de dados, pode dar uma olhada neste artigo; o que precisamos saber agora é que um iterável, aqui, representa uma sequência de elementos que pode ser percorrida (ou seja, iterada) utilizando o for…of. É importante fazer esta distinção entre array e iterável, pois nem todo método ou declaração que funciona em um array vai funcionar em outros iteráveis.

// // Olhando assim, o for…of se parece bastante com o for: temos a declaração de uma variável (let elemento) seguida da palavra-chave of e um identificador do iterável que será percorrido (no caso acima é um array mesmo, lista).

// // A diferença principal e mais visível entre o for e o for…of é que o anterior dá muito mais controle sobre de que forma o laço de repetição ocorre. Por exemplo, vimos que no for é possível manipular de forma mais fina todas as condicionais; já no for…of as condições são mais “fixas”: elemento se refere a cada elemento (ou item) do array e o loop sempre ocorre de forma sequencial, do primeiro elemento até o último.

// // Em contrapartida, a sintaxe simplificada e mais “legível” para pessoas faz com que o uso do for…of seja mais prático do que o for, pois laços de repetição mais simplificados, que percorrem um iterável do primeiro ao último elemento e executam o código do bloco a cada iteração, são muito mais corriqueiros.

// // forEach()
// // Ao contrário de for e for…of, o forEach() é um método do objeto Array.

// // O que é um método? Em programação, chamamos de método uma função que é propriedade de um objeto. A documentação do MDN traz alguns exemplos de métodos, mas você vai poder conferir com mais detalhes o que são objetos e suas propriedades quando fizer o curso de fundamentos do JavaScript: Objetos. Por agora, basta saber que quando dizemos que determinada função - por exemplo, forEach() é um método de array, significa que esta função foi desenvolvida para trabalhar apenas com esse tipo de dado - no caso, com arrays.

// // O forEach(), assim como outros métodos de array que vimos ou ainda vamos ver durante esta aula, também cumprem o papel de iterar arrays, porém com funcionalidades e retornos bem definidos. No caso do forEach(), apesar da sintaxe bem diferente, podemos utilizar este método como o for ou o for…of, pois ele vai executar as instruções que forem passadas para cada elemento iterado, sem retornar nenhum dado.

// // O forEach(), assim como alguns outros métodos de array do JavaScript que estamos vendo no curso, utiliza a abordagem funcional de funções callback para executar o código necessário a cada elemento iterado no laço:

// // const lista = [1, 2, 3, 4, 5];
// // let soma = 0;

// // lista.forEach(numero => soma += numero);
// // console.log(soma) //15

// // Como visto acima, o método forEach() recebe uma função como parâmetro, e esta função por sua vez utiliza como parâmetro cada um dos elementos do array. A lógica interna do forEach() vai manejar a iteração do primeiro ao último item do array e fazer com que o código definido dentro da função callback (no caso, apenas um incremento soma += numero) seja executado a cada iteração.

// // O mesmo código também poderia ser escrito da seguinte forma, um pouco mais extensa porém mais legível:

// // lista.forEach(numero => {
// //  soma += numero
// // });

// // Ou ainda, utilizando a palavra-chave function ao invés de arrow functions; essa forma de escrita não é usual, pois quando usamos funções callback o padrão adotado é o de arrow functions, mas serve para o propósito de legibilidade:

// // lista.forEach(function (numero) {
// //  soma += numero
// // });

// // Assim, vemos que o forEach() não retorna nenhum tipo de valor, apenas executa o que está dentro do bloco da função callback, assim como for e for…of. Porém também não é possível modificar a forma que a iteração será feita (é sempre do primeiro elemento do array ao último) e não há forma de interromper o laço dada alguma condição, como o break funcionaria para um for normal.

// // O forEach() também não pode ser utilizado com qualquer iterável, apenas com arrays e também não pode ser utilizado de forma assíncrona - um tema um pouco mais avançado e que não trabalharemos nesse curso, mas que você pode conferir neste artigo se tiver curiosidade pra começar a aprender.

// // E quando devo utilizar um ou outro?
// // A resposta, como em muitas coisas na programação, é depende!

// // Atualmente, em termos de performance - ou seja, qual código é executado de forma mais rápida pelo computador e consumindo menos recursos de memória - tanto os laços com for como o forEach() não tem diferenças significativas, embora ainda possam ocorrer exceções, como no caso de versões muito antigas de navegadores e/ou manipulação de arrays muito longos. Mas no momento em que desenvolvemos este curso a questão de performance não é tão definidora na maior parte dos casos, pois os interpretadores do JavaScript já evoluíram para trabalhar tão bem com funções callbacks quanto com iteradores.

// // O forEach() utiliza callbacks assim como map(), filter() e alguns outros métodos de array, o que facilita a utilização desses métodos em conjunto ou a troca de um para outro dependendo da necessidade do código ou de uma refatoração. Alguns guias de estilo de código desenvolvidos pela comunidade, como o famoso guia do AirBNB, indica preferencialmente o uso do forEach() no lugar do for…of para manter a consistência no estilo do código.

// // O for…of, mais recente que o forEach(), não é um método de array e sim um iterador, assim como o for. Ou seja, vai trabalhar com outros tipos de dados iteráveis além de arrays, com uma sintaxe mais simplificada que a do for.

// // Como em ambos os casos não há retorno, somente a execução do código que está dentro do bloco - os colchetes {} do for…of ou a função callback do forEach(), você pode utilizar as ferramentas da seguinte forma:

// // forEach() para trabalhar com arrays da forma mais corriqueira - percorrendo do primeiro ao último elemento, sem alterar a condição de parada, e também para manter a coesão do estilo quando em conjunto com outros métodos de array como map, filter e etc;
// // for…of em caso de iteráveis (dicionários, conjuntos e outras estruturas de dados) ou de arrays quando for necessário o uso de programação assíncrona e/ou dar condições de saída do laço (por exemplo, com o uso de break);
// // for para casos em que seja necessário manipular de forma mais fina as fases do laço (condição inicial, condição de parada e incremento).


// // Utilizamos um método específico para strings, o toUpperCase(), para alterar todos os caracteres de cada string do array para letras maiúsculas. Mas e se quisermos acessar somente uma letra? Poderíamos usar um loop para percorrer todas as letras de um string?

// // “String”, além de ser o tipo de dado usado para representar textos, também se define como uma sequência ordenada de caracteres!

// // “Lista ordenada” (ou sequência) também é uma forma de definir arrays, certo? Então podemos pensar que, por baixo dos panos, strings são armazenadas em memória da seguinte forma:

// // const nome = "Alura";
// // // ["A", "l", "u", "r", "a"]
// // Ou seja, é possível utilizar alguns métodos de array e laços de repetição para acessar e alterar strings:

// // const nome = "Alura";
// // let nomeMaiusculas = "";

// // for (let i = 0; i < nome.length; i++) {
// //  nomeMaiusculas += nome[i].toUpperCase()
// // }
// // console.log(nomeMaiusculas) //ALURA
// // const nomedoCurso = "Fundamentos de JS";
// // const nomeDaPlataforma = " Alura"

// // const nomeCompleto = nomedoCurso.concat(nomeDaPlataforma)
// // console.log(nomeCompleto)  //Fundamentos de JS Alura

// O termo callback se refere à função que é “chamada de volta” dentro de outra função. Após o lançamento do ES6 (também conhecido como EcmaScript 2015) o uso desse tipo de método foi se consolidando, então é importante entender como utilizá-lo.

// O JavaScript moderno traz vários métodos e funções callback diversos, não apenas para uso com arrays. Porém a estrutura da função se mantém similar.

// Crie um novo arquivo index.js e crie uma array de números:

// const arrayNums = [1, 2, 3, 4]
// Vamos utilizar o map() para multiplicar cada um dos valores nesse array por 10 e retornar um novo array com os resultados. Antes de escrevermos o map() para isso, vamos criar a função callback; ou seja, a função que vamos chamar (call) de volta quando executarmos o método map():

// function multiplicaPorDez(num) {
//  return num * 10
// }COPIAR CÓDIGO
// Agora podemos chamar o map() para fazer a operação:

// const arraySomada = arrayNums.map(multiplicaPorDez)

// console.log(arraySomada)
// O resultado no terminal deve ser [ 10, 20, 30, 40 ].

// IMPORTANTE: Observe a função multiplicaPorDez. Quando criamos esta função, especificamos que ela precisa receber o parâmetro (num) para ser executada corretamente. No entanto, quando ela está sendo chamada dentro de arrayNums.map(), não passamos nenhum parâmetro e mesmo assim funcionou. O que aconteceu aqui?

// Para entender melhor, vamos reescrever o código, passando a função multiplicaPorDez(num) direto como parâmetro do map():

// const arraySomada = arrayNums.map(num => num * 10)

// console.log(arraySomada)
// No código acima, substituímos uma função externa e nomeada (a função multiplicaPorDez), por uma arrow function anônima que existe somente dentro do map(). Mas esta função anônima também tem um parâmetro, num, que representa cada um dos elementos do array que será iterado pelo map().

// Por isso, quando utilizamos uma função externa como callback de um map(), não foi necessário passar um parâmetro. O map() executa automaticamente o bloco de código da função (nesse caso, num * 10) para cada elemento do array.

// Ambos os casos de uso são válidos; as funções externas permitem reaproveitamento de código, mas há vários momentos em que isso não será necessário.