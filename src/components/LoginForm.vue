<template>
  <div class="hello">
    <div class="bg-img">
      <form class="container" @submit.prevent="submit">
        <h1>Eldan's Water Station</h1>

        <label for="username">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          v-model="form.username"
          required
        />

        <label for="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          v-model="form.password"
          required
        />

        <button type="submit" class="btn">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  computed: {},
  methods: {
    submit() {
      this.$store.dispatch("user/login", this.form);
    }
  }
};
</script>
