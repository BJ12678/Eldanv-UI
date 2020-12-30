<template>
  <div class="station">
    <h3>Sale Details</h3>
    <div style="overflow-x:auto;">
      <table>
        <tr>
          <th>Name</th>
          <th>August</th>
          <th>September</th>
          <th>October</th>
          <th>November</th>
          <th>December</th>
        </tr>
        <tr v-for="(item, index) in saleDetails" :key="index">
          <td @click="editInfo">{{ item.name }}</td>
          <td>{{ item.sale[0] }}</td>
          <td>{{ item.sale[1] }}</td>
          <td>{{ item.sale[2] }}</td>
          <td>{{ item.sale[3] }}</td>
          <td>{{ item.sale[4] }}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>0</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
        </tr>
      </table>
    </div>

    <h3>Expenses Info</h3>
    <div style="overflow-x:auto;">
      <table>
        <tr>
          <th>Item</th>
          <th>August</th>
          <th>September</th>
          <th>October</th>
          <th>November</th>
          <th>December</th>
        </tr>
        <tr>
          <td>Electric</td>
          <td>2</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Water</td>
          <td>Smith</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Misc.</td>
          <td>Smith</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>0</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("station", { saleDetails: state => state.sale_details })
  }
};
</script>

<style scoped>
.station {
  margin: 40px 40px;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 80%;
  border: 1px solid #ddd;
}

th,
td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
