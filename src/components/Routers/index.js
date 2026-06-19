import { createRouter , createWebHistory} from "vue-router";
import Home from "../Views/Home.vue";
import About from "../Views/About.vue";
import Project from "../Views/Project.vue";
import NotFound from "../Views/NotFound.vue";
import ProjectDetail from "../Views/ProjectDetail.vue";

const routes = [
    {
        name: "Home",
        path: "/",
        component: Home
    },
    {
        name: "About",
        path: "/about",
        component: About
    },
    {
        name: "Projects",
        path: "/projects",
        component: Project
    },
    {
        name: "ProjectDetail",
        path: "/projects/:id",
        component: ProjectDetail
    },
    {
        name: "NotFound",
        path: "/:pathMatch(.*)*",
        component: NotFound
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router