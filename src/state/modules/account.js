import { Auth } from "aws-amplify";
const store = { namespaced: true };
store.state = {
  sidebarShow: "responsive",
  sidebarMinimize: false,
  authenticated: false,
  user: null,
  loginError: "",
};
store.mutations = {
  user(state, user) {
    state.authenticated =
      !!user && user.attributes && user.attributes.email_verified;
    state.user = user;
    console.log(state.authenticated);
  },
};
store.actions = {
  async login({ dispatch, state }, { email, password }) {
    state.loginError = "";
    try {
      await Auth.signIn(email, password);
    } catch (err) {
      console.log(`Login Error [${err}]`);
      if (err) {
        state.loginError = err.message || err;
      }
      return;
    }
    await dispatch("fetchUser");
  },
  async authState({ commit, dispatch }, state) {
    if (state === "signedIn") {
      await dispatch("fetchUser");
    } else {
      commit("user", null);
    }
  },
  async fetchUser({ commit, dispatch }) {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const expires =
        user.getSignInUserSession().getIdToken().payload.exp -
        Math.floor(new Date().getTime() / 1000);
      console.log(`Token expires in ${expires} seconds`);
      setTimeout(async () => {
        console.log("Renewing Token");
        await dispatch("fetchUser");
      }, expires * 1000);
      commit("user", user);
    } catch (err) {
      commit("user", null);
    }
  },
  async logout({ commit }) {
    await Auth.signOut();
    commit("user", null);
  },
};
store.getters = {};

export default store;
