<template>
  <v-app>
    <main-layout-header />
    <main-layout-side-bar />
    <main-layout-view />

    <!-- dashboard-core-settings -->
  </v-app>
</template>

<script>
import MainLayoutHeader from "./MainLayoutHeader";
import MainLayoutSideBar from "./MainLayoutSideBar";
import MainLayoutView from "./MainLayoutView";

export default {
  name: "DashboardIndex",

  components: {
    MainLayoutHeader,
    MainLayoutSideBar,
    MainLayoutView,
  },

  data: () => ({
    expandOnHover: true,
  }),
};
</script>
