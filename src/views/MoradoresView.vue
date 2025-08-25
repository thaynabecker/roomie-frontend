<script setup>
import { ref, onMounted } from 'vue'
import icon from '@/assets/img/icon.png'

const moradores = ref([])
const administradores = ref([])

onMounted(() => {
  moradores.value = [
    { id: 1, nome: 'Morador 1', foto: icon },
    { id: 2, nome: 'Morador 2', foto: icon },
    { id: 3, nome: 'Morador 3', foto: icon },
    { id: 4, nome: 'Morador 4', foto: icon },
    { id: 5, nome: 'Morador 5', foto: icon },
    { id: 6, nome: 'Morador 6', foto: icon },
    { id: 7, nome: 'Morador 7', foto: icon },
    { id: 8, nome: 'Morador 8', foto: icon },
    { id: 9, nome: 'Morador 9', foto: icon },
  ]

  administradores.value = [
    { id: 1, nome: 'Admin 1', foto: icon },
    { id: 2, nome: 'Admin 2', foto: icon },
    { id: 3, nome: 'Admin 3', foto: icon }
  ]
})
</script>

<template>
  <div class="container">
    <!-- Título e subtítulo fora do header -->
    <section class="title-section">
      <h1 class="title">Moradores</h1>
      <p class="subtitle">Lista dos membros da república</p>
    </section>

    <main class="main">
      <!-- Moradores -->
      <section class="moradores-section">
        <div class="moradores-grid">
          <div v-for="morador in moradores" :key="morador.id" class="morador-card">
            <img :src="icon" alt="Ícone morador" class="morador-icon" />
            <p class="morador-nome">{{ morador.nome }}</p>
          </div>
        </div>
      </section>

      <!-- Administradores -->
      <aside class="admin-section">
        <h2 class="section-title">Administradores</h2>
        <div class="admins">
          <div v-for="admin in administradores" :key="admin.id" class="admin-card">
            <img :src="admin.foto" alt="Avatar admin" class="admin-avatar" />
            <p class="admin-nome">{{ admin.nome }}</p>
          </div>
        </div>
      </aside>
    </main>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background-color: #f9fafb;
  color: #222;
}

.container {
  flex: 1; /* ocupa o resto do espaço ao lado da sidebar */
  display: flex;
  flex-direction: column;
  gap: 40px;
}

/* Seção do título */
.title-section {
  margin-bottom: 32px;
}

.title {
  font-size: 2.25rem;
  font-weight: 700;
  margin: 0 0 4px;
  color: black;
}
.subtitle {
  font-size: 1rem;
  color: black;
  margin: 0;
}

/* Main Layout */
.main {
  display: flex;
  gap: 40px;
  flex: 1;
  padding-right: 20px;
}

.moradores-section {
  flex: 1;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 24px;
}

/* Grid */
.moradores-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.morador-card {
  width: 233px;
  height: 221px;
  background: #fff;
  padding: 30px 70px;
  border-radius: 24px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  transition: box-shadow 0.3s ease;
  cursor: default;
}
.morador-card:hover {
  box-shadow: 0 10px 28px rgba(139, 30, 35, 0.3);
}

.morador-icon {
  width: 72px;
  height: 72px;
}

.morador-nome {
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0;
}

/* ADMIN */
.admin-section {
  width: 240px;
  flex-shrink: 0;
}
.admins {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 16px;
}
.admin-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
}
.admin-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid transparent;
  transition: border-color 0.3s ease;
}
.admin-nome {
  margin-top: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  color: #222;
  text-align: center;
}
</style>
