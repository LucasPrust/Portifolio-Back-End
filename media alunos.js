let mediaAlunos = 0
const quantidadesDeAlunos = 30

for(let i = 1; i<= quantidadesDeAlunos; i++){
mediaAlunos += i
}

const somaNotas = mediaAlunos / quantidadesDeAlunos
console.log(`A Média dos ${quantidadesDeAlunos} alunos é: ${mediaAlunos}`)