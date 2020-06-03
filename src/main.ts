import Vue from "vue";
import App from "./App.vue";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Axios from 'axios'
import './mock.js' 
import router from './router'
import '../src/assets/style/reset.css';

Vue.config.productionTip = false;
Vue.use(ElementUI)

Vue.prototype.$axios = Axios

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
