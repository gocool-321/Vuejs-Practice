<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input v-model="name" placeholder="name" />
      <input v-model="Age" placeholder="Age" />
      <input v-model="email" placeholder="email" />
      <input v-model="phone_number" placeholder="phone_number" />
      <button @click.prevent="handleSubmit">Add Data!</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        name: "",
        Age: 0,
        email: "",
        phone_number: "",
        isFavorite: false
      }
    };
  },
  emits: ["addfriend"],
  methods: {
    handleSubmit() {
      const obj = {
        name: this.name,
        Age: this.age,
        email: this.email,
        phone_number: this.phone_number,
        isFavorite: false
      };
      console.log(obj);
      this.$emit("add-friend", obj);
    }
  }
};
</script>