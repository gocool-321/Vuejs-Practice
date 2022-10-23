<template>
  <div>
    <button @click="add1">Increment by 1</button>
  </div>
</template>

<script>
export default {
  methods: {
    add1() {
      this.$store.state.count++;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>