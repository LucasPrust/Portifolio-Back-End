function FormadePagamento(opcao) {
    switch(opcao) {
        case 1:
        return "Pagamento com Cartão de Crédito escolhido. Verifique o limite disponível.";
        case 2:
        return "Pagamento com Cartão de Débito escolhido. Aguarde a confirmação da máquina.";
        case 3:
        return "Pagamento via Pix escolhido. Aponte a câmera para o QR Code.";
        case 4:
        return "Pagamento em Dinheiro escolhido. Prepare o troco.";
        default:
        return "Opção inválida. Tente novamente.";
    }
}

console.log(FormadePagamento(1));
console.log(FormadePagamento(2))
console.log(FormadePagamento(3))
console.log(FormadePagamento(4))
console.log(FormadePagamento(5))