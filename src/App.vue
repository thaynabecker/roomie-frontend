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
    <FooterComponent />
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  display: flex;  /* deixa os filhos lado a lado */
  height: 100%;   /* para ocupar altura total disponível */
}
</style>

