import Outer from './components/outer.vue';
import HomeComponent from './components/Home.vue';
import NotFound from './components/404.vue';
import recuperarPasswordComponent from './components/recuperarPassword.vue';
import resetearPasswordComponent from './components/resetearPassword.vue';
import Auth from './components/auth/auth.vue';
import IndexComponent from './components/auth/inicio/inicio.vue';
import perfilComponent from './components/auth/perfil/perfil.vue';
import configuracionesComponent from './components/auth/configuraciones/configuraciones.vue';

const routes = [
  {
    path: '/',
    component: Outer,
    name: 'Admin',
    redirect: 'home',
    iconCls: 'el-icon-message',
    meta: { auth: false },

    children: [
      {
        name: 'home',
        path: '/',
        component: HomeComponent
      },

      {
        name: 'recuperarPassword',
        path: '/recuperarPassword',
        component: recuperarPasswordComponent
      },

      {
        name: 'resetearPassword',
        path: '/resetearPassword/:token',
        component: resetearPasswordComponent
      },

    ]
  },

  {
    path: '/',
    component: Auth,
    name: 'Auth',
    redirect: 'index',
    iconCls: 'el-icon-message',
    meta: { auth: true },

    children: [
      {
        name: 'index',
        path: '/index',
        component: IndexComponent
      },
      {
        name: 'perfil',
        path: '/perfil',
        component: perfilComponent
      },
      {
        name: 'configuraciones',
        path: '/configuraciones',
        component: configuracionesComponent
      },
    ]
  },

  {
    path: '/404',
    component: NotFound,
    name: '',
    hidden: true
  },

  {
    path: '*',
    hidden: true,
    redirect: { path: '/' }
} 

];

export default routes;