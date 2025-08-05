<script setup>
import MainView from './views/MainView.vue';
import CadastroMorador from './views/CadastroMoradorView.vue';
import CadastroAdministradorView from './views/CadastroAdministradorView.vue';
import SideBarComponent from '@/components/SideBarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue';
import InitialView from './views/InitialView.vue';
</script>

<template>
    <header class="header">
      <HeaderComponent />
    </header>

    <div class="sidebar">
        <SideBarComponent />
    </div>

    <main class="conteudo">
        <InitialView />
    </main>
  <MainView /> 
  <CadastroMorador />
  <CadastroAdministradorView />
     <footer class="footer">
      <FooterComponent />
    </footer>
</template>

<style scoped>
.header {
  grid-area: header;
  height: 80px;
  background-color: white;
}
.sidebar {
  grid-area: sidebar;
  width: 250px;
  /* background-color: #7a0f13; */
  background: linear-gradient(to bottom, rgba(134, 39, 39, 0.829) 2%, #6F0A0C 20%);
  color: white;
  border-radius: 10px;
  /* width: 250px; */
  min-height: 100%;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border-radius: 20px 0 0 20px; */
  font-family: "Poppins", sans-serif;

}

.conteudo {
  grid-area: main;
  align-self: top;
  padding-bottom: 180px; /* ajusta conforme a altura real do seu footer */
  /* display: flex; */
  /* padding: 10px; */
  /* overflow-y: auto; */
  /* background-color: #601014; */
  /* flex: 1; */
  /* overflow: hidden; */
}

.footer {
  grid-area: footer;
  background-color: #601014;
  color: white;
  padding: 20px;
  margin-top:20px;
  border-radius: 10px;
  text-align: center;
}
</style>
