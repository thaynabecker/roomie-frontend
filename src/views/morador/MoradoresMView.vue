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
      <!-- Grid geral -->
      <section class="grid-section">
        <!-- Moradores -->
        <div
          v-for="morador in moradores"
          :key="'morador-' + morador.id"
          class="morador-card"
        >
          <img :src="morador.foto" alt="Ícone morador" class="morador-icon" />
          <p class="morador-nome">{{ morador.nome }}</p>
        </div>

        <!-- Linha separada para admins -->
        <div class="admin-wrapper">
          <h2 class="admin-title">Administradores</h2>
          <div class="admin-grid">
            <div
              v-for="admin in administradores"
              :key="'admin-' + admin.id"
              class="admin-card"
            >
              <img :src="admin.foto" alt="Avatar admin" class="admin-avatar" />
              <p class="admin-nome">{{ admin.nome }}</p>
            </div>
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
  gap: 40px; /* espaçamento padrão */
  padding-right: 20px;
}

/* Título */
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

/* Main */
.main {
  flex: 1;
}

/* Grid geral */
.grid-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 20px;
}

/* Morador */
.morador-card {
  background: #fff;
  padding: 16px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: box-shadow 0.3s ease;
}
.morador-card:hover {
  box-shadow: 0 6px 16px rgba(139, 30, 35, 0.3);
}
.morador-icon {
  width: 50px;
  height: 50px;
}
.morador-nome {
  font-weight: 600;
  font-size: 0.95rem;
  margin: 0;
}

/* Wrapper dos admins */
.admin-wrapper {
  grid-column: 1 / -1; /* força nova linha */
  margin-top: 20px;
}

/* Título Admin */
.admin-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
}

/* Grid só de admins */
.admin-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 16px;
}

/* Card Admin */
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
  .grid-section {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }

  /* 🔽 Aproxima os moradores do subtítulo */
  .title-section {
    margin-bottom: 12px;
  }
}

@media (max-width: 480px) {
  .grid-section {
    grid-template-columns: 1fr 1fr;
  }
  .morador-icon,
  .admin-avatar {
    width: 40px;
    height: 40px;
  }
  .morador-nome,
  .admin-nome {
    font-size: 0.8rem;
  }

  /* 🔽 Aproxima ainda mais os cards do subtítulo */
  .title-section {
    margin-bottom: -10px;
  }
}
</style>
