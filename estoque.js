function atualizarEstoque(estoque, produto, quantidadeVendida) {
    if (estoque.hasOwnProperty(produto)) {
      
      if (estoque[produto] >= quantidadeVendida) {
        estoque[produto] -= quantidadeVendida;
      } else {
        console.error(`Erro: quantidade vendida (${quantidadeVendida}) é maior que o estoque disponível (${estoque[produto]}).`);
      }
    } else {
      console.error(`Erro: o produto "${produto}" não existe no estoque.`);
    }
    return estoque;
  }

  let estoque = {
    "camiseta": 50,
    "calça": 30,
    "tênis": 20
  };
  
  estoque = atualizarEstoque(estoque, "camiseta", 5);
  console.log(estoque);

  
  estoque = atualizarEstoque(estoque, "boné", 3);

  
  estoque = atualizarEstoque(estoque, "calça", 40);
  
  