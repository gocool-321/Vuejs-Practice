<template>
  <div>
    <home></home>
  </div>
</template>

<script>
import home from "./components/home-component.vue";
export default {
  name: "App",
  components: {
    home
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  background-color: antiquewhite;
  border-radius: 10%;
  border: none;
  height: 50px;
  font-size: 1em;
  font-weight: bold;
}
</style>
