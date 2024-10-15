<template>
  <DashBoardView>
    <template #slot-page>
      <div class="content-pages">
        <header class="title_pages">
          <p>Fornecedores</p>
        </header>
      </div>
    </template>
  </DashBoardView>
</template>
<script>
import DashBoardView from '@/views/DashBoard/DashBoardView.vue';
export default {
  name: 'ProvidersView',
  components: {
    DashBoardView,
  },
  data() {
    return {
      title: 'Nome do Produto',
      price: 29.99,
      image: 'https://via.placeholder.com/150',
      isEditing: false,
    };
  },
  filters: {
    currency(value) {
      return `R$ ${value.toFixed(2)}`;
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/pages/providers';
</style>
