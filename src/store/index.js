export default {
  namespaced: true,
  state: {
    // 主题颜色
    styleColor: '#009688',
    // 是否全屏
    isFullScreen: false,
    // 侧边栏是否折叠
    leftNavFold: true,
    // 当前iframe的下标
    activeIFrameIndex: 0,
    // iframe窗口信息-列表
    iFrameList: [
      // {id: -1, title: '主页', src: 'https://xadmin.binid.cn'}
      {id: -1, title: '主页', src: `${location.protocol}//${location.host}/404`}
    ],
    // iFrame链接集合
    iFrameSet: new Set()
  },
  mutations: {
    // 置反全屏状态
    fullScreenStatus(state) {
      state.isFullScreen = !state.isFullScreen;
    },
    // 置反侧边栏折叠状态
    leftFoldStatus(state) {
      state.leftNavFold = !state.leftNavFold;
    },
    // 添加窗口信息到iframe列表中
    addToIFrameList(state, info) {
      if (info.title && info.src && !state.iFrameSet.has(info.id)) {
        let index = state.iFrameList.length;
        state.iFrameList.push({id: info.id, title: info.title, src: info.src});
        state.iFrameSet.add(info.id);
        state.activeIFrameIndex = index;
      } else if (state.iFrameSet.has(info.id)) {
        state.iFrameList.forEach((item, index) => {
          if (item.id === info.id) {
            state.activeIFrameIndex = index;
          }
        });
      }
    },
    // 从iframe列表删除窗口信息
    removeIFrame(state, index) {
      if (index < state.iFrameList.length && index > 0) {
        index = Number(index);
        let id = state.iFrameList[index].id;
        state.iFrameList.splice(index, 1);
        state.iFrameSet.delete(id);
        if (state.activeIFrameIndex === index) {
          state.activeIFrameIndex = index <= 0 ? 0 : index - 1;
        } else {
          state.activeIFrameIndex--;
        }
      }
    },
    // 选中iframe标签
    selectIFrameIndex(state, index) {
      if (index < state.iFrameList.length && index >= 0) {
        state.activeIFrameIndex = Number(index);
      }
    },
    // 关闭当前页面
    closeNowIFrame(state) {
      if (state.activeIFrameIndex > 0) {
        let id = state.iFrameList[state.activeIFrameIndex].id;
        state.iFrameList.splice(state.activeIFrameIndex, 1);
        state.iFrameSet.delete(id);
        state.activeIFrameIndex--;
      }
    },
    // 关闭所有页面
    closeAllIFrame(state) {
      state.activeIFrameIndex = 0;
      state.iFrameList = [{title: '主页', src: 'https://xadmin.binid.cn'}];
      state.iFrameSet.clear();
    },
    // 关闭其他页面
    closeOtherIFrame(state) {
      let length = state.iFrameList.length;
      for (let i = length - 1; i > 0; i--) {
        if (i !== state.activeIFrameIndex) {
          let id = state.iFrameList[i].id;
          state.iFrameList.splice(i, 1);
          state.iFrameSet.delete(id);
        }
      }
      state.activeIFrameIndex = 1;
    }
  },
  actions: {
    // 添加窗口信息到iframe列表中
    addIFrame(context, info) {
      context.commit('addToIFrameList', info);
    },
    // 从iframe列表删除窗口信息
    rmIFrame(context, index) {
      context.commit('removeIFrame', index);
    },
    // 选中iframe标签
    selectIFrame(context, index) {
      context.commit('selectIFrameIndex', index);
    }
  }
}
