import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import auth from './modules/auth';
import customers from './modules/customers';
import sales from './modules/sales';
import expenses from './modules/expenses';

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  storage: window.localStorage
  // storage: window.sessionStorage
});

const store = new Vuex.Store({
  state: {
    selected_id: null,
    select_year: new Date().getFullYear(),
    current_year: new Date().getFullYear(),
    show_add_form: false,
    show_update_form: false,
    show_update_icon: false,
    show_delete_button: false
  },
  getters: {},
  actions: {
    showAddForm({ commit }) {
      commit('SHOW_ADD_FORM');
    },

    showUpdateForm({ commit }, id) {
      commit('SHOW_UPDATE_FORM', id);
    },

    showUpdateIcon({ commit }) {
      commit('SHOW_UPDATE_ICON');
    },

    showDeleteButton({ commit }) {
      commit('SHOW_DELETE_BUTTON');
    },

    cancelButton({ commit }) {
      commit('HIDE_FORM');
    }
  },
  mutations: {
    SHOW_ADD_FORM: (state) => {
      state.show_add_form = true;
      state.show_update_form = false;
      state.show_update_icon = false;
      state.show_delete_button = false;
      state.selected_id = null;
    },
    SHOW_UPDATE_FORM: (state, id) => {
      state.show_add_form = false;
      state.show_update_form = true;
      state.show_update_icon = false;
      state.show_delete_button = false;
      state.selected_id = id;
    },
    SHOW_UPDATE_ICON: (state) => {
      state.show_add_form = false;
      state.show_update_form = false;
      state.show_update_icon = true;
      state.show_delete_button = false;
      state.selected_id = null;
    },
    SHOW_DELETE_BUTTON: (state) => {
      state.show_add_form = false;
      state.show_update_form = false;
      state.show_update_icon = false;
      state.show_delete_button = true;
      state.selected_id = null;
    },
    HIDE_FORM: (state) => {
      state.show_add_form = false;
      state.show_update_form = false;
      state.show_update_icon = false;
      state.show_delete_button = false;
      state.selected_id = null;
    }
  },
  modules: {
    auth,
    customers,
    sales,
    expenses
  },
  plugins: [vuexPersist.plugin],
  strict: process.env.NODE_ENV !== 'production'
});

export default store;
