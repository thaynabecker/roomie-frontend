<script setup>
<<<<<<< HEAD
import { ref, computed } from 'vue'

// ======= DEPARTAMENTOS =======
const departamentos = [
  { id: 1, nome: 'Departamento de Limpeza', info: 'Responsável pela organização, higienização dos ambientes e manutenção da limpeza coletiva.' },
  { id: 2, nome: 'Departamento de Cozinha', info: 'Cuida da preparação de refeições, organização da cozinha e conservação dos alimentos.' },
  { id: 3, nome: 'Departamento de Manutenção', info: 'Garante que todos os equipamentos e estruturas estejam funcionando corretamente.' },
  { id: 4, nome: 'Departamento de Compras', info: 'Organiza as listas de compras, controla estoque e garante que nada falte no dia a dia.' }
=======
import { ref, computed, onMounted } from 'vue'
// Descomentar quando for integrar com backend real
// ======= SIMULAÇÃO DO USUÁRIO LOGADO =======
import perfilImg from '@/assets/img/perfil.png'

const usuarioLogado = ref({
  nome: 'Amanda Eduarda',
  fotoPerfil: perfilImg,
  dataCadastro: new Date('2025-07-14') // data de cadastro
})

const statusUsuario = computed(() => {
  const hoje = new Date()
  const diffMeses = (hoje.getFullYear() - usuarioLogado.value.dataCadastro.getFullYear()) * 12 +
                    (hoje.getMonth() - usuarioLogado.value.dataCadastro.getMonth())
  return diffMeses <= 1 ? '1 mês' : `${diffMeses} meses`
})

// ======= DEPARTAMENTOS =======
const departamentos = [
  { id: 1, nome: 'Departamento de Limpeza' },
  { id: 2, nome: 'Departamento de Cozinha' },
  { id: 3, nome: 'Departamento de Manutenção' },
  { id: 4, nome: 'Departamento de Compras' }
>>>>>>> 6a62e93 (FIX: adjusting)
]
const departamentoSelecionado = ref(departamentos[0])
const showDropdown = ref(false)

// ======= TAREFAS MOCK =======
const tarefas = ref([
<<<<<<< HEAD
  { id: 1, titulo: 'Varrer a casa', prazo: '2025-09-02T12:00', status: 'pendente', icone: 'vassoura', departamentoId: 1 },
  { id: 2, titulo: 'Levar o lixo', prazo: '2025-09-03T10:00', status: 'pendente', icone: 'reciclar', departamentoId: 1 },
  { id: 3, titulo: 'Lavar a louça', prazo: '2025-09-02T14:00', status: 'pendente', icone: 'lavarPratos', departamentoId: 2 },
  { id: 4, titulo: 'Limpar a geladeira', prazo: '2025-09-03T09:00', status: 'pendente', icone: 'lavarPratos', departamentoId: 2 },
  { id: 5, titulo: 'Trocar lâmpada', prazo: '2025-09-03T17:00', status: 'pendente', icone: 'manutencao', departamentoId: 3 },
  { id: 6, titulo: 'Comprar detergente', prazo: '2025-09-02T18:00', status: 'pendente', icone: 'compras', departamentoId: 4 }
=======
  { id: 1, titulo: 'Varrer a casa', prazo: 'hoje até 12h', status: 'pendente', icone: 'vassoura', usuarioId: 1, departamentoId: 1 },
  { id: 2, titulo: 'Levar o lixo', prazo: 'hoje até 10h', status: 'pendente', icone: 'reciclar', usuarioId: 1, departamentoId: 1 },
  { id: 3, titulo: 'Varrer a casa', prazo: 'hoje até 12h', status: 'concluida', icone: 'vassoura', usuarioId: 1, departamentoId: 1 },
  { id: 4, titulo: 'Lavar a louça', prazo: 'hoje até 14h', status: 'pendente', icone: 'lavarPratos', usuarioId: 1, departamentoId: 2 },
  { id: 5, titulo: 'Limpar a geladeira', prazo: 'amanhã até 09h', status: 'concluida', icone: 'lavarPratos', usuarioId: 1, departamentoId: 2 },
  { id: 6, titulo: 'Trocar lâmpada', prazo: 'amanhã até 17h', status: 'pendente', icone: 'manutencao', usuarioId: 1, departamentoId: 3 },
  { id: 7, titulo: 'Comprar detergente', prazo: 'hoje até 18h', status: 'pendente', icone: 'compras', usuarioId: 1, departamentoId: 4 }
>>>>>>> 6a62e93 (FIX: adjusting)
])

// ======= ÍCONES =======
const icones = {
  vassoura: new URL('@/assets/img/vassoura.png', import.meta.url).href,
  reciclar: new URL('@/assets/img/reciclar.png', import.meta.url).href,
  lavarPratos: new URL('@/assets/img/lavarlouca.png', import.meta.url).href,
  manutencao: new URL('@/assets/img/manutencao.png', import.meta.url).href,
  compras: new URL('@/assets/img/compras.png', import.meta.url).href
}

// ======= FILTROS =======
const tarefasDepartamento = computed(() =>
<<<<<<< HEAD
  tarefas.value.filter(t => t.departamentoId === departamentoSelecionado.value.id)
)

// ======= FORMATAR PRAZO =======
function formatarPrazo(prazoStr) {
  if (!prazoStr) return "";
  const prazo = new Date(prazoStr);
  if (isNaN(prazo.getTime())) return "Data inválida";

  const hoje = new Date();
  const opcoesHora = { hour: "2-digit", minute: "2-digit" };
  const hora = prazo.toLocaleTimeString("pt-BR", opcoesHora);

  const hojeSemHora = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
  const prazoSemHora = new Date(prazo.getFullYear(), prazo.getMonth(), prazo.getDate());

  const diffDias = Math.round((prazoSemHora - hojeSemHora) / (1000 * 60 * 60 * 24));

  if (diffDias === 0) return `Hoje às ${hora}`;
  if (diffDias === 1) return `Amanhã às ${hora}`;
  if (diffDias > 1 && diffDias <= 7) {
    const diaSemana = prazo.toLocaleDateString("pt-BR", { weekday: "long" });
    return `${diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1)} às ${hora}`;
  }
  return prazo.toLocaleDateString("pt-BR") + ` às ${hora}`;
}

// ======= MODAL =======
const showModal = ref(false)
const editando = ref(false)
const tarefaEditando = ref(null)
const novaTarefa = ref({ titulo: "", data: "", hora: "", icone: "compras" })

function abrirModalEditar(tarefa) {
  editando.value = true
  tarefaEditando.value = tarefa
  const [data, hora] = tarefa.prazo.split("T")
  novaTarefa.value = { titulo: tarefa.titulo, data, hora, icone: tarefa.icone }
  showModal.value = true
}

function abrirModalNova() {
  editando.value = false
  novaTarefa.value = { titulo: "", data: "", hora: "", icone: "compras" }
  showModal.value = true
}

function fecharModal() {
  showModal.value = false
  novaTarefa.value = { titulo: "", data: "", hora: "", icone: "compras" }
  tarefaEditando.value = null
}

function salvarTarefa() {
  if (!novaTarefa.value.titulo || !novaTarefa.value.data || !novaTarefa.value.hora) {
    alert("Preencha todos os campos!");
    return;
  }

  // concatenar data + hora de forma segura
  const prazo = `${novaTarefa.value.data}T${novaTarefa.value.hora}`;

  if (editando.value && tarefaEditando.value) {
    tarefaEditando.value.titulo = novaTarefa.value.titulo
    tarefaEditando.value.prazo = prazo
    tarefaEditando.value.icone = novaTarefa.value.icone
  } else {
    tarefas.value.push({
      id: Date.now(),
      titulo: novaTarefa.value.titulo,
      prazo,
      status: "pendente",
      icone: novaTarefa.value.icone,
      departamentoId: departamentoSelecionado.value.id
    })
  }
  fecharModal()
}

// ======= DELETAR =======
function deletarTarefa(id) {
  tarefas.value = tarefas.value.filter(t => t.id !== id)
}
</script>


<template>
  <section class="departamento-container">
=======
  tarefas.value.filter(
    t => t.usuarioId === 1 && t.departamentoId === departamentoSelecionado.value.id
  )
)

