import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// import Home from './components/home/home.vue';
import TeamsList from './components/teams/TeamsList.vue';
import TeamMember from './components/teams/TeamMembers.vue';
import UsersList from './components/users/UsersList.vue';
import NotFound from './components/notFound.vue';
import userFooter from './components/footers/user-footer.vue';
import teamsFooter from './components/footers/team-footer.vue';

import App from './App.vue';

const app = createApp(App);

const router = createRouter({
  routes: [
    { path: '/', component: NotFound },
    { path: '/teams', components: { default: TeamsList, footer: teamsFooter } },
    {
      path: '/teams/:teamId',
      components: { default: TeamMember },
      props: true,
    },
    { path: '/users', components: { default: UsersList, footer: userFooter } },
    { path: '/:notfound(.*)', component: NotFound },
  ],
  history: createWebHistory(),
  linkActiveClass: 'active',
});

app.use(router);

app.mount('#app');
