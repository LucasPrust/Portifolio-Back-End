function MaquinadeBebidas(opcao){
 switch(opcao){
    case 1:
    return "Café"
    case 2:
    return "Chá"
    case 3:
    return "Chocolate Quente"
    default:
    return "Opção Inválida"
 }
}

console.log(MaquinadeBebidas(1))
console.log(MaquinadeBebidas(2))
console.log(MaquinadeBebidas(3))
console.log(MaquinadeBebidas(4))