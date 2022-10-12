<template>
  <div>
    <h1>{{name}} {{isFavorite ? "(Favorite)": ""}}</h1>
    <button @click="toggleVisible">{{isVisible?"Hide":"Show"}} details</button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="DeleteContact">Delete Contact</button>
    <hr />
    <header v-if=" isVisible">
      <h1>Name: {{name}}</h1>
      <h2>Age: {{age}}</h2>
      <h2>Email: {{email}}</h2>
      <h3>Phone number: {{phone}}</h3>
      <hr />
      <hr />
    </header>
  </div>
</template>

<script>
export default {
  // props: ["name", "phone", "email", "age"],
  props: {
    name: {
      type: String,
      require: true
    },
    phone: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    age: {
      type: Number,
      require: false,
      default: 19
    }
  },
  data() {
    return {
      isVisible: false,
      isFavorite: false
    };
  },

  methods: {
    toggleVisible() {
      this.isVisible = !this.isVisible;
    },
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
    },
    DeleteContact() {
      this.$emit("remove-item", this.index);
    }
  }
};
</script>
