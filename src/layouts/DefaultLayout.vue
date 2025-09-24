<template>
  <div class="layout">
    <!-- Sidebar fixa -->
    <aside class="sidebar">
      <SideBarAdminComponent v-if="user.role === 'admin'" />
      <SideBarComponent v-else />
    </aside>

    <!-- Sidebar Mobile -->
    <div :class="['sidebar-mobile', { show: showSidebar }]">
      <span class="mdi mdi-window-close" @click="toggleSidebar"></span>
      <SideBarAdminComponent v-if="user.role === 'admin'" @toggle="toggleSidebar" />
      <SideBarComponent v-else @toggle="toggleSidebar" />
    </div>

    <!-- Wrapper do conteúdo -->
    <div class="content-wrapper">
      <!-- Header com busca e perfil -->
      <header class="header">
        <span class="mdi mdi-menu" @click="toggleSidebar"></span>
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
      </header>

      <!-- Conteúdo central -->
      <main class="main-content">
        <router-view />
      </main>

      <!-- Footer -->
      <FooterComponent />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import SideBarComponent from "@/components/SideBarComponent.vue"; // morador
import SideBarAdminComponent from "@/components/SideBarAdminComponent.vue"; // admin
import FooterComponent from "@/components/FooterComponent.vue";
import SearchComponent from "@/components/SearchComponent.vue";
import ProfileComponent from "@/components/ProfileComponent.vue";

// Pega dados do usuário do localStorage ou defaults
const user = ref({
  name: localStorage.getItem("username") || "Amanda Santos",
  role: localStorage.getItem("role") || "morador",
  photoUrl: "/assets/img/your-photo.jpg",
});

const showSidebar = ref(false); // controla sidebar mobile

function toggleSidebar() {
  showSidebar.value = !showSidebar.value;
}
</script>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
  position: relative;
}

/* Sidebar fixa */
.sidebar {
  width: 220px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 800;
}

/* Sidebar mobile */
.sidebar-mobile {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 220px;
  height: 100vh;
  background-color: #fff;
  z-index: 1000;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.sidebar-mobile.show {
  transform: translateX(0);
}

/* Header */
.header {
  height: 80px;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.header span.mdi-menu {
  display: none;
  font-size: 6vw;
  padding-right: 3vw;
}

.header-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
}

.header-left {
  display: flex;
  align-items: center;
  flex: 1;
}

.header-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
}

/* Wrapper do conteúdo */
.content-wrapper {
  flex: 1;
  margin-left: 220px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
}

/* Conteúdo */
.main-content {
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
}

/* Mobile Responsivo */
@media (max-width: 900px) {
  .sidebar {
    display: none;
  }

  .header span.mdi-menu {
    display: block;
    cursor: pointer;
  }

  .content-wrapper {
    margin-left: 0;
  }
}
</style>