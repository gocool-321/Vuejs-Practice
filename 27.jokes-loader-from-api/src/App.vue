<template>
  <jokes-api></jokes-api>
</template>

<script>
import Jokes from "./components/jokes-api.vue";

export default {
  name: "App",
  components: {
    "jokes-api": Jokes
  }
};
</script>

