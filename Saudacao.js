class Pessoa {
    constructor (nome,idade){
        this.nome = nome
        this.idade = idade
    }
     
    saudacao(){
        return "Olá, meu nome é Lucas e eu tenho 22 anos"
    }
}

const pessoa1 = new Pessoa("Lucas", 22);
console.log(pessoa1.saudacao());