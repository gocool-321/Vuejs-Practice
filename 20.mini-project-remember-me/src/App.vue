<template>
  <div>
    <!-- <header-app></header-app> -->
    <header-app @setComponent="setRoute" class="m-6"></header-app>
    <keep-alive>
      <component :is="currentView"></component>
    </keep-alive>
  </div>
</template>

<script>
import header from "./components/layouts/header-app.vue";
import addResource from "./components/UI/addResource.vue";
import checkResource from "./components/UI/checkResource.vue";

export default {
  components: {
    "header-app": header,
    addResource,
    checkResource
  },
  data() {
    return {
      currentView: "checkResource",
      resources: []
    };
  },
  provide() {
    return {
      addToResources: this.getResources,
      resources: this.resources
    };
  },
  methods: {
    setRoute(cmp) {
      this.currentView = cmp;
    },

    getResources(obj) {
      this.resources.unshift(obj);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>