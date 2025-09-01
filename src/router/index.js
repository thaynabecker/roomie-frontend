import { createRouter, createWebHistory } from 'vue-router'
import PaginaInicialView from '@/views/cadastro/PaginaInicialView.vue'
import CadastroRepublicaView from '@/views/cadastro/CadastroRepublicaView.vue'
import CadastroAdministradorView from '@/views/cadastro/CadastroAdministradorView.vue'
import CadastroMoradorView from '@/views/cadastro/CadastroMoradorView.vue'
import InicioAView from '@/views/admin/InicioAView.vue'
import DespesasAView from '@/views/admin/DespesasAView.vue'
import DepartamentosAdmin from '@/views/admin/DepartamentosAView.vue'
import MoradoresAdmin from '@/views/admin/MoradoresAView.vue'
import MuralAdmin from '@/views/admin/MuralAView.vue'
import SobreAdmin from '@/views/admin/SobreAView.vue'


import Despesas from '@/views/morador/DespesasMView.vue'
import Departamentos from '@/views/morador/DepartamentosMView.vue'
import Mural from '@/views/morador/MuralMView.vue'
import Moradores from '@/views/morador/MoradoresMView.vue'
import Sobre from '@/views/morador/SobreMView.vue';
import Login from '@/components/LoginComponent.vue'
import Inicio from '@/views/morador/InicioMView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {

      //ADMIN E CADASTROS

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
      path: '/inicioadmin',
      name: 'InicioAdmin',
      component: InicioAView,
    },
    {
      path: '/despesasadmin',
      name: 'DespesasAdmin',
      component: DespesasAView,
    },
    {
      path: '/departamentosadmin',
      name: 'DepartamentosAdmin',
      component: DepartamentosAdmin,
    },
    {
      path: '/moradoresadmin',
      name: 'MoradoresAdmin',
      component: MoradoresAdmin,
    },
    {
      path: '/muraladmin',
      name: 'MuralAdmin',
      component: MuralAdmin,
    },
    {
      path: '/sobreadmin',
      name: 'SobreAdmin',
      component: SobreAdmin,
    },

    //MORADOR

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
      path: '/inicio',
      name: 'Inicio',
      component: Inicio,
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