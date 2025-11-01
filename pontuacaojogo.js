function encontrarMaiorPontuacao(pontuacoes) {
    if (pontuacoes.length === 0) {
        return 0;
    }

    let maior = pontuacoes[0];

    for (let i = 1; i < pontuacoes.length; i++) {
        if (pontuacoes[i] > maior) {
            maior = pontuacoes[i];
        }
    }

    return maior;
}

const pontuacoes = [22, 45, 78, 34, 89, 12];
console.log(encontrarMaiorPontuacao(pontuacoes));

