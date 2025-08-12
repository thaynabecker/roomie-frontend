<template>
  <main class="home-container">
    <!-- Topo com perfil -->
    <div class="top-bar">
      <div class="profile">
        <img
          class="profile-avatar"
          :src="user.avatar"
          :alt="user.name"
        />
        <div class="profile-info">
          <p class="profile-name">{{ user.name }}</p>
          <p class="profile-role">{{ user.role }}</p>
        </div>
      </div>
    </div>

    <!-- Boas-vindas -->
    <section class="welcome-card">
      <p class="date">{{ currentDate }}</p>
      <h1>Bem-vindo, {{ user.name }}!</h1>
      <p class="subtitle">Organização começa por aqui: confira suas atividades diárias</p>
    </section>

    <div class="content-grid">
      <!-- Próximas tarefas -->
      <section class="tasks-card">
        <h2>Próximas tarefas</h2>
        <div class="tasks-list">
          <div v-for="task in tasks" :key="task.id" class="task-card">
            <span class="task-icon" v-html="task.icon"></span>
            <p class="task-name">{{ task.name }}</p>
            <small class="task-status">{{ task.status }}</small>
          </div>
        </div>
      </section>

      <!-- Administradores -->
      <section class="admins-card">
        <h2>Administradores</h2>
        <div class="admins-list">
          <img
            v-for="admin in admins"
            :key="admin.id"
            :src="admin.avatar"
            :alt="admin.name"
            class="admin-avatar"
          />
        </div>
        <a href="#" class="see-all">Ver tudo</a>
      </section>

      <!-- Desempenho Semanal -->
      <section class="performance-card">
        <h2>Desempenho Semanal</h2>
        <div class="performance-list">
          <div class="performance-label">Destaques da semana</div>
          <div class="performance-avatars">
            <img
              v-for="highlight in highlights"
              :key="highlight.id"
              :src="highlight.avatar"
              :alt="highlight.name"
              class="highlight-avatar"
            />
          </div>
        </div>
      </section>

      <!-- Avisos -->
      <section class="notices-card">
        <h2>Avisos</h2>
        <ul>
          <li v-for="notice in notices" :key="notice.id">
            <span class="notice-title">{{ notice.title }}</span> –
            <strong>{{ notice.date }}</strong>
            <a href="#" class="see-more">Veja mais</a>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "InicioView",
  data() {
    return {
      currentDate: new Date().toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      user: {
        name: "Amanda Eduarda",
        role: "Morador",
        avatar: "https://i.pravatar.cc/150?img=15",
      },
      tasks: [
        {
          id: 1,
          name: "Varrer a casa",
          status: "Incompleto",
          icon: "🧹", // pode ser SVG se quiser
        },
        {
          id: 2,
          name: "Tirar o lixo",
          status: "Incompleto",
          icon: "🗑️",
        },
        {
          id: 3,
          name: "Lavar a louça",
          status: "Others",
          icon: "🧼",
        },
      ],
      admins: [
        { id: 1, name: "Admin 1", avatar: "https://i.pravatar.cc/150?img=10" },
        { id: 2, name: "Admin 2", avatar: "https://i.pravatar.cc/150?img=20" },
        { id: 3, name: "Admin 3", avatar: "https://i.pravatar.cc/150?img=30" },
      ],
      highlights: [
        { id: 1, name: "Amanda", avatar: "https://i.pravatar.cc/150?img=15" },
        { id: 2, name: "Amanda", avatar: "https://i.pravatar.cc/150?img=15" },
        { id: 3, name: "Amanda", avatar: "https://i.pravatar.cc/150?img=15" },
      ],
      notices: [
        { id: 1, title: "Mutirão de Limpeza – Sábado", date: "06/07" },
        { id: 2, title: "Reunião Geral – Segunda", date: "07/07" },
        { id: 3, title: "Festa Junina – Domingo", date: "29/06" },
      ],
    };
  },
};
</script>
