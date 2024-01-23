import { createRouter, createWebHistory } from 'vue-router';

import State_404 from './components/State_404.vue'
import HomePage from './components/HomePage.vue'


const routes = [
      { path: '/', component: HomePage }
    , { path: '/:pathMatch(.*)', component: State_404 }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;