<template>
  <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button
        type="button"
        class="navbar-toggle"
        data-toggle="collapse"
        data-target=".navbar-ex1-collapse"
      >
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="/">Eldan Water Station</a>
    </div>
    <!-- Top Menu Items -->
    <ul class="nav navbar-right top-nav">
      <li>
        <a @click.prevent="logoutUser" href="#"
          ><i class="fa fa-fw fa-power-off"></i> LogOut</a
        >
      </li>
    </ul>
    <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
    <div class="collapse navbar-collapse navbar-ex1-collapse">
      <ul class="nav navbar-nav side-nav">
        <li>
          <router-link :to="{ name: 'home' }"
            ><i class="fas fa-home"></i> Home</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'customers' }"
            ><i class="fas fa-users"></i> Customers</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'sales' }"
            ><i class="fas fa-coins"></i> Sales</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'expenses' }"
            ><i class="fas fa-wrench"></i> Expenses</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'financials' }"
            ><i class="fas fa-table"></i> Financials</router-link
          >
        </li>
      </ul>
    </div>
    <!-- /.navbar-collapse -->
  </nav>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'NavbarComp',
  methods: {
    ...mapActions('auth', ['logoutUser'])
  }
};
</script>
