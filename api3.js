const URL = 'https://dummyjson.com/products';

async function chamarApi() {
    const resposta = await fetch(URL);
    
    if (resposta.status === 200) {
        const dados = await resposta.json();
        const todosOsProdutos = dados.products;

        for (let produto of todosOsProdutos) {
           
            if (produto.category === 'beauty' && produto.rating > 4 && produto.price < 10) {
                console.log(`${produto.title}\nCategoria: ${produto.category}\nAvaliação: ${produto.rating}\n---------------`);
            }
        }
    } else {
        console.error(`Erro ao buscar dados: ${resposta.status}`);
    }
}
chamarApi();
