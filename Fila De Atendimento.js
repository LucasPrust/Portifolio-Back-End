class Cliente{
    constructor (nome,documento){
        this.nome = nome;
        this.documento = documento;
    }
}
class FilaAtendimento{
    constructor(){
        this.clienteNaFila = [];
    }  
    entrarNaFila(cliente){
        this.clienteNaFila.push(cliente)
    }
     atenderProximo(){
        if(this.clienteNaFila.length === 0){
            return null
        }
          return this.clienteNaFila.shift();
     }
}

const cliente1 = new Cliente("João", "1234")
const cliente2 = new Cliente("Maria", "9876")

const fila = new FilaAtendimento()

fila.entrarNaFila(cliente1)
fila.entrarNaFila(cliente2)

const atendido = fila.atenderProximo()
console.log("Cliente atendido", atendido.nome, "-", atendido.documento)
const proximo = fila.atenderProximo()
console.log("Próximo cliente", proximo.nome, "-", proximo.documento)
const nenhum = fila.atenderProximo()
console.log("Fila Vazia", nenhum)
  