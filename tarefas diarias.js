let listaDeTarefas = [];

function adicionarTarefa(titulo) {
  const novaTarefa = {
    titulo: titulo,
    concluida: false
  };
  listaDeTarefas.push(novaTarefa);
}

function listarTarefas() {
  console.log("Lista de Tarefas:");
  listaDeTarefas.forEach((tarefa, indice) => {
    const status = tarefa.concluida ? "✅ Concluída" : "❌ Pendente";
    console.log(`${indice}. ${tarefa.titulo} - ${status}`);
  });
}

function marcarComoConcluida(indice) {
  if (indice >= 0 && indice < listaDeTarefas.length) {
    listaDeTarefas[indice].concluida = true;
    console.log(`Tarefa "${listaDeTarefas[indice].titulo}" marcada como concluída.`);
  } else {
    console.log("Erro: índice inválido.");
  }
}


function removerTarefa(indice) {
  if (indice >= 0 && indice < listaDeTarefas.length) {
    const tarefaRemovida = listaDeTarefas.splice(indice, 1);
    console.log(`Tarefa "${tarefaRemovida[0].titulo}" removida com sucesso.`);
  } else {
    console.log("Erro: índice inválido.");
  }
}
adicionarTarefa("Estudar JavaScript");
adicionarTarefa("Fazer compras");
adicionarTarefa("Preparar o jantar");

listarTarefas();

marcarComoConcluida(0);
listarTarefas();
removerTarefa(1);