<template>
  <div>
    <authenticate></authenticate>
    <div v-if="isLoggedIn">
      <counter></counter>
      <increment></increment>
    </div>
  </div>
</template>

<script>
import counter from "./counter-component.vue";
import authenticate from "./authenticate-user.vue";
import increment from "./increment-count.vue";
export default {
  components: { counter, increment, authenticate },
  computed: {
    isLoggedIn() {
      return this.$store.getters.AuthStatus;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>