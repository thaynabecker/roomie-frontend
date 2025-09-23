<script setup>
<<<<<<< HEAD
import { ref, computed, nextTick } from 'vue'

// Usuário logado simulado
const userLogado = ref({ nome: 'Amanda Eduarda', role: 'admin' })
=======
<<<<<<< HEAD
import { ref } from 'vue'
import icon from '@/assets/img/icon.png'

// Usuário logado
const userLogado = ref({ nome: 'Amanda Santos', role: 'morador' })

// Avisos (sempre visíveis)
const avisos = ref([
  { id: 1, titulo: 'Mutirão de Limpeza', data: '0607', descricao: 'Vamos limpar a área comum do prédio, tragam vassouras e sacos de lixo.' },
  { id: 2, titulo: 'Reunião Geral', data: '1207', descricao: 'Reunião mensal para discutir melhorias e regras da comunidade.' },
  { id: 3, titulo: 'Festa da Comunidade', data: '0106', descricao: 'Festa com música e comidas típicas. Todos convidados!' },
=======
import { ref, computed, nextTick } from 'vue'

// Login simulado
const userLogado = ref({ nome: 'Amanda Eduarda', role: 'admin' }) // role: 'morador' ou 'admin'
>>>>>>> 3bc1e325ff0c826b96c52534a364df34d7236b32

// Avisos
const avisos = ref([
  { id: 1, titulo: 'Mutirão de Limpeza', data: '0607' },
  { id: 2, titulo: 'Reunião Geral', data: '1207' },
  { id: 3, titulo: 'Festa da Comunidade', data: '0106' },
<<<<<<< HEAD
=======
>>>>>>> 6a62e93 (FIX: adjusting)
>>>>>>> 3bc1e325ff0c826b96c52534a364df34d7236b32
])

function formatarData(dataStr) {
  const dia = dataStr.substring(0, 2)
  const mes = dataStr.substring(2, 4)
<<<<<<< HEAD
=======
<<<<<<< HEAD
  return `${dia}/${mes}`
}

// Toggle descrição do aviso
const avisoAberto = ref(null)
function toggleDescricao(id) {
  avisoAberto.value = avisoAberto.value === id ? null : id
=======
>>>>>>> 3bc1e325ff0c826b96c52534a364df34d7236b32
  const anoAtual = new Date().getFullYear()
  const data = new Date(`${anoAtual}-${mes}-${dia}`)
  const diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  return `${diasSemana[data.getDay()]} (${dia}/${mes})`
}

<<<<<<< HEAD
// Mostrar todos os avisos (sem filtrar por data)
const todosAvisos = computed(() => avisos.value)

// CRUD avisos
=======
const avisosFiltrados = computed(() => {
  const hoje = new Date()
  hoje.setHours(0, 0, 0, 0)
  return avisos.value.filter((aviso) => {
    const dia = aviso.data.substring(0, 2)
    const mes = aviso.data.substring(2, 4)
    const anoAtual = hoje.getFullYear()
    const dataAviso = new Date(`${anoAtual}-${mes}-${dia}`)
    dataAviso.setHours(0, 0, 0, 0)
    return dataAviso >= hoje
  })
})

>>>>>>> 3bc1e325ff0c826b96c52534a364df34d7236b32
function adicionarAviso() {
  const titulo = prompt('Título do aviso:')
  const data = prompt('Data (ddmm):')
  if (titulo && data?.length === 4) {
    avisos.value.push({ id: Date.now(), titulo, data })
  }
}

function editarAviso(id) {
  const aviso = avisos.value.find((a) => a.id === id)
  const novoTitulo = prompt('Editar título:', aviso.titulo)
  const novaData = prompt('Editar data (ddmm):', aviso.data)
  if (novoTitulo) aviso.titulo = novoTitulo
  if (novaData?.length === 4) aviso.data = novaData
}

function deletarAviso(id) {
  avisos.value = avisos.value.filter((a) => a.id !== id)
<<<<<<< HEAD
=======
>>>>>>> 6a62e93 (FIX: adjusting)
>>>>>>> 3bc1e325ff0c826b96c52534a364df34d7236b32
}

// Chat
const mensagens = ref([])
const novaMensagem = ref('')
const chatBox = ref(null)

function enviarMensagem() {
  if (novaMensagem.value.trim() !== '') {
    mensagens.value.push({ usuario: userLogado.value.nome, texto: novaMensagem.value })
    novaMensagem.value = ''
    nextTick(() => scrollToBottom())
  }
}

function scrollToBottom() {
<<<<<<< HEAD
=======
<<<<<<< HEAD
  if (chatBox.value) chatBox.value.scrollTop = chatBox.value.scrollHeight
}

// Moradores (lista sempre visível)
const moradores = ref([
  { id: 1, nome: 'Amanda', idade: 25, avatar: icon, aniversario: '07' },
])
=======
>>>>>>> 3bc1e325ff0c826b96c52534a364df34d7236b32
  if (chatBox.value) {
    chatBox.value.scrollTop = chatBox.value.scrollHeight
  }
}

<<<<<<< HEAD
// Moradores
const moradores = ref([
  { id: 1, nome: 'Thayná', idade: 21, avatar: 'https://i.pravatar.cc/150?img=47', aniversario: '05' },
  { id: 2, nome: 'Anna', idade: 22, avatar: 'https://i.pravatar.cc/150?img=45', aniversario: '03' },
  { id: 3, nome: 'Julia', idade: 20, avatar: 'https://i.pravatar.cc/150?img=32', aniversario: '07' },
  { id: 4, nome: 'William', idade: 25, avatar: 'https://i.pravatar.cc/150?img=50', aniversario: '08' },
])

// Mostrar todos os moradores (para teste)
const aniversariantes = computed(() => moradores.value)
=======
// Moradores (simulação backend)
const moradores = ref([
  {
    id: 1,
    nome: 'Thayná',
    idade: 21,
    avatar: 'https://i.pravatar.cc/150?img=47',
    aniversario: '05',
  },
  { id: 2, nome: 'Anna', idade: 22, avatar: 'https://i.pravatar.cc/150?img=45', aniversario: '03' },
  {
    id: 3,
    nome: 'Julia',
    idade: 20,
    avatar: 'https://i.pravatar.cc/150?img=32',
    aniversario: '07',
  },
  {
    id: 4,
    nome: 'William',
    idade: 25,
    avatar: 'https://i.pravatar.cc/150?img=50',
    aniversario: '08',
  },
])

const aniversariantesMes = computed(() => {
  const mesAtual = String(new Date().getMonth() + 1).padStart(2, '0')
  return moradores.value.filter((m) => m.aniversario === mesAtual)
})
>>>>>>> 6a62e93 (FIX: adjusting)
>>>>>>> 3bc1e325ff0c826b96c52534a364df34d7236b32
</script>

<template>
  <main>
<<<<<<< HEAD
    <section class="main-content">
      <!-- Avisos -->
      <section class="avisos">
        <h2>Avisos (Admin)</h2>
        <p class="p1">Gerencie os avisos da comunidade.</p>
        <div class="avisos-grid">
          <div v-for="aviso in todosAvisos" :key="aviso.id" class="aviso-card">
            <h4>{{ aviso.titulo }}</h4>
            <p>{{ formatarData(aviso.data) }}</p>
            <div class="actions">
              <span class="material-icons" @click="editarAviso(aviso.id)">edit</span>
              <span class="material-icons" @click="deletarAviso(aviso.id)">delete</span>
            </div>
          </div>
        </div>
        <button @click="adicionarAviso" id="addAvisoBtn">+ Novo Aviso</button>
      </section>

      <!-- Chat e Aniversariantes -->
      <section class="linha-inferior">
        <!-- Chat -->
        <section class="chat">
          <h2>Bate-papo</h2>
          <div class="chat-box" ref="chatBox">
            <div v-for="(msg, index) in mensagens" :key="index" class="message">
              <strong>@{{ msg.usuario }}:</strong> {{ msg.texto }}
            </div>
          </div>
          <div class="chat-input">
            <input
              v-model="novaMensagem"
              placeholder="Digite uma mensagem..."
              @keyup.enter="enviarMensagem"
            />
            <button @click="enviarMensagem">➤</button>
          </div>
        </section>

        <!-- Aniversariantes -->
        <section v-if="aniversariantes.length" class="aniversariantes">
          <h2>Aniversariantes do mês</h2>
          <div v-for="morador in aniversariantes" :key="morador.id" class="aniversariante-card">
            <img :src="morador.avatar" />
            <p class="nome">{{ morador.nome }}</p>
            <p class="idade">{{ morador.idade }} anos</p>
            <div class="bolo-aniversario"><img src="@/assets/img/bolo.png" alt="bolo" /></div>
          </div>
        </section>
      </section>
=======
    <section class="main">
      <div class="main-content">
        <!-- Avisos -->
        <section class="avisos">
          <h2>Avisos</h2>
          <p class="p1">Fique por dentro dos avisos e interaja.</p>
          <div class="avisos-grid">
<<<<<<< HEAD
            <div v-for="aviso in avisos" :key="aviso.id" class="aviso-card">
              <h4>{{ aviso.titulo }}</h4>
              <p>{{ formatarData(aviso.data) }}</p>
              <p v-if="avisoAberto === aviso.id">{{ aviso.descricao }}</p>
              <button @click="toggleDescricao(aviso.id)" class="ver-mais">
                {{ avisoAberto === aviso.id ? 'Ver menos' : 'Ver mais' }}
              </button>
            </div>
          </div>
        </section>

        <!-- Linha inferior: Chat + Aniversariantes -->
=======
            <div v-for="aviso in avisosFiltrados" :key="aviso.id" class="aviso-card">
              <h4>{{ aviso.titulo }}</h4>
              <p>{{ formatarData(aviso.data) }}</p>
              <div v-if="userLogado.role === 'admin'" class="actions">
                <span class="material-icons" @click="editarAviso(aviso.id)">edit</span>
                <span class="material-icons" @click="deletarAviso(aviso.id)">delete</span>
              </div>
            </div>
          </div>
          <button v-if="userLogado.role === 'admin'" @click="adicionarAviso" id="addAvisoBtn">
            + Novo Aviso
          </button>
        </section>

        <!-- Linha inferior: Chat + Aniversariantes lado a lado -->
>>>>>>> 6a62e93 (FIX: adjusting)
        <section class="linha-inferior">
          <!-- Chat -->
          <section class="chat">
            <h2>Bate-papo</h2>
            <div class="chat-box" ref="chatBox">
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

          <!-- Aniversariantes -->
<<<<<<< HEAD
          <section class="aniversariantes">
            <h2>Aniversariantes do mês</h2>
            <div v-for="morador in moradores" :key="morador.id" class="aniversariante-card">
=======
          <section v-if="aniversariantesMes.length" class="aniversariantes">
            <h2>Aniversariantes do mês</h2>
            <div
              v-for="morador in aniversariantesMes"
              :key="morador.id"
              class="aniversariante-card"
            >
>>>>>>> 6a62e93 (FIX: adjusting)
              <img :src="morador.avatar" alt="Foto aniversariante" />
              <p class="nome">{{ morador.nome }}</p>
              <p class="idade">{{ morador.idade }} anos</p>
              <div class="bolo-aniversario">
                <img src="@/assets/img/bolo.png" alt="bolo" />
              </div>
            </div>
          </section>
        </section>
      </div>
>>>>>>> 3bc1e325ff0c826b96c52534a364df34d7236b32
    </section>
  </main>
</template>

<<<<<<< HEAD
=======
<<<<<<< HEAD

<style scoped>
.main-content {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 30px;
  padding: 20px;
  font-family: "Poppins", sans-serif;
  color: #333;
}

/* Layout inferior */
.linha-inferior {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 25px;
}
@media (max-width: 900px) {
  .linha-inferior {
    grid-template-columns: 1fr;
  }
}

/* CHAT */
.chat {
  border-radius: 16px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  height: 350px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
.chat h2 {
  margin-bottom: 10px;
  color: #7c0a02;
}
.chat-box {
  background: #fafafa;
=======
>>>>>>> 3bc1e325ff0c826b96c52534a364df34d7236b32
<style scoped>
.main-content {
  display: grid;
  grid-template-rows: auto 1fr; /* Avisos em cima, linha inferior embaixo */
  gap: 20px;
  padding: 20px;
<<<<<<< HEAD
} /* Linha inferior: chat + aniversariantes lado a lado */
=======
}

/* Linha inferior: chat + aniversariantes lado a lado */
>>>>>>> 3bc1e325ff0c826b96c52534a364df34d7236b32
.linha-inferior {
  display: grid;
  grid-template-columns: 2fr 1fr; /* Chat maior, aniversariantes menor */
  gap: 20px;
<<<<<<< HEAD
} /* Ajuste do chat */
=======
}

/* Ajuste do chat */
>>>>>>> 3bc1e325ff0c826b96c52534a364df34d7236b32
.chat {
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: 300px; /* altura maior para caber mensagens */
}
<<<<<<< HEAD
.chat-box {
  background: #fff;
=======

.chat-box {
  background: #fff;
>>>>>>> 6a62e93 (FIX: adjusting)
>>>>>>> 3bc1e325ff0c826b96c52534a364df34d7236b32
  flex: 1;
  overflow-y: auto;
  border-radius: 12px;
  padding: 12px;
<<<<<<< HEAD
  margin-bottom: 10px;
} /* Agrupa chat + aniversariantes em coluna */
=======
<<<<<<< HEAD
  margin-bottom: 12px;
  border: 1px solid #eee;
}
.message {
  margin-bottom: 8px;
  font-size: 0.95rem;
=======
  margin-bottom: 10px;
}

/* Agrupa chat + aniversariantes em coluna */
>>>>>>> 3bc1e325ff0c826b96c52534a364df34d7236b32
.chat-aniversariantes {
  display: flex;
  flex-direction: column;
  gap: 20px;
<<<<<<< HEAD
} /* Ajuste do chat */
.chat {
  height: 250px; /* maior que antes para alinhar com aniversariantes */
} /* Ajuste da lista de aniversariantes */
=======
}

