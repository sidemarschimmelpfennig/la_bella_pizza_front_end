<template>
  <DashBoardView>
    <template #slot-page>
      <div class="content-pages">
        <header class="title_pages">
          <p>Produtos</p>
          <div class="flex flex-wrap justify-start cards-container">
            <CardProductComponent
              :propstitle="title"
              :propsprice="price"
              :propsimage="image"
            />
            <CardProductComponent
              :propstitle="title"
              :propsprice="price"
              :propsimage="image"
            />
            <CardProductComponent
              :propstitle="title"
              :propsprice="price"
              :propsimage="image"
            />
            <AddNewProduct />
          </div>
        </header>
      </div>
    </template>
  </DashBoardView>
</template>

<script>
import DashBoardView from '@/views/DashBoard/DashBoardView.vue';
import AddNewProduct from './components/AddNewProduct.vue';
import CardProductComponent from './components/CardProductComponent.vue';

export default {
  name: 'PizzasView',
  components: {
    DashBoardView,
    CardProductComponent,
    AddNewProduct,
  },
  data() {
    return {
      title: 'Pizza',
      price: 88.99,
      image:
        'https://www.estadao.com.br/resizer/v2/MHEB7V2WRFDVHBXPFP6RFYZ66U.jpg?quality=80&auth=85422b9ae9f827268adb7b84ac2c7620d207e353e18955193beb3480e0b246ac&width=720&height=503&smart=true',
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/products';
</style>
