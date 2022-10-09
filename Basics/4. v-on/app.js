Vue.createApp({
  data() {
    return {
      count: 0,
      text: "Type the Text above!",
      namedText: "",
    };
  },

  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      if (this.count == 0) {
        this.count = 0;
        alert("Resetted to Zero!");
        return;
      }
      this.count--;
    },

    handleTextChange(event) {
      this.text = event.target.value;
    },
    handleNamedTextChange(event, name) {
      this.namedText = event.target.value + name;
    },
    handleEnter() {
      alert("Form Submitted");
      this.namedText = "";
    },
  },
}).mount("#app");
