<template>
  <div id="wrapper">

        <!-- Navigation -->
         <navbar-comp />

        <div id="page-wrapper">

          <div class="container-fluid">
          <!-- Main Content -->
          <div class="card-header">
              <h4>Financials Report
                <span class="text-muted">
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
              </h4>
          </div>
          <div class="card-body">
              <div class="table-responsive">
                <table
                  class="table table-bordered"
                  width="100%"
                  cellspacing="0"
                >
                  <!-- delivery section -->
                  <tbody>
                    <tr>
                      <th>Delivery</th>
                      <th>Jan</th>
                      <th>Feb</th>
                      <th>Mar</th>
                      <th>Apr</th>
                      <th>May</th>
                      <th>Jun</th>
                      <th>Jul</th>
                      <th>Aug</th>
                      <th>Sept</th>
                      <th>Oct</th>
                      <th>Nov</th>
                      <th>Dec</th>
                      <th>Total</th>
                    </tr>
                    <tr>
                      <td>Bro Jun</td>
                      <td>
                        {{
                          January.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          February.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          March.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          April.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          May.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          June.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          July.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          August.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          September.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          October.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          November.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          December.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          sales
                            .filter(
                              sale =>
                                sale.seller.match(/station/g) &&
                                sale.date.match(this.select_year)
                            )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                    </tr>
                    <tr>
                      <td>Bro Sam</td>
                      <td>
                        {{
                          January.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          February.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          March.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          April.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          May.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          June.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          July.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          August.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          September.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          October.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          November.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          December.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          sales
                            .filter(
                              sale =>
                                sale.seller.match(/seller1/g) &&
                                sale.date.match(this.select_year)
                            )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                    </tr>
                    <tr>
                      <td>Bro Anthony</td>
                      <td>
                        {{
                          January.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          February.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          March.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          April.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          May.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          June.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          July.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          August.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          September.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          October.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          November.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          December.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          sales
                            .filter(
                              sale =>
                                sale.seller.match(/seller2/g) &&
                                sale.date.match(this.select_year)
                            )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                    </tr>
                    <tr>
                      <th class="small text-muted">
                        <strong>No. of Items<br />Amount (x20Php)</strong>
                      </th>
                      <td>
                        {{
                          January.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              January.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          February.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              February.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          March.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              March.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          April.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              April.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          May.filter(sale => sale.date.match(this.select_year))
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              May.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          June.filter(sale => sale.date.match(this.select_year))
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              June.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          July.filter(sale => sale.date.match(this.select_year))
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              July.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          August.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              August.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          September.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              September.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          October.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              October.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          November.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              November.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          December.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              December.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          sales
                            .filter(sale => sale.date.match(this.select_year))
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              sales
                                .filter(sale =>
                                  sale.date.match(this.select_year)
                                )
                                .reduce((currentTotal, sale) => {
                                  return sale.item + currentTotal;
                                }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  <br /><br />

                  <!-- remittances section -->
                  <tbody>
                    <tr>
                      <th>Remittances</th>
                      <th>Jan</th>
                      <th>Feb</th>
                      <th>Mar</th>
                      <th>Apr</th>
                      <th>May</th>
                      <th>Jun</th>
                      <th>Jul</th>
                      <th>Aug</th>
                      <th>Sept</th>
                      <th>Oct</th>
                      <th>Nov</th>
                      <th>Dec</th>
                      <th>Total</th>
                    </tr>
                    <tr>
                      <td>Bro Jun</td>
                      <td>
                        {{
                          January.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          February.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          March.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          April.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          May.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          June.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          July.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          August.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          September.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          October.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          November.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          December.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          sales
                            .filter(
                              sale =>
                                sale.seller.match(/station/g) &&
                                sale.date.match(this.select_year)
                            )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                    </tr>
                    <tr>
                      <td>Bro Sam</td>
                      <td>
                        {{
                          January.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          February.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          March.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          April.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          May.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          June.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          July.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          August.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          September.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          October.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          November.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          December.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          sales
                            .filter(
                              sale =>
                                sale.seller.match(/seller1/g) &&
                                sale.date.match(this.select_year)
                            )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                    </tr>
                    <tr>
                      <td>Bro Anthony</td>
                      <td>
                        {{
                          January.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          February.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          March.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          April.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          May.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          June.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          July.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          August.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          September.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          October.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          November.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          December.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          sales
                            .filter(
                              sale =>
                                sale.seller.match(/seller2/g) &&
                                sale.date.match(this.select_year)
                            )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                    </tr>
                    <tr>
                      <th class="small text-muted">
                        <strong>No. of Items<br />Amount (x20Php)</strong>
                      </th>
                      <td>
                        {{
                          January.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              January.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          February.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              February.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          March.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              March.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          April.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              April.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          May.filter(sale => sale.date.match(this.select_year))
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              May.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          June.filter(sale => sale.date.match(this.select_year))
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              June.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          July.filter(sale => sale.date.match(this.select_year))
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              July.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          August.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              August.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          September.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              September.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          October.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              October.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          November.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              November.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          December.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              December.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          sales
                            .filter(sale => sale.date.match(this.select_year))
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              sales
                                .filter(sale =>
                                  sale.date.match(this.select_year)
                                )
                                .reduce((currentTotal, sale) => {
                                  return sale.payments + currentTotal;
                                }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  <br /><br />

                  <!-- expenses section -->
                  <tbody>
                    <tr>
                      <th>Expenses</th>
                      <th>Jan</th>
                      <th>Feb</th>
                      <th>Mar</th>
                      <th>Apr</th>
                      <th>May</th>
                      <th>Jun</th>
                      <th>Jul</th>
                      <th>Aug</th>
                      <th>Sept</th>
                      <th>Oct</th>
                      <th>Nov</th>
                      <th>Dec</th>
                      <th>Total</th>
                    </tr>
                    <tr>
                      <td>Bro Jun</td>
                      <td>
                        {{
                          January_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          February_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          March_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          April_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          May_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          June_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          July_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          August_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          September_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          October_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          November_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          December_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          items
                            .filter(
                              item =>
                                item.employee.match(/station/g) &&
                                item.date.match(this.select_year)
                            )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                    </tr>
                    <tr>
                      <td>Bro Sam</td>
                      <td>
                        {{
                          January_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          February_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          March_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          April_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          May_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          June_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          July_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          August_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          September_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          October_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          November_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          December_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          items
                            .filter(
                              item =>
                                item.employee.match(/seller1/g) &&
                                item.date.match(this.select_year)
                            )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                    </tr>
                    <tr>
                      <td>Bro Anthony</td>
                      <td>
                        {{
                          January_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          February_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          March_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          April_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          May_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          June_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          July_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          August_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          September_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          October_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          November_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          December_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          items
                            .filter(
                              item =>
                                item.employee.match(/seller2/g) &&
                                item.date.match(this.select_year)
                            )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                    </tr>
                    <tr>
                      <th class="small text-muted">
                        <strong>Amount (Php)</strong>
                      </th>
                      <th>
                        {{
                          January_.filter(item =>
                            item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          February_.filter(item =>
                            item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          March_.filter(item =>
                            item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          April_.filter(item =>
                            item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          May_.filter(item => item.date.match(this.select_year))
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          June_.filter(item =>
                            item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          July_.filter(item =>
                            item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          August_.filter(item =>
                            item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          September_.filter(item =>
                            item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          October_.filter(item =>
                            item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          November_.filter(item =>
                            item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          December_.filter(item =>
                            item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          items
                            .filter(item => item.date.match(this.select_year))
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
              <footer-comp />
          </div>
        </div>
            <!-- /.container-fluid -->

        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->

</template>

<script>
import { mapState, mapGetters} from "vuex";
import NavbarComp from "@/components/NavbarComp.vue";
import FooterComp from "@/components/FooterComp.vue";

export default {
  name: "FinancialsPage",
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
  computed: {
    ...mapState("auth", ["toggleSidebar"]),
    ...mapState("sales", ["sales"]),
    ...mapState("expenses", ["items"]),
    ...mapGetters("sales", [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]),
    ...mapGetters("expenses", [
      "January_",
      "February_",
      "March_",
      "April_",
      "May_",
      "June_",
      "July_",
      "August_",
      "September_",
      "October_",
      "November_",
      "December_"
    ])
  },
  methods: {
    currentMonth() {
      const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

      const d = new Date();
      let name = month[d.getMonth()];
      return name;
    },
    selectedMonth() {
      if (this.select_month === "January") {
        return this.January.filter(sale => sale.date.match(this.select_year));
      } else if (this.select_month === "February") {
        return this.February.filter(sale => sale.date.match(this.select_year));
      } else if (this.select_month === "March") {
        return this.March.filter(sale => sale.date.match(this.select_year));
      } else if (this.select_month === "April") {
        return this.April.filter(sale => sale.date.match(this.select_year));
      } else if (this.select_month === "May") {
        return this.May.filter(sale => sale.date.match(this.select_year));
      } else if (this.select_month === "June") {
        return this.June.filter(sale => sale.date.match(this.select_year));
      } else if (this.select_month === "July") {
        return this.July.filter(sale => sale.date.match(this.select_year));
      } else if (this.select_month === "August") {
        return this.August.filter(sale => sale.date.match(this.select_year));
      } else if (this.select_month === "September") {
        return this.September.filter(sale =>
          sale.date.match(this.select_year)
        );
      } else if (this.select_month === "October") {
        return this.October.filter(sale => sale.date.match(this.select_year));
      } else if (this.select_month === "November") {
        return this.November.filter(sale => sale.date.match(this.select_year));
      } else {
        return this.December.filter(sale => sale.date.match(this.select_year));
      }
    },

    expensesMonth() {
      if (this.select_month === "January") {
        return this.January_.filter(item => item.date.match(this.select_year));
      } else if (this.select_month === "February") {
        return this.February_.filter(item =>
          item.date.match(this.select_year)
        );
      } else if (this.select_month === "March") {
        return this.March_.filter(item => item.date.match(this.select_year));
      } else if (this.select_month === "April") {
        return this.April_.filter(item => item.date.match(this.select_year));
      } else if (this.select_month === "May") {
        return this.May_.filter(item => item.date.match(this.select_year));
      } else if (this.select_month === "June") {
        return this.June_.filter(item => item.date.match(this.select_year));
      } else if (this.select_month === "July") {
        return this.July_.filter(item => item.date.match(this.select_year));
      } else if (this.select_month === "August") {
        return this.August_.filter(item => item.date.match(this.select_year));
      } else if (this.select_month === "September") {
        return this.September_.filter(item =>
          item.date.match(this.select_year)
        );
      } else if (this.select_month === "October") {
        return this.October_.filter(item => item.date.match(this.select_year));
      } else if (this.select_month === "November") {
        return this.November_.filter(item =>
          item.date.match(this.select_year)
        );
      } else {
        return this.December_.filter(item =>
          item.date.match(this.select_year)
        );
      }
    },
  }
};
</script>

<style scoped>
.amt {
  font-weight: bold;
}

.select-year {
  border-color: rgba(0, 0, 0, 0.03);
  background-color: rgba(0, 0, 0, 0.03);
}
</style>