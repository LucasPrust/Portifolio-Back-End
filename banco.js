class ContaCorrente {
    constructor(titular) {
        this.titular = titular;
        this.saldo = 0;
    }

    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
        } else {
            console.log("O valor do depósito deve ser positivo")
        }
    }

    sacar(valor) {
        if (valor <= 0) {
            console.log("O valor do saque deve ser positivo.");
        } else if (valor > this.saldo){
            console.log("Saldo insuficiente para realizar o saque.");
        } else{
            this.saldo -= valor
        }
    }

    verificarSaldo() {
        console.log(`Seu saldo atual é de: R$ ${this.titular}: R$ ${this.saldo}`);
    }
}

const minhaConta = new ContaCorrente("Ana Santos");
minhaConta.verificarSaldo();

minhaConta.depositar(500);
minhaConta.verificarSaldo();

minhaConta.sacar(200);
minhaConta.verificarSaldo();

minhaConta.sacar(400);

minhaConta.verificarSaldo();
