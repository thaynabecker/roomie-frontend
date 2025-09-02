<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'

import SideBarComponent from '@/components/SideBarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/SearchComponent.vue';

const route = useRoute()
const showSidebar = ref(false) // controla a sidebar

function toggleSidebar() {
  showSidebar.value = !showSidebar.value
}
</script>


<template>
    <template v-if="route.meta.layout === 'blank'">
      <RouterView />
    </template>
    <div class="content" v-else>
      <header class="header">
        <span class="mdi mdi-menu" @click="toggleSidebar"></span>
        <HeaderComponent />

          <div class="sidebar-mobile">
            <span class="mdi mdi-window-close"></span>
            <SideBarComponent />
          </div>
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
  display: flex;
  flex-direction: row;
  align-items: center;

  & span {
    font-size: 30px;
    margin: 0 20px;
    cursor: pointer;
    color: #601014;
    display: none;
  }
}
.header .sidebar-mobile {
  display: none;
}

.sidebar {
  grid-area: sidebar;
  width: 250px;
  /* background-color: #7a0f13; */
  background: linear-gradient(to bottom, rgba(134, 39, 39, 0.829) 2%, #6F0A0C 20%);
  color: white;
  border-radius: 10px;
  /* width: 250px; */
  height: 100vh;
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
  padding: 20px;
  margin-top:20px;
  border-radius: 10px;
  text-align: center;
}

@media (max-width: 768px) {

  .header .sidebar-mobile {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 50vw;
    border-radius: 0 0 20px 0;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    /*transform: translateX(-100%); /* escondida */
    z-index: 1000;
    transition: transform 0.3s ease-in-out;
    background: linear-gradient(to bottom, rgba(134, 39, 39, 0.829) 2%, #6F0A0C 20%);
  }
  .sidebar {
    display: none;
  }

  .header span {
    display: block;
    color: white;
    padding-top: 2vw;
  }

  .content {
    grid-template-areas:
      'header'
      'main'
      'footer';
    grid-template-columns: 1fr;
  }
}
</style>
