<template>
  <div class="layout">
    <!-- Sidebar fixa -->
    <aside class="sidebar">
      <SideBarComponent />
    </aside>

    <!-- Wrapper do conteúdo -->
    <div class="content-wrapper">
      <!-- Header com busca e perfil -->
      <header class="header">
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
import SideBarComponent from "@/components/SideBarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import SearchComponent from "@/components/SearchComponent.vue";
import ProfileComponent from "@/components/ProfileComponent.vue";

const user = {
  name: "Amanda Santos",
  role: "admin",
  photoUrl: "/assets/img/your-photo.jpg",
};
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
</style>
