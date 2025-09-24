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
    <!-- Título -->
    <section class="title-section">
      <h1 class="title">Moradores</h1>
      <p class="subtitle">Lista dos membros da república</p>
    </section>

    <main class="main">
      <!-- Grid de moradores -->
      <section class="moradores-grid">
        <div v-for="morador in moradores" :key="morador.id" class="morador-card">
          <img :src="morador.foto" alt="Ícone morador" class="morador-icon" />
          <p class="morador-nome">{{ morador.nome }}</p>
        </div>
      </section>

      <!-- Administradores -->
      <section class="admin-section">
        <h2 class="section-title">Administradores</h2>
        <div class="admins-grid">
          <div v-for="admin in administradores" :key="admin.id" class="admin-card">
            <img :src="admin.foto" alt="Avatar admin" class="admin-avatar" />
            <p class="admin-nome">{{ admin.nome }}</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0 20px;
}

/* Título */
.title-section {
  margin-bottom: 16px;
}
.title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 4px;
}
.subtitle {
  font-size: 1rem;
  margin: 0;
  color: #555;
}

/* Main layout */
.main {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

/* Grid de moradores */
.moradores-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}
.morador-card {
  background: #fff;
  padding: 20px;
  border-radius: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: box-shadow 0.3s ease;
}
.morador-card:hover {
  box-shadow: 0 6px 16px rgba(139,30,35,0.3);
}
.morador-icon {
  width: 60px;
  height: 60px;
}
.morador-nome {
  font-weight: 600;
  font-size: 1rem;
  margin: 0;
}

/* Admins */
.admin-section {
  margin-top: 20px;
}
.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
}
.admins-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.admin-card {
  background: #f3f4f6;
  padding: 16px;
  border-radius: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border: 2px solid #e5e7eb;
}
.admin-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}
.admin-nome {
  font-size: 0.9rem;
  font-weight: 600;
  color: #222;
}

/* RESPONSIVO */
@media (max-width: 768px) {
  .moradores-grid,
  .admins-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 colunas no tablet/celular */
    gap: 16px;
  }
  .morador-card {
    padding: 16px;
  }
  .morador-icon,
  .admin-avatar {
    width: 50px;
    height: 50px;
  }
  .morador-nome,
  .admin-nome {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .moradores-grid,
  .admins-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  .morador-card,
  .admin-card {
    padding: 12px;
  }
  .morador-icon,
  .admin-avatar {
    width: 45px;
    height: 45px;
  }
  .morador-nome,
  .admin-nome {
    font-size: 0.8rem;
  }
}
</style>
