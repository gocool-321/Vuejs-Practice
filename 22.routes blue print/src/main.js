import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// import Home from './components/home/home.vue';
import TeamsList from './components/teams/TeamsList.vue';
import TeamMember from './components/teams/TeamMembers.vue';
import UsersList from './components/users/UsersList.vue';
import NotFound from './components/notFound.vue';

import App from './App.vue';

const app = createApp(App);

const router = createRouter({
  routes: [
    { path: '/', component: NotFound },
    { path: '/teams', component: TeamsList },
    { path: '/teams/:teamId', component: TeamMember, props: true },
    { path: '/users', component: UsersList },
    { path: '/:notfound(.*)', component: NotFound },
  ],
  history: createWebHistory(),
  linkActiveClass: 'active',
});

app.use(router);

app.mount('#app');
