function feedback(DigiteNumero){
    switch(DigiteNumero){
    case 1:
    console.log("Obrigado pelo seu feedback! Ficamos felizes que você gostou")
    break;
    case 2:
    console.log("Obrigado! Vamos trabalhar para melhorar sua experiência.")
    break;
    case 3:
    console.log("Agradecemos sua sinceridade. Vamos analisar o que pode ser melhorado.")
    break;
    default:
    console.log("Opção Inválida. Digite Novamente!")
    break;
    }
}

feedback(1)
feedback(2)
feedback(3)
feedback(4)