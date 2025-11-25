import { createRouter, createWebHashHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import LoginView from "../views/LoginView.vue";
import FetchView from "../views/FetchView.vue";
import FAQView from "../views/FAQView.vue";

const routes = [{
        path: "/",
        name: "main",
        component: MainView,
    },
    {
        path: "/login",
        name: "login",
        component: LoginView,
    },
    {
        path: "/fetch",
        name: "fetch",
        component: FetchView,
    },
    {
        path: "/faq",
        name: "faq",
        component: FAQView,
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;