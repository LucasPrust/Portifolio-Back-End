class DispositivoEletronico{
 constructor (marca,modelo){
 this.marca = marca
 this.modelo = modelo
 }

 Ligar(){
  return `O Dispositivo de ${this.marca} e ${this.modelo} Agora está Ligado`
 }
}

class Smartphone extends DispositivoEletronico{
 constructor(marca, modelo, sistemaOperacional){
 super(marca, modelo)
 this.sistemaOperacional = sistemaOperacional
 
 super.Ligar();

 }
   fazerChamada(){
    return `O Smartphone de ${this.marca}  ${this.modelo}  ${this.sistemaOperacional} Está fazenda uma Chamada`
   }
}

class Notebook extends DispositivoEletronico{
  constructor(marca, modelo, memoriaRAM){
    super(marca, modelo)
    this.memoriaRAM = memoriaRAM
    
    super.Ligar();

  }
   instalarPrograma(){
    return `O Notebook de ${this.marca}  ${this.modelo}  ${this.memoriaRAM} Está Instalando um Programa`
   }  
}

const celular = new Smartphone("Samsung", "Galaxy S24", "Android");
const notebook = new Notebook("Dell", "Inspiron", "16GB");

console.log(celular.fazerChamada())
console.log(notebook.instalarPrograma())