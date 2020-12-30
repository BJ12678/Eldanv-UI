// import router from "@/router";

const state = () => ({
  sale_details: [
    {
      name: "B.Sam",
      sale: [23, 24, 34, 23, 35],
      container: "34",
      customers: "54"
    },
    {
      name: "B.Anthony",
      sale: [23, 24, 34, 23, 35],
      container: "34",
      customers: "54"
    },
    {
      name: "Base",
      sale: [23, 24, 34, 23, 35],
      container: "34",
      customers: "54"
    }
  ],
  total_containers: null,
  total_customers: null,
  monthly_sales: null,
  electric_bill: null,
  water_bill: null
});
const getters = {};
const actions = {};
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
