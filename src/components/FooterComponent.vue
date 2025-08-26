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
.footer {
  width: 100%;
  height: 120px;
  background-color: #6F0A0C;
  color: white;
  border-radius: 20px 20px 0 0;
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
</style>
