<script setup>
import SideBar from './components/SideBar.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import MoradoresComponent from '@/components/MoradoresComponent.vue';
</script>

<template>
  <SideBar />
  <MoradoresComponent />
  <footer>
  <FooterComponent />
  </footer>
</template>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>
