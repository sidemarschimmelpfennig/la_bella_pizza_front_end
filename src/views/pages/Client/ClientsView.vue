<template>
  <DashBoardView>
    <template #slot-page>
      <div class="content-pages">
        <header class="title_pages">Clientes</header>
        <TableComponentClients :paginatedData="paginatedData" />
        <PaginationComponent
          :currentPage="currentPage"
          :totalPages="totalPages"
          @change-page="changePage"
        />
      </div> </template
  ></DashBoardView>
</template>

<script>
import PaginationComponent from '@/components/PaginationComponent.vue';
import DashBoardView from '@/views/DashBoard/DashBoardView.vue';
import TableComponentClients from './components/TableComponentClients.vue';

export default {
  name: 'ConsumersView',
  components: {
    DashBoardView,
    PaginationComponent,
    TableComponentClients,
  },
  data() {
    return {
      data: [
        { nome: 'João', idade: 28, email: 'joao@example.com' },
        { nome: 'Maria', idade: 25, email: 'maria@example.com' },
        { nome: 'Pedro', idade: 30, email: 'pedro@example.com' },
        { nome: 'Ana', idade: 22, email: 'ana@example.com' },
        { nome: 'Lucas', idade: 35, email: 'lucas@example.com' },
        { nome: 'Fernanda', idade: 27, email: 'fernanda@example.com' },
        { nome: 'Carlos', idade: 40, email: 'carlos@example.com' },
        { nome: 'Julia', idade: 31, email: 'julia@example.com' },
        { nome: 'Ricardo', idade: 29, email: 'ricardo@example.com' },
        { nome: 'Roberta', idade: 33, email: 'roberta@example.com' },
        { nome: 'Paulo', idade: 38, email: 'paulo@example.com' },
        { nome: 'Lucia', idade: 34, email: 'lucia@example.com' },
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
        behavior: 'smooth', // Adiciona uma animação suave
      });
      if (page < 1 || page > this.totalPages) return;
      this.currentPage = page;
    },
  },
};
</script>

<style>
/* Estilos adicionais, se necessário */
</style>
