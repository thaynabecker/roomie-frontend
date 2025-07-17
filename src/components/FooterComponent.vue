<template>
 <footer class="footer">
   <nav>
     <ul class="contact">
       <li class="bold">ENTRE EM CONTATO</li>
       <li>FAQ</li>
       <li>E-mail: roomiemoradia@gmail.com</li>
       <li>Telefone: (12) 34567-8901</li>
       <li>Redes Sociais:</li>
     </ul>

     <ul class="logo">
       <li>
         <img src="@/assets/img/ROOMIE-LOGO.png" alt="logo" />
       </li>
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
</script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  width: 100%;
  background-color: #722E2F;
  color: white;
  padding: 30px 40px 0 40px; /* padding horizontal fixo melhora o controle */
  width: 100%;         /* ocupa toda a largura da viewport */
  background-color: #722E2F;
  color: white;
  padding: 30px 0 0 0;
  font-family: "Poppins", sans-serif;
  z-index: 1000;
  margin: 2vw 0 0 0;
  margin-top: 2vw;
  box-sizing: border-box;
  width: 100%;         /* ocupa toda a largura da viewport */
  background-color: #722E2F;
  color: white;
  padding: 30px 40px 0 40px; /* padding horizontal fixo melhora o controle */
  font-family: "Poppins", sans-serif;
  margin: 2vw 0 0 0;
  margin-top: 2vw;
  box-sizing: border-box;
  margin: 2vw 0 0 0;
}

/* Nav interno */
nav {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 40px;
}
nav ul.contact {
  margin: 0 0 0 4vw;
}
nav ul.contact {
  margin: 0 0 0 4vw;
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
}

nav ul {
  flex: 1;
  min-width: 200px;
}

nav ul img {
  width: 120px;
  display: block;
  margin: 0 auto;
}

li {
 margin: 5px 0;
 color: white;
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
  margin-bottom: 10px;
}

</style>