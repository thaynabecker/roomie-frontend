<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import logo from '@/assets/img/ROOMIE-LOGO.png'

const router = useRouter() // inicializa o router
const mostrarOpcoes = ref(false)

const toggleOpcoes = () => {
  mostrarOpcoes.value = !mostrarOpcoes.value
}

const selecionarOpcao = (opcao) => {
  console.log("Selecionou:", opcao)

  // Redireciona para a rota correta
  if (opcao === 'Administrador') {
    router.push('/cadastroadministrador')
  } else if (opcao === 'Morador') {
    router.push('/cadastromorador')
  }
}

</script>

<template>
  <div class="pagina">
    <!-- Header com logo e menu -->
    <header class="topo">
      <div class="logo">
        <img :src="logo" alt="logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>

    <!-- Conteúdo central -->
    <div class="conteudo">
      <h1>O espaço digital da sua república.</h1>
      <p>Organização começa por aqui.</p>

      <h2 class="chamada">Entre Agora!</h2>

      <div class="acoes">
        <button class="botao destaque" @click="toggleOpcoes">Cadastre-se</button>
        <button class="botao">Acessar</button>
      </div>

      <!-- aparece só quando clica -->
      <div v-if="mostrarOpcoes" class="caixa-opcoes">
        <h3>Selecione uma opção:</h3>
        <button class="opcao" @click="selecionarOpcao('Administrador')">Administrador</button>
        <button class="opcao" @click="selecionarOpcao('Morador')">Morador</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pagina {
  min-height: 100vh;
  width: 100%;
  color: white;
  font-family: Poppins, sans-serif;
  background-color: #6f0a0c;
  background-image:
    radial-gradient(circle at top left, rgba(99, 4, 28, 0.95) 0%, rgba(68, 5, 21, 0.7) 50%, transparent 85%),
    linear-gradient(1deg, rgba(189, 0, 0, 0.3) 2.56%, rgba(104, 10, 11, 0.3) 56.41%),
    radial-gradient(118.79% 88.64% at 100% 0%, rgba(111, 10, 12, 0) 0%, #841416 91.44%),
    url('@/assets/img/background-image.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
}

/* HEADER */
.topo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2rem;
  flex-wrap: wrap; /* permite quebrar no mobile */
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
  flex-wrap: wrap;
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

/* CONTEÚDO CENTRAL */
.conteudo {
  margin: auto;
  max-width: 700px;
  padding: 0 1.5rem;
  text-align: center;
}

.conteudo h1 {
  font-size: 2.3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.4);
  line-height: 1.3;
  text-align: center;
}

.conteudo p {
  margin-bottom: 2.5rem;
  font-size: 1.1rem;
  opacity: 0.9;
  text-align: center;
}

.chamada {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-weight: 600;
  text-align: center;
}

/* BOTÕES */
.acoes {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.botao {
  background: white;
  color: #6f0a0c;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 30px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
  min-width: 250px;
  font-size: 1.05rem;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
}

.botao:hover {
  background: #d9d9d9;
}

.botao.destaque {
  font-size: 1.2rem;
}

/* CAIXA OPÇÕES */
.caixa-opcoes {
  background: white;
  color: #6f0a0c;
  border-radius: 15px;
  padding: 1.5rem;
  width: 100%;
  max-width: 300px;
  margin: 2rem auto 0;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.25);
}

.caixa-opcoes h3 {
  margin-bottom: 1rem;
  font-weight: 600;
}

.opcao {
  display: block;
  width: 100%;
  margin: 0.5rem 0;
  padding: 0.9rem;
  border: none;
  border-radius: 20px;
  background: #6f0a0c;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.opcao:hover {
  background: #8c1215;
}

/* RESPONSIVIDADE */
@media screen and (min-width: 1024px) {
  .conteudo h1 {
    text-align: left;
    font-size: 2.8rem;
  }

  .conteudo p {
    text-align: left;
    font-size: 1.2rem;
  }

  nav ul {
    gap: 3rem;
  }

  .botao {
    min-width: 280px;
    font-size: 1.1rem;
  }
}

@media screen and (max-width: 768px) {
  .topo {
    flex-direction: column;
    gap: 1rem;
  }

  nav ul {
    justify-content: center;
  }

  .conteudo h1 {
    font-size: 2rem;
  }

  .conteudo p {
    font-size: 1rem;
  }

  .acoes {
    width: 100%;
  }

  .botao {
    width: 100%;
    max-width: 320px;
    font-size: 1rem;
  }
}

@media screen and (max-width: 480px) {
  .conteudo h1 {
    font-size: 1.6rem;
  }

  .conteudo p {
    font-size: 0.9rem;
  }

  .chamada {
    font-size: 1.1rem;
  }

  .botao {
    font-size: 0.95rem;
    padding: 0.9rem 1.8rem;
  }
}
</style>
