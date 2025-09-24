<script setup>
import { ref } from "vue";
const searchQuery = ref('')

function buscar() {
  console.log("Buscando:", searchQuery.value);
}
</script>

<template>
  <div class="barra-pesquisa">
    <input
      type="text"
      placeholder="Pesquisar..."
      v-model="searchQuery"
    />
    <button @click="buscar">
      <span class="material-symbols-outlined">search</span>
    </button>
  </div>
</template>

<style scoped>
.barra-pesquisa {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 10px 15px;
  border-radius: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  width: 300px;
  max-width: 100%;
  transition: width 0.3s ease;
}

.barra-pesquisa input {
  border: none;
  outline: none;
  background: transparent;
  flex: 1;
  font-size: 16px;
}

.barra-pesquisa button {
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: #555;
  font-size: 18px;
}

/* RESPONSIVO */
@media (max-width: 900px) {
  .barra-pesquisa {
    width: 260px; /* aumentei um pouco */
    padding: 8px 12px;
  }
  .barra-pesquisa input {
    font-size: 14px;
  }
  .barra-pesquisa button {
    font-size: 16px;
  }
}

@media (max-width: 500px) {
  .barra-pesquisa {
    width: 200px; /* aumentei um pouco para caber a lupa */
    padding: 6px 10px;
  }
  .barra-pesquisa input {
    font-size: 12px;
  }
  .barra-pesquisa button {
    font-size: 14px;
  }
}
</style>
