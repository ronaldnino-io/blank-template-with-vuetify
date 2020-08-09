import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./state/index";
import "./plugins/base";
import "./plugins/chartist";
import "./plugins/vee-validate";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";

Vue.config.productionTip = false;
Vue.prototype.$log = console.log.bind(console);

new Vue({
  router,
  store,
  vuetify,
  i18n,

  render: (h) => h(App),
}).$mount("#app");
