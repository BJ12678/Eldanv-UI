import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/station",
    name: "Station",
    component: () =>
      import(/* webpackChunkName: "station" */ "../views/Station.vue")
  },
  {
    path: "/customer",
    name: "Customer",
    component: () =>
      import(/* webpackChunkName: "customer" */ "../views/Customer.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
