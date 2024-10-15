<!-- eslint-disable prettier/prettier -->
<template>
  <div class="main">
    <div class="sidebar">
      <SideBarComponent :isSidebarVisible="isSidebarVisible" />
    </div>
    <div class="content-right">
      <div class="navbar">
        <NavBarComponent @toggle-sidebar="toggleSidebar" />
      </div>
      <div class="pages">
        <slot name="slot-page"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import NavBarComponent from '@/views/DashBoard/components/NavBarComponent.vue';
import SideBarComponent from '@/views/DashBoard/components/SideBarComponent.vue';

export default {
  name: 'DashBoardView',
  components: {
    NavBarComponent,
    SideBarComponent,
  },
};
</script>
<style lang="scss">
@import '@/assets/scss/dashboard/dashboard';
</style>
