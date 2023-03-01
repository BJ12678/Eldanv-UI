<template>
  <div id="wrapper">
    <!-- Navigation -->
    <navbar-comp />

    <div id="page-wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <h2>Expenses</h2>
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
                    <th>Employee</th>
                    <th>Remarks</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- add new item section -->
                  <tr v-if="show_add_form == true">
                    <td class="prevent-wordbreak">
                      <span
                        @click.prevent="addNewItem"
                        class="label label-success"
                        >Submit</span
                      >
                      <input v-model="add_form.date" type="date" id="date" />
                    </td>
                    <td>
                      <select v-model="add_form.employee" name="seller">
                        <option value="station">station</option>
                        <option value="seller1">seller1</option>
                        <option value="seller2">seller2</option>
                      </select>
                    </td>
                    <td>
                      <textarea v-model="add_form.remarks" />
                    </td>
                    <td>
                      <input v-model.number="add_form.amount" type="number" />
                    </td>
                  </tr>
                  <!-- end add customer section -->
                  <tr v-for="item in searchItem()" :key="item.id">
                    <td class="prevent-wordbreak">
                      <span
                        v-show="show_update_icon == true"
                        class="small text-muted"
                      >
                        <i
                          class="fas fa-pencil-alt"
                          @click.prevent="showUpdateForm(item.id)"
                        ></i>
                      </span>
                      <span
                        @click.prevent="deleteItemAction(item)"
                        v-show="show_delete_button == true"
                        class="label label-danger"
                        >Delete</span
                      >
                      <span class="prevent-wordbreak">
                        <span
                          @click.prevent="updItem(item)"
                          v-show="
                            show_update_form == true && selected_id === item.id
                          "
                          class="label label-success"
                        >
                          Update
                        </span>

                        {{ item.date }}</span
                      ><br />
                      <input
                        type="date"
                        class="input-date"
                        v-model="item.date"
                        v-show="selected_id === item.id"
                      />
                    </td>
                    <td>
                      {{ item.employee }}<br />
                      <input
                        type="text"
                        v-model="item.employee"
                        v-show="selected_id === item.id"
                      />
                    </td>
                    <td>
                      {{ item.remarks }}<br />
                      <textarea
                        v-model="item.remarks"
                        v-show="selected_id === item.id"
                      />
                    </td>
                    <td>
                      {{ item.amount.toLocaleString('en') }}<br />
                      <input
                        type="number"
                        v-model.number="item.amount"
                        v-show="selected_id === item.id"
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
  name: 'ExpensesPage',
  components: {
    NavbarComp,
    FooterComp
  },
  data() {
    return {
      search_value: '',
      select_month: this.currentMonth(),
      select_year: new Date().getFullYear(),
      // add  form
      add_form: {
        date: new Date().toISOString().substr(0, 10),
        employee: 'station',
        remarks: '',
        amount: 0
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
    ...mapGetters('expenses', [
      'January_',
      'February_',
      'March_',
      'April_',
      'May_',
      'June_',
      'July_',
      'August_',
      'September_',
      'October_',
      'November_',
      'December_'
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

    ...mapActions('expenses', [
      'addItemAction',
      'updateItemAction',
      'deleteItemAction'
    ]),

    // add section
    addNewItem() {
      this.addItemAction(this.add_form);
    },

    // update section
    updItem(selected_item) {
      this.updateItemAction({
        id: selected_item.id,
        date: selected_item.date,
        employee: selected_item.employee,
        remarks: selected_item.remarks,
        amount: selected_item.amount
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
    },

    searchItem() {
      let findMatch = /([a-z])\w+/gi;
      findMatch = this.search_value;
      if (this.search_value != null) {
        return this.expensesMonth()
          .filter(
            (item) =>
              item.date.match(findMatch) ||
              item.employee.match(findMatch) ||
              item.remarks.match(findMatch)
          )
          .filter((item) => item.date.match(this.select_year));
      }
    },

    expensesMonth() {
      if (this.select_month === 'January') {
        return this.January_.filter((item) =>
          item.date.match(this.select_year)
        );
      } else if (this.select_month === 'February') {
        return this.February_.filter((item) =>
          item.date.match(this.select_year)
        );
      } else if (this.select_month === 'March') {
        return this.March_.filter((item) => item.date.match(this.select_year));
      } else if (this.select_month === 'April') {
        return this.April_.filter((item) => item.date.match(this.select_year));
      } else if (this.select_month === 'May') {
        return this.May_.filter((item) => item.date.match(this.select_year));
      } else if (this.select_month === 'June') {
        return this.June_.filter((item) => item.date.match(this.select_year));
      } else if (this.select_month === 'July') {
        return this.July_.filter((item) => item.date.match(this.select_year));
      } else if (this.select_month === 'August') {
        return this.August_.filter((item) => item.date.match(this.select_year));
      } else if (this.select_month === 'September') {
        return this.September_.filter((item) =>
          item.date.match(this.select_year)
        );
      } else if (this.select_month === 'October') {
        return this.October_.filter((item) =>
          item.date.match(this.select_year)
        );
      } else if (this.select_month === 'November') {
        return this.November_.filter((item) =>
          item.date.match(this.select_year)
        );
      } else {
        return this.December_.filter((item) =>
          item.date.match(this.select_year)
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

.input-date,
.label-success {
  margin: 3px;
}

select {
  margin: -2px;
}
</style>
