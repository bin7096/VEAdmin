export default {
    namespaced: true,
    state: {
        // 是否全屏
        isFullScreen: false,
        // 侧边栏是否折叠
        leftNavFold: true,
        activeIFrameIndex: 0,
        // iframe窗口信息-列表
        iFrameList: [],
    },
    mutations: {
        // 置反全屏状态
        fullScreenStatus(state){
            state.isFullScreen = !state.isFullScreen;
        },
        // 置反侧边栏折叠状态
        leftFoldStatus(state){
            state.leftNavFold = !state.leftNavFold;
        },
        // 添加窗口信息到iframe列表中
        addToIFrameList(state, info){
            if (info.title && info.src) {
                let index = state.iFrameList.length;
                state.iFrameList.push({title: info.title, src: info.src});
                state.activeIFrameIndex = index;
            }
        },
        // 从iframe列表删除窗口信息
        removeIFrame(state, index){
            if (index < state.iFrameList.length) {
                state.iFrameList.splice(index, 1);
                state.activeIFrameIndex = index === 0 ? 0 : index - 1;
            }
        }
    },
    actions: {
        // 置反全屏状态
        changeFullScreen(context){
            context.commit('fullScreenStatus');
        },
        // 置反侧边栏折叠状态
        changeLeftFold(context){
            context.commit('leftFoldStatus');
        },
        // 添加窗口信息到iframe列表中
        addIFrame(context, info){
            context.commit('addToIFrameList', info);
        },
        // 从iframe列表删除窗口信息
        rmIFrame(context, index){
            context.commit('removeIFrame', index);
        }
    }
}