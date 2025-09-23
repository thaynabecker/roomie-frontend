<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import logo from '@/assets/img/ROOMIE-LOGO.png'

const router = useRouter()
const mostrarCadastroOpcoes = ref(false)

const selecionarCadastro = (opcao) => {
  if (opcao === 'Administrador') {
    router.push('/cadastroadministrador')
  } else if (opcao === 'Morador') {
    router.push('/cadastromorador')
  }
}

const acessar = () => {
  router.push('/login')
}
</script>

<template>
  <div class="pagina">
    <!-- Header -->
    <header class="topo">
      <div class="logo">
        <img :src="logo" alt="logo" />
      </div>
    </header>

    <!-- Conteúdo central -->
    <div class="conteudo">
      <h1>O espaço digital da sua república.</h1>
      <p>Organização começa por aqui.</p>

      <h2 class="chamada">Entre Agora!</h2>

      <div class="acoes">
        <button class="botao destaque" @click="mostrarCadastroOpcoes = !mostrarCadastroOpcoes">
          Cadastre-se
        </button>
        <button class="botao" @click="acessar">Acessar</button>

        <!-- Caixa de opções -->
        <transition name="fade-slide">
          <div v-if="mostrarCadastroOpcoes" class="caixa-opcoes">
            <h3>Selecione uma opção:</h3>
            <button class="opcao" @click="selecionarCadastro('Administrador')">Administrador</button>
            <button class="opcao" @click="selecionarCadastro('Morador')">Morador</button>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pagina {
  min-height: 100vh;
  width: 100vw;
  color: white;
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
  background-color: #6f0a0c;
  display: flex;
  flex-direction: column;
  background-image:
    radial-gradient(circle at top left, rgba(99, 4, 28, 0.95) 0%, rgba(68, 5, 21, 0.7) 50%, transparent 85%),
    linear-gradient(1deg, rgba(189, 0, 0, 0.3) 2.56%, rgba(104, 10, 11, 0.3) 56.41%),
    radial-gradient(118.79% 88.64% at 100% 0%, rgba(111, 10, 12, 0) 0%, #841416 91.44%),
    url('@/assets/img/background-image.png');
  background-size: cover, cover, cover, 65% auto;
  background-repeat: no-repeat;
  background-position: top left, center, center, right bottom;
}

/* Header */
.topo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2rem;
}

.logo img {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(0deg, #6F0A0C 80.26%, rgba(204, 22, 22, 0.00) 143.39%, #E2D4F7 143.39%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

nav ul {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li a {
  color: white;
  font-weight: 500;
  text-decoration: none;
  transition: 0.3s;
}

nav ul li a:hover {
  opacity: 0.8;
}

/* Conteúdo central */
.conteudo {
  margin: auto;
  max-width: 700px;
  text-align: center;
  position: relative; /* importante para posicionar a caixa */
}

.conteudo h1,
.conteudo p {
  text-align: left;
  margin-left: -40rem;
  margin-right: auto;
}

.conteudo h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.4);
}

.conteudo p {
  margin-bottom: 2.5rem;
  font-size: 1rem;
  opacity: 0.9;
}

.chamada {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-weight: 600;
  text-align: center;
}

/* Botões */
.acoes {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  position: relative; /* importante para .caixa-opcoes */
}

.botao {
  background: white;
  color: #6f0a0c;
  border: none;
  padding: 0.9rem 2rem;
  border-radius: 25px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 200px;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
  font-family: "Poppins", sans-serif;
  font-size: 1.1rem;
}

.botao:hover {
  background: #d9d9d9;
  transform: scale(1.08);
  box-shadow: 0px 8px 15px rgba(0,0,0,0.3);
}

.botao:active {
  transform: scale(0.95);
  box-shadow: 0px 4px 8px rgba(0,0,0,0.25);
}

/* Caixa de opções acima do botão */
.caixa-opcoes {
  position: absolute;
  bottom: 110%; /* aparece acima do botão */
  left: 50%;
  transform: translateX(-50%);
  background: white;
  color: #6f0a0c;
  border-radius: 15px;
  padding: 1.5rem;
  width: 280px;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.25);
  z-index: 10;
}

.caixa-opcoes h3 {
  margin-bottom: 1rem;
  font-weight: 600;
}

.opcao {
  display: block;
  width: 100%;
  margin: 0.5rem 0;
  padding: 0.8rem;
  border: none;
  border-radius: 20px;
  background: #6f0a0c;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: "Poppins", sans-serif;
}

.opcao:hover {
  background: #8c1215;
  transform: scale(1.08);
  box-shadow: 0px 8px 15px rgba(0,0,0,0.3);
}

.opcao:active {
  transform: scale(0.95);
  box-shadow: 0px 4px 8px rgba(0,0,0,0.25);
}

/* Animação fade + slide */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translate(-50%, 10px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translate(-50%, 10px);
}
</style>