import { createRouter, createWebHistory } from 'vue-router';

import State_404 from './components/state/State_404.vue'
import HomePage from './components/page/HomePage.vue'
import ExchangePage from './components/page/ExchangePage.vue'


const routes = [
      { path: '/', component: HomePage }
    , { path: '/exchange/:pathMatch(.*)', component: ExchangePage}
    , { path: '/:pathMatch(.*)', component: State_404 }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;