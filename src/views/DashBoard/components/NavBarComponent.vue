<template>
  <div class="content-nav">
    <div class="navbar">
      <div class="logo">
        <img :src="logo" width="32px" height="32px" @click.prevent="getHome" />
        <h3>La bella Pizza</h3>
      </div>
      <a @click.prevent="logout" class="logout">
        Logout <i class="fa-solid fa-right-from-bracket" />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NavBarComponent',
  data() {
    return {
      logo: require('@/assets/img/logo_icon.png'),
    };
  },
  methods: {
    logout() {
      this.$router.push({ name: 'login' });
    },
    getHome() {
      this.$router.push({ name: 'home' });
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/dashboard/components/navbar';
</style>
