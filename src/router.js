import UpdateScore from './components/UpdateScore.vue';
import Scoreboard from './components/Scoreboard.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/update',
      component: UpdateScore,
    },
    {
      path: '/scoreboard',
      component: Scoreboard,
    },
  ],
});