<template>
  <card>
    <template v-slot:subtitle>
      <p>Hey There!</p>
    </template>
    <h1>{{word[0]}}</h1>
  </card>
</template>

<script>
import card from "./components/card-item.vue";
export default {
  components: { card },
  data() {
    return {
      word: ["Hello", "World"]
    };
  }
};
</script>

<style>
</style>