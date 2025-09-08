<script setup>
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
]
const departamentoSelecionado = ref(departamentos[0])
const showDropdown = ref(false)

// ======= TAREFAS MOCK =======
const tarefas = ref([
  { id: 1, titulo: 'Varrer a casa', prazo: 'hoje até 12h', status: 'pendente', icone: 'vassoura', usuarioId: 1, departamentoId: 1 },
  { id: 2, titulo: 'Levar o lixo', prazo: 'hoje até 10h', status: 'pendente', icone: 'reciclar', usuarioId: 1, departamentoId: 1 },
  { id: 3, titulo: 'Varrer a casa', prazo: 'hoje até 12h', status: 'concluida', icone: 'vassoura', usuarioId: 1, departamentoId: 1 },
  { id: 4, titulo: 'Lavar a louça', prazo: 'hoje até 14h', status: 'pendente', icone: 'lavarPratos', usuarioId: 1, departamentoId: 2 },
  { id: 5, titulo: 'Limpar a geladeira', prazo: 'amanhã até 09h', status: 'concluida', icone: 'lavarPratos', usuarioId: 1, departamentoId: 2 },
  { id: 6, titulo: 'Trocar lâmpada', prazo: 'amanhã até 17h', status: 'pendente', icone: 'manutencao', usuarioId: 1, departamentoId: 3 },
  { id: 7, titulo: 'Comprar detergente', prazo: 'hoje até 18h', status: 'pendente', icone: 'compras', usuarioId: 1, departamentoId: 4 }
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

    <!-- Conteúdo das tarefas -->
    <div class="tarefas">
      <div class="coluna">
        <h2 class="subtitulo">Tarefas Pendentes</h2>
        <div
          v-for="tarefa in tarefasPendentes"
          :key="tarefa.id"
          class="card"
        >
          <img :src="icones[tarefa.icone]" :alt="tarefa.titulo" class="icone" />
          <h3>{{ tarefa.titulo }}</h3>
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
        </div>
      </div>
    </div>
  </section>
</template>

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
}

.subtitulo {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
}

.card {
  background-color: #d9b2b2;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0px 4px 12px rgba(0,0,0,0.15);
}

.icone {
  width: 50px;
  height: auto;
  margin-bottom: 10px;
}

.prazo {
  font-size: 14px;
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
}
</style>