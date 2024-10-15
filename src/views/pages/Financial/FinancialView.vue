<template>
  <DashBoardView>
    <template #slot-page>
      <div class="content-pages">
        <header class="title_pages">Financeiro</header>

        <TableComponentFinancial :paginatedData="paginatedData" />

        <PaginationComponent
          :currentPage="currentPage"
          :totalPages="totalPages"
          @change-page="changePage"
        />
      </div>
    </template>
  </DashBoardView>
</template>
<script>
import PaginationComponent from '@/components/PaginationComponent.vue';
import DashBoardView from '@/views/DashBoard/DashBoardView.vue';
import TableComponentFinancial from './components/TableComponentFinancial.vue';

export default {
  name: 'FinancialView',
  components: {
    DashBoardView,
    PaginationComponent,
    TableComponentFinancial,
  },
  data() {
    return {
      data: [
        {
          name: 'Sidemar Junior',
          payment: 10.2,
          contact: 'sidemarschimmelpfennig@outlook.com',
          totalPayment: 10.35,
        },
        {
          name: 'Maria Silva',
          payment: 15.5,
          contact: 'maria.silva@example.com',
          totalPayment: 16.0,
        },
        {
          name: 'João Pereira',
          payment: 800.75,
          contact: 'joao.pereira@example.com',
          totalPayment: 9.0,
        },
        {
          name: 'Ana Costa',
          payment: 12.3,
          contact: 'ana.costa@example.com',
          totalPayment: 12.5,
        },
        {
          name: 'Carlos Lima',
          payment: 18.9,
          contact: 'carlos.lima@example.com',
          totalPayment: 19.1,
        },
        {
          name: 'Fernanda Oliveira',
          payment: 22.1,
          contact: 'fernanda.oliveira@example.com',
          totalPayment: 22.3,
        },
        {
          name: 'Pedro Santos',
          payment: 9.6,
          contact: 'pedro.santos@example.com',
          totalPayment: 9.75,
        },
        {
          name: 'Luciana Almeida',
          payment: 11.45,
          contact: 'luciana.almeida@example.com',
          totalPayment: 11.6,
        },
        {
          name: 'Rafael Souza',
          payment: 14.25,
          contact: 'rafael.souza@example.com',
          totalPayment: 14.5,
        },
        {
          name: 'Bruno Nogueira',
          payment: 20.0,
          contact: 'bruno.nogueira@example.com',
          totalPayment: 20.25,
        },
        {
          name: 'Rafael Souza',
          payment: 14.25,
          contact: 'rafael.souza@example.com',
          totalPayment: 14.5,
        },
        {
          name: 'Rafael Souza',
          payment: 14.25,
          contact: 'rafael.souza@example.com',
          totalPayment: 14.5,
        },
      ],
      currentPage: 1,
      pageSize: 10,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.data.length / this.pageSize);
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.data.slice(start, end);
    },
  },
  methods: {
    changePage(page) {
      window.scrollTo({
        top: -10,
        left: 0,
        behavior: 'smooth',
      });
      if (page < 1 || page > this.totalPages) return;
      this.currentPage = page;
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/pages/financial';
</style>
