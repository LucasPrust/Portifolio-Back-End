const inventario = ["Lápis", "Caderno", "Borracha", "Apontador", "Caneta"]

function verificarDisponibilidade(item,listaInventario){
    for(let i = 0; i < listaInventario.length; i ++){
        if(item === listaInventario[i]){
            return "Item Disponivel"
        }
    }
      return "Item Indisponivel"
}

console.log(verificarDisponibilidade("Caderno", inventario))
console.log(verificarDisponibilidade("Tesoura", inventario))