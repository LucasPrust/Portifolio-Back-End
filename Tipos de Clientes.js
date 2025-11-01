const itensPedido1 = [50.00, 20.00, 30.00]
const itensPedido2 = [100.00 , 75.00]
const itensPedido3 = [15.50, 22.40, 9.90, 8.20]

function calcularTotalPedido(itens, tipoCliente){
    let total = 0
    for(let i = 0; i <itens.length; i ++){
        total += itens[i]
    }
      switch(tipoCliente){
        case "Bronze":
            break;
            case "Prata":
                total *= 0.95;
                break;
                case "Ouro":
                    total *= 0.90;
                    break;
                    default:
                        return "Tipo de cliente invalido";
      }

     return `cliente ${tipoCliente} - total com desconto: R$ ${total}`
}

console.log(calcularTotalPedido(itensPedido1, "Bronze"));
console.log(calcularTotalPedido(itensPedido2, "Prata"));
console.log(calcularTotalPedido(itensPedido3, "Ouro"));
