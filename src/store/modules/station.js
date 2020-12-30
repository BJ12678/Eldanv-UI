// import router from "@/router";

const state = () => ({
  employee: {
    name: [],
    sale: "",
    container: "",
    customers: []
  },
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
