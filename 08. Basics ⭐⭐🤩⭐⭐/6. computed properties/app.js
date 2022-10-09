Vue.createApp({
  data() {
    return {
      val: "",
      arr: [],
    };
  },
  computed: {
    values() {
      console.log("Changed!!");
      if (this.val) {
        this.arr.push(this.val);
      }
    },
  },
}).mount("#app");
