import { createRouter, createWebHistory } from 'vue-router'
import Welcome from "@/views/Welcome";

const routes = [{
    path: "/",
    name: "Welcome",
    component: Welcome
}, {
    path: "/sounds",
    name: "Sounds",
    component: () => import("@/views/Sounds")
}];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;