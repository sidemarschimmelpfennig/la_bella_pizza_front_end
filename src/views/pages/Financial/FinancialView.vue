<template>
  <DashBoardView>
    <template #slot-page>
      <div class="content-pages">
        <header class="title_pages">
          <p>Financeiro</p>
        </header>
      </div>
    </template>
  </DashBoardView>
</template>
<script>
import DashBoardView from '@/views/DashBoard/DashBoardView.vue';
export default {
  name: 'FinancialView',
  components: {
    DashBoardView,
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/pages/financial';
</style>
