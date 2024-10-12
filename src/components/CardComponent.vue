<template>
  <div class="card">
    <div class="content top">
      <h3>{{ type }}</h3>
      <p class="percentage"><i class="fa fa-arrow-up"></i>{{ percentage }}</p>
    </div>
    <div class="content footer">
      <i :class="['fa ico', icon]"></i>
      <div class="qtd">{{ qtd }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardComponent',
  props: {
    qtd: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    percentage: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/cardcomponent';
</style>
