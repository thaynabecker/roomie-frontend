<template>
  <div class="sidebar-comp">
    <span class="mdi mdi-window-close" @click="emit('toggle')"></span>
    
    <!-- Logo -->
    <div class="logo">
      <img src="@/assets/img/ROOMIE-LOGO.png" alt="logo" />
    </div>

    <!-- Menu -->
    <nav>
      <ul>
        <li>
          <router-link to="/inicio">
            <span class="material-symbols-outlined">home</span>
            <span>Início</span>
          </router-link>
        </li>
        <li>
          <router-link to="/despesas">
            <span class="material-symbols-outlined">payments</span>
            <span>Despesas</span>
          </router-link>
        </li>
        <li>
          <router-link to="/departamentos">
            <span class="material-symbols-outlined">business</span>
            <span>Departamentos</span>
          </router-link>
        </li>
        <li>
          <router-link to="/mural">
            <span class="material-symbols-outlined">sms</span>
            <span>Mural</span>
          </router-link>
        </li>
        <li>
          <router-link to="/moradores">
            <span class="material-symbols-outlined">account_box</span>
            <span>Moradores</span>
          </router-link>
        </li>
        <li>
          <router-link to="/sobre">
            <span class="material-symbols-outlined">info</span>
            <span>Sobre</span>
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- Botão de logout -->
    <button class="logout" @click="abrirModal">
      <span class="material-symbols-outlined">logout</span>
      Sair
    </button>

    <!-- Modal de logout -->
    <div v-if="mostrarModal" class="modal-backdrop">
      <div class="modal">
        <h3>Deseja realmente sair?</h3>
        <div class="modal-botoes">
          <button @click="cancelarLogout">Cancelar</button>
          <button @click="confirmarLogout">Sim</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const emit = defineEmits(['toggle']);
const router = useRouter();
const mostrarModal = ref(false);

function abrirModal() {
  mostrarModal.value = true;
}

function cancelarLogout() {
  mostrarModal.value = false;
}

function confirmarLogout() {
  mostrarModal.value = false;
  router.push("/");
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

/* Sidebar desktop */
.sidebar-comp {
  width: 220px;
  height: 100vh;
  background: linear-gradient(to bottom, #5c0a0a, #6e1414);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 800;
  border-radius: 15px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
  padding: 1.5rem 1rem;
}

.mdi-window-close {
  display: none;
}

/* Logo */
.logo {
  text-align: center;
  margin-bottom: 1rem;
}
.logo img {
  width: 140px;
  height: auto;
}

/* Menu */
nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
nav li {
  padding: 0.5rem 0;
}
nav li a {
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 10px;
  border-radius: 8px;
  transition: all 0.3s ease;
}
nav li a span:first-child {
  font-size: 24px;
}
nav li a span:last-child {
  flex: 1;
  text-align: left;
}
nav li a:hover {
  background-color: rgba(255, 255, 255, 0.15);
  color: #f5f5f5;
  transform: translateX(4px);
}
nav li a.active {
  background-color: rgba(255, 255, 255, 0.25);
  color: #fff;
  font-weight: 600;
  transform: translateX(4px);
}

/* Logout */
.logout {
  background: none;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 10px;
  border-radius: 8px;
  transition: all 0.3s ease;
}
.logout span:first-child {
  font-size: 24px;
}
.logout:hover {
  background-color: rgba(255, 255, 255, 0.15);
  transform: translateX(4px);
  color: #f5f5f5;
}

/* Modal */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  min-width: 300px;
}
.modal h3 {
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  color: #6f0a0c;
}
.modal-botoes {
  display: flex;
  justify-content: space-around;
}
.modal-botoes button {
  padding: 0.6rem 1.5rem;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}
.modal-botoes button:first-child {
  background: #e4e4e4;
  color: #6f0a0c;
}
.modal-botoes button:first-child:hover {
  background: #d4d4d4;
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
.modal-botoes button:first-child:active {
  transform: translateY(1px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}
.modal-botoes button:last-child {
  background: #6f0a0c;
  color: white;
}
.modal-botoes button:last-child:hover {
  background: #841416;
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
}
.modal-botoes button:last-child:active {
  transform: translateY(1px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
}
/* 🔽 RESPONSIVO: mobile */
@media (max-width: 900px) {
  .sidebar-comp {
    width: 50vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    border-radius: 15px;
    padding: 0.8rem 0.8rem; /* padding menor */
    font-size: 0.85rem;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* items próximos do topo */
    gap: 20px; /* reduz espaçamento entre logo, menu e logout */
    z-index: 1000;
  }

  /* Botão fechar */
  .mdi-window-close {
    display: block;
    font-size: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
    text-align: right;
  }

  /* Logo proporcional */
  .logo img {
    width: 90px; 
    height: auto;
    margin-bottom: 0.5rem;
  }
  .logo {
  text-align: center;
  margin-bottom: 5rem; /* aumenta para descer o menu */
}


  /* Menu proporcional */
  nav li a {
    padding: 4px 6px; 
    gap: 6px;
    font-size: 0.8rem;
  }
  nav li a span:first-child {
    font-size: 16px;
  }
  nav li {
  padding: 0.5rem 0; /* ↑ aumenta espaço entre linhas do menu, ↓ diminui */
}

  /* Logout proporcional */
  .logout {
    font-size: 0.8rem;
    padding: 6px;
    gap: 0.3rem;
    margin-top: 200px; /* deixa um pequeno espaço do menu */
  }
  .logout span:first-child {
    font-size: 18px;
  }

  /* Modal proporcional */
  .modal {
    padding: 1rem;
    min-width: 200px;
  }
  .modal h3 {
    font-size: 0.95rem;
  }
  .modal-botoes button {
    padding: 0.4rem 0.8rem;
    font-size: 0.75rem;
  }
}
</style>
