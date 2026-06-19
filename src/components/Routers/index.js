import {createRouter , createWebHistory} from 'vue-router';
import HomeView from '../Views/HomeView.vue';
import Aboutpage from '../Views/Aboutpage.vue';
import NotFound from '../Views/NotFound.vue';

const routes = [
    {
        name: "Home",
        path: "/",
        component: HomeView
    },
    {
        name: "About",
        path: "/about",
        component: Aboutpage
    },
    {
        name: "NotFound",
        path: "/:pathMatch(.*)*",
        component: NotFound
    }
];

const router = createRouter ({
    history: createWebHistory(),
    routes
});

export default router 