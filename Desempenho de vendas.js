let vendasMensais = 2000;

if (vendasMensais > 5000) {
  console.log("Excelente!");
} else if (vendasMensais > 3000 && vendasMensais <= 5000) {
  console.log("Bom");
} else if (vendasMensais > 1000 && vendasMensais <= 3000) {
  console.log("Regular");
} else {
  console.log("Insuficiente");
}