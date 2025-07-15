<script setup>
import SideBar from './components/SideBar.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import MainPage from './components/MainPage.vue'
import CadastroMorador from './views/CadastroMoradorView.vue';
</script>

<template>
  <SideBar />
  <FooterComponent />
  <MainPage /> 
  <CadastroMorador />
</template>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>