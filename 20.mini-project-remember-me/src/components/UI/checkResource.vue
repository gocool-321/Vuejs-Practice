<template>
  <div>
    <table class="table table-hover" v-if="data.length">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">description</th>
          <th scope="col">Links</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(d,i) in data" :key="i">
          <td>{{d["title"]}}</td>
          <td>{{d["description"]}}</td>
          <td>
            <a :href="d['link']" target="_blank">{{d["title"]}}</a>
          </td>
          <td>
            <button @click="handleDelete(i)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: this.resources
    };
  },
  inject: ["resources", "delete"],
  methods: {
    handleDelete(idx) {
      // this.$emit("delete", idx);
      this.delete(idx);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>