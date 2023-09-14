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
      path: "/slots",
      name:"slot",
      component: ()=> import('../views/slot/SlotView.vue')
    },
    {
      path: '/:catchAll(.*)*',
      name: '404.not.found',
      component: () => import('../components/common/NotFound.vue')
    },
    {
      path: '/state-management',
      name: 'state.mangement',
      component: () => import('../../src/views/state-management/StateView.vue')
    },
    {
      path: '/props-drilling',
      name: 'props.drilling',
      component: () => import('../../src/views/props-drilling/PropsDrillingView.vue')
    },
    {
      path: '/composables',
      name: 'composables',
      component: () => import('../../src/views/composables/ComposableView.vue')
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: () => import('../../src/views/pinia/PiniaView.vue')
    }
  ],
});

export default router;
