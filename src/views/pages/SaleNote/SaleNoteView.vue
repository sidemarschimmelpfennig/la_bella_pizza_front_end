<template>
  <DashBoardView>
    <template #slot-page>
      <div class="content-pages">
        <header class="title_pages">
          <p>Venda</p>
        </header>
      </div>
    </template>
  </DashBoardView>
</template>
<script>
import DashBoardView from '@/views/DashBoard/DashBoardView.vue';
export default {
  name: 'SaleNoteView',
  components: {
    DashBoardView,
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/pages/salenote';
</style>
