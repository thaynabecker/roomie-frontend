<script setup>
import { ref } from 'vue'
import 'material-icons/iconfont/material-icons.css'
// Endereço aleatório
const endereco = ref('Avenida Paulista, 1578, São Paulo, SP')

// Link para abrir diretamente no Google Maps
const mapaUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco.value)}`

// Link para iframe com marcador vermelho no endereço
const mapaEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(endereco.value)}&t=&z=15&ie=UTF8&iwloc=A&output=embed`
</script>

<template>
  <div class="sobre-container">
    <!-- Seção Informações -->
    <section class="informacoes">
      <h2>Sobre</h2>
      <p class="descricao">
        Todas as informações sobre a organização de moradores.
      </p>

      <h3>Informações</h3>
      <div class="info-box">
        A República é um espaço de convivência estudantil, projetado para oferecer moradia e integração
  entre seus membros. Nosso objetivo é promover um ambiente acolhedor, seguro e organizado, onde
  todos possam compartilhar experiências, responsabilidades e momentos de lazer. Cada morador tem
  a oportunidade de participar da administração da casa, contribuindo para a manutenção das
  áreas comuns e para a tomada de decisões coletivas. Acreditamos que a convivência em comunidade
  fortalece os vínculos, desenvolve a autonomia e prepara os moradores para desafios pessoais e
  profissionais, criando um ambiente de aprendizado contínuo e respeito mútuo.
      </div>
    </section>

    <!-- Seção Documentos -->
    <section class="documentos">
      <h3>Documentos e arquivos</h3>
      <button class="doc-btn">
        CLIQUE AQUI PARA VER O REGIMENTO DA INSTITUIÇÃO!
      </button>
    </section>

    <!-- Seção Contato -->
    <section class="contato">
      <h3>Contato</h3>
      <div class="contato-box">
        <p><strong>Endereço:</strong> {{ endereco }}</p>

        <!-- Mapa com marcador -->
        <div class="mapa-container">
          <a :href="mapaUrl" target="_blank" rel="noopener">
            <iframe
              :src="mapaEmbedUrl"
              width="100%"
              height="300"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.sobre-container {
  padding: 2rem 1rem;
  width: 100%;
  margin: 0;
  font-family: "Poppins", sans-serif;
  color: #1c1c1c;
  text-align: left;
}

/* Títulos principais */
.informacoes h2 {
  font-size: 2rem;
  margin-bottom: 1rem; /* aumentei de 0.3rem para 1rem */
  text-align: left;
  font-weight: 600;
}

/* Descrição inicial */
.descricao {
  font-size: 1rem;
  margin-bottom: 3rem; /* aumentei para mais espaço antes da seção Informações */
  color: #555;
  text-align: justify;
}

/* Subtítulos das seções */
.informacoes h3,
.documentos h3,
.contato h3 {
  font-size: 1.2rem;
  margin-bottom: 1.2rem; /* aumentei o espaçamento */
  text-align: left;
  font-weight: 600;
}

/* Caixa de informações */
.info-box {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  line-height: 1.6;
  margin-bottom: 3rem; /* maior espaço antes da próxima seção */
  text-align: justify;
}

/* Botão de documentos */
.documentos .doc-btn {
  width: 100%;
  background-color: #6F0A0C;
  color: #fff;
  border: none;
  padding: 2rem;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  text-align: left;
  transition: background 0.3s ease;
  margin-bottom: 3rem; /* espaço antes da seção de contato */
}
.documentos .doc-btn {
  text-align: center;
  justify-content: center;
  font-size: larger;
  font-weight: 300;
}
.documentos .doc-btn:hover {
  background-color: #6F0A0C;
}

/* Caixa de contato */
.contato-box {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  text-align: justify;
  margin-bottom: 3rem; /* espaço extra abaixo da seção */
}

/* Mapa */
.mapa-container {
  margin-top: 1rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  width: 100%;
}

</style>
