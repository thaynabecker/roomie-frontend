<script setup>
import icon from '@/assets/img/icon.png'
import SideBar from '@/components/SideBar.vue'
import FooterComponent from '@/components/FooterComponent.vue'

// Simulando dados do banco:
const usuario = {
  nome: 'Amanda Eduarda',
  nascimento: '12/03/2000',
  email: 'amanda@email.com',
  entrada: '05/07/2024'
}
</script>

<template>
  <div class="perfil">
  <main class="main">
    <div>
        <SideBar />
    </div>
    <div>
        <div class="textos">
      <h1>Meu perfil</h1>
      <p>Seu perfil com suas informações</p>
    </div>

    <div class="conteudo">
      <div class="foto-container">
        <img :src="icon" alt="Ícone de usuário" />
      </div>

      <div class="infos">
        <div class="campo">Nome Completo: {{ usuario.nome }}</div>
        <div class="campo">Data de Nascimento: {{ usuario.nascimento }}</div>
        <div class="campo">Email: {{ usuario.email }}</div>
        <div class="campo">Data de Entrada: {{ usuario.entrada }}</div>
      </div>
    </div>
    </div>
  </main>
  </div>
  <footer>
  <FooterComponent />
  </footer>
</template>

<style scoped>
html {
    font-family: 'Poppins', sans-serif;;
}
.main {
    display: flex;
}
.perfil {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #000;
}
.textos {
  margin-bottom: 20px;
}
.textos h1 {
  font-size: 28px;
  margin: 0;
}
.textos p {
  font-size: 14px;
  color: #666;
  margin-top: 4px;
}
.conteudo {
  display: flex;
  align-items: center;
  gap: 60px;
}
.foto-container img {
  width: 180px;
  height: 180px;
  border: 5px solid black;
  border-radius: 50%;
  padding: 16px;
}
.infos {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.campo {
  background-color: #7A0C0C;
  color: white;
  padding: 12px 20px;
  border-radius: 12px;
  font-weight: bold;
  min-width: 280px;
}
</style>
