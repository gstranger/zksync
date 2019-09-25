import Vue from "vue";
import Router from "vue-router";

import Login from './views/Login.vue'
import Main from './views/Main.vue'

Vue.use(Router);


const router = new Router({
  routes: [
    { path: '/login', component: Login },
    { path: '/main', component: Main },
    { path: '*', redirect: '/login' },
  ],
  mode:   'history',
});

router.beforeEach((to, from, next) => {
    if (to.fullPath === '/main') {
        if (!window.walletDecorator) {
            next('/login');
        }
    }
    if (to.fullPath === '/login') {
        if (window.walletDecorator) {
            next('/main');
        }
    }
    next();
});

export default router;
