import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";

const store = createStore({
  state() {
    return {
      count: 0,
      isAuth: false,
    };
  },

  mutations: {
    incrementCount(state) {
      state.count++;
    },
    logInUser(state) {
      state.isAuth = true;
    },
    logOutUser(state) {
      state.isAuth = false;
    },
    setZero(state) {
      state.count = 0;
    },
  },

  getters: {
    counter(currState) {
      return currState.count;
    },
    AuthStatus(currState) {
      return currState.isAuth;
    },
  },

  actions: {
    increment(context) {
      context.commit("incrementCount");
    },

    loginUser(context) {
      context.commit("logInUser");
    },

    logoutUser(context) {
      context.commit("setZero");
      context.commit("logOutUser");
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount("#app");
