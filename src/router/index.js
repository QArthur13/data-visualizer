//import { from } from "core-js/fn/array";
import { createRouter, createWebHistory } from 'vue-router'
import List from '../views/List.vue'
import Home from '../views/Home.vue'
import PieAnimal from '../views/PieAnimal.vue'
import PieFruit from '../views/PieFruit.vue'
import PieColor from '../views/PieColor.vue'
import Update from '../views/Update.vue'

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
    },
    {
        path: '/animal',
        name: 'Animal',
        component: PieAnimal
    },
    {
        path: '/fruit',
        name: 'Fruit',
        component: PieFruit
    },
    {
        path: '/color',
        name: 'Color',
        component: PieColor
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router