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

</style>