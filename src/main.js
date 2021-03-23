import { createApp } from 'vue'
import { createStore } from 'vuex'
import store from '@/store/index'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import router from './router'
import VueGoogleMaps from '@fawmi/vue-google-maps'

createApp(App).use(router).use(createStore(store)).use(VueGoogleMaps, {load: {key: 'AIzaSyDbjt8MNvuNZmnROsNhVErffNzgTCWijjw'}}).mount('#app')