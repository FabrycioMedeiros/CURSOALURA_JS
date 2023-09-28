//9.	Crie um objeto chamado pessoa com propriedades como nome, idade e profissão. Use um loop "for...in" para percorrer e imprimir todas as propriedades.

const pessoa = {
  nome: "Fabrycio",
  idade: 40,
  profissao: "Engenheiro migrando pra Dev"
};

// Usando loop "for...in" para percorrer e imprimir todas as propriedades
for (const propriedade in pessoa) {
  console.log(`${propriedade}: ${pessoa[propriedade]}`);
}