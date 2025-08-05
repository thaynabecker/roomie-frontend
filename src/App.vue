<script setup>
import SideBar from './components/SideBar.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import MoradoresComponent from '@/components/MoradoresComponent.vue';
</script>

<template>
  <div class="page-container">
    <div class="content">
      <SideBar />
      <MoradoresComponent />
    </div>
    <footer>
      <FooterComponent />
    </footer>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* faz a altura mínima da página ocupar a tela toda */
}

.content {
  flex: 1; /* empurra o footer para o fim da tela quando o conteúdo é pouco */
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>
