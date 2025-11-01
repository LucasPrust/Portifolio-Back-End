const URL = 'https://dummyjson.com/products'
async function chamarApi (){
    const resposta = await fetch(URL)
    if (resposta.status === 200){
        const dados = await resposta.json()
        console.log(dados)
        const todosOsProdutos = dados.products
        console.log(todosOsProdutos[29].title)
        console.log(todosOsProdutos[29].category)
        console.log(todosOsProdutos[29].price)
    }
}
 chamarApi()