/* Ajuste do chat */
.chat {
  height: 250px; /* maior que antes para alinhar com aniversariantes */
}

/* Ajuste da lista de aniversariantes */
>>>>>>> 3bc1e325ff0c826b96c52534a364df34d7236b32
.aniversariantes {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.aniversariantes h2 {
  text-align: center;
  color: #7c0a02;
  font-weight: bold;
}
.aniversariante-card {
  position: relative; /* necessário para posicionar o bolo */
}
<<<<<<< HEAD
=======

>>>>>>> 3bc1e325ff0c826b96c52534a364df34d7236b32
.bolo-aniversario {
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 40px;
  height: 40px;
}
.bolo-aniversario img {
  width: 100%;
  height: 100%;
  border-radius: 0;
  border: none;
  box-shadow: none;
  object-fit: contain;
}
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
  padding: 50px;
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
<<<<<<< HEAD
=======
>>>>>>> 6a62e93 (FIX: adjusting)
>>>>>>> 3bc1e325ff0c826b96c52534a364df34d7236b32
}
.message strong {
  color: #8b0f18;
}
.chat-input {
  display: flex;
}
.chat-input input {
  flex: 1;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  padding: 12px;
  border-radius: 12px 0 0 12px;
  border: 1px solid #ccc;
  outline: none;
  transition: 0.2s;
}
.chat-input input:focus {
  border-color: #8b0f18;
  box-shadow: 0 0 4px rgba(139, 15, 24, 0.3);
}
.chat-input button {
  padding: 0 18px;
  border: none;
  background: #8b0f18;
  color: #fff;
  border-radius: 0 12px 12px 0;
  cursor: pointer;
  transition: background 0.2s;
}
.chat-input button:hover {
  background: #5e0700;
}

