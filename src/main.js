// 清除默认样式
import './assets/css/init.css';
import './assets/css/layui.css';

import Vue from 'vue';
import App from './App';
// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import $ from 'zepto';
import router from './router';
import store from './store/main';

// 引入全局组件
// layer浮层
import Layer from './components/global/layer/';
Vue.use(Layer);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store: store,
    components: { App },
    template: '<App/>'
});