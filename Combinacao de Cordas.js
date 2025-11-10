function combinacao(palavra) {
  for (let i = 0; i < palavra.length; i++) {
    for (let j = i + 1; j <= palavra.length; j++) {
      let parte = palavra.substring(i, j);
      console.log(parte);
    }
  }
}

combinacao("dog");