<template>
 <ul class="list-group">
  <li class="list-group-item"> <nuxt-link class="text-dark" to="/customer"><small> Profile</small></nuxt-link></li>
  <li class="list-group-item"><nuxt-link  class="text-dark" to="/customer/order"><small>Orders</small></nuxt-link></li>
  <li class="list-group-item"><nuxt-link to="/customer/logout"><small> Logout</small></nuxt-link></li>
</ul>
</template>
<script>
import swal from "sweetalert";
export default {
  methods: {
    logout() {
      return this.$store.dispatch("logout");
    },
  },
    computed: {
    loggedInUser() {
      return this.$store.state.loggedInUser;
    },
  },
};
</script>
