import Vue from "vue";
import App from "./App.vue"
import axios from "./utils/axios.config.js"
import "./assets/css/reset.css"
import ElementUI from 'element-ui'
import './assets/element-#0C2E51/index.css'
// import 'element-ui/lib/theme-chalk/index.css'
import router from "./router"

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
    router,
    render:h => h(App)
}).$mount("#app")