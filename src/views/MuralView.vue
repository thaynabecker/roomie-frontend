<script setup>
import { ref } from 'vue'

// Usuário logado
const userLogado = ref({ nome: 'Amanda Eduarda', role: 'admin' })

// Avisos
const avisos = ref([
  { id: 1, titulo: 'Mutirão de Limpeza', data: '0607', editando: false },
  { id: 2, titulo: 'Reunião Geral', data: '1207', editando: false },
])

// Formulário de novo aviso
const mostrarFormAviso = ref(false)
const novoTitulo = ref('')
const novaData = ref('')

// Formatar data com dia da semana correto
function formatarData(dataStr) {
  const dia = Number(dataStr.substring(0, 2))
  const mes = Number(dataStr.substring(2, 4)) - 1
  const anoAtual = new Date().getFullYear()
  const data = new Date(anoAtual, mes, dia)
  const diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  return `${diasSemana[data.getDay()]} (${String(dia).padStart(2,'0')}/${String(mes+1).padStart(2,'0')})`
}

// Adicionar aviso
function adicionarAviso() {
  if (!novoTitulo.value || novaData.value.length !== 4 || isNaN(Number(novaData.value))) {
    alert('Preencha corretamente o título e a data no formato ddmm!')
    return
  }

  avisos.value.push({ id: Date.now(), titulo: novoTitulo.value, data: novaData.value, editando: false })
  novoTitulo.value = ''
  novaData.value = ''
  mostrarFormAviso.value = false
}

// Editar aviso inline
function iniciarEdicao(aviso) {
  aviso.editando = true
  aviso.novoTitulo = aviso.titulo
  aviso.novaData = aviso.data
}

function salvarEdicao(aviso) {
  if (!aviso.novoTitulo || aviso.novaData.length !== 4 || isNaN(Number(aviso.novaData))) {
    alert('Preencha corretamente o título e a data no formato ddmm!')
    return
  }
  aviso.titulo = aviso.novoTitulo
  aviso.data = aviso.novaData
  aviso.editando = false
}

function cancelarEdicao(aviso) {
  aviso.editando = false
}

// Deletar aviso
function deletarAviso(id) {
  avisos.value = avisos.value.filter((a) => a.id !== id)
}

// Chat
const mensagens = ref([
  { usuario: 'Edward', texto: 'socorro algm varreu q nem a cara' },
  { usuario: 'Jacob', texto: 'foi a sua mãe' },
  { usuario: 'Bella', texto: 'calma gente, não briguem' },
])
const novaMensagem = ref('')

function enviarMensagem() {
  if (novaMensagem.value.trim() !== '') {
    mensagens.value.push({ usuario: userLogado.value.nome, texto: novaMensagem.value })
    novaMensagem.value = ''
  }
}

// Aniversariante
const aniversariante = ref({
  nome: 'Alice Cullen',
  data: '2508',
  foto: 'https://i.imgur.com/jU4YHkJ.jpeg',
})

function editarAniversariante() {
  const novoNome = prompt('Nome do aniversariante:', aniversariante.value.nome)
  const novaData = prompt('Data (ddmm):', aniversariante.value.data)
  const novaFoto = prompt('URL da foto:', aniversariante.value.foto)
  if (novoNome) aniversariante.value.nome = novoNome
  if (novaData?.length === 4) aniversariante.value.data = novaData
  if (novaFoto) aniversariante.value.foto = novaFoto
}
</script>

