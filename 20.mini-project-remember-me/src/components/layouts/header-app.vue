<template>
  <div>
    <div class="navbar">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="horizantal">
        <li class="nav-item h1 m-4">
          <a class="nav-link" @click="setComponents('checkResource')">Check Resources</a>
        </li>
        <li class="nav-item h1 m-4">
          <a class="nav-link" @click="setComponents('addResource')">Add Resources</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setComponents(cmp) {
      this.$emit("setComponent", cmp);
    }
  }
};
</script>

<style scoped>
#horizantal {
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: center;
  align-items: center;
}
</style>