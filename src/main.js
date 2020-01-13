// 清除默认样式
import './assets/css/init.css';
import './assets/css/layui.css';

import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import $ from 'zepto';

// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(Vuex);

Vue.config.productionTip = false;

const store = new Vuex.Store({
    //待添加
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});