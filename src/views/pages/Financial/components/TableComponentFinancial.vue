<template>
  <div class="overflow-x-auto">
    <table class="min-w-full bg-white border border-gray-200">
      <thead>
        <tr
          class="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
        >
          <th class="py-2 px-6 text-left">Cliente</th>
          <th class="py-2 px-6 text-left">Pagamento</th>
          <th class="py-2 px-6 text-left">Contato</th>
          <th class="py-2 px-6 text-left">Valor Total</th>
          <th class="py-2 px-6 text-left">Ações</th>
        </tr>
      </thead>
      <tbody class="text-gray-600 text-sm font-light">
        <tr
          class="border-b border-gray-200 hover:bg-gray-100"
          v-for="card in paginatedData"
          :key="card.id"
        >
          <td class="py-2 px-6">{{ card.name }}</td>
          <td class="py-2 px-6 text-left">
            {{ paymentFormat(card.payment) }}
          </td>
          <td class="py-2 px-6">{{ card.contact }}</td>
          <td class="py-2 px-6 text-left">
            {{ paymentFormat(card.totalPayment) }}
          </td>
          <td class="py-2 px-6">
            <button class="bg-blue-500 text-white py-1 px-3 rounded">
              <i class="fa-solid fa-eye"></i>
            </button>
            <button class="bg-yellow-500 text-white py-1 px-3 rounded ml-2">
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
  name: 'TableComponentFinancial',
  props: {
    paginatedData: Array,
  },
  methods: {
    paymentFormat(value) {
      if (typeof value === 'number') {
        return value.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
        });
      }
      return value;
    },
  },
};
</script>
<style lang="scss" scoped></style>
