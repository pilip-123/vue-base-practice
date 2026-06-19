import { createRouter, createWebHistory } from "vue-router";
import { auth } from "../auth";

const HomeView = () => import("../views/HomeView.vue");
const MoviesView = () => import("../views/MoviesView.vue");
const MovieDetailView = () => import("../views/MovieDetailView.vue");
const WatchlistView = () => import("../views/WatchlistView.vue");
const NotFoundView = () => import("../views/NotFoundView.vue");

import MovieOverview from "../components/MovieOverview.vue";
import MovieCast from "../components/MovieCast.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/movies",
      name: "movies",
      component: MoviesView,
    },
    {
      path: "/movies/:id",
      name: "movie-detail",
      component: MovieDetailView,
      children: [
        {
          path: "overview",
          name: "movie-overview",
          component: MovieOverview,
        },
        {
          path: "cast",
          name: "movie-cast",
          component: MovieCast,
        },
      ],
    },
    {
      path: "/watchlist",
      name: "watchlist",
      component: WatchlistView,
      meta: { requiresAuth: true },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !auth.isLoggedIn) {
    return { name: "home" };
  }
});

export default router;

