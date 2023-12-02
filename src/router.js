import { createRouter, createMemoryHistory } from "vue-router";
import UpdateScore from './components/UpdateScore.vue';
import Scoreboard from './components/Scoreboard.vue';

const Routes = [
  { path: "/update", component: UpdateScore },
  { path: "/scoreboard", component: Scoreboard },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes: Routes,
});

export default router;
