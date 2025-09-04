<template>
  <div class="sidebar">
    <div class="logo">
      <img src="@/assets/img/ROOMIE-LOGO.png" alt="logo">
    </div>

    <nav>
      <ul>
        <li><span class="material-symbols-outlined">home</span><span>Início</span></li>
        <li><span class="material-symbols-outlined">payments</span><span>Despesas</span></li>
        <li><span class="material-symbols-outlined">business</span><span>Departamento</span></li>
        <li><span class="material-symbols-outlined">sms</span><span>Mural</span></li>
        <li><span class="material-symbols-outlined">account_box</span><span>Moradores</span></li>
        <li><span class="material-symbols-outlined">info</span><span>Sobre</span></li>
      </ul>
    </nav>

    <button class="logout">
      <span class="material-symbols-outlined">logout</span>Sair
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
.sidebar {
  width: 220px;
  height: 95vh;
    background: linear-gradient(to bottom, rgba(119, 40, 40, 0.9), #6F0A0C);
  color: white;
  position: fixed;
  top: 0;
  left: 5px;
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
  margin: -10vw 0 0 0;
}
nav li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0.8rem 0;
  cursor: pointer;
  font-weight: 500;
}
nav li span:first-child {
  font-size: 24px;
  font-weight: 500;
}
nav li span:last-child {
  flex: 1;
  text-align: left;
}

/* Hover */
nav li:hover {
  color: #fff;
  opacity: 0.9;
}

/* Botão Sair */
.logout {
  background: none;
  border: none;
  color: white;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  padding: 70px 10px;
}
.logout span:first-child {
  font-size: 24px;
}
.logout:hover {
  opacity: 0.9;
}
</style>
