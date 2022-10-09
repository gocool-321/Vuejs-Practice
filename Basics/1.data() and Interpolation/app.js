Vue.createApp({
  data: function () {
    return {
      key1: "hey I'm key one!",
      key2: "hey I'm key two!",
      key3: [1, 2, 3],
      key4: 123,
      key4: {
        a: 1,
        b: 2,
      },
    };
  },
}).mount("#app");
