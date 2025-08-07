<template>
  <nav class="sidebar">
    <div class="logo">
      <img src="@/assets/logo.png" alt="Logo" />
    </div>

    <ul class="nav-list">
      <li>
        <RouterLink to="/inicio" class="nav-link" active-class="ativo">
          <span class="icon"></span>
          <span class="text">Início</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/despesas" class="nav-link" active-class="ativo">
          <span class="icon"></span>
          <span class="text">Despesas</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/departamentos" class="nav-link" active-class="ativo">
          <span class="icon"></span>
          <span class="text">Departamentos</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/mural" class="nav-link" active-class="ativo">
          <span class="icon"></span>
          <span class="text">Mural</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/moradores" class="nav-link" active-class="ativo">
          <span class="icon"></span>
          <span class="text">Moradores</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/sobre" class="nav-link" active-class="ativo">
          <span class="icon"></span>
          <span class="text">Sobre</span>
        </RouterLink>
      </li>
    </ul>

    <div class="logout">
      <button>
        <span class="icon"></span>
        <span class="text">Sair</span>
      </button>
    </div>
  </nav>
</template>

<style scoped>
.sidebar {
  background: linear-gradient(to bottom, rgba(134, 39, 39, 0.829), #6F0A0C);
  color: white;
  width: 250px;
  min-height: 100vh;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  font-family: "Poppins", sans-serif;
}

.logo {
  text-align: center;
  margin-bottom: 2rem;
}

.logo img {
  width: 80px;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.3s, color 0.3s;
  margin-bottom: 0.75rem;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.nav-link .icon {
  margin-right: 0.75rem;
  font-size: 1.2rem;
}

.ativo {
  background-color: white !important;
  color: #6F0A0C !important;
  font-weight: bold;
}

.logout button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: inherit;
  font-size: 1rem;
}

.logout button:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
}
</style>