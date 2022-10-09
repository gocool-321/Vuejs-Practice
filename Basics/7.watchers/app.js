Vue.createApp({
  data() {
    return {
      val: "",
    };
  },

  watch: {
    val(newval, oldval) {
      console.log(`${oldval} --> ${newval}`);
    },
  },
}).mount("#app");