const tarefasPendentes = computed(() =>
  tarefasDepartamento.value.filter(t => t.status === 'pendente')
)

const tarefasConcluidas = computed(() =>
  tarefasDepartamento.value.filter(t => t.status === 'concluida')
)

// ======= AÇÕES =======
const concluirTarefa = (tarefaId) => {
  const tarefa = tarefas.value.find(t => t.id === tarefaId)
  if (tarefa) tarefa.status = 'concluida'
}

onMounted(() => {
  //chamar API se necessário
})
</script>

<template>
  <section class="departamento-container">

    <!-- Profile Widget no canto superior direito -->
    <div class="profile-widget">
      <img :src="usuarioLogado.fotoPerfil" alt="Foto do usuário" class="profile-foto"/>
      <div class="profile-info">
        <span class="profile-nome">{{ usuarioLogado.nome }}</span>
       <span class="profile-status">{{ statusUsuario }}</span>
      </div>
      <button class="btn-notificacao">🔔</button>
    </div>

>>>>>>> 6a62e93 (FIX: adjusting)
    <!-- Cabeçalho com dropdown -->
    <div class="header">
      <p class="descricao">Selecione um departamento:</p>
      <div class="dropdown">
        <button class="titulo" @click="showDropdown = !showDropdown">
          {{ departamentoSelecionado.nome }}
          <span class="seta">▼</span>
        </button>
        <ul v-if="showDropdown" class="dropdown-list">
          <li
            v-for="dep in departamentos"
            :key="dep.id"
            @click="departamentoSelecionado = dep; showDropdown = false"
          >
            {{ dep.nome }}
          </li>
        </ul>
      </div>
    </div>

