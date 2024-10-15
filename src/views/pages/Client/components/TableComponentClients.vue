<template>
  <div class="overflow-x-auto">
    <table class="min-w-full bg-white border border-gray-200">
      <thead>
        <tr
          class="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
        >
          <th class="py-3 px-6 text-left">Nome</th>
          <th class="py-3 px-6 text-left">Idade</th>
          <th class="py-3 px-6 text-left">Email</th>
          <th class="py-3 px-6 text-left">Ações</th>
        </tr>
      </thead>
      <tbody class="text-gray-600 text-sm font-light">
        <tr
          v-for="(data, index) in paginatedData"
          :key="index"
          class="border-b border-gray-200 hover:bg-gray-100"
        >
          <td class="py-2 px-6">{{ data.nome }}</td>
          <td class="py-2 px-6">{{ data.idade }}</td>
          <td class="py-2 px-6">{{ data.email }}</td>
          <td class="py-2 px-6">
            <button class="bg-blue-500 text-white py-1 px-3 rounded">
              <i class="fa-solid fa-eye"></i>
            </button>
            <button class="bg-green-500 text-white py-1 px-3 rounded ml-2">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="bg-red-500 text-white py-1 px-3 rounded ml-2">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'TableComponentClients',
  props: {
    paginatedData: Array,
  },
};
</script>
<style lang="scss" scoped></style>
