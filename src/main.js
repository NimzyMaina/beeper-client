// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import Router from './routes.js'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'
import axios from 'axios'

Vue.use(VueResource);

axios.defaults.baseURL = "http://localhost:9090";
window.axios = axios;

Vue.config.productionTip = false

Vue.use(VeeValidate);

alertify.defaults.notifier.position = 'top-right';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router: Router,
  components: { App }
})
