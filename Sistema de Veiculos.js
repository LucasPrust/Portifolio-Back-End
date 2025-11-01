class Veiculo{
    constructor (marca, modelo,ano){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
       exibirInfo(){
        return `as informações do veiculo são ${this.marca} ${this.modelo} e ${this.ano}`
       }
}
    class Carro extends Veiculo{
     constructor (marca, modelo, ano, numeroPortas){
      super (marca, modelo, ano)
      this.numeroPortas = numeroPortas
     }
       exibirInfo(){
        return `as informações do carro são ${this.marca} ${this.modelo}  ${this.ano} e ${this.numeroPortas}`
       }
   }

     class Moto extends Veiculo{
        constructor (marca, modelo, ano, cilindradas){
         super (marca, modelo, ano)
         this.cilindradas = cilindradas
        }
          exibirInfo(){
            return `as informações da moto são ${this.marca} ${this.modelo}  ${this.ano} e ${this.cilindradas}`
          }
     }

     const carro = new Carro ("Chevrolet", "Cobalt", 2015, "4")
     const moto = new Moto ("Yamaha", "Yamaha Factor", 2020, "150")

     console.log(`${carro.marca} (${carro.modelo}) (${carro.ano}) (${carro.numeroPortas})`)
     console.log(`${moto.marca} (${moto.modelo}) (${moto.ano}) (${moto.cilindradas})`) 