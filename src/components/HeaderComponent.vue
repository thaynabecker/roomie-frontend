<script setup>
import { ref } from "vue";
const searchQuery = ref('')
</script>
<template>
    <div class="barra-pesquisa">
        <input type="text" placeholder="Pesquisar" v-model="searchQuery" />
        <span class="material-icons">search</span>
    </div>
</template>
<style scoped>

.barra-pesquisa {
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  padding: 3px 15px;
  margin: 0.7vw 5vw 0 5vw;
  border-radius: 15px;
}
.barra-pesquisa input {
  border: none;
  outline: none;
  background: transparent;
  color: #003366;
  font-size: 14px;
  padding: 5px 0 5px 0;
  flex-grow: 1;
}
.barra-pesquisa span {
  color: #660000;
  font-size: 18px;
  margin-left: 70px;
  cursor: pointer;
}
</style>
