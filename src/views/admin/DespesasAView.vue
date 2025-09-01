<script setup>
import { ref } from "vue"

// Valores totais (1º card)
const despesasTotal = ref(35000)
const arrecadacoesTotal = ref(4000)

// Listas do 1º card (mantidas)
const despesas = ref([
  { valor: 1000, descricao: "" },
  { valor: 1000, descricao: "" },
  { valor: 1000, descricao: "" }
])

const arrecadacoes = ref([
  { valor: 1000, descricao: "" },
  { valor: 1000, descricao: "" },
  { valor: 1000, descricao: "" }
])

// Formatar moeda
const formatarMoeda = (valor) => {
  return Number(valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}

// Helpers
const parseValor = (txt) => {
  if (txt === null || txt === undefined) return NaN
  return Number(String(txt).replace(/\s/g, "").replace(/\./g, "").replace(",", "."))
}
const somaValores = (lista) =>
  lista.reduce((acc, item) => acc + (Number(item.valor) || 0), 0)

// >>> Adicionar linha (1º card) — abre prompts e só depois adiciona
const adicionarLinha = () => {
  const dv = prompt("Despesa - valor (ex: 123,45):")
  if (dv === null) return
  const dd = prompt("Despesa - descrição:")
  if (dd === null) return

  const av = prompt("Arrecadação - valor (ex: 123,45):")
  if (av === null) return
  const ad = prompt("Arrecadação - descrição:")
  if (ad === null) return

  const dvNum = parseValor(dv)
  const avNum = parseValor(av)
  if (!isFinite(dvNum) || !isFinite(avNum)) {
    alert("Valor inválido. Tente novamente.")
    return
  }

  despesas.value.push({ valor: dvNum, descricao: (dd || "").trim() })
  arrecadacoes.value.push({ valor: avNum, descricao: (ad || "").trim() })

  // atualiza totais do 1º card
  despesasTotal.value = somaValores(despesas.value)
  arrecadacoesTotal.value = somaValores(arrecadacoes.value)
}

// >>> Tabelas extras (novos cards)
const extras = ref([]) // cada item: { despesas, arrecadacoes, despesasTotal, arrecadacoesTotal }

const adicionarTabela = () => {
  extras.value.push({
    despesas: [],
    arrecadacoes: [],
    despesasTotal: 0,
    arrecadacoesTotal: 0
  })
}

// adicionar linha para um card extra específico
const adicionarLinhaExtra = (tabela) => {
  const dv = prompt("Despesa - valor (ex: 123,45):")
  if (dv === null) return
  const dd = prompt("Despesa - descrição:")
  if (dd === null) return

  const av = prompt("Arrecadação - valor (ex: 123,45):")
  if (av === null) return
  const ad = prompt("Arrecadação - descrição:")
  if (ad === null) return

  const dvNum = parseValor(dv)
  const avNum = parseValor(av)
  if (!isFinite(dvNum) || !isFinite(avNum)) {
    alert("Valor inválido. Tente novamente.")
    return
  }

  tabela.despesas.push({ valor: dvNum, descricao: (dd || "").trim() })
  tabela.arrecadacoes.push({ valor: avNum, descricao: (ad || "").trim() })
  tabela.despesasTotal = somaValores(tabela.despesas)
  tabela.arrecadacoesTotal = somaValores(tabela.arrecadacoes)
}

// Controle do "Ver mais" (mantido)
const mostrarMais = ref(false)
const toggleMostrarMais = () => {
  mostrarMais.value = !mostrarMais.value
}
</script>

<template>
  <div class="background">
    <div class="financeiro-view">
      <h1>Financeiro</h1>
      <h2>Financeiro da república. Todos os gastos e ganhos.</h2>

      <!-- Bloco de resumo -->
      <section class="resumo card">
        <img src="@/assets/img/coins.png" alt="moedas">
        <h3>Despesas e Arrecadações</h3>
        <p>Balanço geral das finanças da instituição.</p>
        <button class="link-btn" @click="toggleMostrarMais">
          {{ mostrarMais ? "Ver menos" : "Ver mais" }}
        </button>
      </section>

      <!-- Ver mais: wrapper -->
      <template v-if="mostrarMais">

        <!-- CARD 1 (original) -->
        <section class="detalhes">
          <!-- Totais -->
          <div class="totais">
            <div>
              <h3>{{ formatarMoeda(despesasTotal) }}</h3>
              <p>Despesa total</p>
            </div>
            <div>
              <h3>{{ formatarMoeda(arrecadacoesTotal) }}</h3>
              <p>Arrecadações totais</p>
            </div>
          </div>

          <!-- Tabela -->
          <div class="tabelas">
            <table>
              <thead>
                <tr>
                  <th>Despesas</th>
                  <th>Arrecadações</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(d, index) in despesas" :key="index">
                  <td>
                    {{ formatarMoeda(d.valor) }}<br>
                    descrição: {{ d.descricao || "—" }}
                  </td>
                  <td v-if="arrecadacoes[index]">
                    {{ formatarMoeda(arrecadacoes[index].valor) }}<br>
                    descrição: {{ arrecadacoes[index].descricao || "—" }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Botões -->
          <div class="actions">
            <button class="btn" @click="adicionarTabela">adicionar tabela</button>
            <button class="btn" @click="adicionarLinha">adicionar linha</button>
          </div>
        </section>

        <!-- CARDS EXTRAS (iguais ao 2º card, vazios ao criar) -->
        <section
          v-for="(tabela, i) in extras"
          :key="'extra-' + i"
          class="detalhes"
        >
          <!-- Totais -->
          <div class="totais">
            <div>
              <h3>{{ formatarMoeda(tabela.despesasTotal) }}</h3>
              <p>Despesa total</p>
            </div>
            <div>
              <h3>{{ formatarMoeda(tabela.arrecadacoesTotal) }}</h3>
              <p>Arrecadações totais</p>
            </div>
          </div>

          <!-- Tabela -->
          <div class="tabelas">
            <table>
              <thead>
                <tr>
                  <th>Despesas</th>
                  <th>Arrecadações</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(d, index) in tabela.despesas" :key="index">
                  <td>
                    {{ formatarMoeda(d.valor) }}<br>
                    descrição: {{ d.descricao || "—" }}
                  </td>
                  <td v-if="tabela.arrecadacoes[index]">
                    {{ formatarMoeda(tabela.arrecadacoes[index].valor) }}<br>
                    descrição: {{ tabela.arrecadacoes[index].descricao || "—" }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Botões -->
          <div class="actions">
            <button class="btn" @click="adicionarTabela">adicionar tabela</button>
            <button class="btn" @click="adicionarLinhaExtra(tabela)">adicionar linha</button>
          </div>
        </section>

      </template>
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
.financeiro-view {
  flex: 1;
  max-width: 1000px;
  width: 100%;
}
h1 {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: left;
  color: black;
  font-family: "Poppins", sans-serif;
}
h2 {
  font-size: 1rem;
  color: black;
  margin-bottom: 2rem;
  text-align: left;
  font-family: "Poppins", sans-serif;
}
h3 {
  color: black;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
}
p {
    font-family: "Poppins", sans-serif;
}
.card {
  background: #fff;
  padding: 1.5rem;
  margin: 1rem 0;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  text-align: center;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.card:hover {
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  transform: translateY(-3px);
}
.link-btn {
  font-size: 1rem;
  background: none;
  border: none;
  color: #6F0A0C;
  font-weight: bold;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
}
.detalhes {
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1rem 0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.totais {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
}
.totais div {
  flex: 1;
  text-align: center;
}
.tabelas {
  overflow-x: auto;
}
.tabelas thead th {
  background-color: #d7d5d5;
  padding: 0.8rem;
  text-align: left;
  font-weight: bold;
  color: black;
  font-family: "Poppins", sans-serif;
}
table {
  width: 100%;
  border-collapse: collapse;
  background: white;
}
th, td {
  border: 1px solid #ccc;
  padding: 0.8rem;
  text-align: left;
  font-family: "Poppins", sans-serif;
}
.actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
}
.btn {
  background: #722E2F;
  border: none;
  color: white;
  font-weight: bold;
  padding: 8px 20px;
  border-radius: 39px;
  cursor: pointer;
  transition: transform 0.2s ease;
  font-family: "Poppins", sans-serif;
}
.btn:hover {
  transform: scale(1.05);
  opacity: 0.9;
}
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> 6a62e93 (FIX: adjusting)
