class Produto{
    constructor(nome,preco,categoria){
        this.nome = nome
        this.preco = preco
        this.categoria = categoria
    }
       exibirDetalhes(){
        console.log(`Produto: ${this.nome}\n Preço: R$ ${this.preco}\n Categoria: ${this.categoria}`)
       }
}

const produto1 = new Produto("Smartphone X", 1200.00, "Eletrônicos");
produto1.exibirDetalhes();