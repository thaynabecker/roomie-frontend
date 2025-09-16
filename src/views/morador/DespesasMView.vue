<script setup>
import { ref } from "vue"
import QRCode from "qrcode"

// Valores reativos
const despesasTotal = ref(35000)
const arrecadacoesTotal = ref(1000)
const aluguel = ref(340)

// Controle da simulação PIX
const mostrarPix = ref(false)
const qrCodeUrl = ref("")
const chavePix = ref("roomie@pix.com")
const aluguelPago = ref(false) // controla se foi pago ou não

// Gerar QR Code fake
const gerarQrPix = async () => {
  try {
    const url = await QRCode.toDataURL(chavePix.value)
    qrCodeUrl.value = url
    mostrarPix.value = true
  } catch (err) {
    console.error("Erro ao gerar QR Code:", err)
  }
}

// Fechar modal
const fecharPix = () => {
  mostrarPix.value = false
}

// Confirmar pagamento
const confirmarPagamento = () => {
  aluguelPago.value = true
  fecharPix()
}

// Formatar moeda
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
        <button 
          v-if="!aluguelPago" 
          class="pay-btn" 
          @click="gerarQrPix"
        >
          Pagar
        </button>
        <span v-else class="pago-label">Pago</span>
      </section>
    </div>

    <!-- Modal PIX -->
    <div v-if="mostrarPix" class="pix-overlay" @click.self="fecharPix">
      <div class="pix-modal">
        <button class="close-btn" @click="fecharPix">×</button>
        <h3>QR Code PIX (simulação)</h3>
        <img :src="qrCodeUrl" alt="QR Code PIX" class="pix-qr" />
        <p class="pix-key">Chave PIX: {{ chavePix }}</p>
        <div class="modal-actions">
          <button class="confirm-btn" @click="confirmarPagamento">Confirmar Pagamento</button>
          <button class="cancel-btn" @click="fecharPix">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  display: flex;
  justify-content: flex-start;
  padding: 2rem;
  min-height: 100vh;
}
.despesas-view {
  flex: 1;
  max-width: 1000px;
  width: 100%;
  font-family: "Poppins", sans-serif;
}
h1 {
  color: black;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: left;
}
h2 {
  font-size: 1rem;
  color: black;
  margin-bottom: 2rem;
  text-align: left;
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
  transition: box-shadow 0.3s ease, transform 0.3s ease; /* animação */
}
.card:hover {
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  transform: translateY(-3px); /* levanta */
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
.aluguel {
  border: 2px solid #6F0A0C;
}
.pay-btn {
  background: linear-gradient(to right, #6F0A0C, #be7676);
  border: none;
  color: white;
  font-weight: bold;
  padding: 8px 40px;
  border-radius: 8px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
}
.pay-btn:hover {
  opacity: 0.9;
}
.pago-label {
  font-weight: bold;
  color: green;
  font-size: 1.1rem;
  font-family: "Poppins", sans-serif;
}
/* Overlay do modal */
.pix-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  font-family: "Poppins", sans-serif;
}
/* Caixa do modal */
.pix-modal {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  max-width: 350px;
  width: 90%;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  position: relative;
}
/* Botão de fechar */
.close-btn {
  position: absolute;
  top: 10px;
  right: 12px;
  border: none;
  background: none;
  font-size: 1.5rem;
  cursor: pointer;
}
.pix-qr {
  margin: 1rem auto;
  width: 200px;
}
.pix-key {
  font-family: monospace;
  font-size: 0.9rem;
  color: #333;
  margin-top: 0.5rem;
}
/* Botões do modal */
.modal-actions {
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
}
.confirm-btn {
  background: #28a745;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
}
.cancel-btn {
  background: #dc3545;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
}
.confirm-btn:hover,
.cancel-btn:hover {
  opacity: 0.9;
}
</style>