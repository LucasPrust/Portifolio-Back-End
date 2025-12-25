function Cor(LetraInicial){
    switch (LetraInicial){
    case 'V':
    return "Vermelho = Paixão"
    case 'A':
    return "Azul = Calma"
    case 'M':
    return "Amarelo = Alegria"
    case 'P':
    return "Preto = Misterio"
    default:
    return "Cor Inválida"
    }
}

console.log(Cor('V'))
console.log(Cor('A'))
console.log(Cor('M'))
console.log(Cor('P'))
console.log(Cor('C'))