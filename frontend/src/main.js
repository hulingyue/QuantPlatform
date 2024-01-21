import { createApp } from 'vue'
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "./components/HomePage.vue"


const routes = [
    { path: '/', component: HomePage, meta: {title: "Quant"} },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


const app = createApp(App)
app.use(router)
app.use(ArcoVue)
app.use(ArcoVueIcon)
app.mount('#app')
