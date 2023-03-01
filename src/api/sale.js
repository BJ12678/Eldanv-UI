import { HTTP } from "./client";
import store from "@/store";

export default {
  fetchSales() {
    return HTTP.get(`/sales`, {
      headers: {
        Authorization: `Bearer ${store.state.auth.userToken}`
      }
    });
  }, // get all sales

  addSale(data) {
    return HTTP.post(
      `/sales`,
      {
        date: data.date,
        customer: data.customer,
        seller: data.seller,
        item: data.item,
        payments: data.payments,
        remarks: data.remarks
      },
      {
        headers: {
          Authorization: `Bearer ${store.state.auth.userToken}`
        }
      }
    );
  }, // add new sale

  updateSale(data) {
    return HTTP.put(
      `/sales/${data.id}`,
      {
        date: data.date,
        customer: data.customer,
        seller: data.seller,
        item: data.item,
        payments: data.payments,
        remarks: data.remarks
      },
      {
        headers: {
          Authorization: `Bearer ${store.state.auth.userToken}`
        }
      }
    );
  }, // update sale

  deleteSale(data) {
    return HTTP.delete(`/sales/${data.id}`, {
      headers: {
        Authorization: `Bearer ${store.state.auth.userToken}`
      }
    });
  } // delete sale
}; // export
