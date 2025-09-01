<script setup>
import { useRoute } from 'vue-router'

import SideBarComponent from '@/components/SideBarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/SearchComponent.vue';

const route = useRoute()
</script>
<template>
    <template v-if="route.meta.layout === 'blank'">
      <RouterView />
    </template>
    <div class="content" v-else>
      <header class="header">
      <HeaderComponent />
      </header>

      <div class="sidebar">
          <SideBarComponent />
      </div>

      <main class="conteudo">
          <RouterView />
      </main>

      <footer class="footer">
        <FooterComponent />
      </footer>
    </div>  
</template>

<style scoped>

.content {
  display: grid;
  max-width: 100%;
  min-height: 100vh;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 65vh auto 28vh;
  grid-template-areas:
    'sidebar header'
    'sidebar main'
    'footer footer';
  margin: 0 auto;
  box-sizing: border-box
}

.header {
  grid-area: header;
  height: 80px;
  background-color: white;
}

#app {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden; /* apenas o conteúdo rola */
}

/* Sidebar fixo */
.sidebar {
  grid-area: sidebar;
  background: linear-gradient(to bottom, rgba(134, 39, 39, 0.829) 2%, #6F0A0C 20%);
  color: white;
  border-radius: 10px;
  /* width: 250px; */
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 220px;
  background: linear-gradient(to bottom, rgba(134, 39, 39, 0.9), #6F0A0C);
  border-radius: 20px;
  padding: 2rem 1rem;
  z-index: 2;
}

/* Container do conteúdo ao lado do sidebar */
.main-container {
  margin-left: 240px; /* espaço para sidebar */
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* garante que o footer fique no final se conteúdo curto */
}

/* Conteúdo rolável */
.conteudo {
  grid-area: main;
  align-self: top;
  padding-bottom: 30px; /* ajusta conforme a altura real do seu footer */
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
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 12px;
}
</style>
