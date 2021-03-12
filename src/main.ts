import Vue from "vue";
import App from "./App.vue";
import router from "../router/index";
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);
//Vue.use(VueMarkdown);

Vue.config.productionTip = false;

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
