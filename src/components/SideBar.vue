<template>
    <section class="barra-lateral">
        <div class="logo"><img src="@/assets/img/rommie.png" alt="Logo">
        </div>
        <nav>
            <ul>
                <li><img src="@/assets/img/inicio.png" alt="Icone Inicio">Inicio</li>
                <li><img src="@/assets/img/despesas.png" alt="Icone Despesas">Despesas</li>
                <li><img src="@/assets/img/departamentos.png" alt="Icone Departamentos">Departamento</li>
                <li><img src="@/assets/img/mural.png" alt="Icone Mural">Mural</li>
                <li><img src="@/assets/img/moradores.png" alt="Icone Moradores">Moradores</li>
                <li><img src="@/assets/img/sobre.png" alt="Icone Sobre">Sobre</li>
            </ul>
        </nav>
        <button class="logout"><img src="@/assets/img/logout.png" alt="icon Sair">Sair</button>
    </section>
</template>

<style scoped>

.barra-lateral{
    background: linear-gradient(to bottom, rgba(134, 39, 39, 0.829) 2%, #6F0A0C 20%);
    color: white;
    width: 250px;
    min-height: 100vh;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px 0 0 20px;
    font-family: "Poppins", sans-serif;
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
    display: flex;           /* Alinha o ícone e texto na horizontal */
    align-items: center;     /* Centraliza verticalmente */
    gap: 0.5rem;               /* Espaço entre o ícone e o texto */
}

</style>