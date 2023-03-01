import { HTTP } from "./client";
import store from "@/store";

export default {
  fetchMaintenance() {
    return HTTP.get(`/maintenance`, {
      headers: {
        Authorization: `Bearer ${store.state.auth.userToken}`
      }
    });
  }, // get all items

  addMaintenance(data) {
    return HTTP.post(
      `/maintenance`,
      {
        date: data.date,
        employee: data.employee,
        remarks: data.remarks,
        amount: data.amount
      },
      {
        headers: {
          Authorization: `Bearer ${store.state.auth.userToken}`
        }
      }
    );
  }, // add new item

  updateMaintenance(data) {
    return HTTP.put(
      `/maintenance/${data.id}`,
      {
        date: data.date,
        employee: data.employee,
        remarks: data.remarks,
        amount: data.amount
      },
      {
        headers: {
          Authorization: `Bearer ${store.state.auth.userToken}`
        }
      }
    );
  }, // update selected

  deleteMaintenance(data) {
    return HTTP.delete(`/maintenance/${data.id}`, {
      headers: {
        Authorization: `Bearer ${store.state.auth.userToken}`
      }
    });
  } // delete selected item
}; // export
