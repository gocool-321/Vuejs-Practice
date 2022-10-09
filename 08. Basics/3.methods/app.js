Vue.createApp({
  data() {
    return {
      genVal: 0,
    };
  },
  methods: {
    generateRandom() {
      var value = Math.floor(Math.random() * 10);
      console.log(this);
      console.log(value);
      if (value % 2 == 0) {
        return "Even!!";
      } else {
        return "Odd!!";
      }
    },
  },
}).mount("#app");
