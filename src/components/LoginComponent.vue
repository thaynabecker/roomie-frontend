<script setup>
import { ref } from 'vue'
const user = ref(null)

function login() {
  user.value = {
    name: 'João Silva',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    role: 'admin' // ou 'user'
  }
}
</script>

<template>
  <div class="background">
    <div class="logo-container">
      <img src="@/assets/img/ROOMIE-LOGO.png" alt="logo" />
    </div>

    <h1 class="titulo">ROOMIE</h1>

    <section class="login">
      <h2>Entrar</h2>
      <div>
        <h3>Login:</h3>
        <input type="text" />
        <h3>Senha:</h3>
        <input type="password" />
        <h3>Código:</h3>
        <input type="text" />
      </div>
      <div class="botoes">
        <button>Voltar</button>
        <button @click="login">Acessar</button>
      </div>
    </section>

    <div class="login-area">
      <template v-if="user">
        <div class="user-info">
          <img :src="user.photo" alt="Foto do usuário" class="avatar" />
          <div class="user-details">
            <span class="user-name">{{ user.name }}</span>
            <span class="user-role" :class="user.role">{{ user.role === 'admin' ? 'Administrador' : 'Usuário' }}</span>
          </div>
        </div>
      </template>
      <template v-else>
        <button class="login-btn" @click="login">Entrar</button>
      </template>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-color: #6f0a0c;
}
.background {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image:
    radial-gradient(
      circle at top left,
      rgba(99, 4, 28, 0.95) 0%,
      rgba(68, 5, 21, 0.7) 50%,
      transparent 85%
    ),
    linear-gradient(1deg, rgba(189, 0, 0, 0.3) 2.56%, rgba(90, 15, 16, 0.3) 56.41%),
    radial-gradient(118.79% 88.64% at 100% 0%, rgba(111, 10, 12, 0) 0%, #841416 91.44%),
    url('@/assets/img/fundo.png');

  background-size:
    cover,
    cover,
    cover,
    65% auto;

  background-repeat: no-repeat;
  background-position:
    top left,
    center,
    center,
    right bottom;
}
.logo-container {
  position: absolute;
  top: 1rem;
  left: 1rem;
}

.logo-container img {
  width: 50px;
  height: 50px;
  border-radius: 16px;
  background: linear-gradient(0deg, #6F0A0C 80.26%, rgba(204, 22, 22, 0.00) 143.39%, #E2D4F7 143.39%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.titulo {
  position: absolute;
  top: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-family: Poppins;
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-bottom: 2px solid white;
}

.login {
  width: 400px;
  padding: 2rem;
  border-radius: 25px;
  background: #d9d9d9;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
}

.login h2 {
  justify-content: first baseline;
  color: #6f0a0c;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.top{
  display: flex;
  justify-content: space-between;
  margin: 1vw;
}
.top h1 {
  display: flex;
  width: 238.117px;
  height: 91px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  aspect-ratio: 238.12/91;

  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.top img {
  border-radius: 24px;
  background: linear-gradient(0deg, #6f0a0c 80.26%, rgba(204, 22, 22, 0) 143.39%, #e2d4f7 143.39%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 60px;
  height: 60px;
  flex-shrink: 0;
}
.botoes {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1rem;
}
.login h3 {
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  color: #6F0A0C;
  margin-top: 1rem;
}

.login input {
  width: 100%;
  height: 35px;
  border: none;
  border-radius: 20px;
  background: #6F0A0C;
  color: white;
  padding: 0 1rem;
  margin-top: 0.5rem;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Poppins;
  font-size: 14px;
}

.botoes button {
  flex: 1;
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 20px;
  font-family: Poppins;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
}

.botoes button:first-child {
  background: #e4e4e4;
  color: #6F0A0C;
}

.botoes button:last-child {
  background: #6F0A0C;
  color: white;
}
.login-area {
  position: fixed;
  top: 20px;
  right: 30px;
  z-index: 2000;
  display: flex;
  align-items: center;
}
.user-info {
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 30px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 6px 16px 6px 6px;
  gap: 10px;
}
.avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #6F0A0C;
}
.user-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.user-name {
  font-weight: 600;
  color: #6F0A0C;
  font-size: 1rem;
}
.user-role {
  font-size: 0.85rem;
  color: #888;
  background: #eee;
  border-radius: 10px;
  padding: 2px 8px;
  margin-top: 2px;
}
.user-role.admin {
  color: #fff;
  background: #6F0A0C;
}
.login-btn {
  background: #6F0A0C;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 8px 20px;
  font-size: 1rem;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.login-btn:hover {
  background: #a32b2d;
}
</style>
