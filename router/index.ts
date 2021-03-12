import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Gallery from "../src/components/Gallery.vue";
import IndieCrusade from "../src/components/IndieCrusade.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "gallery",
    component: Gallery
  },
  {
    path: "/indie-crusade",
    name: "indie-crusade",
    component: IndieCrusade
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
