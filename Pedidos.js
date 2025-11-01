class Pedido {
    constructor(numeroPedido, itens = [], valorTotal) {
        this.numeroPedido = numeroPedido
        this.itens = itens
        this.valorTotal = valorTotal
        this.valorTotal = 0
    }
    adicionarItem(item, valor) {
        this.itens.push({ nome: item, valor: valor });
        this.valorTotal += valor;
      }
        calcularTotal(){
         return this.valorTotal
        }
}
const pedido = new Pedido(1)
pedido.adicionarItem("Pizza", 50)
pedido.adicionarItem("Refrigerante", 10)
console.log(pedido.calcularTotal())      