const senha = 123;
let tentativas = [111, 222, 333, 123];
let senhaDigitada;
let i = 0;

while (senhaDigitada != senha) {
  senhaDigitada = tentativas[i];
  
  if (senhaDigitada != senha) {
    console.log("Senha Incorreta, Digite Novamente!");
  }
  
  i++;
}

console.log("Login Bem Sucedido");