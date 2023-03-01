import userApi from '../../api/user';
import router from '../../router';
import store from '@/store';

export default {
  namespaced: true,
  state: () => {
    return {
      userId: null,
      isAdmin: null,
      userToken: null
    };
  },
  getters: {},
  actions: {
    async loginUser({ commit }, payload) {
      await userApi.login(payload).then((res) => commit('LOGGED_IN', res.data));
      router.push('/');
      // location.reload();
    },

    logoutUser({ commit }) {
      commit('LOGGED_OUT');
      router.push('/login');
      // location.reload();
    }
  },
  mutations: {
    LOGGED_IN(state, payload) {
      state.userToken = payload.token;
      const decodeJwt = JSON.parse(atob(payload.token.split('.')[1])).uid;
      state.userId = decodeJwt;
      state.userId === 1 ? (state.isAdmin = true) : (state.isAdmin = false);
    },
    LOGGED_OUT(state) {
      state.userId = '';
      state.isAdmin = null;
      state.userToken = null;
      store.state.customers.customers = [];
      store.state.sales.sales = [];
      store.state.expenses.items = [];
    }
  }
};
