import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '@/views/InicioView.vue'
import Despesas from '@/views/DespesasMView.vue'
import Departamentos from '@/views/DepartamentosView.vue'
import Mural from '@/views/MuralView.vue'
import Moradores from '@/views/MoradoresView.vue'
import Sobre from '@/views/SobreView.vue';
import Perfil from '@/views/PerfilView.vue'
import CadastroAdmin from '@/views/CadastroAdministradorView.vue'
import DespesasAdmin from '@/views/DespesasAView.vue'

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
      path: '/perfil',
      name: 'Perfil',
      component: Perfil,
    },
    {
      path: '/cadastroadmin',
      name: 'CadastroAdmin',
      component: CadastroAdmin,
    },
    {
      path: '/despesasadmin',
      name: 'DespesasAdmin',
      component: DespesasAdmin,
    },
  ],
})

export default router