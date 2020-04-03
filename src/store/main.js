import Vue from 'vue';
import Vuex from 'vuex';

// 引入vuex模块
import index from './index';
import layer from './layer';
Vue.use(Vuex);
// 主页的数据
export default new Vuex.Store({
  modules: {
    index: index,
    layer: layer
  }
});
