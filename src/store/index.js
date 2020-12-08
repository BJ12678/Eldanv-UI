import Vue from "vue";
import Vuex from "vuex";
import customer from "./modules/customer";
import user from "./modules/user";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    customer,
    user
  }
});

export default store;
