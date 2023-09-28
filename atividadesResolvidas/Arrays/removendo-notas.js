const notas = [10, 6, 8, 5.5, 10];

//método pop remove a ultima nota do array

notas.pop();

console.log(notas);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`A média é ${media}.`);