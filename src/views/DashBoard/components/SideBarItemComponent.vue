<template>
  <li class="item" :class="{ active: isActive }" @click="selectItem">
    <router-link :to="{ name: route }">
      <i :class="['fa-solid', icon]"></i>
      <span class="text">{{ title }}</span>
    </router-link>
  </li>
</template>
<script>
export default {
  name: 'SideBarItemComponent',
  props: {
    icon: String,
    title: String,
    route: String,
  },
  data() {
    return {
      isActive: false,
    };
  },

  created() {
    this.checkActiveRoute();
  },
  watch: {
    $route() {
      this.checkActiveRoute();
    },
  },
  methods: {
    selectItem() {
      this.isActive = true;
    },
    checkActiveRoute() {
      this.isActive = this.$route.name === this.route;
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/dashboard/components/sidebaritem';
</style>
