import { createRouter, createWebHashHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import LoginView from "../views/LoginView.vue";
import FetchView from "../views/FetchView.vue";

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

];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;