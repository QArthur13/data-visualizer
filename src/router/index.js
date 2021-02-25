//import { from } from "core-js/fn/array";
import { createRouter, createWebHistory } from 'vue-router'
import List from '../views/List.vue'
import Home from '../views/Home.vue'
import Update from '../components/Update.vue'

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
        path: '/change/:id',
        name: 'Update',
        component: Update
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router