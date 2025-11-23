class FormaGeometrica {
  calcularArea() {
    throw new Error("Método deve ser implementado pela subclasse");
  }
}

class Quadrado extends FormaGeometrica {
  constructor(lado) {
    super();
    this.lado = lado;
  }
  calcularArea() {
    return this.lado * this.lado;
  }
}

class Circulo extends FormaGeometrica {
  constructor(raio) {
    super();
    this.raio = raio;
  }
  calcularArea() {
    return Math.PI * this.raio * this.raio;
  }
}

const quadrado = new Quadrado(5);
const circulo = new Circulo(3);

console.log(`Área do Quadrado: ${quadrado.calcularArea().toFixed(2)}`);
console.log(`Área do Círculo: ${circulo.calcularArea().toFixed(2)}`);
