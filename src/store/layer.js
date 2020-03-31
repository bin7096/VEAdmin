export default {
    namespaced: true,
    state: {
        // 侧边列表开启状态
        listOpenStatus: false,
        // 当前显示的窗口标识
        showIndex: null,
        // iframe-layer列表
        iframeLayerList: [
            {title: 'iframe-layer1', src: 'https://xadmin.binid.cn', name: 'iframeLayer', width: '800px', height: '600px', isFullScreen: false},
            {title: 'iframe-layer2', src: 'https://xadmin.binid.cn', name: 'iframeLayer', width: '800px', height: '600px', isFullScreen: false},
            {title: 'iframe-layer3', src: 'https://xadmin.binid.cn', name: 'iframeLayer', width: '800px', height: '600px', isFullScreen: false},
            {title: 'iframe-layer4', src: 'https://xadmin.binid.cn', name: 'iframeLayer', width: '800px', height: '600px', isFullScreen: false},
            {title: 'iframe-layer5', src: 'https://xadmin.binid.cn', name: 'iframeLayer', width: '800px', height: '600px', isFullScreen: false},
            {title: 'iframe-layer6', src: 'https://xadmin.binid.cn', name: 'iframeLayer', width: '800px', height: '600px', isFullScreen: false},
            {title: 'iframe-layer7', src: 'https://xadmin.binid.cn', name: 'iframeLayer', width: '800px', height: '600px', isFullScreen: false},
            {title: 'iframe-layer8', src: 'https://xadmin.binid.cn', name: 'iframeLayer', width: '800px', height: '600px', isFullScreen: false},
            {title: 'iframe-layer9', src: 'https://xadmin.binid.cn', name: 'iframeLayer', width: '800px', height: '600px', isFullScreen: false},
            {title: 'iframe-layer0', src: 'https://xadmin.binid.cn', name: 'iframeLayer', width: '800px', height: '600px', isFullScreen: false},
            {title: 'iframe-layer1', src: 'https://xadmin.binid.cn', name: 'iframeLayer', width: '800px', height: '600px', isFullScreen: false},
            {title: 'iframe-layer2', src: 'https://xadmin.binid.cn', name: 'iframeLayer', width: '800px', height: '600px', isFullScreen: false},
            {title: 'iframe-layer3', src: 'https://xadmin.binid.cn', name: 'iframeLayer', width: '800px', height: '600px', isFullScreen: false},
            {title: 'iframe-layer4', src: 'https://xadmin.binid.cn', name: 'iframeLayer', width: '800px', height: '600px', isFullScreen: false},
            {title: 'iframe-layer5', src: 'https://xadmin.binid.cn', name: 'iframeLayer', width: '800px', height: '600px', isFullScreen: false},
            {title: 'iframe-layer6', src: 'https://xadmin.binid.cn', name: 'iframeLayer', width: '800px', height: '600px', isFullScreen: false},
            {title: 'iframe-layer7', src: 'https://xadmin.binid.cn', name: 'iframeLayer', width: '800px', height: '600px', isFullScreen: false},
            {title: 'iframe-layer8', src: 'https://xadmin.binid.cn', name: 'iframeLayer', width: '800px', height: '600px', isFullScreen: false},
            {title: 'iframe-layer9', src: 'https://xadmin.binid.cn', name: 'iframeLayer', width: '800px', height: '600px', isFullScreen: false},
            {title: 'iframe-layer0', src: 'https://xadmin.binid.cn', name: 'iframeLayer', width: '800px', height: '600px', isFullScreen: false},
            {title: 'iframe-layer1', src: 'https://xadmin.binid.cn', name: 'iframeLayer', width: '800px', height: '600px', isFullScreen: false},
            {title: 'iframe-layer2', src: 'https://xadmin.binid.cn', name: 'iframeLayer', width: '800px', height: '600px', isFullScreen: false},
        ]
    },
    mutations: {
        // 打开iframe-layer列表
        openList(state) {
            state.listOpenStatus = true;
        },
        // 关闭iframe-layer列表
        closeList(state) {
            state.listOpenStatus = false;
        },
        // 从iframe-layer列表中删除对应下标
        removeLayer(state, index) {
            if (index < state.iframeLayerList.length && index >= 0) {
                index = parseInt(index);
                state.iframeLayerList.splice(index, 1);
            }
            // 如果是关闭当前的窗口，将showIndex重置为null
            if (index === state.showIndex) {
                state.showIndex = null;
            }
        },
        // 切换窗口
        selectWindow(state, index) {
            state.showIndex = parseInt(index);
        },
        // 隐藏窗口
        hideWindow(state) {
            state.showIndex = null;
        }
    },
    actions: {
        // 从iframe列表删除窗口信息
        removeLayerByIndex(context, index){
            context.commit('removeLayer', index);
        },
        // 切换窗口
        selectWindowByIndex(context, index){
            context.commit('selectWindow', index);
        }
    }
}