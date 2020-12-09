import router from "@/router";

const state = () => ({
  username: "admin",
  password: "eldan",
  logged_in: false
});
const getters = {
  loggedIn: state => state.logged_in
};
const actions = {
  login(ctx, payload) {
    ctx.commit("ON_LOGIN_SUCCESS", payload);
  },
  logout({ commit }) {
    commit("LOG_OUT");
  }
};
const mutations = {
  ON_LOGIN_SUCCESS(state, payload) {
    if (
      payload.username == state.username &&
      payload.password == state.password
    ) {
      state.logged_in = true;
      router.push("/station");
    } else {
      alert("Invalid password or/and username");
    }
  },
  LOG_OUT(state) {
    state.logged_in = false;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
