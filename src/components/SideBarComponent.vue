<template>
  <div class="sidebar">
    <div class="logo">
      <img src="@/assets/img/logoroomie.png" alt="logo">
    </div>
    <nav>
      <ul>
        <li><span class="material-symbols-outlined">home</span>Início</li>
        <li><span class="material-symbols-outlined">payments</span>Despesas</li>
        <li><span class="material-symbols-outlined">business</span>Departamento</li>
        <li><span class="material-symbols-outlined">sms</span>Mural</li>
        <li><span class="material-symbols-outlined">account_box</span>Moradores</li>
        <li><span class="material-symbols-outlined">info</span>Sobre</li>
      </ul>
    </nav>
    <button class="logout">
      <span class="material-symbols-outlined">logout</span>Sair
    </button>
  </div>
</template>

<script>

</script>

<style scoped>
.barra-lateral {
  background: linear-gradient(to bottom, rgba(134, 39, 39, 0.829) 2%, #6F0A0C 20%);
}
.sidebar {
  width: 220px; /* ou 20% */
  background: linear-gradient(to bottom, rgba(134, 39, 39, 0.9), #6F0A0C);
  color: white;
  border-radius: 20px;
  padding: 2rem 1rem;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Logo */
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

.logo img {
  width: 140px;
}

/* Menu */
nav ul {
  list-style: none;
  padding: 0;
}

nav li {
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  cursor: pointer;
}

.material-symbols-outlined {
  margin-right: 0.7rem;
}
nav li:hover{
  color: rgb(255, 255, 255);
}
.logout {
  background: none;
  border: none;
  color: white;
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
