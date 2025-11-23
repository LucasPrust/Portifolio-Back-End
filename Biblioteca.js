class ItemBiblioteca {
    constructor(titulo, ano) {
        this.titulo = titulo;
        this.ano = ano;
    }

    mostrarInformacoes() {
        return `${this.titulo} ${this.ano}`;
    }
}

class Livro extends ItemBiblioteca {
    constructor(titulo, ano, dataPublicacao) {
        super(titulo, ano);
        this.dataPublicacao = dataPublicacao;
    }

     mostrarInformacoes() {
        return `${this.titulo} ${this.ano}`;
    }
}

class Revista extends ItemBiblioteca {
    constructor(titulo, ano, tipoRevista) {
        super(titulo, ano);
        this.tipoRevista = tipoRevista;
    }

     mostrarInformacoes() {
        return `${this.titulo} ${this.ano}`;
    }
}

class Biblioteca{
  constructor(){
    this.itens = []
  }

  AdicionarItens(item){
    return `${this.itens.push(item)}`
  }

listarItens() {
        console.log("Itens na Biblioteca:");
        this.itens.forEach((item, index) => {
            console.log(`${index + 1}. ${item.mostrarInformacoes()}`);
        });
    }
}


// Criando itens
const livro1 = new Livro("O Pequeno Príncipe", 1943, "06/04/1943");
const livro2 = new Livro("1984", 1949, "08/06/1949");

const revista1 = new Revista("National Geographic", 2023, "Ciência");
const revista2 = new Revista("Veja", 2024, "Notícias");

// Criando biblioteca
const biblioteca = new Biblioteca();

// Adicionando itens
biblioteca.AdicionarItens(livro1);
biblioteca.AdicionarItens(livro2);
biblioteca.AdicionarItens(revista1);
biblioteca.AdicionarItens(revista2);

// Listando itens
biblioteca.listarItens();
