<template>
  <div>
    <router-view></router-view>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
    export default {
    name: 'App',
    created() {
    }
}
</script>

<style lang="scss">
  // Import Main styles for this application
  @import 'assets/scss/style';
  @import '../public/vendor/fontawesome-pro-5.15.1-web/css/all.min.css';
</style>