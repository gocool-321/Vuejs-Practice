<template>
  <div class="parent">
    <button @click="handleRoute('/teams')">Teams</button>
    <button @click="handleRoute('/users')">Users</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleRoute(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style scoped>
.parent {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
button {
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
  margin: 1rem;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}
</style>