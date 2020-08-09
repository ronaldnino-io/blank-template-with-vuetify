<template>
  <v-navigation-drawer
    id="navigation-side-bar"
    :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    mobile-breakpoint="960"
    app
    width="260"
    v-bind="$attrs"
    :mini-variant="!drawer"
    mini-variant-width="60"
  >
    <template v-slot:img="props">
      <v-img :gradient="`to bottom, ${barColor}`" v-bind="props" />
    </template>

    <v-divider class="mb-1" />
    <v-list>
      <v-list-item>
        <v-img
          v-if="drawer"
          id="navigation-side-bar-logo"
          src="@/assets/logo.png"
          height="36"
          max-width="250"
          contain
        />
        <v-img
          v-else
          id="navigation-side-bar-logo-mini"
          src="@/assets/logo.png"
          height="36"
          max-width="36"
          contain
        />
      </v-list-item>
    </v-list>

    <v-divider class="mb-2" />

    <v-list shaped>
      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />

      <template v-for="(item, i) in computedItems">
        <base-item-group
          v-if="item.children"
          :key="`group-${i}`"
          :item="item"
          class="align-self-center"
        >
          <!--  -->
        </base-item-group>

        <base-item v-else :key="`item-${i}`" :item="item" />
      </template>

      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapState } from "vuex";

export default {
  name: "DashboardCoreDrawer",

  props: {
    expandOnHover: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    items: [
      {
        title: "home",
        icon: "mdi-view-dashboard",
        to: "/",
      },
      {
        title: "modulo1",
        icon: "mdi-account-group-outline",
        to: "/modulo1",
      },
      {
        title: "modulo2",
        icon: "mdi-gesture-double-tap",
        to: "/modulo2",
      },
      {
        title: "modulo3",
        icon: "mdi-cog",
        to: "/modulo3",
      },
      {
        title: "Sign out",
        icon: "mdi-logout",
        to: "/logout",
      },
    ],
  }),

  computed: {
    ...mapState(["barColor", "barImage"]),
    drawer: {
      get() {
        return this.$store.state.ui.drawer;
      },
      set(val) {
        this.$store.commit("ui/SET_DRAWER", val);
      },
    },
    computedItems() {
      return this.items.map(this.mapItem);
    },
    profile() {
      return {
        avatar: true,
        title: this.$t("avatar"),
      };
    },
  },

  methods: {
    mapItem(item) {
      return {
        ...item,
        children: item.children ? item.children.map(this.mapItem) : undefined,
        title: this.$t(item.title),
      };
    },
  },
};
</script>

<style lang="sass">
@import '~vuetify/src/styles/tools/_rtl.sass'

#navigation-side-bar-logo
  .v-image__image
    background-position: left center !important
    margin-left: 18px
#navigation-side-bar
  .v-list-group__header.v-list-item--active:before
    opacity: .24

  .v-list-item
    &--link
      padding-right: 0px !important
      padding-left: 18px !important
  .v-list-item
    &__avatar
      margin-right: 0px !important

  .v-list-item
    &__icon--text,
    &__icon:first-child
      justify-content: center
      text-align: center
      width: 20px

      +ltr()
        margin-right: 24px
        margin-left: 12px !important

      +rtl()
        margin-left: 24px
        margin-right: 12px !important

  .v-list--dense
    .v-list-item
      &__icon--text,
      &__icon:first-child
        margin-top: 10px

  .v-list-group--sub-group
    .v-list-item
      +ltr()
        padding-left: 10px

      +rtl()
        padding-right: 8px

    .v-list-group__header
      +ltr()
        padding-right: 0

      +rtl()
        padding-right: 0

      .v-list-item__icon
        margin-top: 19px
        order: 0

      .v-list-item__icon--text
        margin-top: 19px
        order: 0

      .v-list-group__header__prepend-icon
        order: 2

        +ltr()
          margin-right: 8px

        +rtl()
          margin-left: 8px
</style>
