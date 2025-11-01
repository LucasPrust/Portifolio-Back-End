class Carro{
    constructor(modelo){
        this.modelo = modelo
        this.velocidadeAtual = 0
    }
      acelerar(valor){
        if(valor > 0){
            this.velocidadeAtual += valor
        }
      }
        frear(valor){
            if(valor > 0){
                this.velocidadeAtual -= valor
                if(this.velocidadeAtual < 0){
                    this.velocidadeAtual = 0
                }
            }
        }

        status(){
            return `Carro Modelo: ${this.modelo} | Velocidade atual: ${this.velocidadeAtual} km/h`
        }
}

  const meuCarro = new Carro("Fusca");
  console.log(meuCarro.status());
  meuCarro.acelerar(50);
  console.log(meuCarro.status());
  meuCarro.frear(20);
 console.log(meuCarro.status());