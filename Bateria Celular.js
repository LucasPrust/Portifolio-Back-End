let nivelBateria = 80;

while (nivelBateria > 0) {
  console.log(`Nível atual de bateria: ${nivelBateria}%`);

  if (nivelBateria <= 20) {
    console.log("Bateria fraca!");
  }

  nivelBateria -= 5;
}

console.log("Bateria Esgotada! Desligando...");
