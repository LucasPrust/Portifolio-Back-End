const SUPABASE_URL = 'Seu URL';
const SUPABASE_ANON_KEY = 'Sua Chave';


const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


const saida = document.getElementById('saida');
const tabela = document.querySelector('#tabelaProdutos tbody');
const form = document.getElementById('formProduto');
const tituloForm = document.getElementById('tituloForm');
const btnSalvar = document.getElementById('btnSalvar');
const btnCancelar = document.getElementById('btnCancelar');

const selectCategoria = document.getElementById('categoria');
const selectFornecedor = document.getElementById('fornecedor');
const campoId = document.getElementById('produtoId');


document.addEventListener('DOMContentLoaded', async () => {
  await carregarCategorias();
  await carregarFornecedores();
  await listarProdutos();
});


async function carregarCategorias() {
  const { data, error } = await supabase.from('categorias').select('id, nome');
  if (error) return saida.textContent = 'Erro ao carregar categorias: ' + error.message;
  selectCategoria.innerHTML = '<option value="">Selecione uma categoria</option>';
  data.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.id;
    opt.textContent = c.nome;
    selectCategoria.appendChild(opt);
  });
}


async function carregarFornecedores() {
  const { data, error } = await supabase.from('fornecedores').select('id, nome');
  if (error) return saida.textContent = 'Erro ao carregar fornecedores: ' + error.message;
  selectFornecedor.innerHTML = '<option value="">Selecione um fornecedor</option>';
  data.forEach(f => {
    const opt = document.createElement('option');
    opt.value = f.id;
    opt.textContent = f.nome;
    selectFornecedor.appendChild(opt);
  });
}


async function listarProdutos() {
  const { data, error } = await supabase
    .from('produtos')
    .select(`
      id,
      nome,
      preco,
      estoque,
      categorias (nome),
      fornecedores (nome)
    `)
    .order('id', { ascending: true });

  if (error) return saida.textContent = 'Erro ao buscar produtos: ' + error.message;

  tabela.innerHTML = '';
  data.forEach(p => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${p.id}</td>
      <td>${p.nome}</td>
      <td>${p.categorias?.nome || '-'}</td>
      <td>${p.fornecedores?.nome || '-'}</td>
      <td>${p.preco.toFixed(2)}</td>
      <td>${p.estoque}</td>
      <td>
        <button class="btnEditar" onclick="editarProduto(${p.id})">Editar</button>
        <button class="btnExcluir" onclick="excluirProduto(${p.id})">Excluir</button>
      </td>
    `;
    tabela.appendChild(row);
  });
}


form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const produto = {
    nome: document.getElementById('nome').value,
    descricao: document.getElementById('descricao').value,
    preco: parseFloat(document.getElementById('preco').value),
    estoque: parseInt(document.getElementById('estoque').value),
    categoria_id: parseInt(selectCategoria.value),
    fornecedor_id: parseInt(selectFornecedor.value),
  };

  const id = campoId.value;

  if (id) {
    
    const { data, error } = await supabase.from('produtos').update(produto).eq('id', id).select();
    if (error) return saida.textContent = 'Erro ao atualizar: ' + error.message;
    saida.textContent = '✅ Produto atualizado:\n' + JSON.stringify(data, null, 2);
  } else {
    

    const { data, error } = await supabase.from('produtos').insert([produto]).select();
    if (error) return saida.textContent = 'Erro ao inserir: ' + error.message;
    saida.textContent = '✅ Produto inserido:\n' + JSON.stringify(data, null, 2);
  }

  form.reset();
  campoId.value = '';
  tituloForm.textContent = 'Adicionar Produto';
  btnSalvar.textContent = 'Cadastrar Produto';
  btnCancelar.classList.add('oculto');
  await listarProdutos();
});


async function editarProduto(id) {
  const { data, error } = await supabase.from('produtos').select('*').eq('id', id).single();
  if (error) return saida.textContent = 'Erro ao buscar produto: ' + error.message;

  campoId.value = data.id;
  document.getElementById('nome').value = data.nome;
  document.getElementById('descricao').value = data.descricao || '';
  document.getElementById('preco').value = data.preco;
  document.getElementById('estoque').value = data.estoque;
  selectCategoria.value = data.categoria_id;
  selectFornecedor.value = data.fornecedor_id;

  tituloForm.textContent = 'Editar Produto';
  btnSalvar.textContent = 'Salvar Alterações';
  btnCancelar.classList.remove('oculto');
}


async function excluirProduto(id) {
  if (!confirm('Tem certeza que deseja excluir este produto?')) return;

  const { error } = await supabase.from('produtos').delete().eq('id', id);
  if (error) return saida.textContent = 'Erro ao excluir produto: ' + error.message;

  saida.textContent = '🗑️ Produto excluído com sucesso!';
  await listarProdutos();
}


btnCancelar.addEventListener('click', () => {
  form.reset();
  campoId.value = '';
  tituloForm.textContent = 'Adicionar Produto';
  btnSalvar.textContent = 'Cadastrar Produto';
  btnCancelar.classList.add('oculto');
});
