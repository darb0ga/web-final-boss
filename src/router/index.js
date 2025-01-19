import { createRouter, createWebHistory } from 'vue-router'
import authorization from "@/views/authorization.vue";
import main from "@/views/main.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'login',
            component: authorization,
            beforeEnter: (to, from, next) => {
                console.log(localStorage.getItem("jwt"));
                (localStorage.getItem("jwt") !== null)
                    ? next({name: 'main'})
                    : next({name: 'register'});
            }
        },
        {
            path: '/register',
            name: 'register',
            component: authorization,
            beforeEnter: (to, from, next) => {
                (localStorage.getItem("jwt") !== null) ? next({name: 'main'}) : next();
            }
        },
        {
            path: '/main',
            name: 'main',
            component: main,
            beforeEnter: (to, from, next) => {
                (localStorage.getItem("jwt") !== null) ? next() : next({ name: 'login'});
            }
        },
    ],
})

export default router
