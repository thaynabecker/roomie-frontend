<script>
</script>
<template>
   <section class="video-call">
  <h2>Chamada de vídeo</h2>
  <div class="iframe-wrapper">
    <iframe
      src="https://meet.jit.si/ReuniaoAdmins"
      allow="camera; microphone; fullscreen; display-capture">
    </iframe>
    <img src="@/assets/img/ROOMIE-LOGO.png" alt="Roomie" class="logo-overlay">
  </div>
</section>
</template>
<style scoped>
.video-call {
  border: 2px solid #6F0A0C;
  border-radius: 12px;
  padding: 10px;
  background: #f9f9f9;
  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
}

.video-call h2 {
  color: #6F0A0C;
  margin-bottom: 10px;
}
.iframe-wrapper {
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
}

.iframe-wrapper iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

.logo-overlay {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 50px;
  height: auto;
  z-index: 2;
}
</style>