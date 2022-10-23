<template>
  <div>
    <section class="vh-100" style="background-color: #eee;">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-lg-9 col-xl-7">
            <div class="card" style="border-radius: 15px;">
              <div class="card-body p-5">
                <div class="text-center mb-4 pb-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-quotes/bulb.webp"
                    alt="Bulb"
                    width="100"
                  />
                </div>

                <figure class="text-center mb-0">
                  <blockquote class="blockquote">
                    <p class="pb-3">
                      <i class="fas fa-quote-left fa-xs text-primary"></i>
                      <span class="lead font-italic">{{joke}}</span>
                      <i class="fas fa-quote-right fa-xs text-primary"></i>
                    </p>
                  </blockquote>
                  <h6>Will load new joke in {{this.time}} seconds</h6>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      :style="{width: progressVal}"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >{{progressVal}}</div>
                  </div>
                </figure>
              </div>
              <center>
                <button @click="add10secs" class="btn btn-primary m-1">Add 10 Seconds</button>
              </center>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      time: 0,
      baseTime: 20,
      joke: "Joke is the Joke of the Joke is called the Joke!"
    };
  },
  methods: {
    add10secs() {
      this.baseTime += 10;
    },
    getJokes: async that => {
      const { data } = await axios.get(
        "https://v2.jokeapi.dev/joke/Any?type=single"
      );
      that.joke = data.joke;
    }
  },
  computed: {
    progressVal() {
      return Math.round((this.time / this.baseTime) * 100) + "%";
    }
  },
  watch: {
    time(newValue) {
      if (newValue === this.baseTime) {
        this.time = 20;
        this.getJokes(this);
      }
    }
  },
  mounted() {
    this.getJokes(this);
    setInterval(() => {
      this.time += 1;
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
</style>