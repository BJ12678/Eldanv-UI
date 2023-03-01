import store from '../../store';
import customerApi from '../../api/customer';

export default {
  namespaced: true,
  state: () => ({
    customers: []
  }),
  getters: {
    totalCustomerGetter: (state) => state.customers.length,
    totalCustomerStationGetter: (state) =>
      state.customers.filter((customer) => customer.seller === 'station')
        .length,
    totalCustomerSeller1Getter: (state) =>
      state.customers.filter((customer) => customer.seller === 'seller1')
        .length,
    totalCustomerSeller2Getter: (state) =>
      state.customers.filter((customer) => customer.seller === 'seller2').length
  },

  actions: {
    async getCustomersAction({ commit }) {
      await customerApi
        .fetchCust()
        .then((res) => commit('GET_CUSTOMERS', res.data));
    },
    addCustomerAction({ commit }, payload) {
      customerApi
        .addCust(payload)
        .then((res) => commit('ADD_CUSTOMER', res.data));
    },
    updateCustomerAction({ commit }, payload) {
      customerApi
        .updateCust(payload)
        .then((res) => commit('UPDATE_CUSTOMER', res.data));
    },
    deleteCustomerAction({ commit }, payload) {
      customerApi
        .deleteCust(payload)
        .then((res) => commit('DELETE_CUSTOMER', res.data));
    }
  },

  mutations: {
    GET_CUSTOMERS: (state, payload) => {
      state.customers = payload;
    },
    ADD_CUSTOMER: (state, payload) => {
      state.customers.push(payload);
    },
    UPDATE_CUSTOMER: (state, cust) => {
      const index = state.customers.findIndex(
        (customer) => customer.id === cust.id
      );
      if (index !== -1) {
        state.customers.splice(index, 1, cust);
      }
      store.state.show_update_form = false;
      store.state.selected_id = null;
    },
    DELETE_CUSTOMER: (state, payload) => {
      const index = state.customers.findIndex(
        (customer) => customer.id === payload.id
      );
      if (index !== -1) {
        state.customers.splice(index, 1);
      }
      store.state.show_delete_button = false;
      store.state.selected_id = null;
    }
  }
};
