import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/HomeView.vue";
import ServiceView from "../views/service/ServiceView.vue";

// import SupportSection from "../views/home/Sections/SupportSection.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/service",
    name: "Service",
    // component: () => import("../components/Views/Service/ServiceView.vue"),
    component: ServiceView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
