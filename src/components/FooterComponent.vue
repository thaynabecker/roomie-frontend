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

  width: 100%;         /* ocupa toda a largura da viewport */
  background-color: #722E2F;
  color: white;
  padding: 30px 0 0 0;
  font-family: "Poppins", sans-serif;
  margin: 2vw 0 0 0;
}

/* Nav interno */
nav {
 display: flex;
 justify-content: space-between; /* contact esquerda, norms direita */
 align-items: flex-start;
 flex-wrap: wrap;
 position: relative;
 margin-bottom: 20px;
}
nav ul.contact {
  margin: 0 0 0 4vw;
}
nav ul.norms {
  margin: 0 5vw 0 0;
}

ul.logo {
 position: absolute; /* centraliza sobre nav */
 left: 50%;
 transform: translateX(-50%);
 list-style: none;
 margin: 0;
 padding: 0;
 text-align: center;
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
 margin: 0;
}

@media (max-width: 763px) {
 ul.contact, ul.norms {
   margin-bottom: 20px;
 }
 ul.logo {
   position: static;
   transform: none;
   margin-bottom: 20px;
 }
}
</style>
