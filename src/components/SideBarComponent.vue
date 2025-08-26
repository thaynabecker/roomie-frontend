<script>
import 'material-icons/iconfont/material-icons.css'
</script>
<template>
  <div class="logo">
    <img src="@/assets/img/ROOMIE-LOGO.png" alt="logo">
  </div>
  <nav>
    <ul>
      <li>
        <router-link to="/">
          <span class="material-symbols-outlined">home</span>Inicio
        </router-link>
      </li>
      <li>
        <router-link to="/despesas">
          <span class="material-symbols-outlined">payments</span>Despesas
        </router-link>
      </li>
      <li>
        <router-link to="/departamento">
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

  <button class="logout"><span class="material-symbols-outlined">logout</span>Sair</button>
</template>

<script>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

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
  margin: 0 0 1.5rem 0;
  width: 100%;
  display: block;
}

.logo img {
  width: 150px;
  height: auto;
  display: block;
  margin: 0 auto;
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
  color: rgb(180, 173, 172);
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
nav li:hover{
  color: rgb(255, 255, 255);
}
.logout {
  font-family: "Poppins", sans-serif;
  background: none;
  border: none;
  color: white;
  padding-left: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
nav li a {
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  width: 100%;
}
nav li .router-link-active,
nav li .router-link-exact-active {
  color: #fff !important;
}
</style>
