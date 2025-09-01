<script setup>
import { ref } from 'vue'

const mostrarOpcoes = ref(false)

const toggleOpcoes = () => {
  mostrarOpcoes.value = !mostrarOpcoes.value
}

const selecionarOpcao = (opcao) => {
  
  // aqui tu pode usar router.push() pra redirecionar
  // ex: router.push('/cadastro-adm') ou router.push('/cadastro-morador')
}
</script>

<template>
  <div class="pagina">
    <div class="conteudo">
      <h1>O espaço digital da sua república.</h1>
      <p>Organização começa por aqui.</p>

      <div class="acoes">
        <button class="botao" @click="toggleOpcoes">Cadastre-se</button>
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
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100lvw;
  background: linear-gradient(to bottom, #6f0a0c, #400507);
  color: white;
  font-family: Poppins, sans-serif;
  box-sizing: border-box
}

.conteudo {
  text-align: center;
  max-width: 600px;
}

h1 {
  font-size: 1.8rem;
  font-weight: bold;
}

p {
  margin-bottom: 2rem;
}

.acoes {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.botao {
  background: white;
  color: #6f0a0c;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.botao:hover {
  background: #d9d9d9;
}

.caixa-opcoes {
  background: white;
  color: #6f0a0c;
  border-radius: 12px;
  padding: 1.5rem;
  width: 280px;
  margin: 0 auto;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.2);
}

.caixa-opcoes h3 {
  margin-bottom: 1rem;
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
  transition: 0.3s;
}

.opcao:hover {
  background: #8c1215;
}
</style>
