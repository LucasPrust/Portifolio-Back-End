class InstrumentoMusical{
  constructor(nome,familia){
    this.nome = nome
    this.familia = familia
  }

  tocar(){
  console.log("Instrumento está sendo tocado")
  }
}

class Violao extends InstrumentoMusical{
    constructor(nome,familia,numeroCordas){
        super(nome,familia)
        this.numeroCordas = numeroCordas
    }
    tocar(){
  console.log(`O violão está tocando um som suave de cordas com ${this.numeroCordas} cordas`)    
    }
}

class Flauta extends InstrumentoMusical{
    constructor(nome,familia,material){
    super(nome,familia)
    this.material = material
    }
    
    tocar(){
    console.log(`A flauta de ${this.material} está emitindo um som melodioso.`)
    }
}

const violao = new Violao("Violão", "Cordas", 6);
const flauta = new Flauta("Flauta", "Sopro", "bambu");

violao.tocar();
flauta.tocar();