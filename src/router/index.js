import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import HomePage from "@/views/HomePage";
import CustomersPage from "@/views/CustomersPage";
import SalesPage from "@/views/SalesPage";
import ExpensesPage from "@/views/ExpensesPage";
import FinancialsPage from "@/views/FinancialsPage";  
import LoginPage from "@/views/LoginPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    meta: { requiresAuth: true }
  },
  {
    path: "/customers",
    name: "customers",
    component: CustomersPage,
    meta: { requiresAuth: true }
  },
  {
    path: "/sales",
    name: "sales",
    component: SalesPage,
    meta: { requiresAuth: true }
  },
  {
    path: "/expenses",
    name: "expenses",
    component: ExpensesPage,
    meta: { requiresAuth: true }
  }, 
  {
    path: "/financials",
    name: "financials",
    component: FinancialsPage,
    meta: { requiresAuth: true }
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.auth.userToken === null) {
      next({ name: "login" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
