<template>
  <footer class="footer">
    <nav class="footer-nav">
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
.footer {
  width: 100%;
  background-color: #6f0a0c;
  color: white;
  padding: 30px 20px;
  box-shadow: 0 -4px 8px rgba(0,0,0,0.3);
  font-family: "Poppins", sans-serif;
  border-top-left-radius: 10px;   /* cantos menos arredondados */
  border-top-right-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  box-sizing: border-box;
  position: relative;
}

.footer-nav {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 900px; /* nav visualmente centralizado */
  margin: 0 auto; 
  position: relative;
}

ul.contact,
ul.norms {
  min-width: 180px;
  list-style: none;
  margin: 0;
  padding: 0;
}

ul.contact {
  text-align: left;
  padding-left: 10px; /* ajustado mais para esquerda */
}

ul.norms {
  text-align: right;
  padding-right: 10px; /* ajuste lateral */
}

ul.logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
}

ul.logo img {
  width: 110px; /* levemente menor para caber melhor */
  display: block;
  margin: 0 auto;
}

li {
  margin: 5px 0;
  color: white;
  font-size: 1rem;
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
  color: #eee;
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

/* 🔽 Ajuste proporcional em telas pequenas */
@media (max-width: 768px) {
  .footer {
    padding: 10px 15px 10px 10.5px; /* aumenta o fundo só no mobile */
    min-height: 100px;             /* altura mínima maior */
  }

  li {
    font-size: 0.65rem;
  }

  ul.logo img {
    width: 60px;
  }

  .footer-nav .contact {
    margin: 0 0 0 -4vw;
  }

  p {
    font-size: 0.65rem;
  }
}

</style>
