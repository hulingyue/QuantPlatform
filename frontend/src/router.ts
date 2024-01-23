import { createRouter, createWebHistory } from 'vue-router';


import Helloworld from './components/HelloWorld.vue'


const routes = [
    {path: '/', component: Helloworld}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;