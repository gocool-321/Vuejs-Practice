Vue.createApp({
  data() {
    return {
      goals: [],
      textVal: "",
    };
  },

  methods: {
    addGoal() {
      this.goals.push(this.textVal);
      this.textVal = "";
    },
  },
}).mount("#app");
