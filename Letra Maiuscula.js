function LetraMaiscula(frase) {
  return frase
    .split(" ")
    .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
    .join(" ");
}

console.log(LetraMaiscula("a raposa marrom rápida"))