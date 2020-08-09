<template>
  <v-main>
    <router-view />
    <main-layout-footer />
  </v-main>
</template>

<script>
import MainLayoutFooter from "./MainLayoutFooter";

export default {
  name: "MainLayoutView",

  components: {
    MainLayoutFooter,
  },
};
</script>
