<template>
  <div class="sidebars">
    <div class="top">
      <div class="avatar">
        <span><i class="fa fa-user"></i></span>
      </div>
      <div class="info">
        <p class="name">Sidemar</p>
        <p class="status">Testee</p>
      </div>
    </div>
    <div class="menu">
      <ul>
        <SideBarItemComponent icon="fa-house" title="Inicio" route="home" />
        <SideBarItemComponent icon="fa-user" title="Clientes" route="clients" />
        <SideBarItemComponent
          icon="fa-bag-shopping"
          title="Vendas"
          route="salenote"
        />
        <SideBarItemComponent
          icon="fa-user-tie"
          title="Fornecedores"
          route="providers"
        />
        <SideBarItemComponent
          icon="fa-boxes-stacked"
          title="Pizzas"
          route="pizzas"
        />
        <SideBarItemComponent
          icon="fa-boxes-stacked"
          title="Financeiro"
          route="financial"
        />
      </ul>
    </div>
  </div>
</template>
<script>
import SideBarItemComponent from '@/views/DashBoard/components/SideBarItemComponent.vue';

export default {
  name: 'SideBarComponent',
  components: {
    SideBarItemComponent,
  },
};
</script>
<style lang="scss">
@import '@/assets/scss/dashboard/components/sidebar';
</style>
