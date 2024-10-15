import CreateAccountView from '@/views/CreateAccount/CreateAccountView.vue';
import LoginView from '@/views/Login/LoginView.vue';
import ClientsView from '@/views/pages/Client/ClientsView.vue';
import FinancialView from '@/views/pages/Financial/FinancialView.vue';
import HomeView from '@/views/pages/Home/HomeView.vue';
import PizzasView from '@/views/pages/Products/PizzasView.vue';
import ProvidersView from '@/views/pages/Providers/ProvidersView.vue';
import ReportView from '@/views/pages/Report/ReportView.vue';
import SaleNoteView from '@/views/pages/SaleNote/SaleNoteView.vue';
import ResetPasswordView from '@/views/ResetPassword/ResetPasswordView.vue';

import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: HomeView,
    name: 'home',
  },
  {
    path: '/pizzas',
    component: PizzasView,
    name: 'pizzas',
  },
  {
    path: '/clients',
    component: ClientsView,
    name: 'clients',
  },
  {
    path: '/providers',
    component: ProvidersView,
    name: 'providers',
  },
  {
    path: '/salenote',
    component: SaleNoteView,
    name: 'salenote',
  },
  {
    path: '/financial',
    component: FinancialView,
    name: 'financial',
  },
  {
    path: '/report',
    component: ReportView,
    name: 'report',
  },
  {
    path: '/login',
    component: LoginView,
    name: 'login',
  },
  {
    path: '/createaccount',
    component: CreateAccountView,
    name: 'createaccount',
  },
  {
    path: '/resetpassword',
    component: ResetPasswordView,
    name: 'resetpassword',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
