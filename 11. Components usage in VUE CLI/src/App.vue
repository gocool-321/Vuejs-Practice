<template>
  <section>
    <!-- <h2>Count: {{count}}</h2>
        <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>-->

    <details-component></details-component>
    <details-component></details-component>
    <details-component></details-component>
  </section>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  }
};
</script>