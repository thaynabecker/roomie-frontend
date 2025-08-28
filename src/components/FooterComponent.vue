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
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #722e2f;
  color: white;
  padding: 30px 20px;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  z-index: 1000;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  text-align: left;
}

nav ul.norms {
  margin: 0 5vw 0 0;
}

nav ul img {
  width: 150px;
  margin: 0 5vw 0 0;
  display: block;
}

nav ul:nth-child(2) {
  text-align: center;
}

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
  color: #6f0a0c;
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
