import Vue from 'vue';
import Vuex from 'vuex';

// 引入vuex模块
import auth from './auth';
import index from './index';
import layer from './layer';
Vue.use(Vuex);
// 主页的数据
export default new Vuex.Store({
  modules: {
    auth,
    index,
    layer
  }
});
