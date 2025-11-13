function calcular(num1, num2, operacao) { 
  return operacao(num1, num2);
}


function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return b !== 0 ? a / b : 'Erro: divisão por zero';
}

const numero1 = 10;
const numero2 = 5;

console.log(`Soma: ${calcular(numero1, numero2, soma)}`);
console.log(`Subtração: ${calcular(numero1, numero2, subtracao)}`);
console.log(`Multiplicação: ${calcular(numero1, numero2, multiplicacao)}`);
console.log(`Divisão: ${calcular(numero1, numero2, divisao)}`);