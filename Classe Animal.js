class Animal{
    constructor(nome,idade){
     this.nome = nome
     this.idade = idade
    }
      emitirSom(){
        return `Meu nome é ${this.nome} e tenho ${this.idade} anos.`
      }
}
  class Cachorro extends Animal {
   constructor(nome, idade,raca){
    super (nome,idade)
    this.raca = raca
   }
     emitirSom(){
        return `${super.emitirSom()} , sou um cachorro da raça ${this.raca} "e faço Au Au"`
     }
  }
    class Gato extends Animal {
        constructor(nome, idade, corPelo){
            super (nome, idade)
            this.corPelo = corPelo
        }
          emitirSom(){
             return `${super.emitirSom()} , sou um gato e meu pelo é ${this.corPelo} e faço "miau"`
          }
    }
      const Brutus = new Cachorro ("Brutus", 4, "Labrador retriever")
      const Soneca = new Gato ("Soneca", 2, "Cinza")

      console.log(`${Brutus.nome} (${Brutus.raca}) diz: ${Brutus.emitirSom()}`)
      console.log(`${Soneca.nome} (${Soneca.corPelo}) diz: ${Soneca.emitirSom()}`)
      