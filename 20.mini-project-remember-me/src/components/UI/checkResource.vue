<template>
  <div>
    <table class="table table-hover" v-if="data.length">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">description</th>
          <th scope="col">Link</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(d,i) in data" :key="i">
          <td>{{d["title"]}}</td>
          <td>{{d["description"]}}</td>
          <td>{{d["link"]}}</td>
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
  inject: ["resources"]
};
</script>

<style lang="scss" scoped>
</style>