<script setup>
import { ref, computed, onMounted } from 'vue'
// Descomentar quando for integrar com backend real
// ======= SIMULAÇÃO DO USUÁRIO LOGADO =======

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
  font-family: 'Poppins', sans-serif;
}

h2 {
  color: black;
}

h3 {
  color: black;
  font-weight: bold;
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
  font-family: 'Poppins', sans-serif;
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:src/views/morador/DepartamentosMView.vue
  }}
=======
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
>>>>>>> 80c87c2 (FIX: readjusting pages):src/views/DepartamentosView.vue
=======
  }}
>>>>>>> b82b7ef (FEAT: Create admin cleaning departments page #33)
=======
  }}
>>>>>>> 3bc1e325ff0c826b96c52534a364df34d7236b32
</style>