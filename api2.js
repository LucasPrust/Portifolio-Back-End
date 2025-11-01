const URL = 'https://dummyjson.com/products'
async function chamarApi (){
    const resposta = await fetch(URL)
    if (resposta.status === 200){
        const dados = await resposta.json()        
        const todosOsProdutos = dados.products
        
        for (i = 0; i < todosOsProdutos.length; i++){
            if (todosOsProdutos[i].category === 'beauty'){
            console.log(`Nome: ${todosOsProdutos[i].title}\nCategoria: ${todosOsProdutos[i].category}\n-------------------------`)
            }
        }
        
    }
      
}
  chamarApi()