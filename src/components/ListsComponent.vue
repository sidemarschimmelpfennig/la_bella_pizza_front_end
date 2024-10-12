<template>
  <div class="lists">
    <div class="top">
      <p>Clientes</p>
    </div>
    <hr class="hr" />
    <br />
    <div class="content">
      <table class="table table-modify">
        <thead>
          <tr>
            <th class="column">Id</th>
            <th class="column">Nome</th>
            <th class="column">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, i) in users" :key="i">
            <th scope="custom-row">{{ user.id }}</th>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ListsComponent',
  props: {
    users: Array,
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/listscomponent';
</style>
