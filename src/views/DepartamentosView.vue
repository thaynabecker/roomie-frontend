<template>
  <div class="departamento-conteudo">
    <h1 class="titulo">Departamento de Limpeza</h1>
    <div class="tarefas">
      <div class="coluna">
        <h2>Tarefas Pendentes</h2>
        <div class="card">
          <img src="/src/assets/img/vassoura.png" class="icone" />
          <h3>Varrer a casa</h3>
          <p class="prazo">Hoje até 12h</p>
          <button class="btn-pendente">Concluir</button>
        </div>
        <div class="card">
          <img src="/src/assets/img/reciclar.png" class="icone" />
          <h3>Levar o lixo</h3>
          <p class="prazo">Hoje até 10h</p>
          <button class="btn-pendente">Concluir</button>
        </div>
      </div>
      <div class="coluna">
        <h2>Tarefas Concluídas</h2>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.departamento-conteudo {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 100%;
}

.titulo {
  font-size: 2rem;
  text-align: center;
}

.tarefas {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.coluna {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card {
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.icone {
  width: 40px;
  height: 40px;
}

.prazo {
  font-size: 0.9rem;
  color: gray;
}

.btn-pendente {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #4CAF50;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.btn-pendente:hover {
  background-color: #45a049;
}
</style>
