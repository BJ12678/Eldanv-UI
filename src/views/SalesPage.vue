<template>
  <div id="wrapper">
    <!-- Navigation -->
    <navbar-comp />

    <div id="page-wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <h2>Sales</h2>
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
                Month:
                <select
                  class="select-month"
                  v-model="select_month"
                  name="month"
                >
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
                <span>
                  <select class="select-year" v-model="select_year" name="year">
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                  </select>
                </span>
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
                    <th>Date</th>
                    <th>Customer</th>
                    <th>Seller</th>
                    <th>Deliver</th>
                    <th>Paid</th>
                    <th>Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- add new item section -->
                  <tr v-if="show_add_form == true">
                    <td class="prevent-wordbreak">
                      <span
                        @click.prevent="addNewSale"
                        class="label label-success"
                        >Submit</span
                      >
                      <input v-model="add_form.date" type="date" />
                    </td>
                    <td>
                      <input v-model="add_form.customer" type="text" />
                    </td>
                    <td>
                      <select v-model="add_form.seller" name="seller">
                        <option value="station">station</option>
                        <option value="seller1">seller1</option>
                        <option value="seller2">seller2</option>
                      </select>
                    </td>
                    <td>
                      <input v-model.number="add_form.item" type="number" />
                    </td>
                    <td>
                      <input v-model.number="add_form.payments" type="number" />
                    </td>
                    <td>
                      <textarea v-model="add_form.remarks" />
                    </td>
                  </tr>
                  <!-- end add customer section -->

                  <tr v-for="sale in searchItem()" :key="sale.id">
                    <td>
                      <span
                        v-show="show_update_icon == true"
                        class="small text-muted"
                      >
                        <i
                          class="fas fa-pencil-alt"
                          @click.prevent="showUpdateForm(sale.id)"
                        ></i>
                      </span>
                      <span
                        @click.prevent="deleteSaleAction(sale)"
                        v-show="show_delete_button == true"
                        class="label label-danger"
                        >Delete</span
                      >
                      <span class="prevent-wordbreak">
                        <span
                          @click.prevent="updSale(sale)"
                          v-show="
                            show_update_form == true && selected_id === sale.id
                          "
                          class="label label-success"
                        >
                          Update
                        </span>
                        {{ sale.date }} </span
                      ><br />
                      <input
                        type="date"
                        class="input-date"
                        v-show="selected_id === sale.id"
                        v-model="sale.date"
                      />
                    </td>
                    <td>
                      {{ sale.customer }}<br />
                      <input
                        type="text"
                        v-model="sale.customer"
                        v-show="selected_id === sale.id"
                      />
                    </td>
                    <td>
                      {{ sale.seller }}<br />
                      <select
                        name="seller"
                        v-model="sale.seller"
                        v-show="selected_id === sale.id"
                      >
                        <option value="station">station</option>
                        <option value="seller1">seller1</option>
                        <option value="seller2">seller2</option>
                      </select>
                    </td>
                    <td>
                      {{ sale.item }}<br />
                      <input
                        type="number"
                        v-model.number="sale.item"
                        v-show="selected_id === sale.id"
                      />
                    </td>
                    <td>
                      {{ sale.payments }}<br />
                      <input
                        type="number"
                        v-model.number="sale.payments"
                        v-show="selected_id === sale.id"
                      />
                    </td>
                    <td>
                      {{ sale.remarks }}<br />
                      <textarea
                        v-model="sale.remarks"
                        v-show="selected_id === sale.id"
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
import { mapState, mapGetters, mapActions } from 'vuex';
import NavbarComp from '@/components/NavbarComp.vue';
import FooterComp from '@/components/FooterComp.vue';

export default {
  name: 'SalesPage',
  components: {
    NavbarComp,
    FooterComp
  },
  data() {
    return {
      search_value: '',
      select_month: this.currentMonth(),
      select_year: new Date().getFullYear(),
      add_form: {
        date: new Date().toISOString().substr(0, 10),
        customer: '',
        seller: 'station',
        item: 0,
        payments: 0,
        remarks: ''
      }
    };
  },
  computed: {
    ...mapState([
      'selected_id',
      'current_year',
      'show_add_form',
      'show_update_form',
      'show_update_icon',
      'show_delete_button'
    ]),
    ...mapGetters('sales', [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
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

    ...mapActions('sales', [
      'addSaleAction',
      'updateSaleAction',
      'deleteSaleAction'
    ]),
    // add section
    addNewSale() {
      this.addSaleAction(this.add_form);
    },

    // update section
    updSale(selected_sale) {
      this.updateSaleAction({
        id: selected_sale.id,
        date: selected_sale.date,
        customer: selected_sale.customer,
        seller: selected_sale.seller,
        item: selected_sale.item,
        payments: selected_sale.payments,
        remarks: selected_sale.remarks
      });
    },

    currentMonth() {
      const month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ];

      const d = new Date();
      let name = month[d.getMonth()];
      return name;
    }, //end of currenMonth()

    searchItem() {
      let findMatch = /([a-z])\w+/gi;
      findMatch = this.search_value;
      if (this.search_value != null) {
        return this.selectedMonth()
          .filter(
            (sale) =>
              sale.date.match(findMatch) ||
              sale.customer.match(findMatch) ||
              sale.seller.match(findMatch)
          )
          .filter((sale) => sale.date.match(this.select_year));
      }
    },

    selectedMonth() {
      if (this.select_month === 'January') {
        return this.January.filter((sale) => sale.date.match(this.select_year));
      } else if (this.select_month === 'February') {
        return this.February.filter((sale) =>
          sale.date.match(this.select_year)
        );
      } else if (this.select_month === 'March') {
        return this.March.filter((sale) => sale.date.match(this.select_year));
      } else if (this.select_month === 'April') {
        return this.April.filter((sale) => sale.date.match(this.select_year));
      } else if (this.select_month === 'May') {
        return this.May.filter((sale) => sale.date.match(this.select_year));
      } else if (this.select_month === 'June') {
        return this.June.filter((sale) => sale.date.match(this.select_year));
      } else if (this.select_month === 'July') {
        return this.July.filter((sale) => sale.date.match(this.select_year));
      } else if (this.select_month === 'August') {
        return this.August.filter((sale) => sale.date.match(this.select_year));
      } else if (this.select_month === 'September') {
        return this.September.filter((sale) =>
          sale.date.match(this.select_year)
        );
      } else if (this.select_month === 'October') {
        return this.October.filter((sale) => sale.date.match(this.select_year));
      } else if (this.select_month === 'November') {
        return this.November.filter((sale) =>
          sale.date.match(this.select_year)
        );
      } else {
        return this.December.filter((sale) =>
          sale.date.match(this.select_year)
        );
      }
    } //end of selectedMonth()
  }
};
</script>

<style scoped>
.breadcrumb-li,
.label,
i {
  cursor: pointer;
}
.search-input,
.select-month {
  border-color: rgba(0, 0, 0, 0.14);
  border-radius: 3px;
  width: 125px;
}

.prevent-wordbreak {
  white-space: nowrap;
}

.input-date,
.label-success {
  margin: 3px;
}

select {
  margin: -2px;
}
</style>
