class Publicacao{
  constructor(titulo,autor,anoPublicacao){
    this.titulo = titulo
    this.autor = autor
    this.anoPublicacao = anoPublicacao
  }

    apresentar(){
    console.log("Apresentando um Livro")
    }
}

class Livro extends Publicacao{
  constructor(titulo,autor,anoPublicacao,genero){
    super(titulo,autor,anoPublicacao)
    this.genero = genero
  }

    apresentar(){
    console.log(`Era uma vez um livro chamado "${this.titulo}", escrito por ${this.autor} em ${this.anoPublicacao}. Uma bela história do gênero ${this.genero}, pronta para te transportar para outro mundo...`)
    }
}

class ArtigoCientifico extends Publicacao{
  constructor(titulo,autor,anoPublicacao,revista){
    super(titulo,autor,anoPublicacao)
    this.revista = revista
  }

  apresentar(){
    console.log(`Confira "${this.titulo}" de ${this.autor}, publicado em ${this.anoPublicacao} na revista ${this.revista}! Uma leitura imperdível!`)
  }
}


const livro1 = new Livro("Dom Casmurro", "Machado de Assis", 1899, "Romance");
livro1.apresentar();


const livro2 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954, "Fantasia");
livro2.apresentar();


const artigo1 = new ArtigoCientifico(
  "A Teoria da Relatividade",
  "Albert Einstein",
  1905,
  "Annalen der Physik"
);
artigo1.apresentar();


const artigo2 = new ArtigoCientifico(
"Inteligência Artificial e o Futuro da Computação",
  "Alan Turing",
  1950,
  "Mind"
);
artigo2.apresentar();