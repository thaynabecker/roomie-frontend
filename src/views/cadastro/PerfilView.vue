<script setup>
import { ref } from 'vue'
import icon from '@/assets/img/icon.png'

// Simulando dados do banco:
const usuario = ref({
  nome: 'Amanda Santos',
  nascimento: '12/09/2000',
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

            <div class="botoes" v-else>
              <button class="btn-editar" @click="editando = true">Editar</button>
              <button class="btn-excluir" @click="editando = true">Excluir conta</button>
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

.perfil {
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #000;
}

.textos {
  text-align: left;
  margin-bottom: 20px;
}

.textos h1 {
  font-size: 2rem;
  font-weight: bold;
  margin: 0 0 4px;
}

.textos p {
  font-size: 13px;
  color: #666;
  margin: 0;
}

.conteudo {
  display: flex;
  align-items: center;
  gap: 40px;
}

.foto-container img {
  width: 260px;
  height: 260px;
  padding: 16px;
}

.infos {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.campo {
  font-size: 18px;
  background-color: #7A0C0C;
  color: white;
  padding: 12px 18px;
  border-radius: 12px;
  font-weight: bold;
  min-width: 400px;
}

input {
  font-size: 16px;
  padding: 6px 10px;
  border-radius: 8px;
  border: none;
  width: calc(100% - 20px);
  margin-top: 4px;
}

.botoes {
  display: flex;
  gap: 12px;
  margin-top: 12px;
}

button {
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: "Poppins", sans-serif;
}

.btn-editar {
  background-color: #28a745;
  color: white;
}
.btn-editar:hover {
  transform: scale(1.05);
}

.btn-excluir {
  background-color: #dc3545;
  color: white;
}
.btn-excluir:hover {
  background-color: #e74c55;
  transform: scale(1.05);
}

.btn-salvar {
  background-color: #28a745;
  color: white;
}
.btn-salvar:hover {
  background-color: #36c05f;
  transform: scale(1.05);
}

.btn-cancelar {
  background-color: #dc3545;
  color: white;
}
.btn-cancelar:hover {
  background-color: #e74c55;
  transform: scale(1.05);
}

/* RESPONSIVO */
@media (max-width: 900px) {
  .perfil {
    align-items: center; /* centraliza horizontalmente */
  }

  .conteudo {
    flex-direction: column;
    gap: 25px;
    align-items: center; /* centraliza foto e infos */
  }

  .foto-container img {
    width: 180px;
    height: 180px;
  }

  .campo {
    font-size: 16px;
    min-width: 90%;
  }

  input {
    font-size: 15px;
    width: 100%;
  }
}

@media (max-width: 480px) {
  .perfil {
    padding: 10px 20px;
    align-items: center;
  }

  .textos h1 {
    font-size: 1.4rem;
  }
  .textos p {
    font-size: 12px;
  }

  .foto-container img {
    width: 130px;
    height: 130px;
  }

  .campo {
    font-size: 14px;
    padding: 10px 12px;
  }

  input {
    font-size: 13px;
  }

  .botoes {
    flex-direction: column;
    gap: 8px;
  }

  button {
    width: 100%;
  }
}
</style>
