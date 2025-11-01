class Produto {
  constructor(nome, preco, quantidadeEmEstoque) {
    this.nome = nome;
    this.preco = preco;
    this.quantidadeEmEstoque = quantidadeEmEstoque;
  }

  calcularValorTotal() {
    return this.preco * this.quantidadeEmEstoque;
  }
}

const produto = new Produto("SmartPhone", 2000, 6);

console.log(`Produto: ${produto.nome}`);
console.log(`Quantidade: ${produto.quantidadeEmEstoque}`);
console.log(`Preço: R$ ${produto.preco.toFixed(2)}`);
console.log(`Valor total: R$ ${produto.calcularValorTotal().toFixed(2)}`);
