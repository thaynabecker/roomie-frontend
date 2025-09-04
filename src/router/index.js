import { createRouter, createWebHistory } from 'vue-router'
// cadastro
import PaginaInicialView from '@/views/cadastro/PaginaInicialView.vue'
import CadastroRepublicaView from '@/views/cadastro/CadastroRepublicaView.vue'
import CadastroAdministradorView from '@/views/cadastro/CadastroAdministradorView.vue'
import CadastroMoradorView from '@/views/cadastro/CadastroMoradorView.vue'
import EntrarAdminView from '@/views/cadastro/EntrarAdminView.vue'
import EntrarMoradorView from '@/views/cadastro/EntrarMoradorView.vue'
// admin
import InicioAView from '@/views/admin/InicioAView.vue'
import DespesasAView from '@/views/admin/DespesasAView.vue'
import DepartamentosAView from '@/views/admin/DepartamentosAView.vue'
import MuralAView from '@/views/admin/MuralAView.vue'
import MoradoresAView from '@/views/admin/MoradoresAView.vue'
import SobreAView from '@/views/admin/SobreAView.vue'
// morador
import InicioMView from '@/views/morador/InicioMView.vue'
import DespesaMView from '@/views/morador/DespesasMView.vue'
import DepartamentosMView from '@/views/morador/DepartamentosMView.vue'
import MuralMView from '@/views/morador/MuralMView.vue'
import MoradoresMView from '@/views/morador/MoradoresMView.vue'
import SobreMView from '@/views/morador/SobreMView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  // Cadastro  
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
      path: '/entraradmin',
      name: 'EntrarAdmin',
      component: EntrarAdminView,
      meta: { layout: 'blank' }
    },
    {
      path: '/entrarmorador',
      name: 'EntrarMorador',
      component: EntrarMoradorView,
      meta: { layout: 'blank' }
    },
  // Admin
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
      component: DepartamentosAView,
    },
    {
      path: '/muraladmin',
      name: 'MuralAdmin',
      component: MuralAView,
    },
    {
      path: '/moradoresadmin',
      name: 'MoradoresAdmin',
      component: MoradoresAView,
    },
    {
      path: '/sobreadmin',
      name: 'SobreAdmin',
      component: SobreAView,
    },
    // morador
    {
      path: '/iniciomorador',
      name: 'InicioMorador',
      component: InicioMView,
    },
    {
      path: '/despesasmorador',
      name: 'DespesasMorador',
      component: DespesaMView,
    },
    {
      path: '/departamentosmorador',
      name: 'DepartamentosMorador',
      component: DepartamentosMView,
    },
    {
      path: '/muralmorador',
      name: 'MuralMorador',
      component: MuralMView,
    },
    {
      path: '/moradoresmorador',
      name: 'MoradoresMorador',
      component: MoradoresMView,
    },
    {
      path: '/sobremorador',
      name: 'SobreMorador',
      component: SobreMView,
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
