<template>
  <div>
    <h1>Count: {{ count}}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.getters.counter;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>