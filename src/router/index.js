import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '@/views/InicioView.vue'
import Despesas from '@/views/DespesasView.vue'
import Departamentos from '@/views/DepartamentosView.vue'
import Mural from '@/views/MuralView.vue'
import Moradores from '@/views/MoradoresView.vue'
import Sobre from '@/views/SobreView.vue';
import Login from '@/components/LoginComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio,
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
