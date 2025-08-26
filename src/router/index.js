import { createRouter, createWebHistory } from 'vue-router'
import InicioCadastroView from '@/views/cadastro/InicioCadastroView.vue'
import Despesas from '@/views/admin/DespesasViewA.vue'
import Departamentos from '@/views/admin/DepartamentosAView.vue'
import Mural from '@/views/admin/MuralAView.vue'
import Moradores from '@/views/admin/MoradoresAView.vue'
import Sobre from '@/views/admin/SobreAView.vue';
import Login from '@/components/LoginComponent.vue'

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
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
})


router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("access");
  if (to.meta.requiresAuth && !token) {
    next("/login");
  } else {
    next();
  }
});


export default router
