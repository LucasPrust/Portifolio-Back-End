const URL = 'https://dummyjson.com/products';

async function chamarApi() {
    const resposta = await fetch(URL);
    
    if (resposta.status === 200) {
        const dados = await resposta.json();
        const todosOsProdutos = dados.products;

        for (let produto of todosOsProdutos) {
           
     if (produto.category && produto.rating > 4 && produto.price > 20 && produto.stock > 50) {
    console.log(`${produto.title}\nCategoria: ${produto.category}\nAvaliação: ${produto.rating}\n---------------`);
            }
        }
    } 
}
chamarApi();