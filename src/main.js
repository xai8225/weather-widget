import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import VueRouter from 'vue-router';
import router from './router/index';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(VueRouter);

new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')