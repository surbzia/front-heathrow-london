<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch('checkLogin')
    this.$store.commit("cart/initialize");
    this.$store.dispatch("setUserNameChatDefault");
  },
};
</script>
