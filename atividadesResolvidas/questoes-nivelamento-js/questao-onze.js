// Dado um array de objetos que representam produtos, como você usaria o método filter() para criar um novo array contendo apenas os produtos com um preço superior a $50 e, em seguida, use o método map() para criar um array contendo os nomes desses produtos?

const produtos = [
  { nome: "Produto1", preco: 45 },
  { nome: "Produto2", preco: 50 },
  { nome: "Produto3", preco: 55 },
  { nome: "Produto4", preco: 60 },
  { nome: "Produto5", preco: 65 }
];

// Uso do filter() para filtrar produtos com preço maior que $50
const produtosCaros = produtos.filter(produto => produto.preco > 50);

// Uso do map() para criar um array com os nomes dos produtos mais caros
const nomesProdutosCaros = produtosCaros.map(produto => produto.nome);

console.log(nomesProdutosCaros);