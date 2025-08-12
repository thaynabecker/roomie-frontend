<script>
import 'material-icons/iconfont/material-icons.css'
</script>
<template>
  <!-- <section class="barra-lateral"> -->
  <div class="logo">
    <img src="./src/assets/img/ROOMIE.png" alt="logo">
  </div>
  <nav>
    <ul>
      <li><span class="material-symbols-outlined">home</span>Inicio</li>
      <li><span class="material-symbols-outlined">payments</span>Despesas</li>
      <li><span class="material-symbols-outlined">business</span>Departamento</li>
      <li><span class="material-symbols-outlined">sms</span>Mural</li>
      <li><span class="material-symbols-outlined">account_box</span>Moradores</li>
      <li><span class="material-symbols-outlined">info</span>Sobre</li>
    </ul>
  </nav>

  <button class="logout"><span class="material-symbols-outlined">logout</span>Sair</button>
  <!-- </section> -->

</template>

<style scoped>
.barra-lateral {
  background: linear-gradient(to bottom, rgba(134, 39, 39, 0.829) 2%, #6F0A0C 20%);
  color: white;
  border-radius: 10px;
  /* width: 250px; */
  min-height: 100%;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border-radius: 20px 0 0 20px; */
  font-family: "Poppins", sans-serif;
}

.material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
  font-size: 24px;
  margin-right: 0.5rem;
}

.logo {
  text-align: center;
  margin-bottom: 2rem;
}

nav ul {
  margin: -17vw 0 0 0;
  list-style: none;
  padding: 1rem;
}

nav li {
  margin: 2.5rem 0;
  cursor: pointer;
  display: flex;
  align-items: center;
}
nav li:hover,
nav li:hover .material-symbols-outlined {
  color: #aa5f5f;
}

nav li img {
  margin-right: 1rem;
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.logout {
  font-family: "Poppins", sans-serif;
  background: none;
  border: none;
  color: white;
  padding-left: 1.2rem;
  cursor: pointer;
  display: flex;
  /* Alinha o ícone e texto na horizontal */
  align-items: center;
  /* Centraliza verticalmente */
  gap: 0.5rem;
  /* Espaço entre o ícone e o texto */
}
</style>
