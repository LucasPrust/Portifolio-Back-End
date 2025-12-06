function avaliarFilme(notas){
  switch(notas){
    case 'A':
    return "Excelente"
    case 'B':
    return "Bom"
    case 'C':
    return "Regular"
    case 'D':
    return "Ruim"
    default:
    return "Avaliação inválida"
  }
} 

console.log(avaliarFilme('A'))
console.log(avaliarFilme('B'))
console.log(avaliarFilme('C'))
console.log(avaliarFilme('D'))
console.log(avaliarFilme('E'))