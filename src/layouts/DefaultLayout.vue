<template>
  <div class="layout">
    <!-- Sidebar à esquerda -->
    <aside :class="['sidebar', { closed: !sidebarAberta }]">
      <SideBarComponent />
    </aside>

    <!-- Conteúdo central (sempre ocupa o mesmo espaço) -->
    <main class="main-content">
      <router-view />
    </main>

    <!-- Footer overlay -->
    <FooterComponent :mostrar="footerVisivel" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import SideBarComponent from "@/components/SideBarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

const sidebarAberta = ref(true);
const footerVisivel = ref(false);

// Controla sidebar baseado no footer
const handleScroll = () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.scrollHeight;

  if (scrollY + windowHeight >= documentHeight - 50) {
    footerVisivel.value = true;
    sidebarAberta.value = false; // fecha sidebar quando footer aparece
  } else {
    footerVisivel.value = false;
    sidebarAberta.value = true; // abre sidebar quando footer some
  }
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
  position: relative;
}

/* Sidebar */
.sidebar {
  width: 220px;          /* largura fixa */
  height: 100vh;         /* altura total da tela */
  color: white;
  transition: transform 0.3s ease;
  position: fixed;       /* fixo para não empurrar conteúdo */
  top: 0;
  left: 0;
  z-index: 800;
}
.sidebar.closed {
  transform: translateX(-100%); /* sai para a esquerda */
}

/* Conteúdo central */
.main-content {
  flex: 1;
  margin-left: 220px; /* sempre com espaço para a sidebar */
  padding: 20px;
}
</style>
