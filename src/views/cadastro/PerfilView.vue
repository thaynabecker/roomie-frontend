<script setup>
import { ref } from 'vue'
import icon from '@/assets/img/icon.png'

// Simulando dados do banco:
const usuario = ref({
<<<<<<< HEAD
  nome: 'Amanda Santos',
  nascimento: '12/09/2000',
=======
  nome: 'Amanda Eduarda',
  nascimento: '12/03/2000',
>>>>>>> 6a62e93 (FIX: adjusting)
  email: 'amanda@email.com',
  entrada: '05/07/2024'
})

// Estado de edição
const editando = ref(false)

// Campos temporários para edição
const tempUsuario = ref({ ...usuario.value })

const salvarAlteracoes = () => {
  usuario.value.nome = tempUsuario.value.nome
  usuario.value.nascimento = tempUsuario.value.nascimento
  usuario.value.email = tempUsuario.value.email
  editando.value = false
}

const cancelarEdicao = () => {
  tempUsuario.value = { ...usuario.value }
  editando.value = false
}
</script>

<template>
  <div class="perfil">
    <main class="main">
      <div>
        <div class="textos">
          <h1>Meu perfil</h1>
          <p>Seu perfil com suas informações</p>
        </div>

        <div class="conteudo">
          <div class="foto-container">
            <img :src="icon" alt="Ícone de usuário" />
          </div>

          <div class="infos">
            <div class="campo">
              <template v-if="!editando">Nome Completo: {{ usuario.nome }}</template>
              <template v-else>
                Nome Completo:
                <input v-model="tempUsuario.nome" type="text" />
              </template>
            </div>

            <div class="campo">
              <template v-if="!editando">Data de Nascimento: {{ usuario.nascimento }}</template>
              <template v-else>
                Data de Nascimento:
                <input v-model="tempUsuario.nascimento" type="text" />
              </template>
            </div>

            <div class="campo">
              <template v-if="!editando">Email: {{ usuario.email }}</template>
              <template v-else>
                Email:
                <input v-model="tempUsuario.email" type="email" />
              </template>
            </div>

            <div class="campo">
              Data de Entrada: {{ usuario.entrada }}
            </div>

            <div class="botoes" v-if="editando">
              <button class="btn-salvar" @click="salvarAlteracoes">Salvar</button>
              <button class="btn-cancelar" @click="cancelarEdicao">Cancelar</button>
            </div>

<<<<<<< HEAD
            <div class="botoes" v-else>
              <button class="btn-editar" @click="editando = true">Editar</button>
              <button class="btn-excluir" @click="editando = true">Excluir conta</button>
=======
            <div v-else>
              <button class="btn-editar" @click="editando = true">Editar</button>
>>>>>>> 6a62e93 (FIX: adjusting)
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  font-family: "Poppins", sans-serif;
}
<<<<<<< HEAD

=======
>>>>>>> 6a62e93 (FIX: adjusting)
.perfil {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #000;
}
<<<<<<< HEAD

.textos {
  text-align: left;
}

=======
.textos {
  text-align: left;
}
>>>>>>> 6a62e93 (FIX: adjusting)
.textos h1 {
  font-size: xx-large;
  font-weight: bold;
  margin: 0 0 4px;
}
<<<<<<< HEAD

=======
>>>>>>> 6a62e93 (FIX: adjusting)
.textos p {
  font-size: 14px;
  color: #666;
  margin: 0;
}
<<<<<<< HEAD

=======
>>>>>>> 6a62e93 (FIX: adjusting)
.conteudo {
  display: flex;
  align-items: center;
  gap: 60px;
}
<<<<<<< HEAD

=======
>>>>>>> 6a62e93 (FIX: adjusting)
.foto-container img {
  width: 300px;
  height: 300px;
  padding: 16px;
}
<<<<<<< HEAD

=======
>>>>>>> 6a62e93 (FIX: adjusting)
.infos {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
<<<<<<< HEAD

=======
>>>>>>> 6a62e93 (FIX: adjusting)
.campo {
  font-size: 20px;
  background-color: #7A0C0C;
  color: white;
  padding: 12px 20px;
  border-radius: 12px;
  font-weight: bold;
  min-width: 400px;
}
<<<<<<< HEAD

=======
>>>>>>> 6a62e93 (FIX: adjusting)
input {
  font-size: 18px;
  padding: 6px 10px;
  border-radius: 8px;
  border: none;
  width: calc(100% - 20px);
  margin-top: 4px;
}
<<<<<<< HEAD

/* Container dos botões */
.botoes {
  display: flex;
  gap: 12px; /* espaçamento entre os botões */
  margin-top: 12px;
}

/* Botões */
button {
=======
button {
  margin-top: 12px;
>>>>>>> 6a62e93 (FIX: adjusting)
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease; /* animação suave */
<<<<<<< HEAD
  font-family: "Poppins", sans-serif;
}

/* Botões de edição */
.btn-editar {
  background-color: #28a745;
  color: white;
}
.btn-editar:hover {
  transform: scale(1.05);
}

/* Botão de exclusão */
.btn-excluir {
  background-color: #dc3545;
  color: white;
}
.btn-excluir:hover {
  background-color: #e74c55;
  transform: scale(1.05);
}

/* Botão salvar */
.btn-salvar {
  background-color: #28a745;
  color: white;
=======
}
.btn-editar {
  background-color: #7A0C0C;
  color: white;
  font-family: "Poppins", sans-serif;
}
.btn-editar:hover {
  background-color: #a00f0f;
  transform: scale(1.05);
}
.btn-salvar {
  background-color: #28a745;
  color: white;
  margin-right: 8px;
  font-family: "Poppins", sans-serif;
>>>>>>> 6a62e93 (FIX: adjusting)
}
.btn-salvar:hover {
  background-color: #36c05f;
  transform: scale(1.05);
}
<<<<<<< HEAD

/* Botão cancelar */
.btn-cancelar {
  background-color: #dc3545;
  color: white;
=======
.btn-cancelar {
  background-color: #dc3545;
  color: white;
  font-family: "Poppins", sans-serif;
>>>>>>> 6a62e93 (FIX: adjusting)
}
.btn-cancelar:hover {
  background-color: #e74c55;
  transform: scale(1.05);
}
</style>
