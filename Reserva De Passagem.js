class Voo {
    constructor (numeroDoVoo, origem, destino, capacidade, passageirosReservados = []){
        this.numeroDoVoo = numeroDoVoo
        this.origem = origem
        this.destino = destino
        this.capacidade = capacidade
        this.passageirosReservados =passageirosReservados
    }
    reservarAssento(nomePassageiro){
        if (this.capacidade > this.passageirosReservados.length){
            this.passageirosReservados.push(nomePassageiro)
            return true
        } else {
            return false
        }
    }
    cancelarReserva(nomePassageiro){
        for (let i=0; i < this.passageirosReservados.length; i++) {
            if (nomePassageiro == this.passageirosReservados[i]){
                this.passageirosReservados.splice(i, 1)
                return true
            }
        }  
    }
    assentosDisponiveis(){
        return this.capacidade - this.passageirosReservados.length
    }
    listarPassageiros(){
        for (let i=0; i < this.passageirosReservados.length; i++){
            console.log(this.passageirosReservados[i])
        }
    }
}

const voo1 = new Voo(123, 'Rio de Janeiro', 'Porto Algere', 125)
voo1.reservarAssento('Marcelo')
voo1.reservarAssento('Janaina')
voo1.reservarAssento('Arthur')
console.log(`Passageiros com reserva: ${voo1.passageirosReservados}`)
voo1.cancelarReserva('Marcelo')
console.log(`Após cancelar reserva de Marcelo: ${voo1.passageirosReservados} `)
console.log(`Assentos disponíveis:${voo1.assentosDisponiveis()} `)
console.log('Listar passageiros:')
voo1.listarPassageiros()