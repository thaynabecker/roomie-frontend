<script setup>
import { ref } from 'vue'
import icon from '@/assets/img/icon.png'

// Usuário logado
const userLogado = ref({ nome: 'Amanda Santos', role: 'morador' })

// Avisos (sempre visíveis)
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

// Moradores (lista sempre visível)
const moradores = ref([
  { id: 1, nome: 'Amanda', idade: 21, avatar: icon, aniversario: '07' },
])
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
          <section class="aniversariantes">
            <h2>Aniversariantes do mês</h2>
            <div v-for="morador in moradores" :key="morador.id" class="aniversariante-card">
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
  flex: 1;
  overflow-y: auto;
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 12px;
  border: 1px solid #eee;
}
.message {
  margin-bottom: 8px;
  font-size: 0.95rem;
}
.message strong {
  color: #8b0f18;
}
.chat-input {
  display: flex;
}
.chat-input input {
  flex: 1;
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
  font-weight: bold;
}
.aniversariante-card .idade {
  font-size: 14px;
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

</style>