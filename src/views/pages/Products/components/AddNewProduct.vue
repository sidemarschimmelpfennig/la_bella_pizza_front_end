<template>
  <div>
    <div
      class="card flex items-center justify-center bg-gray-100 shadow-md rounded-lg cursor-pointer hover:bg-gray-200"
      @click="addNewProduct"
    >
      <span class="text-blue-500 text-lg font-semibold">
        + Adicionar Produto
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AddNewProduct',
};
</script>
<style lang="scss">
@import '@/assets/scss/pages/products';
</style>
