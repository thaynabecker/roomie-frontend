<script setup>
import 'material-icons/iconfont/material-icons.css'
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  // aqui dá pra limpar token, sessionStorage etc se tu usar login depois
  router.push('/') // redireciona pra /
}
</script>

<template>
  <div class="logo">
    <img src="@/assets/img/ROOMIE-LOGO.png" alt="logo">
  </div>
  <nav>
    <ul>
      <li>
        <router-link to="/inicio">
          <span class="material-symbols-outlined">home</span>Inicio
        </router-link>
      </li>
      <li>
        <router-link to="/despesas">
          <span class="material-symbols-outlined">payments</span>Despesas
        </router-link>
      </li>
      <li>
        <router-link to="/departamentos">
          <span class="material-symbols-outlined">business</span>Departamento
        </router-link>
      </li>
      <li>
        <router-link to="/mural">
          <span class="material-symbols-outlined">sms</span>Mural
        </router-link>
      </li>
      <li>
        <router-link to="/moradores">
          <span class="material-symbols-outlined">account_box</span>Moradores
        </router-link>
      </li>
      <li>
        <router-link to="/sobre">
          <span class="material-symbols-outlined">info</span>Sobre
        </router-link>
      </li>
    </ul>
  </nav>

  <button class="logout" @click="logout">
    <span class="material-symbols-outlined">logout</span>Sair
  </button>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

/* Sidebar container */
.sidebar-comp {
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

@media screen {
  
}
.sidebar-comp {
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
.mdi-window-close {
  display:none;
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

/* Hover: deixa mais branco e puxa levemente */
nav li a:hover {
  background-color: rgba(255, 255, 255, 0.15);
  color: #f5f5f5;
  transform: translateX(4px);
}

/* Ativo: link da página atual */
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
</style>