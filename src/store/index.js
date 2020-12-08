import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import station from "./modules/station";
import customer from "./modules/customer";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    station,
    customer
  }
});

export default store;
