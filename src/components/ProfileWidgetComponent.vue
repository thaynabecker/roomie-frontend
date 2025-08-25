<template>
  <div class="profile-widget">
    <img :src="user.fotoPerfil" alt="Foto de perfil" class="profile-pic" />
    <span class="username">{{ user.nome }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const user = ref({
  nome: 'Amanda Eduarda',
  fotoPerfil: '/placeholder-user.png'
})
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