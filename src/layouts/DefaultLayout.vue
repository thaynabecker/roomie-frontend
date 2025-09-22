<template>
  <div class="layout">
    <!-- Sidebar fixa -->
    <aside class="sidebar">
      <SideBarComponent />
    </aside>

       <!-- Sidebar Mobile -->
     <div v-if="showSidebar" class="sidebar-mobile">
       <SideBarComponent />
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

import SideBarComponent from "@/components/SideBarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import SearchComponent from "@/components/SearchComponent.vue";
import ProfileComponent from "@/components/ProfileComponent.vue";

const user = {
  name: "Amanda Santos",
  photoUrl: "/assets/img/your-photo.jpg",
};

const showSidebar = ref(true) // controla a sidebar
function toggleSidebar() {
 showSidebar.value = !showSidebar.value
}

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

/*Sibar mobile inicialmente escondida */
.sidebar-mobile {
  display: none;
}

.header span.mdi-menu {
  display: none;
  font-size: 6vw;
  padding-right: 3vw;
}

/* Wrapper do conteúdo */
.content-wrapper {
  flex: 1;
  margin-left: 220px; /* espaço da sidebar */
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
}

/* Header */
.header {
  height: 80px;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 0 20px;
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
      width: 0px;

  }
  .header span.mdi-menu {
    display: block;
  }
  .sidebar-mobile {
   display: block;
   position: absolute;
   top: 10;
   left: 0;
  }
  .sidebar-mobile span.mdi-window-close {
   font-size: 30px;
   margin: 1rem;
   cursor: pointer;
   color: rgb(255, 255, 255);
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

 .content-wrapper {
  flex: 1;
  margin-left: 0px; /* espaço da sidebar */
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
}
}
</style>
