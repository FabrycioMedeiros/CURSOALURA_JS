// 6.	Escreva um programa que classifique os elementos de um array em ordem crescente. Dica: use o algoritmo de ordenação "Bubble Sort".
function bubbleSort(arr) {
  const n = arr.length;
 
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

const array = [64, 14, 33, 41, 11, 23, 88];
console.log("Array antes da ordenação:", array);

bubbleSort(array);

console.log("Array após a ordenação:", array);

 // Criando Loop externo p/ controlar o número de iterações
  // Loop interno para comparar os elementos adjacentes e fazer as trocas
  // Compara elementos adjacentes e os troca se estiverem fora de ordem
  // Troca os elementos usando uma variável temporária
