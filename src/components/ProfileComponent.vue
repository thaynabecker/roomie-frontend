<template>
    <router-link to="/perfil" class="profile-info">
      <img :src="photoUrl" alt="Profile" class="profile-photo" />
      <div class="profile-details">
        <span class="profile-name">{{ name }}</span>
        <span class="profile-role">{{ role }}</span>
      </div>
    </router-link>
  </template>
  
  <script setup>
  defineProps({
    name: String,
    role: String,
    photoUrl: String
  })
  </script>
  
  <style scoped>
  .profile-info {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-right: 40px;
    cursor: pointer; /* mousezinho */
    text-decoration: none; /* tira sublinhado do router-link */
    color: inherit; /* mantém a cor do texto normal */
  }
  .profile-info:hover {
    opacity: 0.8; /* feedback visual */
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
  