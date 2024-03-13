import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import HomeScreen from './pages/HomeScreen.vue'
import FavouritesScreen from './pages/FavouritesScreen.vue'
import ShoppingListScreen from './pages/ShoppingListScreen.vue'
import App from './App.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeScreen },
  { path: '/favourites', name: 'Favourites', component: FavouritesScreen },
  { path: '/shopping-list', name: 'ShoppingList', component: ShoppingListScreen }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(createPinia()).use(router).use(autoAnimatePlugin).mount('#app')
