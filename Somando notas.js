let notas = [7, 8, 6, 9, -1];
let soma = 0;
let i = 0;

while (notas[i] !== -1) {
  soma += notas[i];
  i++;
}

console.log("Soma total das notas:", soma);