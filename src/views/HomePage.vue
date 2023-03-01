<template>
  <div id="wrapper">
    <!-- Navigation -->
    <navbar-comp />

    <div id="page-wrapper">
      <div class="container-fluid">
        <!-- Page Heading -->
        <div class="row">
          <div class="col-lg-12">
            <h1 class="page-header">
              <em>{{ select_year }}</em> Statistics <small> Overview</small>
            </h1>
            <ol class="breadcrumb">
              <li class="active">
                <i class="fas fa-chart-line"></i> Current Status Month of:
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
              </li>
            </ol>
          </div>
        </div>
        <!-- /.row -->

        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="panel panel-primary">
              <div class="panel-heading">
                <div class="row">
                  <div class="col-xs-3">
                    <i class="fa fa-fw fa-truck fa-5x"></i>
                  </div>
                  <div class="col-xs-9 text-right">
                    <div class="huge">
                      {{
                        (
                          selectedMonth().reduce((currentTotal, sale) => {
                            return sale.item + currentTotal;
                          }, 0) * 20
                        ).toLocaleString('en')
                      }}
                      php
                    </div>
                    <div>Delivery</div>
                  </div>
                </div>
              </div>
              <a href="#">
                <div class="panel-footer">
                  <span class="pull-left">View Details</span>
                  <span class="pull-right"
                    ><i class="fa fa-arrow-circle-right"></i
                  ></span>
                  <div class="clearfix"></div>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="panel panel-green">
              <div class="panel-heading">
                <div class="row">
                  <div class="col-xs-3">
                    <i class="fas fa-coins fa-5x"></i>
                  </div>
                  <div class="col-xs-9 text-right">
                    <div class="huge">
                      {{
                        (
                          selectedMonth().reduce((currentTotal, sale) => {
                            return sale.payments + currentTotal;
                          }, 0) * 20
                        ).toLocaleString('en')
                      }}
                      php
                    </div>
                    <div>Remittances</div>
                  </div>
                </div>
              </div>
              <a href="#">
                <div class="panel-footer">
                  <span class="pull-left">View Details</span>
                  <span class="pull-right"
                    ><i class="fa fa-arrow-circle-right"></i
                  ></span>
                  <div class="clearfix"></div>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="panel panel-yellow">
              <div class="panel-heading">
                <div class="row">
                  <div class="col-xs-3">
                    <i class="fa fa-fw fa-wrench fa-5x"></i>
                  </div>
                  <div class="col-xs-9 text-right">
                    <div class="huge">
                      {{
                        expensesMonth()
                          .reduce((currentTotal, item) => {
                            return item.amount + currentTotal;
                          }, 0)
                          .toLocaleString('en')
                      }}
                      php
                    </div>
                    <div>Expenses</div>
                  </div>
                </div>
              </div>
              <a href="#">
                <div class="panel-footer">
                  <span class="pull-left">View Details</span>
                  <span class="pull-right"
                    ><i class="fa fa-arrow-circle-right"></i
                  ></span>
                  <div class="clearfix"></div>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="panel panel-red">
              <div class="panel-heading">
                <div class="row">
                  <div class="col-xs-3">
                    <i class="fas fa-piggy-bank fa-5x"></i>
                  </div>
                  <div class="col-xs-9 text-right">
                    <div class="huge">
                      {{
                        (
                          selectedMonth().reduce((currentTotal, sale) => {
                            return sale.payments + currentTotal;
                          }, 0) *
                            20 -
                          expensesMonth().reduce((currentTotal, item) => {
                            return item.amount + currentTotal;
                          }, 0)
                        ).toLocaleString('en')
                      }}
                      php
                    </div>
                    <div>Net Income</div>
                  </div>
                </div>
              </div>
              <a href="#">
                <div class="panel-footer">
                  <span class="pull-left">View Details</span>
                  <span class="pull-right"
                    ><i class="fa fa-arrow-circle-right"></i
                  ></span>
                  <div class="clearfix"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <!-- /.row -->

        <div class="row">
          <div class="col-lg-12">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">
                  Summary Details
                  <span class="text-muted">
                    <select
                      class="select-year"
                      v-model="select_year"
                      name="year"
                    >
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
                </h3>
              </div>
              <div class="panel-body">
                <div class="table-responsive">
                  <table class="table table-bordered table-hover table-striped">
                    <thead>
                      <tr>
                        <th>Month</th>
                        <th>Delivery</th>
                        <th>Remittance</th>
                        <th>Expenses</th>
                        <th>Net Income</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>Total</th>
                        <th>
                          {{
                            (
                              sales
                                .filter((sale) =>
                                  sale.date.match(this.select_year)
                                )
                                .reduce((currentTotal, sale) => {
                                  return sale.item + currentTotal;
                                }, 0) * 20
                            ).toLocaleString('en')
                          }}php
                        </th>
                        <th>
                          {{
                            (
                              sales
                                .filter((sale) =>
                                  sale.date.match(this.select_year)
                                )
                                .reduce((currentTotal, sale) => {
                                  return sale.payments + currentTotal;
                                }, 0) * 20
                            ).toLocaleString('en')
                          }}php
                        </th>
                        <th>
                          {{
                            items
                              .filter((item) =>
                                item.date.match(this.select_year)
                              )
                              .reduce((currentTotal, item) => {
                                return item.amount + currentTotal;
                              }, 0)
                              .toLocaleString('en')
                          }}php
                        </th>
                        <th>
                          {{
                            (
                              sales
                                .filter((sale) =>
                                  sale.date.match(this.select_year)
                                )
                                .reduce((currentTotal, sale) => {
                                  return sale.payments + currentTotal;
                                }, 0) *
                                20 -
                              items
                                .filter((item) =>
                                  item.date.match(this.select_year)
                                )
                                .reduce((currentTotal, item) => {
                                  return item.amount + currentTotal;
                                }, 0)
                            ).toLocaleString('en')
                          }}php
                        </th>
                      </tr>
                    </tfoot>
                    <tbody>
                      <tr>
                        <td>January</td>
                        <td>
                          {{
                            (
                              January.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            (
                              January.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            January_.filter((item) =>
                              item.date.match(this.select_year)
                            )
                              .reduce((currentTotal, item) => {
                                return item.amount + currentTotal;
                              }, 0)
                              .toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            (
                              January.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) *
                                20 -
                              January_.filter((item) =>
                                item.date.match(this.select_year)
                              ).reduce((currentTotal, item) => {
                                return item.amount + currentTotal;
                              }, 0)
                            ).toLocaleString('en')
                          }}
                        </td>
                      </tr>
                      <tr>
                        <td>February</td>
                        <td>
                          {{
                            (
                              February.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            (
                              February.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            February_.filter((item) =>
                              item.date.match(this.select_year)
                            )
                              .reduce((currentTotal, item) => {
                                return item.amount + currentTotal;
                              }, 0)
                              .toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            (
                              February.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) *
                                20 -
                              February_.filter((item) =>
                                item.date.match(this.select_year)
                              ).reduce((currentTotal, item) => {
                                return item.amount + currentTotal;
                              }, 0)
                            ).toLocaleString('en')
                          }}
                        </td>
                      </tr>
                      <tr>
                        <td>March</td>
                        <td>
                          {{
                            (
                              March.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            (
                              March.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            March_.filter((item) =>
                              item.date.match(this.select_year)
                            )
                              .reduce((currentTotal, item) => {
                                return item.amount + currentTotal;
                              }, 0)
                              .toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            (
                              March.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) *
                                20 -
                              March_.filter((item) =>
                                item.date.match(this.select_year)
                              ).reduce((currentTotal, item) => {
                                return item.amount + currentTotal;
                              }, 0)
                            ).toLocaleString('en')
                          }}
                        </td>
                      </tr>
                      <tr>
                        <td>April</td>
                        <td>
                          {{
                            (
                              April.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            (
                              April.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            April_.filter((item) =>
                              item.date.match(this.select_year)
                            )
                              .reduce((currentTotal, item) => {
                                return item.amount + currentTotal;
                              }, 0)
                              .toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            (
                              April.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) *
                                20 -
                              April_.filter((item) =>
                                item.date.match(this.select_year)
                              ).reduce((currentTotal, item) => {
                                return item.amount + currentTotal;
                              }, 0)
                            ).toLocaleString('en')
                          }}
                        </td>
                      </tr>
                      <tr>
                        <td>May</td>
                        <td>
                          {{
                            (
                              May.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            (
                              May.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            May_.filter((item) =>
                              item.date.match(this.select_year)
                            )
                              .reduce((currentTotal, item) => {
                                return item.amount + currentTotal;
                              }, 0)
                              .toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            (
                              May.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) *
                                20 -
                              May_.filter((item) =>
                                item.date.match(this.select_year)
                              ).reduce((currentTotal, item) => {
                                return item.amount + currentTotal;
                              }, 0)
                            ).toLocaleString('en')
                          }}
                        </td>
                      </tr>
                      <tr>
                        <td>June</td>
                        <td>
                          {{
                            (
                              June.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            (
                              June.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            June_.filter((item) =>
                              item.date.match(this.select_year)
                            )
                              .reduce((currentTotal, item) => {
                                return item.amount + currentTotal;
                              }, 0)
                              .toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            (
                              June.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) *
                                20 -
                              June_.filter((item) =>
                                item.date.match(this.select_year)
                              ).reduce((currentTotal, item) => {
                                return item.amount + currentTotal;
                              }, 0)
                            ).toLocaleString('en')
                          }}
                        </td>
                      </tr>
                      <tr>
                        <td>July</td>
                        <td>
                          {{
                            (
                              July.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            (
                              July.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            July_.filter((item) =>
                              item.date.match(this.select_year)
                            )
                              .reduce((currentTotal, item) => {
                                return item.amount + currentTotal;
                              }, 0)
                              .toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            (
                              July.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) *
                                20 -
                              July_.filter((item) =>
                                item.date.match(this.select_year)
                              ).reduce((currentTotal, item) => {
                                return item.amount + currentTotal;
                              }, 0)
                            ).toLocaleString('en')
                          }}
                        </td>
                      </tr>
                      <tr>
                        <td>August</td>
                        <td>
                          {{
                            (
                              August.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            (
                              August.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            August_.filter((item) =>
                              item.date.match(this.select_year)
                            )
                              .reduce((currentTotal, item) => {
                                return item.amount + currentTotal;
                              }, 0)
                              .toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            (
                              August.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) *
                                20 -
                              August_.filter((item) =>
                                item.date.match(this.select_year)
                              ).reduce((currentTotal, item) => {
                                return item.amount + currentTotal;
                              }, 0)
                            ).toLocaleString('en')
                          }}
                        </td>
                      </tr>
                      <tr>
                        <td>September</td>
                        <td>
                          {{
                            (
                              September.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            (
                              September.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            September_.filter((item) =>
                              item.date.match(this.select_year)
                            )
                              .reduce((currentTotal, item) => {
                                return item.amount + currentTotal;
                              }, 0)
                              .toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            (
                              September.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) *
                                20 -
                              September_.filter((item) =>
                                item.date.match(this.select_year)
                              ).reduce((currentTotal, item) => {
                                return item.amount + currentTotal;
                              }, 0)
                            ).toLocaleString('en')
                          }}
                        </td>
                      </tr>
                      <tr>
                        <td>October</td>
                        <td>
                          {{
                            (
                              October.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            (
                              October.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            October_.filter((item) =>
                              item.date.match(this.select_year)
                            )
                              .reduce((currentTotal, item) => {
                                return item.amount + currentTotal;
                              }, 0)
                              .toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            (
                              October.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) *
                                20 -
                              October_.filter((item) =>
                                item.date.match(this.select_year)
                              ).reduce((currentTotal, item) => {
                                return item.amount + currentTotal;
                              }, 0)
                            ).toLocaleString('en')
                          }}
                        </td>
                      </tr>
                      <tr>
                        <td>November</td>
                        <td>
                          {{
                            (
                              November.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            (
                              November.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            November_.filter((item) =>
                              item.date.match(this.select_year)
                            )
                              .reduce((currentTotal, item) => {
                                return item.amount + currentTotal;
                              }, 0)
                              .toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            (
                              November.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) *
                                20 -
                              November_.filter((item) =>
                                item.date.match(this.select_year)
                              ).reduce((currentTotal, item) => {
                                return item.amount + currentTotal;
                              }, 0)
                            ).toLocaleString('en')
                          }}
                        </td>
                      </tr>
                      <tr>
                        <td>December</td>
                        <td>
                          {{
                            (
                              December.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            (
                              December.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            December_.filter((item) =>
                              item.date.match(this.select_year)
                            )
                              .reduce((currentTotal, item) => {
                                return item.amount + currentTotal;
                              }, 0)
                              .toLocaleString('en')
                          }}
                        </td>
                        <td>
                          {{
                            (
                              December.filter((sale) =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) *
                                20 -
                              December_.filter((item) =>
                                item.date.match(this.select_year)
                              ).reduce((currentTotal, item) => {
                                return item.amount + currentTotal;
                              }, 0)
                            ).toLocaleString('en')
                          }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <footer-comp />
              </div>
            </div>
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
  name: 'HomePage',
  components: {
    NavbarComp,
    FooterComp
  },
  data() {
    return {
      select_month: this.currentMonth(),
      select_year: new Date().getFullYear()
    };
  },
  created() {
    this.getCustomersAction();
    this.getSalesAction();
    this.getExpensesAction();
  },

  computed: {
    ...mapState('auth', ['toggleSidebar']),
    ...mapState('sales', ['sales']),
    ...mapState('expenses', ['items']),
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
    ...mapActions('customers', ['getCustomersAction']),
    ...mapActions('sales', ['getSalesAction']),
    ...mapActions('expenses', ['getExpensesAction']),

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
.amt {
  font-weight: bold;
}

.select-year,
.select-month {
  border-color: rgba(0, 0, 0, 0.03);
  background-color: rgba(0, 0, 0, 0.03);
}
</style>
