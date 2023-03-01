import { HTTP } from './client';
import store from '@/store';

export default {
  fetchCust() {
    return HTTP.get(`/customers`, {
      headers: {
        Authorization: `Bearer ${store.state.auth.userToken}`
      }
    });
  }, // get all customers

  addCust(data) {
    return HTTP.post(
      `/customers`,
      {
        name: data.name,
        area: data.area,
        seller: data.seller,
        contact: data.contact,
        remarks: data.remarks
      },
      {
        headers: {
          Authorization: `Bearer ${store.state.auth.userToken}`
        }
      }
    );
  }, // add new customer

  updateCust(data) {
    return HTTP.put(
      `/customers/${data.id}`,
      {
        name: data.name,
        area: data.area,
        seller: data.seller,
        contact: data.contact,
        remarks: data.remarks
      },
      {
        headers: {
          Authorization: `Bearer ${store.state.auth.userToken}`
        }
      }
    );
  }, // update customer

  deleteCust(data) {
    return HTTP.delete(`/customers/${data.id}`, {
      headers: {
        Authorization: `Bearer ${store.state.auth.userToken}`
      }
    });
  } // delete customer
}; // export