<<<<<<< HEAD
    <!-- Informações do departamento -->
    <div class="informacoes">
      <h2>Informações</h2>
      <p>{{ departamentoSelecionado.info }}</p>
    </div>

    <!-- Lista de tarefas -->
    <div class="tarefas">
      <h2 class="subtitulo">Tarefas</h2>
      <div class="grid-tarefas">
        <div
          v-for="tarefa in tarefasDepartamento"
=======
    <!-- Conteúdo das tarefas -->
    <div class="tarefas">
      <div class="coluna">
        <h2 class="subtitulo">Tarefas Pendentes</h2>
        <div
          v-for="tarefa in tarefasPendentes"
>>>>>>> 6a62e93 (FIX: adjusting)
          :key="tarefa.id"
          class="card"
        >
          <img :src="icones[tarefa.icone]" :alt="tarefa.titulo" class="icone" />
          <h3>{{ tarefa.titulo }}</h3>
<<<<<<< HEAD
          <p class="prazo">Prazo: {{ formatarPrazo(tarefa.prazo) }}</p>
          <div class="acoes">
            <span class="material-icons" @click="abrirModalEditar(tarefa)">edit</span>
            <span class="material-icons" @click="deletarTarefa(tarefa.id)">delete</span>
          </div>
        </div>
      </div>
      <button class="btn-add" @click="abrirModalNova">+ Nova tarefa</button>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal">
        <h3>{{ editando ? 'Editar tarefa' : 'Nova tarefa' }}</h3>
        <input v-model="novaTarefa.titulo" type="text" placeholder="Título da tarefa" />
        <input v-model="novaTarefa.data" type="date" />
        <input v-model="novaTarefa.hora" type="time" />

        <!-- Escolha de ícone -->
        <div class="selecionar-icone">
          <p>Escolha um ícone:</p>
          <div class="botoes-icones">
            <button
              type="button"
              v-for="(url, key) in icones"
              :key="key"
              :class="{ ativo: novaTarefa.icone === key }"
              @click="novaTarefa.icone = key"
            >
              <img :src="url" :alt="key" />
            </button>
          </div>
        </div>

        <div class="actions">
          <button class="btn-cancel" @click="fecharModal">Cancelar</button>
          <button class="btn-save" @click="salvarTarefa">{{ editando ? 'Salvar alterações' : 'Criar' }}</button>
=======
          <p class="prazo">Prazo: {{ tarefa.prazo }}</p>
          <button class="btn-pendente" @click="concluirTarefa(tarefa.id)">
            Concluir tarefa
          </button>
        </div>
      </div>

      <div class="coluna">
        <h2 class="subtitulo">Tarefas Concluídas</h2>
        <div
          v-for="tarefa in tarefasConcluidas"
          :key="tarefa.id"
          class="card"
        >
          <img :src="icones[tarefa.icone]" :alt="tarefa.titulo" class="icone" />
          <h3>{{ tarefa.titulo }}</h3>
          <p class="prazo">Prazo: {{ tarefa.prazo }}</p>
          <button class="btn-concluida">Concluído com sucesso!</button>
>>>>>>> 6a62e93 (FIX: adjusting)
        </div>
      </div>
    </div>
  </section>
</template>

