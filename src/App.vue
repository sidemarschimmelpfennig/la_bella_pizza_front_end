<template>
  <router-view />
</template>
<script>
export default {
  name: 'App',
  mounted() {
    document.title = 'La bella Pizza';
  },
};
</script>
