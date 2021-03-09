import { createApp } from 'vue'
import { createStore } from 'vuex'
import store from '@/store/index'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).use(createStore(store)).mount('#app')