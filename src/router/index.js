import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Property from "../views/Property.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:ownership/:city/:name-:id-:street",
    name: "Property",
    component: Property,
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
