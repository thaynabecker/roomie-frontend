<template>
  <div class="page-container">
    <SideBarView />

    <main class="main-content">
      <ProfileWidgetComponent class="profile-widget" />

      <section class="profile-section">
        <div class="profile-picture">
          <!-- Ícone -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="4" viewBox="0 0 24 24" class="profile-icon">
            <circle cx="12" cy="7" r="4" />
            <path d="M5.5 21a6.5 6.5 0 0113 0" />
          </svg>
        </div>

        <div class="profile-info">
          <div class="info-item">Nome Completo</div>
          <div class="info-item">Data de Nascimento</div>
          <div class="info-item">Email</div>
          <div class="info-item">Data de Entrada</div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import SideBarView from '@/components/SideBar.vue'
import ProfileWidgetComponent from '@/components/ProfileWidgetComponent.vue';
</script>

<style scoped>
.page-container {
  display: flex;
  height: 100vh;
  background: #121212;
  border-radius: 12px;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
}

.main-content {
  flex-grow: 1;
  background: #fff;
  border-radius: 0 12px 12px 0;
  padding: 2rem 3rem;
  display: flex;
  justify-content: center; /* centraliza horizontalmente */
  align-items: center; /* centraliza verticalmente */
  position: relative;
}


.profile-widget {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 10;
}

.profile-section {
  display: flex;
  gap: 6rem;
  align-items: center;
  justify-content: center;
  max-width: 900px;
  width: 100%;
}

.profile-picture {
  flex-shrink: 0;
}

.profile-icon {
  width: 220px;
  height: 220px;
  stroke: #000;
  border-radius: 50%;
}

.profile-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 400px;
}

.info-item {
  background-color: #700000;
  color: #fff;
  font-weight: 700;
  font-size: 22px;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  width: 100%;
  user-select: none;
}

</style>
