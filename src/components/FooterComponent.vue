<template>
  <footer :class="['footer-overlay', { visible: mostrar }]">
    <nav>
      <ul class="contact">
        <li class="bold">ENTRE EM CONTATO</li>
        <li>FAQ</li>
        <li>E-mail: roomiemoradia@gmail.com</li>
        <li>Telefone: (12) 34567-8901</li>
        <li>Redes Sociais:</li>
      </ul>
      <ul class="logo">
        <img src="@/assets/img/ROOMIE-LOGO.png" alt="logo" />
      </ul>
      <ul class="norms">
        <li class="bold">NORMAS E POLÍTICAS</li>
        <li><a href="#">Política de Privacidade</a></li>
        <li><a href="#">Política de Cookies</a></li>
        <li><a href="#">Termos</a></li>
      </ul>
    </nav>
    <hr />
    <p>ROOMIE - Todos os direitos reservados &copy; 2025</p>
  </footer>
</template>

<script setup>
defineProps({
  mostrar: Boolean
});
</script>

<style scoped>
.footer-overlay {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #6f0a0c;
  color: white;
  padding: 20px;
  z-index: 900;
  transform: translateY(100%);
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
  box-shadow: 0 -4px 8px rgba(0,0,0,0.3);
  font-family: "Poppins", sans-serif;
}
.footer-overlay.visible {
  transform: translateY(0);
  opacity: 1;
}

/* nav interno */
nav {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}
ul.contact, ul.norms {
  min-width: 180px;
}
ul.logo {
  text-align: center;
  flex: 1;
}
ul.logo img {
  width: 150px;
  display: block;
  margin: 0 auto;
}
li {
  list-style: none;
  color: white;
  margin: 5px 0;
}
li.bold {
  font-weight: bold;
}
a {
  color: white;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
  color: #eee;
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
  margin-top: 10px;
}
</style>