<template>
  <v-app>
    <main-layout-header />
    <main-layout-side-bar />
    <main-layout-view />

    <!-- dashboard-core-settings -->
  </v-app>
</template>

<script>

export default {
  name: "DashboardIndex",

  components: {
    MainLayoutHeader: ()=> import("../../components/layouts/MainLayout/MainLayoutHeader"),
    MainLayoutSideBar: ()=> import("../../components/layouts/MainLayout/MainLayoutSideBar"),
    MainLayoutView: ()=> import("../../components/layouts/MainLayout/MainLayoutView"),
  },

  data: () => ({
    expandOnHover: true,
  }),
};
</script>
