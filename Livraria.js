class Livro{
    constructor (titulo, autor,anopublicacao){
     this.titulo = titulo
     this.autor = autor
     this.anopublicacao = anopublicacao
    }
    exibirDetalhes(){
    console.log(`titulo: ${this.titulo}, autor: ${this.autor},ano de publicação:${this.anopublicacao}`)
    }
    estaAntigo(){
        return this.anopublicacao < 2000
    }
}

const livro1 = new Livro("Dom Casmurro","Machado de Assis",1899)
livro1.exibirDetalhes()
console.log(livro1.estaAntigo())