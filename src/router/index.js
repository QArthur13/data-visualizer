//import { from } from "core-js/fn/array";
import { createRouter, createWebHistory } from 'vue-router'
import List from '../views/List.vue'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/liste',
        name: 'List',
        component: List
    },
    {
        path: '/change/:name',
        name: 'Update'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router