<script setup>

</script>

<template>
  <nav>
    <ul class="contact">
      <li class="bold">ENTRE EM CONTATO</li>
      <li>FAQ</li>
      <li>E-mail: roomiemoradia@gmail.com</li>
      <li>Telefone: (12) 34567-8901</li>
      <li>Redes Sociais:</li>
    </ul>
    <ul>
      <img src="@/assets/img/ROOMIE-LOGO.png" alt="logo" />
    </ul>
    <ul class="norms">
      <li class="bold">NORMAS E POLÍTICAS</li>
      <li><a href="#">Politica de Privacidade</a></li>
      <li><a href="#">Política de Cookies</a></li>
      <li><a href="#">Termos</a></li>
    </ul>
  </nav>
  <hr />
  <p>ROOMIE - Todos os direitos reservados &copy; 2025</p>
</template>

<style scoped>
footer {
<<<<<<< HEAD
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
=======
  width: 100%;         /* ocupa toda a largura da viewport */
>>>>>>> 2ea5b79 (FEAT: style residents page #13)
  background-color: #722E2F;
  color: white;
  padding: 30px 0 0 0;
  font-family: "Poppins", sans-serif;
<<<<<<< HEAD
  z-index: 1000;
=======
  margin: 2vw 0 0 0;
>>>>>>> 2ea5b79 (FEAT: style residents page #13)
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  text-align: left;
}
nav ul.contact {
  margin: 0 0 0 4vw;
}
nav ul.norms {
  margin: 0 5vw 0 0;
}

nav ul img {
  width: 150px;
  margin: 0 5vw 0 0;
  display: block;
}
<<<<<<< HEAD

nav ul:nth-child(2) {
  text-align: center;
}

=======
>>>>>>> 2ea5b79 (FEAT: style residents page #13)
li {
  list-style: none;
  color: white;
  margin: 5px 0;
}

li.bold {
  font-weight: bold;
  margin-bottom: 10px;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

hr {
  border: none;
  border-top: 1px solid #ccc;
  margin: 20px 0 10px;
  opacity: 0.4;
}

p {
  text-align: center;
  font-size: 0.9rem;
  color: #eee;
}
</style>
