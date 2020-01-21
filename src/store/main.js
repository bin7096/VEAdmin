import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// 引入vuex模块
import index from './index';
// 主页的数据
export default new Vuex.Store({
    modules: {
        index: index,
    }
});