<<<<<<< HEAD
<style scoped>
.departamento-container {
  padding: 20px;
  font-family: 'Poppins', sans-serif;
=======
<script setup></script>

<style scoped>
.departamento-container {
  padding: 20px;
  position: relative;
}

/* Profile Widget fixo no canto superior direito */
.profile-widget {
  position: fixed;
  top: 20px;
  right: 20px;
  background: white;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;
  border-radius: 12px;
  box-shadow: 0px 2px 8px rgba(0,0,0,0.15);
  z-index: 50;
}

.profile-foto {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-info {
  display: flex;
  flex-direction: column;
  font-size: 14px;
}

.profile-nome {
  font-weight: bold;
}

.profile-status {
  color: #888;
}

.btn-notificacao {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
>>>>>>> 6a62e93 (FIX: adjusting)
}

/* Cabeçalho */
.header {
  margin-bottom: 20px;
}

.descricao {
  font-size: 14px;
  color: #555;
}

/* Dropdown */
.dropdown {
  position: relative;
  display: inline-block;
}

.titulo {
  font-size: 22px;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
<<<<<<< HEAD
  font-family: 'Poppins', sans-serif;
=======
>>>>>>> 6a62e93 (FIX: adjusting)
}

.seta {
  font-size: 14px;
  margin-left: 5px;
}

.dropdown-list {
  position: absolute;
  background: white;
  border: 1px solid #ccc;
  list-style: none;
  padding: 8px 0;
  margin: 0;
  width: 220px;
  border-radius: 6px;
  z-index: 10;
}

.dropdown-list li {
  padding: 8px 12px;
  cursor: pointer;
}

.dropdown-list li:hover {
  background: #eee;
}

<<<<<<< HEAD
/* Informações */
.informacoes {
  margin: 20px 0;
}

h2 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
  color: black;
}

p {
  color: black;
}

h3 {
  color: black;
  font-weight: bold;
}

/* Tarefas */
.tarefas {
  margin-top: 20px;
=======
/* Tarefas */
.tarefas {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 80px; /* espaço para o ProfileWidget */
}

.coluna {
  flex: 1;
  min-width: 280px;
>>>>>>> 6a62e93 (FIX: adjusting)
}

.subtitulo {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
<<<<<<< HEAD
}

.grid-tarefas {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
=======
  text-align: center;
>>>>>>> 6a62e93 (FIX: adjusting)
}

.card {
  background-color: #d9b2b2;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
<<<<<<< HEAD
  position: relative;
}

.icone {
  width: 40px;
=======
  margin-bottom: 20px;
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0px 4px 12px rgba(0,0,0,0.15);
}

.icone {
  width: 50px;
>>>>>>> 6a62e93 (FIX: adjusting)
  height: auto;
  margin-bottom: 10px;
}

.prazo {
  font-size: 14px;
<<<<<<< HEAD
  color: #333;
}

.acoes {
  position: absolute;
  bottom: 8px;
  right: 8px;
  display: flex;
  gap: 8px;
}

.acoes .material-icons {
  cursor: pointer;
  font-size: 18px;
  color: black;
}

/* Botão adicionar */
.btn-add {
  margin-top: 20px;
  padding: 10px 18px;
  border: none;
  background: #800000;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background: white;
  padding: 25px;
  border-radius: 12px;
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.modal input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.selecionar-icone p {
  margin: 5px 0;
  font-weight: bold;
}

.botoes-icones {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.botoes-icones button {
  background: none;
  border: 2px solid transparent;
  border-radius: 8px;
  padding: 5px;
  cursor: pointer;
  transition: 0.3s;
}

.botoes-icones button.ativo {
  border-color: #800000;
}

.botoes-icones img {
  width: 40px;
  height: auto;
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
}

.btn-cancel {
  background: #ccc;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
}

.btn-save {
  background: #800000;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
}

.btn-save:hover {
  background: #a52a2a;
=======
  color: #555;
  margin-bottom: 15px;
}

.btn-pendente {
  background-color: #800000;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  cursor: pointer;
}

.btn-concluida {
  background-color: #800000;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  cursor: default;
}

@media (max-width: 768px) {
  .tarefas {
    flex-direction: column;
    gap: 20px;
    margin-top: 60px;
  }

  .profile-widget {
    top: 10px;
    right: 10px;
    padding: 8px 10px;
    gap: 6px;
    font-size: 12px;
  }

  .profile-foto {
    width: 35px;
    height: 35px;
  }
>>>>>>> 6a62e93 (FIX: adjusting)
}
</style>