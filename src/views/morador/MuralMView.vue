<script setup>
import { ref, computed, nextTick } from 'vue'
import icon from '@/assets/img/icon.png'

// Usuário logado
const userLogado = ref({ nome: 'Amanda Eduarda', role: 'morador' })

// Avisos
const avisos = ref([
  { id: 1, titulo: 'Mutirão de Limpeza', data: '0607', descricao: 'Vamos limpar a área comum do prédio, tragam vassouras e sacos de lixo.' },
  { id: 2, titulo: 'Reunião Geral', data: '1207', descricao: 'Reunião mensal para discutir melhorias e regras da comunidade.' },
  { id: 3, titulo: 'Festa da Comunidade', data: '0106', descricao: 'Festa com música e comidas típicas. Todos convidados!' },
])

function formatarData(dataStr) {
  const dia = dataStr.substring(0, 2)
  const mes = dataStr.substring(2, 4)
  return `${dia}/${mes}`
}

// Computed avisos futuros
const avisosFiltrados = computed(() => {
  const hoje = new Date()
  hoje.setHours(0, 0, 0, 0)
  return avisos.value.filter((aviso) => {
    const dia = aviso.data.substring(0, 2)
    const mes = aviso.data.substring(2, 4)
    const dataAviso = new Date(`${new Date().getFullYear()}-${mes}-${dia}`)
    dataAviso.setHours(0, 0, 0, 0)
    return dataAviso >= hoje
  })
})

// Toggle descrição do aviso
const avisoAberto = ref(null)
function toggleDescricao(id) {
  avisoAberto.value = avisoAberto.value === id ? null : id
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
  if (chatBox.value) chatBox.value.scrollTop = chatBox.value.scrollHeight
}

// Moradores
const moradores = ref([
  { id: 1, nome: 'Thayná', idade: 21, avatar: icon, aniversario: '07' },
  { id: 2, nome: 'Anna', idade: 22, avatar: icon, aniversario: '07' },
  { id: 3, nome: 'Julia', idade: 20, avatar: icon, aniversario: '07' },
  { id: 4, nome: 'William', idade: 25, avatar: icon, aniversario: '08' },
])

// Aniversariantes do mês
const aniversariantesMes = computed(() => {
  const mesAtual = String(new Date().getMonth() + 1).padStart(2, '0')
  return moradores.value.filter((m) => String(m.aniversario).padStart(2, '0') === mesAtual)
})
</script>

<template>
  <main>
    <section class="main">
      <div class="main-content">
        <!-- Avisos -->
        <section class="avisos">
          <h2>Avisos</h2>
          <p class="p1">Fique por dentro dos avisos e interaja.</p>
          <div class="avisos-grid">
            <div v-for="aviso in avisosFiltrados" :key="aviso.id" class="aviso-card">
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
          <section v-if="aniversariantesMes.length" class="aniversariantes">
            <h2>Aniversariantes do mês</h2>
            <div v-for="morador in aniversariantesMes" :key="morador.id" class="aniversariante-card">
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
    </section>
  </main>
</template>

<style scoped>
.main-content {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 20px;
  padding: 20px;
}
.linha-inferior {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
}
.chat {
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: 300px;
}
.chat-box {
  background: #fff;
  flex: 1;
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
}

/* Avisos */
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
  padding: 20px;
  font-size: 0.95rem;
  font-weight: 500;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  position: relative;
}
.ver-mais {
  margin-top: 10px;
  padding: 5px 10px;
  border-radius: 6px;
  border: none;
  background-color: #7c0a02;
  color: white;
  cursor: pointer;
}
.ver-mais:hover {
  background-color: #5e0700;
}

/* Aniversariantes */
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
  position: relative;
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
.aniversariante-card img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-bottom: 10px;
  border: 3px solid white;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
}
.aniversariante-card .nome {
  font-size: 16px;
  font-weight: bold;
}
.aniversariante-card .idade {
  font-size: 14px;
  color: #555;
}
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
  object-fit: contain;
}
</style>