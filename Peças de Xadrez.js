class PecaXadrez{
    constructor (preta,branca,posicao){
    this.preta = preta
    this.branca = branca
    this.posicao = posicao
    }
}

class Rei extends PecaXadrez{
 constructor (preta,branca,posicao){
 super(preta, branca, posicao)
 }

 mover(novaPosicao){
  return `Rei movendo uma casa de E1 para ${novaPosicao}`
 }
}

class Rainha extends PecaXadrez{
  constructor (preta,branca,posicao){
    super(preta,branca,posicao)
  }

   mover(novaPosicao){
  return `Rainha movendo-se livremente de D8 para ${novaPosicao}`
 }
}

class Peao extends PecaXadrez{
 constructor (preta,branca,posicao){
    super(preta,branca,posicao)
 }

mover(novaPosicao){
  return `Peão movendo uma casa para frente de A2 para ${novaPosicao}`
 }
}

const reiBranco = new Rei("branca", "E1");
console.log(reiBranco.mover("E2"));

const rainhaPreta = new Rainha("preta", "D8");
console.log(rainhaPreta.mover("H4"));

const peaoBranco = new Peao("branca", "A2");
console.log(peaoBranco.mover("A3"));
