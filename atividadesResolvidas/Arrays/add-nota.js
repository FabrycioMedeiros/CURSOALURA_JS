// Um professor acidentalmente passou apenas 03 das 04 notas no sistema para o aluno:
// 10 , 6 e 8
//Para corrigir, adicione a nota 7 e faça o calculo da média correta
//SEM ARRAY
const nota1 = 10
const nota2 = 8
const nota3 = 8
const nota4 = 7

const media1 = (nota1 + nota2 + nota3 + nota4) / 4;
console.log(media1);

//COM ARRAY
const notas = [10, 6, 8];

notas.push(7);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);