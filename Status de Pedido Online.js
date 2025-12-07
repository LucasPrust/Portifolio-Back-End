function statusDePedido(codigoDeStatusPedido) {
    switch (codigoDeStatusPedido) {
        case 1:
            return "Processando – Seu pedido foi recebido e está sendo preparado.";
        case 2:
            return "Enviado – Seu pedido já saiu do centro de distribuição e está a caminho.";
        case 3:
            return "Entregue – O pedido foi entregue no endereço informado.";
        case 4:
            return "Cancelado – O pedido foi cancelado e não será enviado.";
        default:
            return "Código inválido. Digite um número entre 1 e 4.";
    }
}

console.log(statusDePedido(1))
console.log(statusDePedido(2))
console.log(statusDePedido(3))
console.log(statusDePedido(4))
console.log(statusDePedido(5))