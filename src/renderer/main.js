import Vue from 'vue';
import Electron from 'vue-electron';
import Resource from 'vue-resource';
import Router from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import VueHighlightJS from 'vue-highlightjs';
import 'vue-highlightjs/node_modules/highlight.js/styles/atom-one-dark.css';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueHighlightJS);
Vue.use(ElementUI);
Vue.use(Electron);
Vue.use(Resource);
Vue.use(Router);


// Vue.http = Vue.prototype.$http = axios;
// Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
}).$mount('#app');
