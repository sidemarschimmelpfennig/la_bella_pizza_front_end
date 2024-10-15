<template>
  <div class="flex justify-center mt-4">
    <button
      class="bg-gray-300 text-gray-700 py-2 px-4 rounded-l hover:bg-gray-400"
      :disabled="currentPage === 1"
      @click="$emit('change-page', currentPage - 1)"
    >
      Anterior
    </button>
    <span class="flex items-center px-4 text-gray-700">
      Página {{ currentPage }} de {{ totalPages }}
    </span>
    <button
      class="bg-gray-300 text-gray-700 py-2 px-4 rounded-r hover:bg-gray-400"
      :disabled="currentPage === totalPages"
      @click="$emit('change-page', currentPage + 1)"
    >
      Próximo
    </button>
  </div>
</template>

<script>
export default {
  name: 'PaginationComponent',
  props: {
    currentPage: Number,
    totalPages: Number,
  },
};
</script>

<style lang="scss" scoped></style>
