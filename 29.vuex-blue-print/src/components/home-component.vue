<template>
  <div>
    <counter></counter>
    <increment></increment>
  </div>
</template>

<script>
import counter from "./counter-component.vue";
import increment from "./increment-count.vue";
export default {
  components: { counter, increment }
};
</script>

<style lang="scss" scoped>
</style>