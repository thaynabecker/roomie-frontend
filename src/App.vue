<script setup>
import SideBar from './components/SideBar.vue';
import MainView from './views/MainView.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import CadastroMoradorView from './views/CadastroMoradorView.vue';
import ProfileView from './views/ProfileView.vue';
</script>

<template>
  <SideBar />
  <MainView /> 
  <CadastroMoradorView />
  <ProfileView />
  <FooterComponent />
</template>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>

