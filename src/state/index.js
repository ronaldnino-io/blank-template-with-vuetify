import Vue from "vue";
import Vuex from "vuex";
import account from "./modules/account";
import ui from "./modules/ui";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ui,
    account,
  },
});
