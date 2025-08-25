<template>
  <div class="sidebar-profile" @click="goToPerfil">
    <img class="avatar" :src="avatarUrl" alt="Avatar" />
    <div class="user-info">
      <strong class="user-name">{{ userName }}</strong>
      <span class="user-time">{{ userTime }}</span>
    </div>
    <button class="notification-btn" aria-label="Notifications" @click.stop="abrirNotificacoes">
      <svg xmlns="http://www.w3.org/2000/svg" class="bell-icon" fill="currentColor" viewBox="0 0 24 24" stroke="none">
        <path d="M12 2a6 6 0 00-6 6v5H5a1 1 0 000 2h14a1 1 0 000-2h-1V8a6 6 0 00-6-6zm0 18a2.5 2.5 0 002.5-2.5h-5A2.5 2.5 0 0012 20z" />
      </svg>
      <span class="notification-dot"></span>
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const avatarUrl = 'https://i.pravatar.cc/40?img=5'
const userName = 'Amanda Eduarda'
const userTime = '1 mês'

const goToPerfil = () => {
  router.push('/perfil')
}

const abrirNotificacoes = () => {
  console.log('Abrir notificações 🔔')
}
</script>

<style scoped>
.sidebar-profile {
  display: flex;
  align-items: center;
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgb(0 0 0 / 0.05);
  max-width: 280px;
  gap: 12px;
  font-family: 'Poppins', sans-serif;
  cursor: pointer; /* 👈 agora o mouse muda */
  transition: background 0.2s;
}

.sidebar-profile:hover {
  background: #f8f8f8; /* 👈 só um efeito hover bonitinho */
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.user-info {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.user-name {
  font-weight: 700;
  font-size: 14px;
  color: #1a1a1a;
}

.user-time {
  font-size: 12px;
  color: #666;
  margin-top: 2px;
}

.notification-btn {
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: #000;
}

.bell-icon {
  width: 20px;
  height: 20px;
}

.notification-dot {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 8px;
  height: 8px;
  background: #ff3b30;
  border-radius: 50%;
  border: 2px solid white;
}
</style>
