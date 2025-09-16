<template>
  <main class="home-container">
    <!-- Boas-vindas -->
    <section class="welcome-card">
      <p class="date">{{ currentDate }}</p>
      <h1>Bem-vindo(a), estudante!</h1>
      <p class="subtitle">Organização começa por aqui: confira suas atividades diárias</p>
    </section>

    <div class="content-grid">
      <div class="column-one">
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
      </div>
      
      <div class="column-two">
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
        <a href="/moradores" class="see-all">Ver tudo</a>
      </section>

      <!-- Avisos -->
      <section class="notices-card">
        <h2>Avisos</h2>
        <ul>
          <li v-for="notice in notices" :key="notice.id">
            <span class="notice-title">{{ notice.title }}</span>
            <strong>{{ notice.date }}</strong>
            <a href="/mural" class="see-more">Veja mais</a>
          </li>
        </ul>
      </section>
      </div>
    </div>
  </main>
</template>

<script>
import icon from '@/assets/img/icon.png'
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
        avatar: icon, // 🔹 aqui
      },
      tasks: [
        {
          id: 1,
          name: "Varrer a casa",
          status: "Incompleto",
          icon: "🧹",
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
          status: "Incompleto",
          icon: "🧼",
        },
      ],
      admins: [
        { id: 1, name: "Admin 1", avatar: icon }, // 🔹
        { id: 2, name: "Admin 2", avatar: icon }, // 🔹
        { id: 3, name: "Admin 3", avatar: icon }, // 🔹
      ],
      highlights: [
        { id: 1, name: "Amanda", avatar: icon }, // 🔹
        { id: 2, name: "Amanda", avatar: icon }, // 🔹
        { id: 3, name: "Amanda", avatar: icon }, // 🔹
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

<style scoped>
.home-container {
  background-color: white;
  color: black;
  padding-top: 2vw;
  padding-left: 1vw;
}

/*BANNER DE BOAS VINDAS*/
.welcome-card {
  background: linear-gradient(to left, rgba(134, 39, 39, 0.829) 2%, #6F0A0C 20%);
  margin-right: 3vw;
  padding: 3vw;
  border-radius: 20px;
  color: white;
}
.welcome-card p:first-child {
  padding-bottom: 3vw;
}
.welcome-card h1 {
  font-weight: 500;
  font-size: 2vw;
  padding-bottom: 0.7vw;
}
.welcome-card p {
  font-size: 1vw;
  font-weight: 300;
}

/*CONTEUDO PRINCIPAL*/
.content-grid {
  display: flex;
  justify-content: space-between;
  padding-right: 3vw;
  padding-top: 3vw;
}
h2 {
  font-size: 1.2vw;
  font-weight: 500;
  margin-bottom: 1.5vw;
  color: #000000;
}
ul {
  display: flex;
  flex-direction: column;
  gap: 1.5vw;
}
li {
  display: contents;
  line-height: 0.2vw;
  font-size: 1vw;
}

/*CSS COMUM AS DUAS COLUNAS*/
.column-one, .column-two {
  display: flex;
  flex-direction: column;
  gap: 3vw;
}
.performance-list, ul {
  background-color: #ffffff;
  box-shadow: 4px 4px 15px 14px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  padding: 3vw;
}
.performance-avatars, .admins-list {
  display: flex;
  gap: 1vw;
}

/*CSS COLUNA UM*/
.column-one {
  width: 70%;
  margin-right: 3vw;
}
/*CARD TAREFAS CSS*/
.tasks-list {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.task-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vw;
  background: #ffffff;
  border-radius: 15px;
  padding: 3vw;
  width: 31%;
  box-shadow: 4px 4px 15px 14px rgba(0, 0, 0, 0.08);
}
.task-icon {
  font-size: 2vw;
}
.task-name {
  font-size: 1.2vw;
  flex-grow: 1;
  font-weight: 500;
}
.task-status {
  font-size: 1vw;
  color: #888;
}

/*CARD DESEMPENHO CSS*/
.performance-list {
  background-color: #6F0A0C;
  color: white;
  font-size: 1vw;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5vw;
}
.performance-label {
  font-size: 1.3vw;
  width: min-content;
}
.highlight-avatar {
  width: auto;
  height: 6vw;
  margin-left: 2vw;
  border-radius: 50%;
  object-fit: cover;
}

/*CSS COLUNA DOIS*/
.column-two .admin-avatar {
  height: 6vw;
  border-radius: 50%;
  object-fit: cover;
}

/*AVISOS CARD CSS*/
.notices-card ul {
  overflow-y: auto;
}
.see-all, .see-more {
  color: #6F0A0C;
  text-decoration: none;
  font-weight: bold;
  margin-top: 1vw;
  display: inline-block;
}
&:hover {
  text-decoration: underline;
}
.notice-title {
  font-weight: 500;
}
/*MOBILE*/
@media (max-width: 768px) {
  .home-container {
    padding: 2vw 1vw 0 1vw;
  }
  .welcome-card {
    padding: 6vw;
    margin-right: 0;
    border-radius: 15px;
  }
  .welcome-card h1 {
    font-size: 4vw;
  }
  .welcome-card p {
    font-size: 2.5vw;
  }
  .content-grid {
    flex-direction: column;
    padding: 3vw 1vw 0 1vw;
    gap: 6vw;
  }
  .column-one, .column-two {
    width: 100%;
    margin: 0;
    gap: 5vw;
  }
  h2 {
    font-size: 4vw;
    margin-bottom: 3vw;
  }
  ul {
    gap: 3vw;
  }
  li {
    font-size: 3vw;line-height: 1.5vw;
  }
/*TASKS CARD CSS*/
  .tasks-list {
    flex-direction: row;
    gap: 3vw;
  }
  .task-card {
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 4vw;
    gap: 3vw;
  }
  .task-card .task-name, .task-card .task-status {
    font-size: 3vw;
  }
  .task-icon {
    font-size: 6vw;
  }
/*PERFORMANCE CARD CSS*/
  .performance-list {
    flex-direction: row;
    align-items: flex-start;
    padding: 5vw; 
}
  .performance-label {
    font-size: 3vw;
  }
  .highlight-avatar {
    height: 12vw;
    margin-left: 0;
  }
/*ADMINS CARD CSS*/
  .admins-card .admins-list, .admins-card h2 {
    gap: 8vw;
    justify-content: center;
  }
  .admins-list .admin-avatar {
    height: 12vw;

  }
  .see-all, .see-more {
    font-size: 3vw;
    margin-top: 3vw;
  }
}
</style>