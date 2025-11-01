class ContaBancaria {
    constructor(titular, saldo = 0) {
      this.titular = titular;
      this.saldo = saldo;
    }
  
    depositar(valor) {
      if (valor > 0) {
        this.saldo += valor;
        console.log(`${this.titular} depositou R$${valor}. Novo saldo: R$${this.saldo}`);
      } else {
        console.log("Valor de depósito inválido.");
      }
    }
  
    sacar(valor) {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`${this.titular} sacou R$${valor}. Novo saldo: R$${this.saldo}`);
      } else {
        console.log("Saldo insuficiente ou valor inválido.");
      }
    }
  }
  
 
  class ContaCorrente extends ContaBancaria {
    constructor(titular, saldo = 0, limiteChequeEspecial = 0) {
      super(titular, saldo);
      this.limiteChequeEspecial = limiteChequeEspecial;
    }
  
    sacar(valor) {
      const saldoDisponivel = this.saldo + this.limiteChequeEspecial;
      if (valor > 0 && valor <= saldoDisponivel) {
        this.saldo -= valor;
        console.log(`${this.titular} sacou R$${valor} (incluindo cheque especial). Novo saldo: R$${this.saldo}`);
      } else {
        console.log("Valor excede o limite disponível.");
      }
    }
  }
  
 
  class ContaPoupanca extends ContaBancaria {
    renderJuros(taxa) {
      if (taxa > 0) {
        const juros = this.saldo * (taxa / 100);
        this.saldo += juros;
        console.log(`${this.titular} recebeu R$${juros.toFixed(2)} de juros. Novo saldo: R$${this.saldo.toFixed(2)}`);
      } else {
        console.log("Taxa de juros inválida.");
      }
    }
  }
  
  const conta1 = new ContaCorrente("Maria", 1000, 500);
 conta1.sacar(1300); 
 conta1.depositar(200);

 const conta2 = new ContaPoupanca("João", 2000);
 conta2.renderJuros(5); 
 conta2.sacar(100);
