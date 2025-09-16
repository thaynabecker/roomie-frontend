<template>
 <div class="layout">
   <!-- Sidebar à esquerda -->
   <aside class="sidebar">
     <SideBarComponent />
   </aside>


   <!-- Conteúdo central com footer abaixo -->
   <div class="content-wrapper">
     <main class="main-content">
       <router-view />
     </main>


     <!-- Footer sempre visível -->
     <FooterComponent />
   </div>
 </div>
</template>


<script setup>
import SideBarComponent from "@/components/SideBarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
</script>


<style scoped>
.layout {
 display: flex;
 min-height: 100vh;
 position: relative;
}


/* Sidebar */
.sidebar {
 width: 220px;
 height: calc(100vh - 9px);
 transition: transform 0.3s ease;
 position: fixed;
 top: 0;
 left: 0;
 z-index: 800;
}


/* Wrapper do conteúdo + footer */
.content-wrapper {
 flex: 1;
 margin-left: 220px; /* espaço pra sidebar */
 display: flex;
 flex-direction: column;
 min-height: 100vh;
  overflow-x: hidden; /* garante que nada vaze horizontalmente */
}


/* Conteúdo central */
.main-content {
 flex: 1; /* ocupa espaço restante */
 padding: 20px;
 box-sizing: border-box;
}
</style>


