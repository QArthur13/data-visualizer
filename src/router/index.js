//import { from } from "core-js/fn/array";
import { createRouter, createWebHistory } from 'vue-router'
import List from '../views/List.vue'

const routes = [
    {
        path: '/liste',
        name: 'List',
        component: List
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router