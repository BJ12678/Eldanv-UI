<template>
  <div>
    <NavMenu />
    <CustomerComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import NavMenu from "@/components/NavMenu.vue";
import CustomerComponent from "@/components/CustomerComponent.vue";

export default {
  name: "Customer",
  components: {
    NavMenu,
    CustomerComponent
  }
};
</script>