/* AVISOS */
.avisos h2 {
  font-size: 1.8rem;
  margin-bottom: 5px;
  color: black;
  font-weight: bold;
}
.avisos p {
  margin-bottom: 10px;
}
.avisos .p1 {
  color: gray;
}
.avisos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin: 15px 0;
}
.aviso-card {
  background: linear-gradient(135deg, #8b0f18, #a3121d);
  color: #fff;
  border-radius: 16px;
  padding: 20px;
  font-size: 1rem;
  font-weight: 500;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
}
.aviso-card:hover {
  transform: translateY(-3px);
}
.ver-mais {
  margin-top: 12px;
  padding: 6px 12px;
  border-radius: 8px;
  border: none;
  background-color: #fff;
  color: #8b0f18;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
}
.ver-mais:hover {
  background-color: #f4f4f4;
}

/* ANIVERSARIANTES */
.aniversariantes {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.aniversariantes h2 {
  text-align: center;
  color: #7c0a02;
  font-weight: bold;
}
.aniversariante-card {
  position: relative;
  background: #fff;
  border: 2px solid #7c0a02;
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  width: 100%;
  max-width: 280px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  margin: 0 auto;
  transition: transform 0.2s;
}
.aniversariante-card:hover {
  transform: translateY(-4px);
}
.aniversariante-card img {
  width: 95px;
  height: 95px;
  border-radius: 50%;
  margin-bottom: 12px;
  border: 3px solid #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}
.aniversariante-card .nome {
  font-size: 17px;
=======
>>>>>>> 3bc1e325ff0c826b96c52534a364df34d7236b32
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
}
.avatar {
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid white;
  object-fit: cover;
}
<<<<<<< HEAD
=======

>>>>>>> 3bc1e325ff0c826b96c52534a364df34d7236b32
.aniversariante-card {
  background: white;
  border: 2px solid #7c0a02;
  border-radius: 14px;
  padding: 15px;
  text-align: center;
  width: 100%;
  max-width: 260px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
}
<<<<<<< HEAD
=======

>>>>>>> 3bc1e325ff0c826b96c52534a364df34d7236b32
.aniversariante-card img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-bottom: 10px;
  border: 3px solid white;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
}
<<<<<<< HEAD
.aniversariante-card .nome {
  font-size: 16px;
=======

.aniversariante-card .nome {
  font-size: 16px;
>>>>>>> 6a62e93 (FIX: adjusting)
>>>>>>> 3bc1e325ff0c826b96c52534a364df34d7236b32
  font-weight: bold;
}
.aniversariante-card .idade {
  font-size: 14px;
<<<<<<< HEAD
  color: #555;
}
=======
<<<<<<< HEAD
  color: #666;
}
.bolo-aniversario {
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 42px;
  height: 42px;
}
.bolo-aniversario img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

=======
  color: #555;
}

>>>>>>> 3bc1e325ff0c826b96c52534a364df34d7236b32
.btn-red {
  background: #7c0a02;
}
.btn-red:hover {
  background: #5e0700;
}
<<<<<<< HEAD
=======

>>>>>>> 3bc1e325ff0c826b96c52534a364df34d7236b32
.tabela-edit {
  margin-top: 10px;
}
.tabela-edit table {
  width: 100%;
  border-collapse: collapse;
}
.tabela-edit td {
  padding: 8px;
  border-bottom: 1px solid #ccc;
}
<<<<<<< HEAD
=======

>>>>>>> 3bc1e325ff0c826b96c52534a364df34d7236b32
.chat {
  border: 1px solid #ccc;
  padding: 10px;
  overflow-y: auto;
  height: 200px;
}
<<<<<<< HEAD
.mensagem {
  margin-bottom: 5px;
}
=======

.mensagem {
  margin-bottom: 5px;
}
<<<<<<<< HEAD:src/views/morador/MuralMView.vue
>>>>>>> 6a62e93 (FIX: adjusting)
========
>>>>>>>> 3bc1e325ff0c826b96c52534a364df34d7236b32:src/views/admin/MuralAView.vue
>>>>>>> 3bc1e325ff0c826b96c52534a364df34d7236b32
</style>