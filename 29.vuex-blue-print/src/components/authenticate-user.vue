<template>
  <div>
    <button @click.prevent="loginUser" v-if="!isLoggedIn">Login</button>
    <button @click.prevent="logoutUser" v-if="isLoggedIn">Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    loginUser() {
      this.$store.dispatch("loginUser");
    },
    logoutUser() {
      this.$store.dispatch("logoutUser");
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.AuthStatus;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>