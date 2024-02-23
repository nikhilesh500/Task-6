import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router';
import HeaderComponentVue from './components/HeaderComponent.vue';
import HeroComponentVue from './components/HeroComponent.vue';
import AboutPageVue from './components/pages/AboutPage.vue';
import FeaturesPageVue from './components/pages/FeaturesPage.vue';
import LoginPageVue from './components/pages/LoginPage.vue';
import ProductPageVue from './components/pages/ProductPage.vue';

const app = createApp(App);

app.component('HeaderComponent', HeaderComponentVue)

const routes = [
  {path: '/', component: HeroComponentVue},
  {path: '/about', component: AboutPageVue},
  {path: '/product', component: ProductPageVue},
  {path: '/features', component: FeaturesPageVue},
  {path: '/login', component: LoginPageVue},
];
const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(router).mount('#app')
