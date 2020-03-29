export default {
    namespaced: true,
    state: {
        // 侧边列表开启状态
        listOpenStatus: true,
        // 当前显示的窗口标识
        showIndex: 0,
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
        removeIframeLayer(state, index) {
            if (index < state.iframeLayerList.length && index >= 0) {
                index = parseInt(index);
                state.iframeLayerList.splice(index, 1);
            }
        }
    },
    actions: {
        // 从iframe列表删除窗口信息
        rmIFrameLayer(context, index){
            context.commit('removeIframeLayer', index);
        },
    }
}