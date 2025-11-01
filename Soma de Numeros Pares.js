let numeros = [1,2,3,4,5,6]

function somarPares(listaNumeros){
    let soma = 0
    for(let i = 0; i <numeros.length; i ++){
        if(listaNumeros [i] % 2 === 0){
            soma += listaNumeros[i]
        }
    }
      return soma
}
  const resultado = somarPares(numeros)

console.log("A soma dos numeros pares é:", resultado)