<script setup>
import { ref } from "vue"

// Valores reativos (futuramente podem vir da API/backend)
const despesasTotal = ref(35000)
const arrecadacoesTotal = ref(1000)
const aluguel = ref(340)

// Formatar em R$ bonito
const formatarMoeda = (valor) => {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}
</script>

<template>
  <div class="background">
    <div class="despesas-view">
      <!-- título alinhado à esquerda -->
      <h1>Despesas</h1>
      <h2>Financeiro da república. Todos os gastos e ganhos.</h2>
      <!-- Despesas -->
      <section class="card">
        <img src="@/assets/img/coins.png" alt="moedas">
        <h3>{{ formatarMoeda(despesasTotal) }}</h3>
        <p>Despesa total</p>
        <button class="link-btn">Ver despesas</button>
      </section>
      <!-- Arrecadações -->
      <section class="card">
        <img src="@/assets/img/coins.png" alt="moedas">
        <h3>{{ formatarMoeda(arrecadacoesTotal) }}</h3>
        <p>Arrecadação total</p>
        <button class="link-btn">Ver arrecadações</button>
      </section>
      <!-- Aluguel -->
      <section class="card aluguel">
        <img src="@/assets/img/money.png" alt="dinheiro">
        <h3>{{ formatarMoeda(aluguel) }}</h3>
        <p>Aluguel</p>
        <button class="pay-btn">Pagar</button>
      </section>
    </div>
  </div>
</template>

<style scoped>
.background {
  display: flex;
  justify-content: flex-start; /* puxa pro lado esquerdo */
  padding: 2rem;
  min-height: 100vh;
}
.despesas-view {
  flex: 1; /* ocupa o espaço restante */
  max-width: 1000px; /* deixa os cards mais largos */
  width: 100%;
  font-family: "Poppins", sans-serif;
}
h1 {
  color: black;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: left; /* título alinhado à esquerda */
}
h2 {
  font-size: 1rem;
  color: black;
  margin-bottom: 2rem;
  text-align: left; /* subtítulo também alinhado */
}
h3 {
    color: black;
}
.card {
  background: #fff;
  padding: 1.5rem;
  margin: 1rem 0;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.3s ease, transform 0.3s ease; /* transição suave */
}
.card:hover {
  box-shadow: 0 6px 20px rgba(0,0,0,0.15); /* sombra mais forte no hover */
  transform: translateY(-3px); /* levanta um pouquinho */
}
.card img {
  width: 50px;
  margin-bottom: 0.5rem;
}
.card h3 {
  font-size: 1.3rem;
  font-weight: bold;
}
.card p {
  color: #666;
  margin: 0.2rem 0 1rem;
}
.link-btn {
  font-size: 1.1rem;
  background: none;
  border: none;
  color: #6F0A0C;
  font-weight: bold;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
}
.subtitle {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  color: #6F0A0C;
  font-weight: bold;
  text-align: left; /* subtítulo alinhado */
}
.aluguel {
  border: 2px solid #6F0A0C;
}
.pay-btn {
  background: linear-gradient(to right, #6F0A0C, #be7676);
  border: none;
  color: white;
  font-weight: bold;
  padding: 8px 40px 8px 40px;
  border-radius: 8px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
}
.pay-btn:hover {
  opacity: 0.9;
}
</style>
