import { createRouter, createWebHistory } from 'vue-router'
import PaginaInicialView from '@/views/cadastro/PaginaInicialView.vue'
import CadastroRepublicaView from '@/views/cadastro/CadastroRepublicaView.vue'
import CadastroAdministradorView from '@/views/cadastro/CadastroAdministradorView.vue'
import CadastroMoradorView from '@/views/cadastro/CadastroMoradorView.vue'
import InicioAView from '@/views/admin/InicioAView.vue'
import DespesasAView from '@/views/admin/DespesasAView.vue'


import Despesas from '@/views/admin/DespesasAView.vue'
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
      name: 'PaginaInicial',
      component: PaginaInicialView,
      meta: { layout: 'blank' }
    },
    {
      path: '/cadastrorepublica',
      name: 'CadastroRepublica',
      component: CadastroRepublicaView,
      meta: { layout: 'blank' }
    },
    {
      path: '/cadastroadministrador',
      name: 'CadastroAdministrador',
      component: CadastroAdministradorView,
      meta: { layout: 'blank' }
    },
    {
      path: '/cadastromorador',
      name: 'CadastroMorador',
      component: CadastroMoradorView,
      meta: { layout: 'blank' }
    },
    {
      path: '/admin/inicio',
      name: 'InicioAdmin',
      component: InicioAView,
    },
    {
      path: '/admin/despesas',
      name: 'DespesasAdmin',
      component: DespesasAView,
    },

    //

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
