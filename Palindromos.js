function Palindromos(palavra){
  const verificarPalindromos = palavra.split('').reverse().join('')
  return palavra === verificarPalindromos
}

console.log(Palindromos("reviver")); 
console.log(Palindromos("amor"));    