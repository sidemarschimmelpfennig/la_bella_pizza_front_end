<template>
  <div class="card max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
    <img :src="image" alt="Product Image" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h2 class="text-xl font-semibold">{{ title }}</h2>
      <p class="text-gray-700 text-lg mt-2">Preço: {{ price || currency }}</p>

      <button
        @click="toggleEdit"
        class="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {{ isEditing ? 'Salvar' : 'Editar' }}
      </button>

      <div v-if="isEditing" class="mt-4">
        <input
          type="text"
          v-model="title"
          class="border p-2 w-full"
          placeholder="Título do produto"
        />
        <input
          type="number"
          v-model="price"
          class="border p-2 w-full mt-2"
          placeholder="Preço"
        />
        <input
          type="text"
          v-model="image"
          class="border p-2 w-full mt-2"
          placeholder="URL da imagem"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    propstitle: String,
    propsprice: Number,
    propsimage: String,
  },
  data() {
    return {
      title: this.propstitle,
      price: this.propsprice,
      image: this.propsimage,
      isEditing: false, // Controla o estado de edição localmente no componente
      currency: 'R$',
    };
  },
  methods: {
    toggleEdit() {
      this.isEditing = !this.isEditing;
    },
  },
};
</script>
<style lang="scss">
.card {
  transition: all 0.3s ease;
}
@import '@/assets/scss/pages/products';
</style>
