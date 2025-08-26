<template>
  <div class="profile-info">
    <img :src="photoUrl" alt="Profile" class="profile-photo" />
    <div class="profile-details">
      <span class="profile-name">{{ name }}</span>
      <span class="profile-role">{{ role }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  role: String,
  photoUrl: String
})
</script>

<!-- Exemplo em App.vue ou HeaderComponent.vue -->
<!-- <template>
  <ProfileComponent
    :name="user.name"
    :role="user.role"
    :photo-url="user.photoUrl"
  />
</template> -->
<!--
<script setup>
import ProfileComponent from '@/components/ProfileComponent.vue'

// Exemplo: esses dados viriam do login/autenticação
const user = {
  name: 'Amanda Santos',
  role: 'admin', // ou 'morador'
  photoUrl: '/assets/img/your-photo.jpg'
}
</script> -->

<style scoped>
.profile-info {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-right: 40px; /* ajuste conforme necessário */
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
</style>
