const app = Vue.createApp({
  data() {
    return {
      box1: false,
      box2: false,
      box3: false,
    };
  },

  methods: {
    toggler(number) {
      console.log([this.box1, this.box2, this.box3]);
      if (number == 1) {
        this.box1 = !this.box1;
      } else if (number == 2) {
        this.box2 = !this.box2;
      } else {
        this.box3 = !this.box3;
      }
    },
  },
});

app.mount("#styling");
