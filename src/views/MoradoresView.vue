<script setup>
import { ref, onMounted } from 'vue'
import icon from '@/assets/img/icon.png'

const usuario = ref({
  nome: 'Amanda Eduarda',
  tempo: '1 mês',
  foto: icon
})

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
    <!-- Cabeçalho com barra de pesquisa e usuário -->
    <header class="header">
      <div class="search-bar">
        <input type="text"/>
      </div>

      <div class="user-info">
        <img :src="usuario.foto" alt="Avatar" class="avatar" />
        <div class="user-text">
          <p class="user-name">{{ usuario.nome }}</p>
          <p class="user-time">{{ usuario.tempo }}</p>
        </div>
      </div>
    </header>

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
            <button class="btn-perfil">Ver perfil</button>
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


/* Header com pesquisa e usuário */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.search-bar input {
  padding: 8px 16px;
  border-radius: 24px;
  border: 1px solid #ccc;
  width: 240px;
  font-size: 1rem;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 16px;
}
.avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
.user-text {
  display: flex;
  flex-direction: column;
}
.user-name {
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0;
}
.user-time {
  font-size: 0.875rem;
  color: #999;
  margin: 2px 0 0;
}

/* Seção do título */
.title-section {
  margin-bottom: 32px;
}

.title {
  font-size: 2.25rem;
  font-weight: 700;
  margin: 0 0 4px;
}
.subtitle {
  font-size: 1rem;
  color: #666;
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

.btn-perfil {
  background-color: #8b1e23;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 5px 15px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(139, 30, 35, 0.3);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}
.btn-perfil:hover {
  background-color: #70171a;
  box-shadow: 0 6px 18px rgba(112, 23, 26, 0.45);
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