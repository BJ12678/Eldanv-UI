import store from '../../store';
import saleApi from '../../api/sale';

export default {
  namespaced: true,
  state: () => ({
    sales: []
  }),
  getters: {
    // seller
    station: (state) =>
      state.sales.filter((sale) => sale.seller.match(/station/g)),
    seller1: (state) =>
      state.sales.filter((sale) => sale.seller.match(/seller1/g)),
    seller2: (state) =>
      state.sales.filter((sale) => sale.seller.match(/seller2/g)),

    // monthly sales
    January: (state) =>
      state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-01/g)),
    February: (state) =>
      state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-02/g)),
    March: (state) =>
      state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-03/g)),
    April: (state) =>
      state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-04/g)),
    May: (state) =>
      state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-05/g)),
    June: (state) =>
      state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-06/g)),
    July: (state) =>
      state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-07/g)),
    August: (state) =>
      state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-08/g)),
    September: (state) =>
      state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-09/g)),
    October: (state) =>
      state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-10/g)),
    November: (state) =>
      state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-11/g)),
    December: (state) =>
      state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-12/g)),

    // get the total number of items in current year
    totalItemsGetter: (state) =>
      state.sales
        .filter((sale) => sale.date.match(new Date().getFullYear()))
        .reduce((currentTotal, sale) => {
          return sale.item + currentTotal;
        }, 0),

    // get the total payments for items in current year
    totalPaymentsGetter: (state) =>
      state.sales
        .filter((sale) => sale.date.match(new Date().getFullYear()))
        .reduce((currentTotal, sale) => {
          return sale.payments + currentTotal;
        }, 0),

    // get the total items of station in current year
    totalStationItems: (state) =>
      state.sales
        .filter(
          (sale) =>
            sale.seller.match(/station/g) &&
            sale.date.match(new Date().getFullYear())
        )
        .reduce((currentTotal, sale) => {
          return sale.item + currentTotal;
        }, 0),

    // get the total payments of station in current year
    totalStationPayments: (state) =>
      state.sales
        .filter(
          (sale) =>
            sale.seller.match(/station/g) &&
            sale.date.match(new Date().getFullYear())
        )
        .reduce((currentTotal, sale) => {
          return sale.payments + currentTotal;
        }, 0),

    // get the total items  of seller1 in current year
    totalSeller1Items: (state) =>
      state.sales
        .filter(
          (sale) =>
            sale.seller.match(/seller1/g) &&
            sale.date.match(new Date().getFullYear())
        )
        .reduce((currentTotal, sale) => {
          return sale.item + currentTotal;
        }, 0),

    // get the total payments of seller1 in current year
    totalSeller1Payments: (state) =>
      state.sales
        .filter(
          (sale) =>
            sale.seller.match(/seller1/g) &&
            sale.date.match(new Date().getFullYear())
        )
        .reduce((currentTotal, sale) => {
          return sale.payments + currentTotal;
        }, 0),

    // get the total items of seller2 in current year
    totalSeller2Items: (state) =>
      state.sales
        .filter(
          (sale) =>
            sale.seller.match(/seller2/g) &&
            sale.date.match(new Date().getFullYear())
        )
        .reduce((currentTotal, sale) => {
          return sale.item + currentTotal;
        }, 0),

    // get the total payments of seller2 in current year
    totalSeller2Payments: (state) =>
      state.sales
        .filter(
          (sale) =>
            sale.seller.match(/seller2/g) &&
            sale.date.match(new Date().getFullYear())
        )
        .reduce((currentTotal, sale) => {
          return sale.payments + currentTotal;
        }, 0)
  },

  actions: {
    async getSalesAction({ commit }) {
      await saleApi.fetchSales().then((res) => commit('GET_SALES', res.data));
    },

    addSaleAction({ commit }, payload) {
      saleApi.addSale(payload).then((res) => commit('ADD_SALE', res.data));
    },

    updateSaleAction({ commit }, payload) {
      saleApi
        .updateSale(payload)
        .then((res) => commit('UPDATE_SALE', res.data));
    },

    deleteSaleAction({ commit }, payload) {
      saleApi
        .deleteSale(payload)
        .then((res) => commit('DELETE_SALE', res.data));
    }
  },
  mutations: {
    GET_SALES: (state, payload) => {
      state.sales = payload;
    },

    ADD_SALE: (state, payload) => {
      state.sales.push(payload);
      store.state.show_add_form = false;
    },

    UPDATE_SALE: (state, payload) => {
      const index = state.sales.findIndex((sale) => sale.id === payload.id);
      if (index !== -1) {
        state.sales.splice(index, 1, payload);
      }
      store.state.show_update_form = false;
      store.state.selected_id = null;
    },

    DELETE_SALE: (state, payload) => {
      const index = state.sales.findIndex((sale) => sale.id === payload.id);
      if (index !== -1) {
        state.sales.splice(index, 1);
      }
      store.state.show_delete_button = false;
      store.state.selected_id = null;
    }
  }
};
