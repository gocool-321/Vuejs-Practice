<template>
  <div>
    <form>
      <input v-model="title" placeholder="title" />
      <input v-model="description" placeholder="description" />
      <input v-model="link" placeholder="link" />
      <button @click.prevent="add">Add!</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: "",
      link: ""
    };
  },
  inject: ["addToResources"],
  methods: {
    add() {
      const n = {
        title: this.title,
        description: this.description,
        link: this.link
      };
      this.addToResources(n);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>