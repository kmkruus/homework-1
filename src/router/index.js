import { createRouter, createWebHashHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import LoginView from "../views/LoginView.vue";
import FetchView from "../views/FetchView.vue";
import SignupView from "../views/SignupView.vue";
import HomeView from "../views/HomeView.vue";

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
        path: "/signup",
        name: "signup",
        component: SignupView,
    },
    {
        path: "/home",
        name: "home",
        component: HomeView,
    }

];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;