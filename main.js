import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import RegisterForm from './components/RegisterForm.vue';
import LoginForm from './components/LoginForm.vue';
import Welcome from './components/Welcome.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/register', component: RegisterForm },
    { path: '/login', component: LoginForm },
    { path: '/welcome', component: Welcome, props: true },
    { path: '/', redirect: '/register' },
  ],
});

createApp(App).use(router).mount('#app');
