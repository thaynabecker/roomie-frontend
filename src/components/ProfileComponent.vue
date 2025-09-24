<template>
  <router-link to="/perfil" class="profile-info">
    <img :src="icon" alt="Profile" class="profile-photo" />
    <div class="profile-details">
      <span class="profile-name">{{ name }}</span>
      <span class="profile-role">{{ role }}</span>
    </div>
  </router-link>
</template>

<script setup>
import icon from '@/assets/img/icon.png'

defineProps({
  name: String,
  role: String
})
</script>

<style scoped>
.profile-info {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-right: 40px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  font-family: "Poppins", sans-serif;
  transition: opacity 0.3s ease;
}
.profile-info:hover {
  opacity: 0.8;
}

.profile-photo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-details {
  display: flex;
  flex-direction: column;
}

.profile-name {
  font-weight: 600;
  font-size: 16px;
}

.profile-role {
  font-size: 13px;
  color: #888;
  margin-top: 2px;
}

/* 🔽 RESPONSIVO */
@media (max-width: 900px) {
  .profile-info {
    gap: 8px;
    margin-right: 20px;
  }
  .profile-photo {
    width: 32px;
    height: 32px;
  }
  .profile-name {
    font-size: 14px;
  }
  .profile-role {
    font-size: 11px;
  }
}

/* 🔽 Muito pequenas telas (ex: celular) */
@media (max-width: 500px) {
  .profile-info {
    gap: 6px;
    margin-right: 10px;
  }
  .profile-photo {
    width: 28px;
    height: 28px;
  }
  /* Esconde os detalhes do perfil no celular */
  .profile-details {
    display: none;
  }
}
</style>
