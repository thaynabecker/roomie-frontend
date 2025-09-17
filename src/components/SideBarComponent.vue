<template>
  <div class="sidebar">
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
  // Aqui você pode limpar localStorage ou qualquer estado de login
  router.push("/");
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.sidebar {
  width: 220px;
  height: 100vh;
  background: linear-gradient(to bottom, rgba(119, 40, 40, 0.9), #6F0A0C);
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
  padding: 0.8rem 0;
}
nav li a {
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  text-decoration: none;
  font-weight: 500;
}
nav li a span:first-child {
  font-size: 24px;
}
nav li a span:last-child {
  flex: 1;
  text-align: left;
}
nav li a:hover {
  opacity: 0.9;
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
}
.logout span:first-child {
  font-size: 24px;
}
.logout:hover {
  opacity: 0.9;
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
  transition: 0.3s;
}
.modal-botoes button:first-child {
  background: #e4e4e4;
  color: #6f0a0c;
}
.modal-botoes button:last-child {
  background: #6f0a0c;
  color: white;
}
</style>
