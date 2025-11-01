class Funcionario{
    constructor (nome, salario){
    this.nome = nome
    this.salario = salario
    }

    calcularSalarioAnual(){
        return this.salario * 12
    }
}

 class Gerente extends Funcionario{
  constructor (nome, salario,departamento){
   super (nome, salario)
   this.departamento = departamento
  }
     calcularSalarioAnual(){
        const salarioBase = super.calcularSalarioAnual();
        const bonus = salarioBase * 0.10;
        return salarioBase + bonus;
     }   

 }

 class Desenvolvedor extends Funcionario{
    constructor (nome, salario,linguagemPreferida){
       super (nome, salario)
       this.linguagemPreferida = linguagemPreferida
    }
 }
   const gerente = new Gerente ("Juliana", 1500, "Financeiro")
   const desenvolvedor = new Desenvolvedor ("Carlos", 2000, "JavaScript") 

console.log(`${gerente.nome} - Salário anual com bônus: R$ ${gerente.calcularSalarioAnual()}`);
console.log(`${desenvolvedor.nome} - Salário anual: R$ ${desenvolvedor.calcularSalarioAnual()}`);
console.log(`${desenvolvedor.nome} - Linguagem preferida: ${desenvolvedor.linguagemPreferida}`);