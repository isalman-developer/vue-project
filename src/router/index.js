import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import QuizesView from "../views/Quiz/QuizesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/About/AboutView.vue"),
    },
    {
      path: "/quizes",
      name: "quizes",
      component: QuizesView,
    },
    {
      path: "/quiz/:id",
      name: "quiz",
      component: () => import("../views/Quiz/QuizView.vue"),
    },
    {
      path:'/array/shift',
      name: 'array.shift',
      component: () => import('../views/extra/ArrayShift.vue')
    },
    {
      path: '/movies/api',
      name:'movies.api',
      component: () => import('../views/Movies/MoviesView.vue')
    },
    {
      path: '/:catchAll(.*)*',
      name: '404.not.found',
      component: () => import('../components/common/NotFound.vue')
    }
  ],
});

export default router;
