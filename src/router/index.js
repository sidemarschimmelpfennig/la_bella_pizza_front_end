import LoginView from '@/views/Login/LoginView.vue';
import ConsumersView from '@/views/pages/Consumers/ConsumersView.vue';
import FinancialView from '@/views/pages/Financial/FinancialView.vue';
import HomeView from '@/views/pages/Home/HomeView.vue';
import ProductsView from '@/views/pages/Products/ProductsView.vue';
import ProvidersView from '@/views/pages/Providers/ProvidersView.vue';
import ReportView from '@/views/pages/Report/ReportView.vue';
import SaleNoteView from '@/views/pages/SaleNote/SaleNoteView.vue';

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
    path: '/products',
    component: ProductsView,
    name: 'products',
  },
  {
    path: '/consumers',
    component: ConsumersView,
    name: 'consumers',
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
