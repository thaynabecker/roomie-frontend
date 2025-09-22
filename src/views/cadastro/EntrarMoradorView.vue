<script setup>
import { useRouter } from 'vue-router'
import minilogo from '@/assets/img/minilogo.png'

const router = useRouter()

const selecionarOpcao = (opcao) => {
  console.log("Selecionou:", opcao)

  // Redireciona para a rota correta
  if (opcao === 'Voltar') {
    router.push('/')
  } else if (opcao === 'Acessar') {
    router.push('/iniciomorador')
  }
}
</script>

<template>
  <div class="background">
    <div class="logo-container">
      <img :src="minilogo" alt="logo" />
    </div>

    <h2 class="subtitulo">ENTRAR</h2>

    <section class="login">
      <div>
        <h3>Nome:</h3>
        <input type="text" />
        <h3>Data de Nascimento:</h3>
        <input type="date" />
        <h3>Email:</h3>
        <input type="text" />
        <h3>Senha:</h3>
        <input type="password" />
        <h3>Código da instituição/grupo:</h3>
        <input type="number" />
      </div>
      <div class="botoes">
        <button class="opcao" @click="selecionarOpcao('Voltar')">Voltar</button>
        <button class="opcao" @click="selecionarOpcao('Criar')">Criar</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.template {
    font-family: 'Poppins';
}
.background {
  background-color: #6f0a0c;
  position: relative;
}
.background {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image:
    radial-gradient(
      circle at top left,
      rgba(99, 4, 28, 0.95) 0%,
      rgba(68, 5, 21, 0.7) 50%,
      transparent 85%
    ),
    linear-gradient(1deg, rgba(189, 0, 0, 0.3) 2.56%, rgba(90, 15, 16, 0.3) 56.41%),
    radial-gradient(118.79% 88.64% at 100% 0%, rgba(111, 10, 12, 0) 0%, #841416 91.44%),
    url('@/assets/img/background-image.png');

  background-size:
    cover,
    cover,
    cover,
    65% auto;

  background-repeat: no-repeat;
  background-position:
    top left,
    center,
    center,
    right bottom;
}
.logo-container {
  position: absolute;
  top: 1rem;
  left: 1rem;
  margin: 1rem 0 0 1rem;
}

.logo-container img {
  width: 50px;
  height: 50px;
  border-radius: 16px;
  background: linear-gradient(0deg, #6F0A0C 80.26%, rgba(204, 22, 22, 0.00) 143.39%, #E2D4F7 143.39%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.titulo {
  color: white;
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 0.2rem;
  margin-top: -7rem;
  position: relative;
     text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
     font-family: "Poppins", sans-serif;
}

.titulo::after {
  content: '';
  position: absolute;
  bottom: 7px; /* distância da linha para o texto */
  left: 50%;
  transform: translateX(-50%);
  width: 110%;
  height: 2.5px; /* espessura da linha */
  background-color: white;
  opacity: 0.8;
}

.subtitulo {
  color: white;
  font-size: 1.5rem;
  margin: 3rem 0 1rem 0;
  font-weight: 500;
     text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
     font-family: "Poppins", sans-serif;
}

.login {
  background-color: #D9D9D9;
  border-radius: 20px;
  padding: 2rem 3rem;
  width: 95%;
  max-width: 800px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.login h3 {
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  color: #6F0A0C;
  font-weight: 500;
   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
   font-family: "Poppins", sans-serif;
}

.login input {
  width: 100%;
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
  outline: none;
  font-size: 1rem;
  background-color: #D9D9D9;
}

input[type="date"] {
  color: #979595;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 600;
}

.botoes {
  display: flex;
  margin-top: 1rem;
  justify-content: center;
  gap: 1rem;
}

.botoes button {
  padding: 0.6rem 3rem;
  border: none;
  border-radius: 25px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.2);
  font-family: "Poppins", sans-serif;
}

.botoes button:first-child {
  background-color: #D9D9D9;
  color: #6F0A0C;
}

.botoes button:last-child {
  background-color: #6f0a0c;
  color: #D9D9D9;
}

</style>