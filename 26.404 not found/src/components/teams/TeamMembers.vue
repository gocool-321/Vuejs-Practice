<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  props: ['teamId'],
  inject: ['teams', 'users'],
  data() {
    return {
      teamName: 'Test',
      members: [
        { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
        { id: 'u2', fullName: 'Max Schwarz', role: 'Engineer' }
      ]
    };
  },
  methods: {
    // loadUserInfo(route) {
    //   const currId = route.params.teamId;
    //   // const members = this.teams.find(t => console.log(t));
    //   const teams = this.teams.find(t => t.id == currId);
    //   const members = teams.members;
    //   const all = [];
    //   for (let i of members) {
    //     all.push(this.users.find(u => u.id === i));
    //   }
    //   this.members = all;
    //   this.teamName = teams.name;
    // }
    loadUserInfo(currId) {
      // const members = this.teams.find(t => console.log(t));
      const teams = this.teams.find(t => t.id == currId);
      const members = teams.members;
      const all = [];
      for (let i of members) {
        all.push(this.users.find(u => u.id === i));
      }
      this.members = all;
      this.teamName = teams.name;
    }
  },
  created() {
    this.loadUserInfo(this.teamId);
  },
  watch: {
    teamId(newRoute) {
      this.loadUserInfo(newRoute);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>