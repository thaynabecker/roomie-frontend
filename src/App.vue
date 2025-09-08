<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'

import SideBarComponent from '@/components/SideBarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/SearchComponent.vue';
import ProfileComponent from '@/components/ProfileComponent.vue';

const route = useRoute()
const showSidebar = ref(false) // controla a sidebar

function toggleSidebar() {
  showSidebar.value = !showSidebar.value
}

const user = {
  name: 'Amanda Santos',
  role: 'admin',
  photoUrl: '/assets/img/your-photo.jpg'
}
</script>

<template>
  <template v-if="route.meta.layout === 'blank'">
    <RouterView />
  </template>

  <div class="content" v-else>
    <!-- Header -->
    <header class="header">
      <span class="mdi mdi-menu" @click="toggleSidebar"></span>
      <HeaderComponent />
      <div class="header-bar">
        <div class="header-left">
          <SearchComponent />
        </div>
        <div class="header-right">
          <ProfileComponent
            :name="user.name"
            :role="user.role"
            :photo-url="user.photoUrl"
          />
        </div>
      </div>

      <!-- Sidebar Mobile -->
      <div
        class="sidebar-mobile"
        :class="{ 'sidebar-open': showSidebar }"
      >
        <span class="mdi mdi-window-close" @click="toggleSidebar"></span>
        <SideBarComponent />
      </div>
    </header>

    <!-- Sidebar Desktop -->
    <div class="sidebar">
      <SideBarComponent />
    </div>

    <!-- Main Content -->
    <main class="conteudo">
      <RouterView />
    </main>

    <!-- Footer -->
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
  box-sizing: border-box;
}

.header {
  grid-area: header;
  height: 80px;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.header span.mdi-menu {
  font-size: 30px;
  margin: 0 20px;
  cursor: pointer;
  color: #601014;
  display: none; /* só aparece no mobile */
}

.header-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
}

.header-left, .header-right {
  display: flex;
  align-items: center;
  flex: 1;
}

.header-left { margin-left: 20px; }
.header-right { justify-content: flex-end; }

/* Sidebar Desktop */
.sidebar {
  grid-area: sidebar;
  width: 250px;
  background: linear-gradient(to bottom, rgba(134,39,39,0.83) 2%, #6F0A0C 20%);
  color: white;
  border-radius: 10px;
  height: 100vh;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
}

/* Sidebar Mobile */
.sidebar-mobile {
  display: none;
}

.conteudo {
  grid-area: main;
  padding-bottom: 30px;
}

.footer {
  grid-area: footer;
  background-color: #601014;
  color: white;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
  text-align: center;
}

/* Mobile Responsivo */
@media (max-width: 768px) {
  .header span.mdi-menu {
    display: block;
  }
  .sidebar {
    display: none;
  }
  .sidebar-mobile {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 70vw;
    border-radius: 0 0 20px 0;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
    background: linear-gradient(to bottom, rgba(134,39,39,0.83) 2%, #6F0A0C 20%);
    z-index: 1000;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
  }
  .sidebar-mobile span.mdi-window-close {
    font-size: 30px;
    margin: 1rem;
    cursor: pointer;
    color: white;
  }
  .sidebar-mobile {
    padding: 2rem 2rem;
  }
  .sidebar-mobile.sidebar-open {
    transform: translateX(0);
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