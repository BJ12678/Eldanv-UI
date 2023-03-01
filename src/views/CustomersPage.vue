<template>
  <div id="wrapper">
    <!-- Navigation -->
    <navbar-comp />

    <div id="page-wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <h2>Customers</h2>
            <ol class="breadcrumb">
              <li class="breadcrumb-li" @click.prevent="showAddForm">
                Add
              </li>
              <li class="breadcrumb-li" @click.prevent="showUpdateIcon">
                Edit
              </li>
              <li class="breadcrumb-li" @click.prevent="showDeleteButton">
                Delete
              </li>
              <li class="breadcrumb-li" @click.prevent="cancelButton">
                Cancel
              </li>
              <li class="breadcrumb-li">
                Search:
                <input
                  type="search"
                  class="search-input"
                  v-model="search_value"
                />
              </li>
            </ol>
            <!-- <div class="alert alert-success">
              <strong>Success!</strong> You successfully finished process.
            </div>
            <div class="alert alert-danger">
              <strong>Ooops!</strong> Change a few things up and try submitting
              again.
            </div> -->
            <div class="table-responsive">
              <table class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Area</th>
                    <th>Seller</th>
                    <th>Contact</th>
                    <th>Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- add customer section -->
                  <tr v-if="show_add_form == true">
                    <td class="prevent-wordbreak">
                      <span
                        @click.prevent="addNewCust"
                        class="label label-success"
                        >Submit</span
                      >

                      <input v-model="add_form.name" type="text" />
                    </td>
                    <td><input v-model="add_form.area" type="text" /></td>
                    <td>
                      <select v-model="add_form.seller" name="seller">
                        <option value="station">station</option>
                        <option value="seller1">seller1</option>
                        <option value="seller2">seller2</option>
                      </select>
                    </td>
                    <td>
                      <input v-model.number="add_form.contact" type="number" />
                    </td>
                    <td>
                      <textarea v-model="add_form.remarks" />
                    </td>
                  </tr>
                  <!-- end add customer section -->
                  <tr v-for="customer in searchCustomer()" :key="customer.id">
                    <td class="prevent-wordbreak">
                      <span
                        v-show="show_update_icon == true"
                        class="small text-muted"
                      >
                        <i
                          class="fas fa-pencil-alt"
                          @click.prevent="showUpdateForm(customer.id)"
                        ></i>
                      </span>
                      <span
                        @click.prevent="deleteCustomerAction(customer)"
                        v-show="show_delete_button == true"
                        class="label label-danger"
                        >Delete</span
                      >
                      <span class="prevent-wordbreak">
                        <span
                          @click.prevent="updCust(customer)"
                          v-show="
                            show_update_form == true &&
                              selected_id === customer.id
                          "
                          class="label label-success"
                        >
                          Update
                        </span>
                        {{ customer.name }} </span
                      ><br />
                      <input
                        type="text"
                        v-model="customer.name"
                        v-show="selected_id === customer.id"
                      />
                    </td>
                    <td>
                      {{ customer.area }}<br />
                      <input
                        type="text"
                        v-model="customer.area"
                        v-show="selected_id === customer.id"
                      />
                    </td>
                    <td>
                      {{ customer.seller }}<br />
                      <input
                        type="text"
                        v-model="customer.seller"
                        v-show="selected_id === customer.id"
                      />
                    </td>
                    <td>
                      {{ customer.contact }}<br />
                      <input
                        type="number"
                        v-model.number="customer.contact"
                        v-show="selected_id === customer.id"
                      />
                    </td>
                    <td>
                      {{ customer.remarks }}<br />
                      <textarea
                        v-model="customer.remarks"
                        v-show="selected_id === customer.id"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <footer-comp />
          </div>
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </div>
    <!-- /#page-wrapper -->
  </div>
  <!-- /#wrapper -->
</template>

<script>
import { mapState, mapActions } from 'vuex';
import NavbarComp from '@/components/NavbarComp.vue';
import FooterComp from '@/components/FooterComp.vue';

export default {
  name: 'CustomersPage',
  components: {
    NavbarComp,
    FooterComp
  },
  data() {
    return {
      search_value: '',
      // add customer form
      add_form: {
        name: '',
        area: '',
        seller: 'station',
        contact: '',
        remarks: ''
      }
    };
  },
  computed: {
    ...mapState('customers', ['customers']),
    ...mapState([
      'selected_id',
      'show_add_form',
      'show_update_form',
      'show_update_icon',
      'show_delete_button'
    ])
  },
  methods: {
    ...mapActions([
      'showAddForm',
      'showUpdateForm',
      'showUpdateIcon',
      'showDeleteButton',
      'cancelButton'
    ]),
    ...mapActions('customers', [
      'addCustomerAction',
      'updateCustomerAction',
      'deleteCustomerAction'
    ]),

    // add customer section
    addNewCust() {
      this.addCustomerAction(this.add_form);
    },

    // update customer section
    updCust(selected_cust) {
      this.updateCustomerAction({
        id: selected_cust.id,
        name: selected_cust.name,
        area: selected_cust.area,
        seller: selected_cust.seller,
        contact: selected_cust.contact,
        remarks: selected_cust.remarks
      });
    },

    searchCustomer() {
      let findMatch = /([a-z])\w+/gi;
      findMatch = this.search_value;
      if (this.search_value != null) {
        return this.customers.filter(
          (customer) =>
            customer.name.match(findMatch) ||
            customer.area.match(findMatch) ||
            customer.seller.match(findMatch)
        );
      }
    }
  }
};
</script>

<style scoped>
.breadcrumb-li,
.label,
i {
  cursor: pointer;
}
.search-input {
  border-color: rgba(0, 0, 0, 0.14);
  border-radius: 3px;
  width: 125px;
}

.prevent-wordbreak {
  white-space: nowrap;
}

.label-success,
input {
  margin: 3px;
}
</style>