<template>
  <section class="main">
    <div class="main-content">

      <!-- Avisos -->
      <section class="avisos">
        <h2>Avisos</h2>
        <p class="p1">Fique por dentro dos avisos e interaja.</p>

        <div class="avisos-grid">
          <div v-for="aviso in avisos" :key="aviso.id" class="aviso-card">

            <!-- Modo edição -->
            <div v-if="aviso.editando">
              <input v-model="aviso.novoTitulo" placeholder="Título do aviso" />
              <input v-model="aviso.novaData" placeholder="Data (ddmm)" maxlength="4" />
              <div class="edit-actions">
                <button @click="salvarEdicao(aviso)">💾</button>
                <button @click="cancelarEdicao(aviso)">❌</button>
              </div>
            </div>

            <!-- Modo normal -->
            <div v-else>
              <h4>{{ aviso.titulo }}</h4>
              <p>{{ formatarData(aviso.data) }}</p>
              <div v-if="userLogado.role === 'admin'" class="actions">
                <button @click="iniciarEdicao(aviso)">✏️</button>
                <button @click="deletarAviso(aviso.id)">🗑️</button>
              </div>
            </div>

          </div>
        </div>

        <!-- Formulário de novo aviso -->
        <div v-if="mostrarFormAviso" class="form-aviso">
          <input v-model="novoTitulo" placeholder="Título do aviso" />
          <input v-model="novaData" placeholder="Data (ddmm)" maxlength="4" />
          <button @click="adicionarAviso">Adicionar</button>
          <button @click="mostrarFormAviso = false">Cancelar</button>
        </div>

        <button v-else-if="userLogado.role === 'admin'" @click="mostrarFormAviso = true" id="addAvisoBtn">
          + Novo Aviso
        </button>
      </section>

      <!-- Chat -->
      <section class="chat">
        <h2>Bate-papo</h2>
        <div class="chat-box">
          <div v-for="(msg, index) in mensagens" :key="index" class="message">
            <strong>@{{ msg.usuario }}:</strong> {{ msg.texto }}
          </div>
        </div>
        <div class="chat-input">
          <input
            type="text"
            v-model="novaMensagem"
            placeholder="Digite uma mensagem..."
            @keyup.enter="enviarMensagem"
          />
          <button @click="enviarMensagem">➤</button>
        </div>
      </section>

      <!-- Aniversariante -->
      <section class="aniversariante">
        <h3>Aniversariante do mês</h3>
        <div class="aniversariante-card">
          <img :src="aniversariante.foto" alt="Foto do aniversariante" />
          <p>{{ aniversariante.nome }}</p>
          <p>{{ formatarData(aniversariante.data) }}</p>
          <div v-if="userLogado.role === 'admin'" class="edit-btn">
            <button @click="editarAniversariante">✏️ Editar</button>
          </div>
        </div>
      </section>

    </div>
  </section>
</template>

<style scoped>
.main-content {
  padding: 20px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
} /* Avisos */
.avisos h2 {
  font-size: 1.6rem;
  margin-bottom: 5px;
}
.avisos p {
  color: #ffffff;
}
.avisos .p1 {
  color: gray;
}
.avisos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin: 15px 0;
}
.aviso-card {
  background: #8b0f18;
  color: #fff;
  border-radius: 12px;
  padding: 40px;
  font-size: 0.95rem;
  font-weight: 500;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  position: relative;
}
.aviso-card .actions {
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  gap: 5px;
}
.aviso-card .actions button {
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1rem;
}
#addAvisoBtn {
  padding: 8px 15px;
  border: none;
  background: #8b0f18;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
} /* Chat */
.chat {
  grid-column: 1 / 2;
}
.chat-box {
  background: #fff;
  height: 220px;
  overflow-y: auto;
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid #e0e0e0;
}
.message {
  margin-bottom: 10px;
  font-size: 0.9rem;
}
.message strong {
  color: #8b0f18;
}
.chat-input {
  display: flex;
}
.chat-input input {
  flex: 1;
  padding: 10px;
  border-radius: 10px 0 0 10px;
  border: 1px solid #ccc;
}
.chat-input button {
  padding: 10px 15px;
  border: none;
  background: #8b0f18;
  color: #fff;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
} /* Aniversariante */
.aniversariante {
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 12px;
  text-align: center;
  padding: 15px;
  max-width: 250px;
  margin-left: auto;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
}
.aniversariante-card img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
}
.aniversariante-card p {
  font-weight: 600;
  margin-bottom: 5px;
}
.aniversariante-card .emoji {
  font-size: 2rem;
  display: block;
}
.edit-btn {
  margin-top: 8px;
}
.edit-btn button {
  border: none;
  background: #8b0f18;
  color: white;
  padding: 5px 10px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
}
</style>
