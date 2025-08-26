<template>
    <section class="main">
        <h1>conteudo</h1>
    </section>
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
