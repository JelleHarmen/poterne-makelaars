import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Estate from "../views/Estate.vue";
import Login from "../views/Login.vue";
import CreateEstate from "../views/CreateEstate.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:is_rental/:city/:id/:title",
    name: "Estate",
    component: Estate,
    props: true,
  },
  {
    path: "/huis-aanmelden",
    name: "CreateEstate",
    component: CreateEstate,
    props: true,
  },
  {
    path: "/over-ons",
    name: "About",
    // lazy-loaded, only load when visited
    component: () => import("../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
