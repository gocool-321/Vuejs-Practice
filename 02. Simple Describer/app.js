const app = Vue.createApp({
  data() {
    return {
      message: "Hello Vue!",
      webpage: "https://www.google.com",
    };
  },

  methods: {
    Goal() {
      console.log(this);
      const val = Math.random();
      if (val > 0.5) {
        return "Hello world!";
      } else {
        return "Bye world!";
      }
    },
  },
});

app.mount("#user-goal");
