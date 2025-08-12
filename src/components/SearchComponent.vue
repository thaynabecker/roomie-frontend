<script setup>
import { ref } from "vue";
const searchQuery = ref('')

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
  <div class="login">

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
</style>
