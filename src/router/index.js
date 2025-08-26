import { createRouter, createWebHistory } from 'vue-router'
import InicioCadastroView from '@/views/cadastro/InicioCadastroView.vue'
import Despesas from '@/views/admin/DespesasViewA.vue'
import Departamentos from '@/views/admin/DepartamentosAView.vue'
import Mural from '@/views/admin/MuralAView.vue'
import Moradores from '@/views/admin/MoradoresAView.vue'
import Sobre from '@/views/admin/SobreAView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path: '/',
      name: 'InicioCadastro',
      component: InicioCadastroView,
      meta: { layout: 'blank' }
    },
    {
      path: '/despesas',
      name: 'Despesas',
      component: Despesas,
    },
    {
      path: '/departamentos',
      name: 'Departamentos',
      component: Departamentos,
    },
    {
      path: '/mural',
      name: 'Mural',
      component: Mural,
    },
    {
      path: '/moradores',
      name: 'Moradores',
      component: Moradores,
    },
    {
      path: '/sobre',
      name: 'Sobre',
      component: Sobre,
    },
  ],
})

export default router
