import { createWebHashHistory, createRouter } from "vue-router";
import HomePage from "../views/HomePage.vue";
import Aboutpage from "../views/Aboutpage.vue";
import Contactpage from "../views/Contactpage.vue";

const routes =[
    {
        path: "/",
        name: "HomePage",
        component: HomePage
    },
    {
        path: "/about",
        name: "Aboutpage",
        component: Aboutpage
    },
    {
        path: "/contact",
        name: "Contactpage",
        component: Contactpage
    }

];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router
