const app = Vue.createApp({
  data() {
    return { goals: [], newGoal: "" };
  },

  methods: {
    addGoal() {
      this.goals.push(this.newGoal);
      this.newGoal = "";
    },
  },
});

console.log("Hello");

app.mount("#user-goals");
