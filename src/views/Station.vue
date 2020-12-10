<template>
  <div>
    <NavMenu />
    <StationComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import NavMenu from "@/components/NavMenu.vue";
import StationComponent from "@/components/StationComponent.vue";

export default {
  name: "Station",
  components: {
    NavMenu,
    StationComponent
  }
};
</script>
