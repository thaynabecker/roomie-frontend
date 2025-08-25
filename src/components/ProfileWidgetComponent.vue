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
.profile-widget {
  position: fixed; /* fixo na tela */
  top: 15px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: white;
  padding: 10px 15px;
  border-radius: 12px; /* quadradinho com bordas arredondadas */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* sombra suave */
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  z-index: 1100; /* fica acima do sidebar e do conteúdo */
  font-family: 'Poppins', sans-serif;
  cursor: pointer; /* 👈 agora o mouse muda */
  transition: background 0.2s;
}

.sidebar-profile:hover {
  background: #f8f8f8; /* 👈 só um efeito hover bonitinho */
}

.profile-widget:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.profile-pic {
  width: 40px;
  height: 40px;
  border-radius: 50%; /* imagem redonda */
  object-fit: cover;
}

.username {
  font-size: 14px;
  font-weight: 600;
  color: #333;
}
</style>
