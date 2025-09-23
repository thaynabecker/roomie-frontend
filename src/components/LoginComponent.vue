<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const username = ref("");
const password = ref("");
const code = ref("");
const errorMessage = ref(""); 

// 🔥 mock com as credenciais que você pediu
const mockUser = {
  username: "amanda.santos",
  password: "123",
  code: "123"
};

function handleLogin() {
  if (
    username.value === mockUser.username &&
    password.value === mockUser.password &&
    code.value === mockUser.code
  ) {
    // salva "token fake" e redireciona pra /inicio
    localStorage.setItem("access", "mock-token");
    router.push("/inicio"); 
  } else {
    errorMessage.value = "Usuário, senha ou código inválidos ❌";
  }
}

function voltar() {
  router.push("/");
}
</script>

<template>
  <div class="background">
    <div class="logo-container">
      <img src="@/assets/img/ROOMIE-LOGO.png" alt="logo" />
    </div>
    <section class="login">
      <h2>Entrar</h2>
      <div>
        <h3>Login:</h3>
        <input type="text" v-model="username" placeholder="usuario" />

        <h3>Senha:</h3>
        <input type="password" v-model="password" placeholder="senha" />

        <h3>Código:</h3>
        <input type="text" v-model="code" placeholder="código" />
      </div>

      <p v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </p>

      <div class="botoes">
        <button @click="voltar">Voltar</button>
        <button @click="handleLogin">Acessar</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.background {
  background-color: #6f0a0c;
  position: relative;
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
    url('@/assets/img/background-image.png');

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

.login {
  width: 400px;
  padding: 2rem;
  border-radius: 25px;
  background: #d9d9d9;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
}

.login h2 {
  color: #6f0a0c;
  text-align: center;
  font-family: Poppins, sans-serif;
  font-size: 24px;
  font-weight: 600;
}

.login h3 {
  font-family: Poppins, sans-serif;
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
  font-family: Poppins, sans-serif;
  font-size: 14px;
}

.error-message {
  color: red;
  font-weight: bold;
  margin-top: 10px;
}

.botoes {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1rem;
}

.botoes button {
  flex: 1;
  height: 40px;
  border: none;
  border-radius: 20px;
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

/* efeitos de destaque */
.botoes button:hover {
  transform: scale(1.08);
  box-shadow: 0px 8px 15px rgba(0,0,0,0.3);
}

.botoes button:active {
  transform: scale(0.95);
  box-shadow: 0px 4px 8px rgba(0,0,0,0.25);
}
</style>
