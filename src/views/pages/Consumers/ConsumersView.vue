<template>
  <DashBoardView>
    <template #slot-page>
      <div class="content-pages">
        <header class="title_pages">
          <p>Clientes</p>
        </header>
      </div>
    </template>
  </DashBoardView>
</template>
<script>
import DashBoardView from '@/views/DashBoard/DashBoardView.vue';
export default {
  name: 'ConsumersView',
  components: {
    DashBoardView,
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/pages/consumers';
</style>
