const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      val: "",
    };
  },
  methods: {
    handleChange(event) {
      this.name = event.target.value;
    },
  },
});

app.mount("#events");
