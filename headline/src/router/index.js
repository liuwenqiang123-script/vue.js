import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/login.vue";
import Home1 from "../views/Home1.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home1",
    component: Home1
  },
  {
    path: "/login",
    // name: "Home",
    component: Login
  },
];

const router = new VueRouter({
  routes
});

export default router;
