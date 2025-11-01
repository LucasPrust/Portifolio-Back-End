class Aluno{
    constructor(nome,notas){
     this.nome = nome
     this.notas = notas
    }
      calcularMedia(){
         if(this.notas.length === 0)
            return 0
          const soma = this.notas.reduce((total, nota) => total + nota, 0)
          return soma / this.notas.length
      }
}
  
const aluno1 = new Aluno("João Silva", [8.5, 7.0, 9.0]);
console.log(`Média do aluno ${aluno1.nome}:
${aluno1.calcularMedia()}`);