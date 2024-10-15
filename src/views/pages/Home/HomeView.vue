<template>
  <DashBoardView>
    <template #slot-page>
      <div class="content-pages">
        <header class="title_pages">
          <p>Inicio</p>
        </header>
        <div>
          <div class="customs-row">
            <div class="customs-col">
              <CardComponent
                :type="'Clientes'"
                :percentage="'7%'"
                :icon="'fa-users'"
                :qtd="users.length"
              />
            </div>
            <div class="customs-col">
              <CardComponent
                :type="'Produtos'"
                :percentage="'12%'"
                :icon="'fa-box'"
                :qtd="'350'"
              />
            </div>
            <div class="customs-col">
              <CardComponent
                :type="'Serviços'"
                :percentage="'3%'"
                :icon="'fa-store'"
                :qtd="'270'"
              />
            </div>
            <div class="customs-col">
              <CardComponent
                :type="'Relatórios'"
                :percentage="'25%'"
                :icon="'fa-chart-bar'"
                :qtd="'30'"
              />
            </div>
          </div>
        </div>
        <div>
          <div class="customs-row">
            <div class="customs-col column-media">
              <ListsComponent :users="users" />
            </div>
            <div class="customs-col column-media">
              <ListsComponent :users="users" />
            </div>
          </div>
        </div>
      </div>
    </template>
  </DashBoardView>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue';
import ListsComponent from '@/components/ListsComponent.vue';
import DashBoardView from '@/views/DashBoard/DashBoardView.vue';
import axios from 'axios';
export default {
  name: 'HomeView',
  components: {
    DashBoardView,
    CardComponent,
    ListsComponent,
  },
  data() {
    return {
      qtd: [],
      users: [],
    };
  },
  methods: {
    async getUsers() {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        this.users = response.data;
        return this.qtd, this.users;
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/pages/home';
</style>
