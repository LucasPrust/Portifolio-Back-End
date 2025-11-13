function fatorial(numero) {
  if (numero < 0) {
    return ("Fatorial não é definido para números negativos.");
  }

  if (numero === 0 || numero === 1) {
    return 1;
  }

  let resultado = 1;
  for (let i = 2; i <= numero; i++) {
    resultado *= i;
  }
  return resultado;
}

console.log(fatorial(5)); 
console.log(fatorial(0));  
console.log(fatorial(1)); 
console.log(fatorial(10)); 
console.log(fatorial(-3)); 