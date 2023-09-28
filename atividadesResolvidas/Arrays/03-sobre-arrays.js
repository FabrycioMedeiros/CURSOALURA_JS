// Até agora trabalhamos com arrays que representam listas de dados (notas de alunos em uma escola). Mas o que acontece se declaramos um array sem nenhum valor na lista?

// Crie um arquivo index.js em seu computador e escreva o seguinte código:

// const arrayVazia = [];

// console.log(arrayVazia)
// console.log(arrayVazia.length)

// Executando este código com node index.js (não esqueça de conferir se está executando o comando dentro da pasta/diretório certo), o resultado é:

// []

// No exemplo acima, podemos ver que o JavaScript criou o array e a guardou na variável arrayVazia, mas seu length é 0.

// Vamos então ver o que acontece se usarmos a notação de colchetes para tentar acessar o índice 0 do array (lembrando que o índice zero se refere à primeira posição):

// const arrayVazia = [];
// console.log(arrayVazia[0])
// Desta vez, o resultado é:

// undefined
// Parece um pouco confuso? Vamos executar mais um teste e ver o que acontece:

// const arrayVazia = [,,,];
// console.log(arrayVazia.length)
// console.log(arrayVazia[0])
// console.log(arrayVazia[1])
// console.log(arrayVazia[2])
// Confira os resultados no terminal:

// 3
// undefined
// undefined
// undefined

// O que fizemos aqui, afinal?

// Criamos um array com 3 posições, porém em nenhuma dessas posições existe um valor. De certa forma, podemos pensar que este array foi criado como um gaveteiro com três gavetas e todas elas estão “vazias”, sem nenhum valor de dado guardado.

// Para finalizar, faça um último teste. Vamos usar o método push() visto anteriormente para adicionar um valor - lembrando que este método sempre vai adicionar o valor no final do array!

// const arrayVazia = [,,,];
// console.log(arrayVazia.length)
// arrayVazia.push(50)
// console.log(arrayVazia)
// console.log(arrayVazia.length)
// Conferindo os resultados:

// 3
// [ <3 empty items>, 50 ]
// 4

// O JavaScript manteve as posições vazias e adicionou o 50 ao final do array. Após a execução, ele passou a ter 4 posições, mas somente um elemento (o número 50). Chamamos este tipo de estrutura de array esparso e é importante lembrar deste comportamento dos arrays em JavaScript enquanto trabalhamos.

// O push e pop são usados para adicionar/remover elementos de uma lista, como mostra o seguinte código:

// jantarDeHoje = ['🍔', '🌭', '🍕']

// jantarDeHoje.pop()
// jantarDeHoje.pop()

// jantarDeHoje.push('🍳')
// jantarDeHoje.push('🥗')
// jantarDeHoje.push('🍏')

// console.log(jantarDeHoje)

// Analisando o código, selecione a alternativa que corresponde ao que teremos como saída do console do jantarDeHoje .

// Alternativa correta

// [ '🍔', '🍳', '🥗', '🍏' ]

// Certo! No jantar de hoje, a pizza e o cachorro quente não estão presentes por conta do código jantarDeHoje.pop(), que remove o último elemento da lista e o ovo, a salada e a maçã verde entraram na lista com comando push.

// O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.

// Exatamente como vimos em aula, a documentação diz que o método push altera o array original, além de informar seu valor de retorno (que não foi necessário para nós no desafio).

// Na página do método slice, vemos a seguinte descrição:

// O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. O array original não é modificado.

// Novamente, podemos consultar rapidamente o que o método faz, seu valor de retorno e se ele altera o array original.

// A documentação também fornece informações bastante detalhadas sobre cada recurso da linguagem; você não precisa entender tudo que é mencionado em cada página (e no início de desenvolvimento, você provavelmente irá se deparar com muitos termos novos), mas ela é uma excelente fonte de consultas. Além disso, ela fornece vários exemplos práticos onde um método pode ser útil. A documentação será muito importante na sua jornada de desenvolvimento!

// O splice é usado para adicionar e remover elementos de uma lista, como mostra o seguinte código:

// animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

// animaisDoAquario.splice(1,0,'🐠')
// animaisDoAquario.splice(3,2,'🐟')

// console.log(animaisDoAquario)
// Analisando o código, selecione a alternativa que corresponde ao que teremos como saída do console do animaisDoAquario .

// [ '🐋', '🐠', '🐙', '🐟']

// Certo! No aquário, o golfinho e o tubarão não estão presentes por conta do código animaisDoAquario.splice(3,2,'🐟'), que remove dois elementos do array, a partir da posição 3. Sendo assim, os elementos com índice 3 e 4 e os dois peixes entraram nas posições definidas pelo splice.