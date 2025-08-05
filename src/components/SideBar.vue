<script></script>

<template>
    <section class="barra-lateral">
        <div class="logo"><img src="@/assets/icons/rommie.png" alt="Logo">
        </div>
        <nav>
            <ul>
                <li><img src="@/assets/icons/inicio.png" alt="Icone Inicio">Inicio</li>
                <li><img src="@/assets/icons/despesas.png" alt="Icone Despesas">Despesas</li>
                <li><img src="@/assets/icons/departamentos.png" alt="Icone Departamentos">Departamento</li>
                <li><img src="@/assets/icons/mural.png" alt="Icone Mural">Mural</li>
                <li><img src="@/assets/icons/moradores.png" alt="Icone Moradores">Moradores</li>
                <li><img src="@/assets/icons/sobre.png" alt="Icone Sobre">Sobre</li>
            </ul>
        </nav>
        <button class="logout"><img src="@/assets/icons/logout.png" alt="icon Sair">Sair</button>
    </section>
</template>

<style scoped>
.barra-lateral {
<<<<<<< HEAD
<<<<<<< HEAD
  width: 250px;
  height: 100%;
  background: linear-gradient(to bottom, rgba(134, 39, 39, 0.829) 2%, #6F0A0C 20%);
  color: white;
=======
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(to bottom, rgba(134, 39, 39, 0.829) 2%, #6F0A0C 20%);
  color: white;
  width: 250px;
  height: 100vh;
>>>>>>> 2ea5b79 (FEAT: style residents page #13)
=======
  width: 250px;
  height: 100%;
  background: linear-gradient(to bottom, rgba(134, 39, 39, 0.829) 2%, #6F0A0C 20%);
  color: white;
>>>>>>> 1633c03 (FEAT: residents page #13)
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px 0 0 20px;
  font-family: "Poppins", sans-serif;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  /* remove min-height, pois o height já cobre */
>>>>>>> 2ea5b79 (FEAT: style residents page #13)
=======
>>>>>>> 1633c03 (FEAT: residents page #13)
}
.logo {
    text-align: center;
    margin-bottom: 2rem;
}
nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 2rem; /* Espaçamento entre itens */
}
nav li {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 500;
    transition: color 0.2s ease;
}
nav li:hover {
    color: #FFD4D6;
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
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;
    font-size: 1rem;
    margin-top: 2rem;
    transition: color 0.2s ease;
}
.logout:hover {
    color: #FFD4D6;
}
</style>