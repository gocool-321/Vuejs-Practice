<template>
  <div>
    <header v-if="! isVisible">
      <h1>Name: {{name.name}}</h1>
      <h2>Age: {{name.Age}}</h2>
      <h2>Email: {{name.email}}</h2>
      <h3>Phone number: {{name.phone_number}}</h3>
    </header>
    <button @click="toggleVisible">{{isVisible?"Show":"Hide"}} details</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: {
        name: "Gokul Sai",
        Age: 19,
        email: "gokulsai321@gmail.com",
        phone_number: "5646546826"
      },
      isVisible: false
    };
  },

  methods: {
    toggleVisible() {
      this.isVisible = !this.isVisible;
    }
  }
};
</script>
