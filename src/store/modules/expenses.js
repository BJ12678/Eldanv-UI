import store from '../../store';
import expensesApi from '../../api/expenses';

export default {
  namespaced: true,
  state: () => ({
    items: []
  }),
  getters: {
    station: (state) =>
      state.items.filter((item) => item.employee === 'station'),
    seller1: (state) =>
      state.items.filter((item) => item.employee === 'seller1'),
    seller2: (state) =>
      state.items.filter((item) => item.employee === 'seller2'),
    // monthly
    January_: (state) =>
      state.items.filter((item) => item.date.match(/20[0-9][0-9]-01/g)),
    February_: (state) =>
      state.items.filter((item) => item.date.match(/20[0-9][0-9]-02/g)),
    March_: (state) =>
      state.items.filter((item) => item.date.match(/20[0-9][0-9]-03/g)),
    April_: (state) =>
      state.items.filter((item) => item.date.match(/20[0-9][0-9]-04/g)),
    May_: (state) =>
      state.items.filter((item) => item.date.match(/20[0-9][0-9]-05/g)),
    June_: (state) =>
      state.items.filter((item) => item.date.match(/20[0-9][0-9]-06/g)),
    July_: (state) =>
      state.items.filter((item) => item.date.match(/20[0-9][0-9]-07/g)),
    August_: (state) =>
      state.items.filter((item) => item.date.match(/20[0-9][0-9]-08/g)),
    September_: (state) =>
      state.items.filter((item) => item.date.match(/20[0-9][0-9]-09/g)),
    October_: (state) =>
      state.items.filter((item) => item.date.match(/20[0-9][0-9]-10/g)),
    November_: (state) =>
      state.items.filter((item) => item.date.match(/20[0-9][0-9]-11/g)),
    December_: (state) =>
      state.items.filter((item) => item.date.match(/20[0-9][0-9]-12/g)),

    totalExpensesGetter: (state) =>
      state.items
        .filter((item) => item.date.match(new Date().getFullYear()))
        .reduce((currentTotal, item) => {
          return item.amount + currentTotal;
        }, 0),

    totalStationExpensesGetter: (state, getters) => {
      return getters.station
        .filter((item) => item.date.match(new Date().getFullYear()))
        .reduce((currentTotal, item) => {
          return item.amount + currentTotal;
        }, 0);
    },

    totalSeller1ExpensesGetter: (state, getters) => {
      return getters.seller1
        .filter((item) => item.date.match(new Date().getFullYear()))
        .reduce((currentTotal, item) => {
          return item.amount + currentTotal;
        }, 0);
    },

    totalSeller2ExpensesGetter: (state, getters) => {
      return getters.seller2
        .filter((item) => item.date.match(new Date().getFullYear()))
        .reduce((currentTotal, item) => {
          return item.amount + currentTotal;
        }, 0);
    }
  },
  actions: {
    async getExpensesAction({ commit }) {
      await expensesApi
        .fetchMaintenance()
        .then((res) => commit('GET_ITEMS', res.data));
    },

    addItemAction({ commit }, payload) {
      expensesApi
        .addMaintenance(payload)
        .then((res) => commit('ADD_ITEM', res.data));
    },

    updateItemAction({ commit }, payload) {
      expensesApi
        .updateMaintenance(payload)
        .then((res) => commit('UPDATE_ITEM', res.data));
    },

    deleteItemAction({ commit }, payload) {
      expensesApi
        .deleteMaintenance(payload)
        .then((res) => commit('DELETE_ITEM', res.data));
    }
  },
  mutations: {
    GET_ITEMS: (state, payload) => {
      state.items = payload;
    },
    ADD_ITEM: (state, payload) => {
      state.items.push(payload);
      store.state.show_add_form = false;
    },

    UPDATE_ITEM: (state, payload) => {
      const index = state.items.findIndex((item) => item.id === payload.id);
      if (index !== -1) {
        state.items.splice(index, 1, payload);
      }
      store.state.show_update_form = false;
      store.state.selected_id = null;
    },

    DELETE_ITEM: (state, payload) => {
      const index = state.items.findIndex((item) => item.id === payload.id);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
      store.state.show_delete_button = false;
      store.state.selected_id = null;
    }
  }
};
