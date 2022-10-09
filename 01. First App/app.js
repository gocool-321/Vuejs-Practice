// Vue.createApp({
//   data() {
//     return {
//       goals: [],
//       textVal: "",
//     };
//   },

//   methods: {
//     addGoal() {
//       this.goals.push(this.textVal);
//       this.textVal = "";
//     },
//   },
// }).mount("#app");
// a

Vue.createApp({
  data() {
    return {
      textVal: "",
      goals: [],
    };
  },

  methods: {
    addGoal() {
      this.goals.push(this.textVal);
      this.textVal = "";
    },
  },
}).mount("#app");
