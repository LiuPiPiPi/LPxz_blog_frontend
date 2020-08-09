import Vue from "vue";

import App from "./App";
import router from "./router";
import commonMethods from "./utils/common";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/css/common.css";

import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

Vue.prototype.$common = commonMethods;

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App) // element-ui
});
