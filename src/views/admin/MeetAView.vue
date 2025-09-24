<script setup>
import { ref } from "vue";

const showForm = ref(false);
const title = ref("");
const description = ref("");
const date = ref("");
const startTime = ref("");
const endTime = ref("");

function scheduleMeeting() {
  if (!title.value || !date.value || !startTime.value || !endTime.value) {
    alert("Preencha todos os campos obrigatórios!");
    return;
  }

  alert(
    `✅ Reunião marcada com sucesso!\n\n` +
      `Título: ${title.value}\n` +
      `Descrição: ${description.value}\n` +
      `Data: ${date.value}\n` +
      `Horário: ${startTime.value} até ${endTime.value}`
  );

  title.value = "";
  description.value = "";
  date.value = "";
  startTime.value = "";
  endTime.value = "";
  showForm.value = false;
}
</script>

<template>
  <section class="video-call">
    <button class="schedule-btn" @click="showForm = !showForm">Marcar reunião</button>

    <h2>Chamada de vídeo</h2>

    <div class="iframe-wrapper">
      <iframe
        src="https://meet.jit.si/ReuniaoAdmins"
        allow="camera; microphone; fullscreen; display-capture"
      ></iframe>
      <img src="@/assets/img/ROOMIE-LOGO.png" alt="Roomie" class="logo-overlay" />
    </div>

    <!-- Transição suave -->
    <transition name="fade">
      <div v-if="showForm" class="schedule-form">
        <input v-model="title" placeholder="Título" />
        <textarea v-model="description" placeholder="Descrição"></textarea>
        <input type="date" v-model="date" />
        <div class="time-range">
          <input type="time" v-model="startTime" />
          <span>até</span>
          <input type="time" v-model="endTime" />
        </div>
        <button @click="scheduleMeeting">Confirmar</button>
      </div>
    </transition>
  </section>
</template>

<style scoped>
.video-call {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  font-family: "Poppins", sans-serif;
}

/* Botão no canto esquerdo */
.schedule-btn {
  position: absolute;
  top: 0;
  left: 0;
  margin: 10px;
  padding: 10px 20px;
  background: #6f0a0c;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  transition: background 0.2s ease-in-out;
}

.schedule-btn:hover {
  background: #920e11;
}

.iframe-wrapper {
  position: relative;
  width: 100%;
  max-width: 800px;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.iframe-wrapper iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.logo-overlay {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 80px;
  opacity: 0.8;
}

/* Form sobrepondo botão */
.schedule-form {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 400px;
  background: #f9f9f9;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.schedule-form input,
.schedule-form textarea {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
}

.time-range {
  display: flex;
  align-items: center;
  gap: 8px;
}

.schedule-form button {
  padding: 10px;
  background: #6f0a0c;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

.schedule-form button:hover {
  background: #920e11;
}

/* Transição suave */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
