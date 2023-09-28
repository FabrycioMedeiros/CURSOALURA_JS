// Como vimos na aula, vamos trabalhar com array, que é um tipo de estrutura de dados. Ao contrário de uma variável, que guarda somente um valor por vez, um array (ou lista) pode armazenar diversos valores. Pode ser usada, por exemplo, para agrupar diversos dados que têm relação entre si.

// const numero1 = 50;
// const numero2 = 43;
// const numero3 = 12;

// // utilizando array
// const numeros = [50, 43, 12];

// // Um array pode ser definido como uma lista ordenada de valores enumerados em que cada valor é chamado de elemento ou item, e cada elemento se localiza numa posição na lista chamada de índice. Vamos destrinchar essa explicação.

// // Uma lista ordenada de valores enumerados:

// // Quando falamos de valores, estamos nos referindo a dados de algum tipo: string (texto), number (número), booleano (true ou false) ou outros dados reconhecidos pelo JavaScript.

// const arrayDeNumeros = [50, 43, 12];
// const arrayDeStrings = ["banana", "alura", "Juliana"];

// // Como uma lista ordenada, entende-se que os dados no array estão em uma ordem definida e se manterão nessa ordem. Eles estão enumerados, ou seja, cada um está associado a um identificador numérico que diz qual é a sua posição na lista (mais sobre isso abaixo!). Caso não seja feita nenhuma alteração no array, seus valores sempre aparecerão na mesma ordem: [50, 43, 12], por exemplo.

// // Cada valor é chamado de elemento ou item:

// // Em programação é importante sempre sabermos os nomes dos itens, para facilitar na hora de tirar dúvidas, procurar soluções e ler documentação. Quando trabalhamos com arrays, chamamos de elemento ou item cada um dos valores da lista.

// // array com 1 elemento
// const numero = [5];

// // array com 3 elementos
// const numero = [50, 43, 12];

// // Lembrando que cada elemento corresponde a um dado, separados por vírgula. O espaço é opcional, mas facilita a leitura.

// // Cada elemento está localizado em uma posição na lista, chamada de índice:

// // Se um array é uma lista ordenada, então é possível acessar cada um dos dados (ou valores) nele se soubermos a posição dele na lista. Por exemplo:

// const nums = [50, 43, 12];
// // o número 43 está na posição de número 1 (segunda posição) nessa lista de três números.

// // Em programação, chamamos de índice (em inglês, index) o número que identifica a posição de um valor em um array.

// // Porém um detalhe muito importante para trabalharmos bem com arrays é que em JavaScript (e na maior parte das linguagens de programação) a contagem dos índices não começa no número 1, e sim no número 0. Então, se quisermos acessar determinado valor pelo número do índice temos que levar isso em consideração:

// // índice     0   1   2   3
// const nums = [50, 43, 12, 98];

// // Sendo assim, o elemento de valor 43 está localizado no índice de número 1

// // A propriedade length:
// // Esta propriedade especifica o tamanho de um array, ou melhor dizendo, o número de elementos. É importante notar que não estamos falando aqui de índices ou posições, e sim da quantidade de valores (dados) contidos no array. Por exemplo:

// // índice     0   1   2   3
// const nums = [50, 43, 12, 98];
// console.log(nums.length)

// // Considerando que o array acima tem 4 elementos, podemos dizer que o valor retornado por length sempre será 1 número a mais do que o valor de índice mais alto. Neste caso, o array nums é um array de 4 elementos e seus índices vão de 0 a 3.

// // A propriedade length é muito útil para trabalharmos com arrays, pois não é preciso saber o número de elementos de antemão e nem tentar contá-los, o que seria impraticável em um programa de computador real.