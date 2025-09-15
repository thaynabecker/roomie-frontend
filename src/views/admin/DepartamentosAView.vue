<template>
    <section class="main">
        <p>Selecione um departamento</p>
        <h1>Departamento de limpeza</h1>
        <div class="tarefas">
        <div class="pendentes">
            <h2>Tarefas pendentes</h2>
            <div class="blocos">
                <img src="" alt="">
                <h3>Varrer a casa</h3>
                <p>Prazo: Hoje ás 12h</p>
                <button>Concluir tarefa</button>
            </div>
        </div>
        <div class="concluidas">
            <h2>Tarefas concluidas</h2>
            <div class="blocos">
                <img src="" alt="">
                <h3>Varrer a casa</h3>
                <p>Prazo: Hoje ás 12h</p>
                <button>Concluir tarefa</button>
            </div>
        </div>
        </div>
    </section>
</template>

<style scoped>
.tarefas {
    justify-content: center;
    display: flex;
    gap: 30vw;
}

.pendentes{
    text-align: center;
}
.blocos {
     background-color: #6F0A0C;
}

</style>
