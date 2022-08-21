const vueApp = Vue.createApp({
  data() {
    return {
      textEle: "Hello There, I am Gokul",
      passwordEle: "Hello@123",
      checkBoxEle: false,
    };
  },

  methods: {
    handlePassword(e) {
      this.passwordEle = e.srcElement.value;
    },
  },
});

vueApp.mount("#elements");
