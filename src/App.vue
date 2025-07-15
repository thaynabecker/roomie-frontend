<script setup>
import SideBar from './components/SideBar.vue'
import MainPage from './components/MainPage.vue'
import CadastroMorador from './views/CadastroMoradorView.vue';
import CadastroAdministradorView from './views/CadastroAdministradorView.vue';
</script>

<template>
  <SideBar />
  <MainPage /> 
  <CadastroMorador />
  <CadastroAdministradorView />
</template>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>