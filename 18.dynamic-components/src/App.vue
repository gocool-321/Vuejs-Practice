<template>
  <div>
    <button @click="setComponents('componentA')" class="btn btn-primary m-4">Go to Component-A</button>
    <button @click="setComponents('componentB')" class="btn btn-primary m-4">Go to Component-B</button>
    <component v-bind:is="currComponent" class="m-4"></component>
  </div>
</template>

<script>
import componentA from "./components/component-a.vue";
import componentB from "./components/component-b.vue";
export default {
  components: { componentA, componentB },
  data() {
    return {
      currComponent: "componentA"
    };
  },
  methods: {
    setComponents(cmp) {
      this.currComponent = cmp;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>