<script setup>
import icon from '@/assets/img/icon.png'
//import SideBar from '@/components/SideBar.vue'
//import FooterComponent from '@/components/FooterComponent.vue'

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
.main {
    display: flex;
    text-align: center;
}
.perfil {
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #000;
}
.textos {
    margin: 0 0 20px 0;
}
.textos h1 {
    font-size: xx-large;
    font-weight: bold;
}
.textos p {
    font-size: 14px;
    color: #666;
}
.conteudo {
    display: flex;
    align-items: center;
    gap: 60px;
}
.foto-container img {
    width: 300px;
    height: 300px;
    padding: 16px;
}
.infos {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.campo {
    font-size: 20px;
    background-color: #7A0C0C;
    color: white;
    padding: 12px 20px;
    border-radius: 12px;
    font-weight: bold;
    min-width: 400px;
}
</style>
