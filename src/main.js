// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// mint-ui
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
// 引入 store
import store from './store';
// 引入 Normalize.css
import './common/css/normalize.css';

Vue.use(MintUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
