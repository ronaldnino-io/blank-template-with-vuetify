const store = { namespaced: true };
store.state = {
  barColor: "rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)",
  barImage:
    "https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg",
  drawer: false,
};
store.mutations = {
  SET_BAR_IMAGE(state, payload) {
    state.barImage = payload;
  },
  SET_DRAWER(state, payload) {
    state.drawer = payload;
    console.log(state.drawer);
  },
};
store.actions = {};

export default store;
