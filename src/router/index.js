import { createRouter, createWebHistory } from 'vue-router'

// Views de cadastro (sem layout)
import PaginaInicialView from '@/views/cadastro/PaginaInicialView.vue'
import CadastroRepublicaView from '@/views/cadastro/CadastroRepublicaView.vue'
import CadastroAdministradorView from '@/views/cadastro/CadastroAdministradorView.vue'
import CadastroMoradorView from '@/views/cadastro/CadastroMoradorView.vue'

// Views Morador
import DepartamentosMView from '@/views/morador/DepartamentosMView.vue'
import DespesasMView from '@/views/morador/DespesasMView.vue'
import InicioMView from '@/views/morador/InicioMView.vue'
import MoradoresMView from '@/views/morador/MoradoresMView.vue'
import MuralMView from '@/views/morador/MuralMView.vue'
import SobreMView from '@/views/morador/SobreMView.vue'

// Admin (com layout)
import InicioAView from '@/views/admin/InicioAView.vue'
import DespesasAView from '@/views/admin/DespesasAView.vue'
import DepartamentosAView from '@/views/admin/DepartamentosAView.vue'
import MuralAView from '@/views/admin/MuralAView.vue'
import MoradoresAView from '@/views/admin/MoradoresAView.vue'
import SobreAView from '@/views/admin/SobreAView.vue'

// Login
import LoginComponent from '@/components/LoginComponent.vue'

const routes = [
  // Páginas públicas (sem layout)
  { path: '/', name: 'PaginaInicial', component: PaginaInicialView, meta: { layout: 'blank' } },
  { path: '/cadastrorepublica', name: 'CadastroRepublica', component: CadastroRepublicaView, meta: { layout: 'blank' } },
  { path: '/cadastroadministrador', name: 'CadastroAdministrador', component: CadastroAdministradorView, meta: { layout: 'blank' } },
  { path: '/cadastromorador', name: 'CadastroMorador', component: CadastroMoradorView, meta: { layout: 'blank' } },
  { path: '/login', name: 'Login', component: LoginComponent, meta: { layout: 'blank' } },

  // Páginas Morador (com layout padrão)
  { path: '/departamentos', name: 'Departamentos', component: DepartamentosMView },
  { path: '/despesas', name: 'Despesas', component: DespesasMView },
  { path: '/inicio', name: 'Inicio', component: InicioMView },
  { path: '/moradores', name: 'Moradores', component: MoradoresMView },
  { path: '/mural', name: 'Mural', component: MuralMView },
  { path: '/sobre', name: 'Sobre', component: SobreMView },

  // Páginas Admin (filhas do layout padrão)
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
  {
    path: '/admin/departamentos',
    name: 'DepartamentosAdmin',
    component: DepartamentosAView,
  },
  {
    path: '/admin/mural',
    name: 'MuralAdmin',
    component: MuralAView,
  },
  {
    path: '/admin/moradores',
    name: 'MoradoresAdmin',
    component: MoradoresAView,
  },
  {
    path: '/admin/sobre',
    name: 'SobreAdmin',
    component: SobreAView,
  },

  // Redirecionamento caso rota não exista
  { path: '/:catchAll(.*)', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// 🔓 Modo desenvolvimento: sempre deixa passar
router.beforeEach((to, from, next) => {
  next()
})

export default router