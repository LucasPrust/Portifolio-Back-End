const URL = 'https://dummyjson.com/products';

async function chamarApi() {
    const resposta = await fetch(URL);
    if (resposta.status === 200) {
        const dados = await resposta.json();
        const todosOsProdutos = dados.products;

        let soma = 0;
        let contador = 0;

        for (let i = 0; i < todosOsProdutos.length; i++) {
            const produto = todosOsProdutos[i];
            if (produto.category === 'beauty' && produto.rating >= 4) {
                console.log(`${produto.title} - ${produto.category} - R$${produto.price}`);

               
                soma += produto.price;
                contador++;
            }
        }

        if (contador > 0) {
            const media = soma / contador;
            console.log(`Preço médio dos produtos de beleza bem avaliados: R$${media.toFixed(2)}`);
        } else {
            console.log('Nenhum produto de beleza com boa avaliação encontrado.');
        }
    } else {
        console.log('Erro ao buscar os dados da API.');
    }
}

chamarApi();
