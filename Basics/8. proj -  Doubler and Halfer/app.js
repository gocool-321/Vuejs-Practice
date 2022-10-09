Vue.createApp({
  data() {
    return {
      vals: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  },
  methods: {
    handleDouble(idx) {
      this.vals[idx] *= 2;
    },
    handleHalf(idx) {
      this.vals[idx] /= 2;
    },
  },
}).mount("#app");
